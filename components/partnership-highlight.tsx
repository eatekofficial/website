"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Layers, Zap, Sparkles } from "lucide-react"

export default function PartnershipHighlight() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section id="partnership" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-background/90">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Flagship Partnership Highlight</h2>
              <h3 className="text-2xl font-semibold text-teal-600 mb-2">Stasis Artis x EATEK</h3>
              <p className="text-xl text-muted-foreground">
                The first art-tech venture born from the EATEK philosophy.
              </p>
            </div>

            <p className="text-muted-foreground">
              Stasis Artis represents the perfect fusion of tangible art and digital innovation. Each resin art piece is
              embedded with NFC technology, creating a bridge between physical craftsmanship and digital experiences.
            </p>

            <div className="space-y-2">
              <h4 className="font-medium">Key Features:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Handcrafted resin art with embedded NFC technology</li>
                <li>• AR experiences that extend the physical artwork</li>
                <li>• Digital provenance and authentication</li>
                <li>• Community-driven creative direction</li>
              </ul>
            </div>

            <Button asChild size="lg" className="mt-4 bg-teal-600 hover:bg-teal-700">
              <Link href="https://stasisartis.com" target="_blank" rel="noopener noreferrer">
                Experience Stasis Artis
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-square rounded-xl overflow-hidden border shadow-lg bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              <Layers className="h-32 w-32 text-teal-600/70" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-blue-900 font-medium mb-2">Tap to reveal AR experience</p>
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-blue-900 text-2xl">+</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-xl overflow-hidden border shadow-lg rotate-6 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
              <Sparkles className="h-16 w-16 text-blue-600/70" />
            </div>

            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-xl overflow-hidden border shadow-lg -rotate-6 bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center">
              <Zap className="h-12 w-12 text-teal-600/70" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
