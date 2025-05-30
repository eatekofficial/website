"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  School,
  Building,
  Briefcase,
  Palette,
  Brush,
  ImageIcon,
  Server,
  Database,
  Code,
} from "lucide-react"

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const solutions = [
    {
      category: "Education",
      icon: <School className="h-6 w-6" />,
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      description:
        "Comprehensive educational solutions that transform learning experiences across schools, colleges, and corporate training environments.",
      items: [
        {
          title: "K-12 Education",
          icon: <School className="h-5 w-5" />,
          description:
            "Interactive learning platforms, curriculum development, and assessment tools designed specifically for primary and secondary education.",
          features: [
            "Personalized learning paths",
            "Interactive lesson content",
            "Progress tracking and analytics",
            "Parent-teacher communication tools",
          ],
          link: "/solutions/k12-education",
        },
        {
          title: "Higher Education",
          icon: <Building className="h-5 w-5" />,
          description:
            "Advanced learning management systems, research tools, and campus management solutions for colleges and universities.",
          features: [
            "Virtual classrooms and labs",
            "Research collaboration platforms",
            "Student information systems",
            "Campus resource management",
          ],
          link: "/solutions/higher-education",
        },
        {
          title: "Corporate Training",
          icon: <Briefcase className="h-5 w-5" />,
          description:
            "Skill development and knowledge management solutions for businesses looking to enhance employee capabilities.",
          features: [
            "Skill assessment and gap analysis",
            "Custom training content development",
            "Learning analytics and ROI tracking",
            "Certification and compliance management",
          ],
          link: "/solutions/corporate-training",
        },
      ],
    },
    {
      category: "Art",
      icon: <Palette className="h-6 w-6" />,
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      description:
        "Creative technology solutions that empower artists, designers, and cultural institutions to create, showcase, and preserve artistic works.",
      items: [
        {
          title: "Artist Collaborations",
          icon: <Brush className="h-5 w-5" />,
          description:
            "Partnerships with artists to develop innovative tools and platforms that enhance creative expression and reach.",
          features: [
            "Custom creative software development",
            "Digital exhibition platforms",
            "Artist portfolio systems",
            "Creative community building tools",
          ],
          link: "/solutions/artist-collaborations",
        },
        {
          title: "Digital Media Production",
          icon: <ImageIcon className="h-5 w-5" />,
          description:
            "Tools and platforms for creating, editing, and distributing digital media content across various channels.",
          features: [
            "Video production and editing tools",
            "Animation and motion graphics",
            "Interactive media development",
            "Content distribution platforms",
          ],
          link: "/solutions/digital-media",
        },
        {
          title: "Cultural Preservation",
          icon: <Database className="h-5 w-5" />,
          description:
            "Digital archiving and preservation solutions for cultural institutions to protect and share artistic heritage.",
          features: [
            "Digital archiving systems",
            "Virtual museum experiences",
            "Cultural heritage documentation",
            "Public access platforms",
          ],
          link: "/solutions/cultural-preservation",
        },
      ],
    },
    {
      category: "Technology",
      icon: <Server className="h-6 w-6" />,
      color: "bg-teal-50 border-teal-200",
      iconColor: "text-teal-600",
      description:
        "Comprehensive IT solutions and services that help organizations leverage technology to achieve their business objectives.",
      items: [
        {
          title: "Custom Software Development",
          icon: <Code className="h-5 w-5" />,
          description:
            "Tailored software solutions designed to address specific business challenges and opportunities.",
          features: [
            "Web application development",
            "Mobile app development",
            "Enterprise software solutions",
            "API development and integration",
          ],
          link: "/solutions/custom-software",
        },
        {
          title: "Cloud Services",
          icon: <Server className="h-5 w-5" />,
          description:
            "Cloud infrastructure, migration, and management services to optimize performance, security, and cost.",
          features: [
            "Cloud migration strategies",
            "Infrastructure as a Service (IaaS)",
            "Platform as a Service (PaaS)",
            "Managed cloud services",
          ],
          link: "/solutions/cloud-services",
        },
        {
          title: "Data & Analytics",
          icon: <Database className="h-5 w-5" />,
          description:
            "Data management, analysis, and visualization solutions that transform raw data into actionable insights.",
          features: [
            "Data warehouse implementation",
            "Business intelligence dashboards",
            "Predictive analytics",
            "Big data processing",
          ],
          link: "/solutions/data-analytics",
        },
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
    <section ref={sectionRef} id="solutions" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600"
          >
            Our Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Innovative solutions at the intersection of Education, Art, and Technology
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {solutions.map((solution, index) => (
            <motion.div key={index} variants={itemVariants} className="space-y-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                <div className={`p-3 rounded-lg ${solution.color} ${solution.iconColor}`}>{solution.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.category} Solutions</h3>
                  <p className="text-gray-600 max-w-3xl">{solution.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {solution.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`rounded-xl border p-6 ${solution.color} hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-md bg-white/80 ${solution.iconColor}`}>{item.icon}</div>
                      <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                    </div>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <ul className="space-y-2 mb-6">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${solution.iconColor} flex-shrink-0`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={item.link}
                      className={`inline-flex items-center text-sm font-medium ${solution.iconColor} hover:underline`}
                    >
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <Button
                  asChild
                  variant="outline"
                  className={`border-${solution.iconColor.split("-")[1]}-300 ${
                    solution.iconColor
                  } hover:bg-${solution.iconColor.split("-")[1]}-50`}
                >
                  <Link href={`/solutions/${solution.category.toLowerCase()}`}>
                    View All {solution.category} Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
