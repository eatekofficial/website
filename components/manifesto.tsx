"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const manifestoPoints = [
    {
      title: "From tool-first to meaning-first",
      description:
        "Technology should serve human purpose, not the other way around. We design for intention, not just attention.",
    },
    {
      title: "From attention economy to intention economy",
      description: "We're building systems that value depth over distraction, meaningful engagement over metrics.",
    },
    {
      title: "From siloed skills to intersectional creation",
      description: "The future belongs to those who can bridge disciplines, connecting art, technology, and education.",
    },
    {
      title: "From consumption to contribution",
      description: "We're creating platforms that transform passive users into active creators and collaborators.",
    },
  ]

  return (
    <section id="manifesto" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-background/90">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-blue-600 to-teal-600">
            Emotional Utility Manifesto
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The belief system that guides everything we build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {manifestoPoints.map((point, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border bg-gradient-to-br from-white to-teal-50 shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold mb-3 text-blue-800">{point.title}</h3>
              <p className="text-muted-foreground">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Link href="#">
              <Download className="mr-2 h-4 w-4" />
              Download Full Manifesto
            </Link>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">Available as a beautifully designed zine or PDF.</p>
        </motion.div>
      </div>
    </section>
  )
}
