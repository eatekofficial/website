"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 0.8
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle system
    const particles: Particle[] = []
    const icons = [
      { x: canvas.width * 0.3, y: canvas.height * 0.5, type: "art" },
      { x: canvas.width * 0.5, y: canvas.height * 0.3, type: "code" },
      { x: canvas.width * 0.7, y: canvas.height * 0.5, type: "book" },
    ]

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        // Updated colors to teal and dark blue
        this.color = `hsl(${Math.random() * 30 + 170}, 80%, ${Math.random() * 20 + 30}%)`
        this.alpha = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.alpha > 0.1) {
          this.alpha -= 0.01
        }

        if (this.size > 0.2) {
          this.size -= 0.1
        }
      }

      draw() {
        if (!ctx) return
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    // Create particles
    const createParticles = () => {
      for (const icon of icons) {
        if (Math.random() < 0.2) {
          particles.push(new Particle(icon.x + Math.random() * 20 - 10, icon.y + Math.random() * 20 - 10))
        }
      }
    }

    // Draw icons
    const drawIcons = () => {
      if (!ctx) return

      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"

      // Art icon (palette)
      ctx.beginPath()
      ctx.arc(icons[0].x, icons[0].y, 20, 0, Math.PI * 2)
      ctx.fill()

      // Code icon (brackets)
      ctx.beginPath()
      ctx.moveTo(icons[1].x - 15, icons[1].y - 15)
      ctx.lineTo(icons[1].x - 5, icons[1].y - 15)
      ctx.lineTo(icons[1].x - 5, icons[1].y + 15)
      ctx.lineTo(icons[1].x - 15, icons[1].y + 15)
      ctx.moveTo(icons[1].x + 15, icons[1].y - 15)
      ctx.lineTo(icons[1].x + 5, icons[1].y - 15)
      ctx.lineTo(icons[1].x + 5, icons[1].y + 15)
      ctx.lineTo(icons[1].x + 15, icons[1].y + 15)
      ctx.stroke()

      // Book icon
      ctx.fillRect(icons[2].x - 15, icons[2].y - 15, 30, 30)
    }

    // Draw connecting lines
    const drawConnections = () => {
      if (!ctx) return

      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
      ctx.lineWidth = 1

      // Connect icons
      ctx.beginPath()
      ctx.moveTo(icons[0].x, icons[0].y)
      ctx.lineTo(icons[1].x, icons[1].y)
      ctx.lineTo(icons[2].x, icons[2].y)
      ctx.lineTo(icons[0].x, icons[0].y)
      ctx.stroke()
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update icon positions based on window size
      icons[0].x = canvas.width * 0.3
      icons[0].y = canvas.height * 0.5
      icons[1].x = canvas.width * 0.5
      icons[1].y = canvas.height * 0.3
      icons[2].x = canvas.width * 0.7
      icons[2].y = canvas.height * 0.5

      createParticles()
      drawConnections()

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        // Remove particles that are too small
        if (particles[i].size <= 0.2 || particles[i].alpha <= 0.1) {
          particles.splice(i, 1)
          i--
        }
      }

      drawIcons()

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <section id="hero" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/20 to-background/80 -z-10" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What if the next big revolution wasn't tech, art, or education — but all three at once?
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            EATEK is designing the blueprint for a soulful, scalable future powered by emotional utility.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button asChild size="lg" className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700">
              <Link href="#ecosystem">Explore Our Vision</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-teal-600 text-teal-600 hover:bg-teal-50"
            >
              <Link href="#join">Join the Movement</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
