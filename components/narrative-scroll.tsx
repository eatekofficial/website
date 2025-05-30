"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AlertCircle, BookOpen, Code, Palette, Zap } from "lucide-react"

export default function NarrativeScroll() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const problems = [
    {
      title: "Fragmented Ecosystems",
      description: "Tools and platforms that don't talk to each other, creating silos instead of synergy.",
      icon: <AlertCircle className="h-12 w-12" />,
    },
    {
      title: "Outdated Learning Models",
      description: "Education systems that prepare for yesterday's challenges, not tomorrow's opportunities.",
      icon: <BookOpen className="h-12 w-12" />,
    },
    {
      title: "Disconnected Creators",
      description: "Artists and makers isolated from the technical tools that could amplify their vision.",
      icon: <Palette className="h-12 w-12" />,
    },
    {
      title: "Soulless Technology",
      description: "Digital experiences that optimize for engagement, not enrichment or emotional resonance.",
      icon: <Code className="h-12 w-12" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="vision" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-background/90">
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-blue-600 to-teal-600"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          The Problem We're Solving
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:bg-card/80 transition-colors hover:border-teal-500"
              variants={itemVariants}
            >
              <div className="mb-4 text-teal-600">{problem.icon}</div>
              <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 p-8 rounded-lg border bg-gradient-to-r from-teal-50 to-blue-50 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <Zap className="h-12 w-12 mx-auto mb-4 text-teal-600" />
          <h3 className="text-2xl font-bold mb-4 text-blue-800">Our Response</h3>
          <p className="text-xl">"We're building intersectional systems that empower, not overwhelm."</p>
        </motion.div>
      </div>
    </section>
  )
}
