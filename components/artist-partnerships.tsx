"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Palette, ImageIcon, Film, Music, Globe, Users } from "lucide-react"

export default function ArtistPartnerships() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const partnerships = [
    {
      artist: "Elena Rodriguez",
      medium: "Digital Art & Animation",
      icon: <ImageIcon className="h-5 w-5" />,
      collaboration:
        "Developed a custom digital art creation platform that combines AI-assisted tools with traditional techniques, enabling Elena to create her award-winning animation series.",
      quote:
        "EATEK's technology has transformed my creative process, allowing me to push the boundaries of digital animation in ways I never thought possible.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      artist: "Marcus Chen",
      medium: "Interactive Installations",
      icon: <Globe className="h-5 w-5" />,
      collaboration:
        "Created an interactive installation platform that responds to audience movement and sound, powering Marcus's globally recognized museum exhibitions.",
      quote:
        "Working with EATEK has allowed me to create truly responsive art that connects with audiences on a deeper level. The technology disappears, leaving only the experience.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      artist: "Sophia Williams",
      medium: "Film & Virtual Reality",
      icon: <Film className="h-5 w-5" />,
      collaboration:
        "Developed immersive VR storytelling tools that enabled Sophia to pioneer new approaches to narrative filmmaking, resulting in her critically acclaimed VR film series.",
      quote:
        "EATEK understood my vision immediately and helped translate it into a technological framework that expanded what's possible in immersive storytelling.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      artist: "Jamal Thompson",
      medium: "Music & Sound Design",
      icon: <Music className="h-5 w-5" />,
      collaboration:
        "Built a spatial audio composition system that allows Jamal to create three-dimensional soundscapes for his innovative performances and installations.",
      quote:
        "The tools EATEK created have opened up entirely new dimensions in my work, allowing sound to become a truly sculptural medium in my compositions.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section ref={sectionRef} id="artist-partnerships" className="py-20 bg-purple-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
          >
            Artist Partnerships
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Empowering artists with technology to expand creative possibilities and reach new audiences
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {partnerships.map((partnership, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl border border-purple-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-purple-100 flex items-center justify-center p-6">
                  <div className="w-32 h-32 rounded-full bg-purple-200 flex items-center justify-center">
                    <Palette className="h-12 w-12 text-purple-600" />
                  </div>
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-purple-100 text-purple-600">{partnership.icon}</div>
                    <span className="text-sm font-medium text-purple-600">{partnership.medium}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{partnership.artist}</h3>
                  <p className="text-gray-600 text-sm mb-4">{partnership.collaboration}</p>
                  <blockquote className="italic text-gray-700 border-l-4 border-purple-300 pl-4 py-1 mb-4">
                    "{partnership.quote}"
                  </blockquote>
                  <Link
                    href={`/artist-partnerships/${partnership.artist.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 hover:underline"
                  >
                    View Collaboration <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-white rounded-xl border border-purple-200 p-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-purple-100 text-purple-600">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Artist Collaboration Program</h3>
              </div>
              <p className="text-gray-600 mb-6">
                EATEK is committed to supporting artists through technology partnerships that enhance creative
                expression. Our collaboration program provides artists with custom tools, technical support, and
                platforms to showcase their work.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
              >
                <Link href="/artist-program">
                  Apply for Collaboration <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Technical Support</h4>
                <p className="text-sm text-gray-600">
                  Access to our team of engineers and designers to develop custom tools for your creative process.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Exhibition Platform</h4>
                <p className="text-sm text-gray-600">
                  Opportunities to showcase your work through our digital and physical exhibition spaces.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Community Access</h4>
                <p className="text-sm text-gray-600">
                  Connect with a network of artists, technologists, and institutions exploring the intersection of art
                  and technology.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
