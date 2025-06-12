"use client"

import React from "react"

import { useRef, useState, useEffect } from "react"
import { ecosystemNodes } from "./ecosystem-data"
import { useMobile } from "@/hooks/use-mobile"
import Link from "next/link"
import { motion } from "framer-motion"
import { ZoomIn, ZoomOut, Home, Info, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NodePosition {
  x: number
  y: number
  angle: number
  speed: number
  radius: number
  orbitRadius: number
  orbitSpeed: number
  orbitAngle: number
}

export default function EcosystemMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const isMobile = useMobile()

  const [positions, setPositions] = useState<Record<string, NodePosition>>({})
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [showInfo, setShowInfo] = useState(false)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const [dimensions, setDimensions] = useState({ width: 1000, height: 700 })

  // Initialize node positions
  useEffect(() => {
    const initialPositions: Record<string, NodePosition> = {}

    // EATEK Core at center
    initialPositions["eatek"] = {
      x: 0,
      y: 0,
      angle: 0,
      speed: 0,
      radius: 40,
      orbitRadius: 0,
      orbitSpeed: 0,
      orbitAngle: 0,
    }

    // Main categories orbit around EATEK
    const mainCategories = ["education", "art", "technology"]
    mainCategories.forEach((id, index) => {
      const angle = (index * 2 * Math.PI) / mainCategories.length
      const orbitRadius = 200
      initialPositions[id] = {
        x: Math.cos(angle) * orbitRadius,
        y: Math.sin(angle) * orbitRadius,
        angle,
        speed: 0.0003,
        radius: 30,
        orbitRadius,
        orbitSpeed: 0.00005,
        orbitAngle: angle,
      }
    })

    // Subcategories orbit around their parent categories
    ecosystemNodes.forEach((node) => {
      if (node.parent && node.parent !== "eatek" && !initialPositions[node.id]) {
        const parentPos = initialPositions[node.parent]
        if (parentPos) {
          const subCategoryCount = ecosystemNodes.filter((n) => n.parent === node.parent).length
          const index = ecosystemNodes.filter((n) => n.parent === node.parent).findIndex((n) => n.id === node.id)
          const angle = parentPos.angle + (index * 2 * Math.PI) / subCategoryCount
          const orbitRadius = 120

          initialPositions[node.id] = {
            x: parentPos.x + Math.cos(angle) * orbitRadius,
            y: parentPos.y + Math.sin(angle) * orbitRadius,
            angle,
            speed: 0.0005,
            radius: 20,
            orbitRadius,
            orbitSpeed: 0.0001,
            orbitAngle: angle,
          }
        }
      }
    })

    // Services orbit around EATEK at a different radius
    const services = ecosystemNodes.filter((node) => node.category === "service")
    services.forEach((service, index) => {
      const angle = (index * 2 * Math.PI) / services.length + Math.PI / 6
      const orbitRadius = 150
      initialPositions[service.id] = {
        x: Math.cos(angle) * orbitRadius,
        y: Math.sin(angle) * orbitRadius,
        angle,
        speed: 0.0004,
        radius: 25,
        orbitRadius,
        orbitSpeed: 0.00007,
        orbitAngle: angle,
      }
    })

    setPositions(initialPositions)
  }, [])

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  // Animation loop for orbital movement
  useEffect(() => {
    if (Object.keys(positions).length === 0) return

    const animate = () => {
      setPositions((prevPositions) => {
        const newPositions = { ...prevPositions }

        // Update orbital positions
        Object.keys(newPositions).forEach((nodeId) => {
          if (nodeId === "eatek") return // Skip EATEK core

          const pos = newPositions[nodeId]
          const node = ecosystemNodes.find((n) => n.id === nodeId)

          if (node && node.parent) {
            const parentId = node.parent
            const parentPos = newPositions[parentId]

            if (parentPos) {
              // Update orbit angle
              pos.orbitAngle += pos.orbitSpeed

              // Calculate new position based on parent's position and orbit
              if (parentId === "eatek") {
                // Direct orbit around EATEK
                pos.x = Math.cos(pos.orbitAngle) * pos.orbitRadius
                pos.y = Math.sin(pos.orbitAngle) * pos.orbitRadius
              } else {
                // Orbit around another node that itself orbits
                pos.x = parentPos.x + Math.cos(pos.orbitAngle) * pos.orbitRadius
                pos.y = parentPos.y + Math.sin(pos.orbitAngle) * pos.orbitRadius
              }
            }
          }
        })

        return newPositions
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [positions])

  interface Star {
    x: number
    y: number
    size: number
    speed: number
    brightness: number
    blinkSpeed: number
  }

  // Star field animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = dimensions.width
    canvas.height = dimensions.height

    // Create stars
    const stars: Star[] = []
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.05,
        brightness: Math.random() * 0.5 + 0.5,
        blinkSpeed: Math.random() * 0.01,
      })
    }

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(0, 0, 0, 0)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        // Update star brightness (twinkling)
        star.brightness += Math.sin(Date.now() * star.blinkSpeed) * 0.01
        star.brightness = Math.max(0.5, Math.min(1, star.brightness))

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`
        ctx.fill()

        // Add glow effect for larger stars
        if (star.size > 1) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness * 0.2})`
          ctx.fill()
        }
      })

      requestAnimationFrame(drawStars)
    }

    drawStars()
  }, [dimensions])

  // Mouse and touch event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return // Only left mouse button

    setIsDragging(true)
    setDragStart({
      x: e.clientX - pan.x,
      y: e.clientY - pan.y,
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()

    // Adjust zoom based on wheel direction
    const delta = e.deltaY > 0 ? -0.1 : 0.1
    const newZoom = Math.max(0.5, Math.min(3, zoom + delta))

    setZoom(newZoom)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true)
      setDragStart({
        x: e.touches[0].clientX - pan.x,
        y: e.touches[0].clientY - pan.y,
      })
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return

    setPan({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y,
    })
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Zoom controls
  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 0.2, 3))
  }

  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 0.2, 0.5))
  }

  const handleResetView = () => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  // Node interaction
  const handleNodeHover = (nodeId: string | null) => {
    setHoveredNode(nodeId)
  }

  const handleNodeClick = (nodeId: string) => {
    setActiveNode(nodeId === activeNode ? null : nodeId)
  }

  // Get node color based on category
  const getNodeColor = (nodeId: string) => {
    const node = ecosystemNodes.find((n) => n.id === nodeId)
    if (!node) return "#6366f1" // Default color

    return node.color
  }

  // Get node size based on category and state
  const getNodeSize = (nodeId: string) => {
    const node = ecosystemNodes.find((n) => n.id === nodeId)
    if (!node) return 20

    const pos = positions[nodeId]
    if (!pos) return 20

    let size = pos.radius

    // Increase size for hovered or active nodes
    if (hoveredNode === nodeId || activeNode === nodeId) {
      size *= 1.2
    }

    return size
  }

  // Calculate screen position from world position
  const getScreenPosition = (nodeId: string) => {
    const pos = positions[nodeId]
    if (!pos) return { x: 0, y: 0 }

    return {
      x: pos.x * zoom + pan.x + dimensions.width / 2,
      y: pos.y * zoom + pan.y + dimensions.height / 2,
    }
  }

  // Get connections between nodes
  const getConnections = () => {
    const connections: { from: string; to: string }[] = []

    ecosystemNodes.forEach((node) => {
      if (node.relatedNodes) {
        node.relatedNodes.forEach((relatedId) => {
          // Avoid duplicate connections
          const exists = connections.some(
            (conn) =>
              (conn.from === node.id && conn.to === relatedId) || (conn.from === relatedId && conn.to === node.id),
          )

          if (!exists && positions[node.id] && positions[relatedId]) {
            connections.push({ from: node.id, to: relatedId })
          }
        })
      }
    })

    return connections
  }

  // Get connection opacity based on node states
  const getConnectionOpacity = (fromId: string, toId: string) => {
    if (hoveredNode === fromId || hoveredNode === toId) return 0.8
    if (activeNode === fromId || activeNode === toId) return 0.8
    if (!activeNode && !hoveredNode) return 0.4
    return 0.1
  }

  return (
    <div className="relative w-full h-[700px] bg-gray-950 rounded-xl overflow-hidden border border-gray-800">
      {/* Star field background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Interactive container */}
      <div
        ref={containerRef}
        className="absolute inset-0 z-10 overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {/* Universe container with zoom and pan */}
        <div
          className="absolute inset-0 origin-center"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: "center",
            transition: isDragging ? "none" : "transform 0.1s ease-out",
          }}
        >
          {/* Connections between nodes */}
          <svg className="absolute inset-0 w-full h-full">
            {/* Orbital paths */}
            <circle
              cx={dimensions.width / 2}
              cy={dimensions.height / 2}
              r={200}
              fill="none"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="1"
              strokeDasharray="3 5"
            />
            <circle
              cx={dimensions.width / 2}
              cy={dimensions.height / 2}
              r={150}
              fill="none"
              stroke="rgba(255, 255, 255, 0.03)"
              strokeWidth="1"
              strokeDasharray="2 4"
            />

            {/* Node connections */}
            {getConnections().map(({ from, to }) => {
              const fromPos = getScreenPosition(from)
              const toPos = getScreenPosition(to)

              return (
                <line
                  key={`${from}-${to}`}
                  x1={fromPos.x}
                  y1={fromPos.y}
                  x2={toPos.x}
                  y2={toPos.y}
                  stroke={`rgba(255, 255, 255, ${getConnectionOpacity(from, to)})`}
                  strokeWidth={from === "eatek" || to === "eatek" ? 2 : 1}
                  strokeDasharray={from === "eatek" || to === "eatek" ? "" : "3 2"}
                />
              )
            })}
          </svg>

          {/* Nodes */}
          {Object.keys(positions).map((nodeId) => {
            const node = ecosystemNodes.find((n) => n.id === nodeId)
            if (!node) return null

            const screenPos = getScreenPosition(nodeId)
            const nodeSize = getNodeSize(nodeId)
            const nodeColor = getNodeColor(nodeId)

            return (
              <div
                key={nodeId}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
                style={{
                  left: screenPos.x,
                  top: screenPos.y,
                  zIndex: hoveredNode === nodeId || activeNode === nodeId ? 20 : 10,
                }}
                onMouseEnter={() => handleNodeHover(nodeId)}
                onMouseLeave={() => handleNodeHover(null)}
                onClick={() => handleNodeClick(nodeId)}
              >
                {/* Node circle */}
                <motion.div
                  className="rounded-full flex items-center justify-center cursor-pointer"
                  style={{
                    width: nodeSize,
                    height: nodeSize,
                    background: `linear-gradient(135deg, ${nodeColor}, ${nodeColor}dd)`,
                    boxShadow: `0 0 ${nodeSize / 2}px rgba(${Number.parseInt(nodeColor.slice(1, 3), 16)}, ${Number.parseInt(nodeColor.slice(3, 5), 16)}, ${Number.parseInt(nodeColor.slice(5, 7), 16)}, 0.5)`,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Node icon */}
                  <div className="text-white">
                    {node.icon &&
                      React.createElement(node.icon, {
                        size: nodeSize * 0.5,
                        className: "text-white",
                      })}
                  </div>

                  {/* Orbital ring for main category nodes */}
                  {node.category !== "core" && node.parent === "eatek" && (
                    <div
                      className="absolute rounded-full border border-white/20"
                      style={{
                        width: nodeSize * 1.3,
                        height: nodeSize * 1.3,
                        transform: "rotate(30deg)",
                      }}
                    />
                  )}
                </motion.div>

                {/* Node label */}
                {(hoveredNode === nodeId || activeNode === nodeId) && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap z-30">
                    <div className="bg-gray-900/90 backdrop-blur-sm rounded-md px-3 py-1.5 shadow-lg border border-gray-800">
                      <p className="font-medium text-white text-sm">{node.name}</p>
                      {activeNode === nodeId && (
                        <p className="text-xs text-gray-400 max-w-[200px]">{node.description}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Controls */}
        <div className="absolute top-4 right-4 z-40 flex flex-col gap-2">
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8 rounded-full bg-gray-900/80 backdrop-blur-sm border-gray-700 text-white hover:bg-gray-800"
            onClick={toggleInfo}
          >
            {showInfo ? <X className="h-4 w-4" /> : <Info className="h-4 w-4" />}
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8 rounded-full bg-gray-900/80 backdrop-blur-sm border-gray-700 text-white hover:bg-gray-800"
            onClick={handleZoomIn}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8 rounded-full bg-gray-900/80 backdrop-blur-sm border-gray-700 text-white hover:bg-gray-800"
            onClick={handleZoomOut}
          >
            <ZoomOut className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8 rounded-full bg-gray-900/80 backdrop-blur-sm border-gray-700 text-white hover:bg-gray-800"
            onClick={handleResetView}
          >
            <Home className="h-4 w-4" />
          </Button>
        </div>

        {/* Info panel */}
        {showInfo && (
          <div className="absolute top-4 left-4 z-30 bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 shadow-md border border-gray-800 max-w-xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium text-white">Interactive Universe</span>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="h-6 w-6 rounded-full hover:bg-gray-800/50"
                onClick={toggleInfo}
              >
                <X className="h-3 w-3 text-gray-400" />
              </Button>
            </div>
            <div className="space-y-2 text-xs text-gray-300">
              <p>
                • <span className="text-white">Drag</span> to pan around the universe
              </p>
              <p>
                • <span className="text-white">Scroll</span> or use zoom buttons to zoom in/out
              </p>
              <p>
                • <span className="text-white">Click</span> on a node to explore its connections
              </p>
              <p>
                • <span className="text-white">Click</span> on a node name to visit its page
              </p>
            </div>
          </div>
        )}

        {/* Node details panel */}
        {activeNode && (
          <div className="absolute bottom-4 right-4 bg-gray-900/90 backdrop-blur-md rounded-xl shadow-xl border border-gray-800 p-4 z-40 max-w-xs">
            {(() => {
              const node = ecosystemNodes.find((n) => n.id === activeNode)
              if (!node) return null

              return (
                <>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg text-white" style={{ background: node.color }}>
                      {React.createElement(node.icon, { size: 24 })}
                    </div>
                    <div>
                      <h3 className="font-medium text-white text-lg">{node.name}</h3>
                      <div className="text-xs text-gray-400">
                        {node.category.charAt(0).toUpperCase() + node.category.slice(1)}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 mb-3">{node.description}</p>

                  <Button
                    asChild
                    size="sm"
                    className="w-full"
                    style={{
                      background: `linear-gradient(to right, ${node.color}, ${node.color}dd)`,
                      color: "white",
                    }}
                  >
                    <Link href={`/ecosystem/${node.slug}`}>
                      Learn More <Search className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </>
              )
            })()}
          </div>
        )}

        {/* Mobile notice */}
        {isMobile && (
          <div className="absolute bottom-4 left-4 z-30 bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 shadow-md border border-gray-800 max-w-xs">
            <div className="text-white text-sm">
              <p>
                For the best experience viewing our ecosystem map, please rotate your device to landscape mode or visit
                on a larger screen.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
