"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Shield,
  Users,
  BarChart,
  Headphones,
  Lightbulb,
  Zap,
} from "lucide-react"

interface Service {
  title: string
  icon: React.ReactNode
  description: string
  features: string[]
  link: string
}

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const services: Service[] = [
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      description:
        "Custom websites and web applications tailored to your specific business needs, from simple informational sites to complex web platforms.",
      features: [
        "Responsive design for all devices",
        "E-commerce solutions",
        "Content management systems",
        "Progressive web applications",
      ],
      link: "/services/web-development",
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone className="h-6 w-6" />,
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
      features: [
        "Native iOS and Android development",
        "Cross-platform solutions (React Native, Flutter)",
        "App store optimization",
        "Ongoing maintenance and updates",
      ],
      link: "/services/mobile-development",
    },
    {
      title: "Custom Software Development",
      icon: <Code className="h-6 w-6" />,
      description:
        "Tailored software solutions designed to address your unique business challenges and streamline operations.",
      features: [
        "Enterprise software solutions",
        "Workflow automation tools",
        "Integration with existing systems",
        "Scalable architecture",
      ],
      link: "/services/custom-software",
    },
    {
      title: "Cloud Services",
      icon: <Cloud className="h-6 w-6" />,
      description:
        "Comprehensive cloud solutions to help you migrate, optimize, and manage your applications and infrastructure in the cloud.",
      features: [
        "Cloud migration strategies",
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Serverless architecture",
      ],
      link: "/services/cloud-services",
    },
    {
      title: "Data & Analytics",
      icon: <Database className="h-6 w-6" />,
      description:
        "Data management and analytics solutions that transform your raw data into actionable insights to drive business decisions.",
      features: [
        "Data warehouse implementation",
        "Business intelligence dashboards",
        "Predictive analytics",
        "Big data processing",
      ],
      link: "/services/data-analytics",
    },
    {
      title: "IT Consulting",
      icon: <Lightbulb className="h-6 w-6" />,
      description:
        "Strategic technology consulting to help you align your IT initiatives with your business objectives and maximize ROI.",
      features: [
        "Technology strategy development",
        "Digital transformation roadmaps",
        "IT infrastructure assessment",
        "Technology vendor selection",
      ],
      link: "/services/it-consulting",
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="h-6 w-6" />,
      description:
        "Comprehensive security solutions to protect your digital assets, data, and infrastructure from evolving threats.",
      features: [
        "Security assessment and auditing",
        "Vulnerability management",
        "Security monitoring and response",
        "Compliance and regulatory support",
      ],
      link: "/services/cybersecurity",
    },
    {
      title: "UX/UI Design",
      icon: <Zap className="h-6 w-6" />,
      description:
        "User-centered design services that create intuitive, engaging, and effective digital experiences for your customers.",
      features: [
        "User research and testing",
        "Information architecture",
        "Interactive prototyping",
        "Visual design and branding",
      ],
      link: "/services/ux-ui-design",
    },
    {
      title: "Digital Marketing",
      icon: <BarChart className="h-6 w-6" />,
      description:
        "Strategic digital marketing services to increase your online visibility, attract qualified leads, and drive conversions.",
      features: [
        "Search engine optimization (SEO)",
        "Pay-per-click advertising (PPC)",
        "Social media marketing",
        "Content marketing and strategy",
      ],
      link: "/services/digital-marketing",
    },
    {
      title: "IT Support & Maintenance",
      icon: <Headphones className="h-6 w-6" />,
      description:
        "Reliable IT support and maintenance services to ensure your systems run smoothly and efficiently at all times.",
      features: [
        "24/7 technical support",
        "Preventive maintenance",
        "System monitoring and alerts",
        "Software updates and patches",
      ],
      link: "/services/it-support",
    },
    {
      title: "Staff Augmentation",
      icon: <Users className="h-6 w-6" />,
      description:
        "Flexible staffing solutions to supplement your team with skilled IT professionals for short-term or long-term projects.",
      features: [
        "Technical skill assessment",
        "Rapid resource deployment",
        "Seamless team integration",
        "Ongoing performance evaluation",
      ],
      link: "/services/staff-augmentation",
    },
    {
      title: "DevOps Services",
      icon: <Zap className="h-6 w-6" />,
      description:
        "DevOps implementation and optimization to streamline your development processes and accelerate time to market.",
      features: [
        "CI/CD pipeline implementation",
        "Infrastructure as Code (IaC)",
        "Containerization and orchestration",
        "Monitoring and logging solutions",
      ],
      link: "/services/devops",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Comprehensive IT services to help your organization thrive in the digital age
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-teal-50 text-teal-600">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.link}
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
          className="mt-12 text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700"
          >
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
