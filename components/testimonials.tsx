"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const testimonials: Testimonial[] = [
    {
      quote:
        "EATEK transformed our approach to educational content. Their platform combines cutting-edge technology with deep pedagogical understanding, resulting in significantly improved student engagement and outcomes.",
      author: "Dr. Sarah Johnson",
      role: "Director of Educational Technology",
      company: "Westfield School District",
    },
    {
      quote:
        "The creative tools developed by EATEK have revolutionized our design workflow. Their intuitive interface and powerful features have enabled our team to produce higher quality work in less time.",
      author: "Michael Chen",
      role: "Creative Director",
      company: "Artisan Design Studio",
    },
    {
      quote:
        "Working with EATEK on our enterprise solution was a game-changer. Their team's technical expertise and collaborative approach resulted in a system that exceeded our expectations and transformed our operations.",
      author: "Jennifer Martinez",
      role: "CTO",
      company: "Innovate Solutions",
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Hear from organizations that have partnered with us to bring their visions to life.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="h-8 w-8 text-teal-500 mb-4 opacity-50" />
              <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-teal-600">
            <span className="h-px w-8 bg-teal-600"></span>
            <span className="text-sm font-medium">Trusted by leading organizations worldwide</span>
            <span className="h-px w-8 bg-teal-600"></span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-8 grayscale opacity-60">
            {/* Company logos would go here */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-8 w-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
