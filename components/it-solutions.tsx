"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Server, Shield, Database, Cloud, Code, Smartphone, Globe, Cpu, BarChart, Zap } from "lucide-react"

export default function ITSolutions() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const solutions = [
    {
      category: "Enterprise Software",
      icon: <Server className="h-6 w-6" />,
      description:
        "Custom enterprise software solutions that streamline operations, improve efficiency, and drive business growth.",
      items: [
        {
          name: "ERP Systems",
          description: "Integrated management of core business processes in real-time.",
        },
        {
          name: "CRM Solutions",
          description: "Manage customer relationships and interactions throughout the customer lifecycle.",
        },
        {
          name: "Business Intelligence",
          description: "Transform data into actionable insights for informed decision-making.",
        },
      ],
    },
    {
      category: "Cloud Infrastructure",
      icon: <Cloud className="h-6 w-6" />,
      description:
        "Scalable, secure, and reliable cloud infrastructure solutions to support your business applications and services.",
      items: [
        {
          name: "Cloud Migration",
          description: "Seamlessly transition your applications and data to the cloud.",
        },
        {
          name: "Hybrid Cloud",
          description: "Integrate on-premises infrastructure with cloud services for optimal performance.",
        },
        {
          name: "Cloud-Native Development",
          description: "Build applications designed specifically for cloud environments.",
        },
      ],
    },
    {
      category: "Cybersecurity",
      icon: <Shield className="h-6 w-6" />,
      description:
        "Comprehensive security solutions to protect your digital assets, data, and infrastructure from evolving threats.",
      items: [
        {
          name: "Security Assessment",
          description: "Identify vulnerabilities and develop mitigation strategies.",
        },
        {
          name: "Threat Protection",
          description: "Proactive monitoring and defense against cyber threats.",
        },
        {
          name: "Compliance Management",
          description: "Ensure adherence to industry regulations and standards.",
        },
      ],
    },
    {
      category: "Data Management",
      icon: <Database className="h-6 w-6" />,
      description:
        "End-to-end data management solutions to help you collect, store, process, and analyze your valuable data assets.",
      items: [
        {
          name: "Data Warehousing",
          description: "Centralized repository for integrated data from multiple sources.",
        },
        {
          name: "Big Data Processing",
          description: "Handle large volumes of structured and unstructured data.",
        },
        {
          name: "Data Governance",
          description: "Establish policies and procedures for effective data management.",
        },
      ],
    },
    {
      category: "Application Development",
      icon: <Code className="h-6 w-6" />,
      description:
        "Custom application development services to create software solutions tailored to your specific business needs.",
      items: [
        {
          name: "Web Applications",
          description: "Responsive and scalable web-based solutions.",
        },
        {
          name: "Mobile Applications",
          description: "Native and cross-platform mobile apps for iOS and Android.",
        },
        {
          name: "API Development",
          description: "Create robust APIs for system integration and data exchange.",
        },
      ],
    },
    {
      category: "Digital Transformation",
      icon: <Zap className="h-6 w-6" />,
      description:
        "Strategic digital transformation services to help your organization leverage technology for competitive advantage.",
      items: [
        {
          name: "Process Automation",
          description: "Streamline workflows and reduce manual tasks.",
        },
        {
          name: "Digital Strategy",
          description: "Develop a roadmap for technology-driven business transformation.",
        },
        {
          name: "Change Management",
          description: "Support organizational adaptation to new digital processes.",
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
    <section ref={sectionRef} id="it-solutions" className="py-20 bg-teal-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600"
          >
            IT Solutions & Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Comprehensive technology solutions to drive innovation and efficiency in your organization
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl border border-teal-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-teal-100 text-teal-600">{solution.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{solution.category}</h3>
              </div>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-3 mb-6">
                {solution.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="bg-teal-50 rounded-lg p-3">
                    <h4 className="font-medium text-gray-900 mb-1">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </li>
                ))}
              </ul>
              <Link
                href={`/it-solutions/${solution.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 hover:underline"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-white rounded-xl border border-teal-200 p-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Technology Approach</h3>
              <p className="text-gray-600 mb-6">
                At EATEK, we take a consultative approach to IT solutions, working closely with you to understand your
                business challenges and objectives before recommending and implementing technology solutions. Our focus
                is on delivering measurable business value through technology.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <div className="p-1 rounded-md bg-teal-100 text-teal-600 mt-0.5">
                    <Cpu className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">Future-Proof Solutions</h4>
                    <p className="text-xs text-gray-600">Scalable architecture for long-term value</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="p-1 rounded-md bg-teal-100 text-teal-600 mt-0.5">
                    <BarChart className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">Data-Driven Decisions</h4>
                    <p className="text-xs text-gray-600">Analytics to measure and optimize results</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="p-1 rounded-md bg-teal-100 text-teal-600 mt-0.5">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">Global Expertise</h4>
                    <p className="text-xs text-gray-600">Best practices from diverse industries</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="p-1 rounded-md bg-teal-100 text-teal-600 mt-0.5">
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">Mobile-First Design</h4>
                    <p className="text-xs text-gray-600">Solutions optimized for all devices</p>
                  </div>
                </div>
              </div>
              <Button
                asChild
                className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700"
              >
                <Link href="/it-solutions">
                  Explore All IT Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 gap-4">
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">IT Consultation</h3>
                <p className="text-white/80 mb-4">
                  Not sure which technology solution is right for your business? Schedule a free consultation with our
                  experts to discuss your needs and explore options.
                </p>
                <Button asChild variant="secondary" size="sm">
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
              <div className="bg-teal-50 border border-teal-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Success Stories</h3>
                <p className="text-gray-600 mb-4">
                  Discover how our IT solutions have helped organizations across industries achieve their business
                  objectives and overcome challenges.
                </p>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 hover:underline"
                >
                  View Case Studies <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
