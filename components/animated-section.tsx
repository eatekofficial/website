"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView, type Variants } from "framer-motion"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  once?: boolean
  threshold?: number
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  threshold = 0.3,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const getVariants = (): Variants => {
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: 70, scale: 0.98 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1.0],
            },
          },
        }
      case "down":
        return {
          hidden: { opacity: 0, y: -70, scale: 0.98 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1.0],
            },
          },
        }
      case "left":
        return {
          hidden: { opacity: 0, x: 70, scale: 0.98 },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1.0],
            },
          },
        }
      case "right":
        return {
          hidden: { opacity: 0, x: -70, scale: 0.98 },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1.0],
            },
          },
        }
      default:
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1.0],
            },
          },
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  )
}
