"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Clock, Lock } from "lucide-react"

export default function Roadmap() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const milestones = [
    {
      title: "Ideation complete for key platforms",
      description: "Core concepts and architecture defined for all major EATEK components.",
      status: "complete",
      icon: <CheckCircle className="h-6 w-6 text-teal-500" />,
    },
    {
      title: "R&D in progress for FlowBox, Portli",
      description: "Active development of our creator tools with early testing underway.",
      status: "in-progress",
      icon: <Clock className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Labs & Creative Commerce launching soon",
      description: "Final preparations for our innovation hub and first commercial offerings.",
      status: "upcoming",
      icon: <Clock className="h-6 w-6 text-teal-600" />,
    },
    {
      title: "Marketplace + OS + API",
      description: "Comprehensive ecosystem for creators, educators, and developers.",
      status: "locked",
      icon: <Lock className="h-6 w-6 text-muted-foreground" />,
    },
  ]

  return (
    <section id="roadmap" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-background/90">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-blue-600 to-teal-600">
            Roadmap & Progress Tracker
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">We&apos;re building in public. With soul.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-blue-700" />

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-card border shadow-md">
                    {milestone.icon}
                  </div>

                  <div className="pt-2">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>

                    {milestone.status === "complete" && (
                      <span className="inline-flex items-center mt-3 px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400">
                        Completed
                      </span>
                    )}

                    {milestone.status === "in-progress" && (
                      <span className="inline-flex items-center mt-3 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                        In Progress
                      </span>
                    )}

                    {milestone.status === "upcoming" && (
                      <span className="inline-flex items-center mt-3 px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400">
                        Coming Soon
                      </span>
                    )}

                    {milestone.status === "locked" && (
                      <span className="inline-flex items-center mt-3 px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                        Future Release
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-16 p-6 rounded-lg border bg-gradient-to-r from-teal-50 to-blue-50 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-muted-foreground">
              Want to stay updated on our progress? Join our newsletter for regular updates on milestones, beta access
              opportunities, and early previews of upcoming features.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
