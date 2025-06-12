"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-teal-50 rounded-full opacity-70 blur-3xl -z-10 transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-50 rounded-full opacity-70 blur-3xl -z-10 transform -translate-x-1/4 translate-y-1/4"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] z-0"></div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-teal-100 rounded-lg opacity-20 z-0"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>

        <motion.div
          className="absolute top-2/3 right-1/3 w-20 h-20 bg-blue-100 rounded-full opacity-30 z-0"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-purple-100 rounded-lg opacity-20 z-0"
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-purple-400 to-red-500">
                Innovative Solutions at the Intersection of Education, Art & Technology
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              EATEK builds transformative digital experiences that empower organizations to educate, create, and
              innovate in the digital age.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className=" bg-gradient-to-r from-cyan-600 via-purple-400 to-red-500 hover:from-teal-600 hover:to-blue-700"
              >
                <Link href="/solutions">
                  Explore Our Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-teal-200 text-teal-600 hover:bg-teal-50">
                <Link href="/contact">
                  Contact Us <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                ))}
              </div>
              <p className="text-sm text-gray-600">Trusted by 500+ organizations worldwide</p>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600">Watch our introduction video</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-100 rounded-lg opacity-50 z-[-1]"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-100 rounded-full opacity-50 z-[-1]"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
