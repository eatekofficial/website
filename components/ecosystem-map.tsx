"use client"

import React from "react"
import { useRef, useState, useEffect } from "react"
import { ecosystemNodes } from "@/lib/ecosystem-data"
import { useMobile } from "@/hooks/use-mobile"
import Link from "next/link"
import { motion } from "framer-motion"
import { ZoomIn, ZoomOut, Home, Info, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getIconComponent } from "../lib/icons"

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

interface EcosystemMapProps {
  coreNodes?: any[]
  educationNodes?: any[]
  artNodes?: any[]
  technologyNodes?: any[]
  serviceNodes?: any[]
}

export default function EcosystemMap({
  coreNodes = [],
  educationNodes = [],
  artNodes = [],
  technologyNodes = [],
  serviceNodes = []
}: EcosystemMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 1000, height: 700 })
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const isMobile = useMobile()
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const [isInitialized, setIsInitialized] = useState(false)
  const [nodePositions, setNodePositions] = useState<{[key: string]: NodePosition}>({})

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

    // Main categories in a circle around the core
    const mainCategories = ecosystemNodes.filter((node) => 
      node.relatedNodes.includes("eatek") && node.id !== "eatek"
    )
    
    mainCategories.forEach((node, index) => {
      const angle = (index / mainCategories.length) * Math.PI * 2
      const distance = isMobile ? 120 : 180
      
      initialPositions[node.id] = {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        angle: 0,
        speed: 0.002,
        radius: 30,
        orbitRadius: distance,
        orbitSpeed: 0.0005,
        orbitAngle: angle,
      }
    })

    // Subcategories orbit around their related main categories
    ecosystemNodes.forEach((node) => {
      if (node.id === "eatek" || initialPositions[node.id]) return
      
      // Find the first main category this node is related to
      const mainCategory = mainCategories.find(cat => 
        node.relatedNodes.includes(cat.id)
      )
      
      if (mainCategory) {
        const parentPos = initialPositions[mainCategory.id]
        if (parentPos) {
          const subCategoryCount = ecosystemNodes.filter(n => 
            n.id !== mainCategory.id && 
            n.relatedNodes.includes(mainCategory.id) && 
            !initialPositions[n.id]
          ).length
          
          if (subCategoryCount > 0) {
            const index = ecosystemNodes
              .filter(n => n.relatedNodes.includes(mainCategory.id) && !initialPositions[n.id])
              .findIndex(n => n.id === node.id)
              
            const angle = (index / subCategoryCount) * Math.PI * 2
            const distance = isMobile ? 90 : 120
            
            initialPositions[node.id] = {
              x: parentPos.x + Math.cos(angle) * distance,
              y: parentPos.y + Math.sin(angle) * distance,
              angle: 0,
              speed: 0.003,
              radius: 20,
              orbitRadius: distance,
              orbitSpeed: 0.0008,
              orbitAngle: angle,
            }
          }
        }
      }
    })

    setNodePositions(initialPositions)
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
    if (Object.keys(nodePositions).length === 0) return

    const animate = () => {
      setNodePositions((prevPositions) => {
        const newPositions = { ...prevPositions }

        // Update node positions
        Object.keys(newPositions).forEach((nodeId) => {
          const pos = newPositions[nodeId]
          const node = ecosystemNodes.find((n) => n.id === nodeId)

          if (node && node.relatedNodes && node.relatedNodes.length > 0) {
            // Find the first related node that exists in our positions
            const parentId = node.relatedNodes.find(id => id in newPositions)
            const parentPos = parentId ? newPositions[parentId] : null

            if (parentPos) {
              // Update orbit angle
              pos.orbitAngle = (pos.orbitAngle + pos.orbitSpeed) % (Math.PI * 2)

              // Calculate new position based on parent's position and orbit
              pos.x = parentPos.x + Math.cos(pos.orbitAngle) * pos.orbitRadius
              pos.y = parentPos.y + Math.sin(pos.orbitAngle) * pos.orbitRadius
            }
          }
        })

        return newPositions
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [nodePositions])

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
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y,
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
    const newScale = Math.max(0.5, Math.min(3, scale + delta))

    setScale(newScale)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true)
      setStartPos({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      })
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return

    setPosition({
      x: e.touches[0].clientX - startPos.x,
      y: e.touches[0].clientY - startPos.y,
    })
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Zoom controls
  const handleZoomIn = () => {
    setScale(Math.min(scale + 0.2, 3))
  }

  const handleZoomOut = () => {
    setScale(Math.max(scale - 0.2, 0.5))
  }

  const handleResetView = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  const toggleInfo = () => {
    // toggle info panel
  }

  // Node interaction
  const handleNodeHover = (nodeId: string | null) => {
    // handle node hover
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

    const pos = nodePositions[nodeId]
    if (!pos) return 20

    const size = pos.radius

    // Increase size for hovered or active nodes
    // if (hoveredNode === nodeId || activeNode === nodeId) {
    //   size *= 1.2
    // }

    return size
  }

  // Calculate screen position from world position
  const getScreenPosition = (nodeId: string) => {
    const pos = nodePositions[nodeId]
    if (!pos) return { x: 0, y: 0 }

    return {
      x: pos.x * scale + position.x + dimensions.width / 2,
      y: pos.y * scale + position.y + dimensions.height / 2,
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

          if (!exists && nodePositions[node.id] && nodePositions[relatedId]) {
            connections.push({ from: node.id, to: relatedId })
          }
        })
      }
    })

    return connections
  }

  // Get connection opacity based on node states
  const getConnectionOpacity = () => {
    // if (hoveredNode === fromId || hoveredNode === toId) return 0.8
    // if (activeNode === fromId || activeNode === toId) return 0.8
    // if (!activeNode && !hoveredNode) return 0.4
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
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
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
                  stroke={`rgba(255, 255, 255, ${getConnectionOpacity()})`}
                  strokeWidth={from === "eatek" || to === "eatek" ? 2 : 1}
                  strokeDasharray={from === "eatek" || to === "eatek" ? "" : "3 2"}
                />
              )
            })}
          </svg>

          {/* Nodes */}
          {Object.keys(nodePositions).map((nodeId) => {
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
                  zIndex: 10,
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
                    {node.icon && getIconComponent(node.icon, "w-4 h-4")}
                  </div>

                  {/* Orbital ring for main category nodes */}
                  {node.relatedNodes.includes("eatek") && (
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
                {(activeNode === nodeId) && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap z-30">
                    <div className="bg-gray-900/90 backdrop-blur-sm rounded-md px-3 py-1.5 shadow-lg border border-gray-800">
                      <p className="font-medium text-white text-sm">{node.name}</p>
                      <p className="text-xs text-gray-400">
                        {node.category.charAt(0).toUpperCase() + node.category.slice(1)}
                      </p>
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
            <Info className="h-4 w-4" />
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
        {/* <div className="absolute top-4 left-4 z-30 bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 shadow-md border border-gray-800 max-w-xs">
          <div className="text-white text-sm">
            <p>
              For the best experience viewing our ecosystem map, please rotate your device to landscape mode or visit
              on a larger screen.
            </p>
          </div>
        </div> */}

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
                      {node.icon && getIconComponent(node.icon, "w-6 h-6")}
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
