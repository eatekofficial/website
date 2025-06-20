"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CaseStudy {
  title: string
  client: string
  category: string
  description: string
  results: string[]
  link: string
  color: string
}

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const caseStudies: CaseStudy[] = [
    {
      title: "Interactive Learning Platform for K-12 Students",
      client: "EduTech Innovations",
      category: "Education",
      description:
        "We developed a comprehensive learning platform that combines interactive lessons, progress tracking, and personalized learning paths for K-12 students. The platform includes features for both students and educators, with robust analytics to track progress and identify areas for improvement.",
      results: [
        "35% improvement in student engagement",
        "28% increase in test scores",
        "92% teacher satisfaction rate",
        "Deployed to 120+ schools nationwide",
      ],
      link: "/case-studies/edutech-learning-platform",
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Digital Art Creation and Collaboration Tool",
      client: "Creative Collective",
      category: "Art & Design",
      description:
        "We built a cloud-based digital art creation and collaboration platform that enables artists to work together in real-time, regardless of location. The tool includes advanced brushes, layers, and effects, along with robust collaboration features like commenting, version history, and shared workspaces.",
      results: [
        "10,000+ active monthly users",
        "40% reduction in project completion time",
        "Featured in major design publications",
        "Seamless collaboration across 15+ countries",
      ],
      link: "/case-studies/creative-collaboration-tool",
      color: "bg-purple-50 border-purple-200",
    },
    {
      title: "AI-Powered Content Recommendation Engine",
      client: "MediaStream",
      category: "Technology",
      description:
        "We developed a sophisticated AI recommendation engine that analyzes user behavior and preferences to deliver personalized content recommendations. The system uses machine learning algorithms to continuously improve its recommendations based on user interactions and feedback.",
      results: [
        "52% increase in content engagement",
        "27% reduction in user churn",
        "3.2x improvement in content discovery",
        "Processing 1M+ recommendations daily",
      ],
      link: "/case-studies/ai-recommendation-engine",
      color: "bg-teal-50 border-teal-200",
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
    <section ref={sectionRef} id="case-studies" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Explore how we&apos;ve helped organizations transform their ideas into impactful solutions.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`rounded-xl border p-6 ${study.color} hover:shadow-md transition-shadow`}
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white text-gray-700 mb-2">
                  {study.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{study.title}</h3>
                <p className="text-sm text-gray-600">Client: {study.client}</p>
              </div>

              <p className="text-gray-700 mb-4 line-clamp-3">{study.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Key Results:</h4>
                <ul className="space-y-1">
                  {study.results.map((result, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-teal-500 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-2">
                <Link
                  href={study.link}
                  className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700"
                >
                  Read Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700"
          >
            <Link href="/case-studies">
              View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
