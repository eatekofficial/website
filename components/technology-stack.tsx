"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Code,
  Database,
  Cloud,
  Server,
  Cpu,
  Layers,
  Globe,
  Palette,
  Lightbulb,
  BookOpen,
  LineChart,
  Smartphone,
  Zap,
  Workflow,
  GitBranch,
  Terminal,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { JSX } from "react/jsx-runtime"

interface Technology {
  name: string
  icon: JSX.Element
  description: string
  level: number // 1-5 for expertise level
}

interface TechCategory {
  name: string
  icon: JSX.Element
  description: string
  technologies: Technology[]
}

export default function TechnologyStack() {
  const [activeCategory, setActiveCategory] = useState<number>(0)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const techCategories: TechCategory[] = [
    {
      name: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      description: "Creating responsive, interactive user interfaces with modern frameworks and libraries",
      technologies: [
        { name: "React", icon: <Code className="h-5 w-5" />, description: "Component-based UI development", level: 5 },
        { name: "Next.js", icon: <Zap className="h-5 w-5" />, description: "React framework for production", level: 5 },
        {
          name: "TypeScript",
          icon: <Terminal className="h-5 w-5" />,
          description: "Typed JavaScript for scalable applications",
          level: 4,
        },
        {
          name: "Tailwind CSS",
          icon: <Palette className="h-5 w-5" />,
          description: "Utility-first CSS framework",
          level: 5,
        },
        {
          name: "Framer Motion",
          icon: <Workflow className="h-5 w-5" />,
          description: "Animation library for React",
          level: 4,
        },
        { name: "Three.js", icon: <Layers className="h-5 w-5" />, description: "3D graphics in the browser", level: 3 },
      ],
    },
    {
      name: "Backend & APIs",
      icon: <Server className="h-6 w-6" />,
      description: "Building robust server-side applications and APIs that power our solutions",
      technologies: [
        {
          name: "Node.js",
          icon: <Server className="h-5 w-5" />,
          description: "JavaScript runtime for server-side applications",
          level: 5,
        },
        { name: "Express", icon: <Zap className="h-5 w-5" />, description: "Web framework for Node.js", level: 4 },
        { name: "GraphQL", icon: <GitBranch className="h-5 w-5" />, description: "Query language for APIs", level: 4 },
        {
          name: "REST API",
          icon: <Globe className="h-5 w-5" />,
          description: "RESTful architecture for web services",
          level: 5,
        },
        {
          name: "Serverless",
          icon: <Cloud className="h-5 w-5" />,
          description: "Function-as-a-service architecture",
          level: 4,
        },
        {
          name: "Microservices",
          icon: <Layers className="h-5 w-5" />,
          description: "Distributed system architecture",
          level: 3,
        },
      ],
    },
    {
      name: "Data & AI",
      icon: <Cpu className="h-6 w-6" />,
      description: "Leveraging data and artificial intelligence to create intelligent solutions",
      technologies: [
        {
          name: "Machine Learning",
          icon: <Cpu className="h-5 w-5" />,
          description: "Algorithms that learn from data",
          level: 4,
        },
        {
          name: "Natural Language Processing",
          icon: <BookOpen className="h-5 w-5" />,
          description: "Processing and understanding human language",
          level: 4,
        },
        {
          name: "Computer Vision",
          icon: <Lightbulb className="h-5 w-5" />,
          description: "Image and video analysis",
          level: 3,
        },
        {
          name: "Data Visualization",
          icon: <LineChart className="h-5 w-5" />,
          description: "Interactive data representation",
          level: 4,
        },
        {
          name: "Big Data",
          icon: <Database className="h-5 w-5" />,
          description: "Processing large datasets",
          level: 3,
        },
        {
          name: "Predictive Analytics",
          icon: <LineChart className="h-5 w-5" />,
          description: "Forecasting future outcomes",
          level: 3,
        },
      ],
    },
    {
      name: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      description: "Deploying and managing applications in the cloud with modern DevOps practices",
      technologies: [
        {
          name: "AWS",
          icon: <Cloud className="h-5 w-5" />,
          description: "Amazon Web Services cloud platform",
          level: 4,
        },
        {
          name: "Azure",
          icon: <Cloud className="h-5 w-5" />,
          description: "Microsoft's cloud computing service",
          level: 3,
        },
        { name: "Docker", icon: <Layers className="h-5 w-5" />, description: "Containerization platform", level: 4 },
        {
          name: "Kubernetes",
          icon: <Workflow className="h-5 w-5" />,
          description: "Container orchestration",
          level: 3,
        },
        {
          name: "CI/CD",
          icon: <GitBranch className="h-5 w-5" />,
          description: "Continuous integration and deployment",
          level: 4,
        },
        {
          name: "Infrastructure as Code",
          icon: <Terminal className="h-5 w-5" />,
          description: "Managing infrastructure through code",
          level: 3,
        },
      ],
    },
    {
      name: "Creative Technology",
      icon: <Palette className="h-6 w-6" />,
      description: "Blending art and technology to create immersive digital experiences",
      technologies: [
        { name: "WebGL", icon: <Layers className="h-5 w-5" />, description: "3D graphics in the browser", level: 3 },
        {
          name: "AR/VR",
          icon: <Smartphone className="h-5 w-5" />,
          description: "Augmented and virtual reality",
          level: 3,
        },
        {
          name: "Creative Coding",
          icon: <Palette className="h-5 w-5" />,
          description: "Programming for artistic expression",
          level: 4,
        },
        {
          name: "Generative Art",
          icon: <Lightbulb className="h-5 w-5" />,
          description: "Art created with algorithms",
          level: 4,
        },
        {
          name: "Interactive Installations",
          icon: <Zap className="h-5 w-5" />,
          description: "Physical computing and installations",
          level: 3,
        },
        {
          name: "Digital Storytelling",
          icon: <BookOpen className="h-5 w-5" />,
          description: "Narrative experiences through technology",
          level: 4,
        },
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="technology"
      className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-teal-50 rounded-full opacity-70 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-50 rounded-full opacity-70 blur-3xl -z-10"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent  bg-gradient-to-r from-cyan-600 via-purple-400 to-red-500">
            Our Technology Expertise
          </h2>
          <p className="text-lg text-gray-600">
            At EATEK, we leverage cutting-edge technologies to deliver innovative solutions at the intersection of
            Education, Art, and Technology.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {techCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
                activeCategory === index
                  ? " bg-gradient-to-r from-cyan-600 via-purple-400 to-red-500 text-white shadow-lg shadow-teal-500/20"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-teal-300 hover:bg-gray-50",
              )}
            >
              <span className={activeCategory === index ? "text-white" : "text-teal-600"}>{category.icon}</span>
              <span className="hidden md:inline">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg  bg-gradient-to-r from-cyan-600 via-purple-400 to-red-500 text-white">
                  {techCategories[activeCategory].icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{techCategories[activeCategory].name}</h3>
              </div>
              <p className="text-gray-600 mb-6">{techCategories[activeCategory].description}</p>

              {/* Decorative elements */}
              <div className="hidden md:block relative h-40 mt-8">
                <div className="absolute top-0 left-0 w-20 h-20 bg-cyan-100/50 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              </div>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techCategories[activeCategory].technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-2 rounded-md bg-gray-100 text-teal-600 group-hover:bg-teal-50 transition-colors">
                      {tech.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{tech.name}</h4>
                      <p className="text-sm text-gray-500">{tech.description}</p>
                    </div>
                  </div>

                  {/* Expertise level */}
                  <div className="mt-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500">Expertise Level</span>
                      <span className="text-xs text-purple-600">{tech.level}/5</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(tech.level / 5) * 100}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full  bg-gradient-to-r from-cyan-600 via-purple-400 to-red-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
