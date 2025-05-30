"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, School, Building, Briefcase, Users, Award } from "lucide-react"

export default function EducationCollaborations() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const collaborations = [
    {
      type: "School Partnerships",
      icon: <School className="h-6 w-6" />,
      description:
        "We partner with K-12 schools to implement innovative educational technology solutions that enhance teaching and learning experiences.",
      examples: [
        {
          name: "Westfield School District",
          project: "Comprehensive Learning Management System",
          outcome:
            "Implemented a district-wide LMS that improved student engagement by 35% and streamlined administrative processes.",
        },
        {
          name: "Oakridge Academy",
          project: "STEM Education Platform",
          outcome:
            "Developed an interactive STEM platform that increased student interest in science and technology careers by 42%.",
        },
      ],
      benefits: [
        "Personalized learning experiences",
        "Enhanced student engagement",
        "Streamlined administrative processes",
        "Data-driven decision making",
      ],
    },
    {
      type: "College & University Collaborations",
      icon: <Building className="h-6 w-6" />,
      description:
        "We work with higher education institutions to develop advanced learning platforms, research tools, and campus management solutions.",
      examples: [
        {
          name: "Metropolitan University",
          project: "Research Collaboration Platform",
          outcome:
            "Created a platform that connected researchers across departments and institutions, resulting in a 28% increase in collaborative publications.",
        },
        {
          name: "Tech Institute",
          project: "Virtual Labs Environment",
          outcome:
            "Implemented virtual labs that provided 24/7 access to lab resources, reducing equipment costs by 30% while expanding student access.",
        },
      ],
      benefits: [
        "Advanced research capabilities",
        "Virtual learning environments",
        "Cross-institutional collaboration",
        "Resource optimization",
      ],
    },
    {
      type: "Corporate Training Partnerships",
      icon: <Briefcase className="h-6 w-6" />,
      description:
        "We collaborate with businesses to develop effective training programs that enhance employee skills and drive organizational performance.",
      examples: [
        {
          name: "Global Financial Services",
          project: "Compliance Training System",
          outcome:
            "Developed a compliance training platform that reduced training time by 25% while improving knowledge retention and regulatory compliance.",
        },
        {
          name: "Tech Innovations Inc.",
          project: "Technical Skills Development Program",
          outcome:
            "Created a personalized learning program that upskilled 500+ employees in emerging technologies, contributing to a 15% increase in innovation metrics.",
        },
      ],
      benefits: [
        "Skill gap analysis and targeted training",
        "Measurable learning outcomes",
        "Scalable training delivery",
        "Integration with HR systems",
      ],
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
    <section ref={sectionRef} id="education-collaborations" className="py-20 bg-blue-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            Education Collaborations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Partnering with educational institutions and organizations to transform learning experiences
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {collaborations.map((collab, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-white rounded-xl border border-blue-200 p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-blue-100 text-blue-600">{collab.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{collab.type}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{collab.description}</p>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="h-5 w-5 text-blue-600" /> Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {collab.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-500 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" /> Success Stories
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {collab.examples.map((example, exampleIndex) => (
                      <div
                        key={exampleIndex}
                        className="bg-blue-50 border border-blue-100 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <h5 className="font-medium text-gray-900 mb-1">{example.name}</h5>
                        <p className="text-blue-600 text-sm mb-2">{example.project}</p>
                        <p className="text-sm text-gray-600">{example.outcome}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-end">
                    <Button asChild variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                      <Link href={`/education/${collab.type.toLowerCase().replace(/\s+/g, "-")}`}>
                        Explore {collab.type} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
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
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Looking to transform education at your institution or organization? Partner with EATEK to develop innovative
            solutions tailored to your specific needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
          >
            <Link href="/contact">
              Discuss Your Education Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
