"use client"

import type React from "react"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface SolutionFeaturesProps {
  features: Array<{
    title: string
    description: string
    icon?: React.ReactNode
  }>
  categoryColor: string
}

export default function SolutionFeatures({ features, categoryColor }: SolutionFeaturesProps) {
  if (!features || features.length === 0) {
    return null
  }

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6"
          >
            {/* Feature accent background */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${categoryColor}`} />

            <div className="flex gap-4">
              <div className={`rounded-full p-2 bg-gradient-to-br ${categoryColor} text-white`}>
                {feature.icon || <CheckCircle className="h-5 w-5" />}
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-lg">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
