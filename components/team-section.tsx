"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, User } from "lucide-react"

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const team = [
    {
      name: "Alex Chen",
      role: "Founder & Creative Director",
      bio: "Former design lead at major tech companies, Alex bridges the gap between artistic vision and technical execution.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Maya Rodriguez",
      role: "Technology Lead",
      bio: "With a background in both computer science and fine arts, Maya develops systems that understand creative processes.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Jordan Taylor",
      role: "Education Strategist",
      bio: "Former educator and EdTech innovator, Jordan ensures our tools empower learning across disciplines.",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sam Washington",
      role: "Experience Architect",
      bio: "Blending psychology and interface design, Sam creates emotionally resonant digital experiences.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="team" ref={sectionRef} className="py-20 bg-gradient-to-b from-background/90 to-background">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-blue-600 to-teal-600">
            Meet the Collective
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse team of creators, technologists, and educators united by a shared vision.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {team.map((member, index) => (
            <motion.div key={index} className="flex flex-col items-center text-center" variants={itemVariants}>
              <div className="w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-teal-100 shadow-lg flex items-center justify-center bg-gradient-to-br from-teal-100 to-blue-100">
                <User className="h-24 w-24 text-teal-600/50" />
              </div>

              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-teal-600 font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground mb-4">{member.bio}</p>

              <div className="flex items-center gap-4">
                {member.social.twitter && (
                  <Link
                    href={member.social.twitter}
                    className="text-muted-foreground hover:text-teal-600 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                )}

                {member.social.linkedin && (
                  <Link
                    href={member.social.linkedin}
                    className="text-muted-foreground hover:text-teal-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                )}

                {member.social.github && (
                  <Link
                    href={member.social.github}
                    className="text-muted-foreground hover:text-teal-600 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 p-8 rounded-lg border bg-gradient-to-r from-teal-50 to-blue-50 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-bold mb-4 text-blue-800">Why We&apos;re Building EATEK</h3>
          <p className="text-muted-foreground mb-6">
            We believe that the future of technology must be built with soul, intention, and emotional intelligence. Our
            diverse backgrounds in art, education, and technology give us a unique perspective on creating systems that
            truly serve human creativity and connection.
          </p>
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full border-2 border-teal-500 text-teal-600">
            ▶
          </div>
          <p className="text-sm text-muted-foreground mt-2">Watch our story</p>
        </motion.div>
      </div>
    </section>
  )
}
