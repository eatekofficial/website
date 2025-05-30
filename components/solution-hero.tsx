"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface SolutionHeroProps {
  solution: any
  categoryColor: string
  categoryTextColor: string
  categoryBadgeColor: string
}

export default function SolutionHero({
  solution,
  categoryColor,
  categoryTextColor,
  categoryBadgeColor,
}: SolutionHeroProps) {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-gray-950/40" />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/95 to-white/80 dark:from-gray-900/80 dark:via-gray-900/95 dark:to-gray-900/80" />

      {/* Accent Color Blob */}
      <div
        className={`absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br ${categoryColor} opacity-10 blur-3xl`}
      />

      <div className="container relative px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800">
              <span className={categoryTextColor}>
                {solution.category.charAt(0).toUpperCase() + solution.category.slice(1)}
              </span>{" "}
              Solution
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{solution.name}</h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg">{solution.description}</p>

            <div className="flex flex-wrap gap-4">
              <Button className={`bg-gradient-to-r ${categoryColor}`}>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {solution.demoVideo && (
                <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <Play className="h-4 w-4" />
                      Watch Demo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[800px] p-0 bg-black">
                    <div className="aspect-video w-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src={solution.demoVideo}
                        title={`${solution.name} Demo Video`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 shadow-xl">
              <Image
                src={solution.image || `/placeholder.svg?height=720&width=1280&text=${solution.name}`}
                alt={solution.name}
                width={1280}
                height={720}
                className="object-cover"
                priority
              />

              {/* Overlay gradient */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${categoryColor} opacity-10`} />

              {/* Icon overlay */}
              <div className="absolute bottom-4 right-4 p-3 rounded-full bg-white/90 dark:bg-gray-900/90 shadow-lg">
                <div className={`text-${categoryTextColor.split("-")[1]}`}>{solution.icon}</div>
              </div>
            </div>

            {/* Floating badges */}
            {solution.highlights && solution.highlights.length > 0 && (
              <div className="absolute -bottom-6 -left-6 flex flex-col gap-2">
                {solution.highlights.slice(0, 2).map((highlight: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className={`rounded-full px-4 py-2 text-sm font-medium shadow-lg ${categoryBadgeColor} border`}
                  >
                    {highlight}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
