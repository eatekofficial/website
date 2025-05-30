"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  GraduationCap,
  Building,
  Briefcase,
  Palette,
  Brush,
  ImageIcon,
  Server,
  Database,
  Code,
  Globe,
  Cpu,
  BookOpen,
  Lightbulb,
  Users,
  Zap,
} from "lucide-react"

export default function ComprehensiveSolutions() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const solutions = {
    education: [
      {
        title: "K-12 Education",
        icon: <GraduationCap className="h-5 w-5" />,
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
      {
        title: "Learning Platforms",
        icon: <Globe className="h-5 w-5" />,
        description:
          "Comprehensive online learning environments with interactive content, progress tracking, and collaborative tools.",
        features: [
          "Intuitive user interfaces for all ages",
          "Real-time collaboration features",
          "Progress tracking and analytics",
          "Customizable learning paths",
        ],
        link: "/solutions/learning-platforms",
      },
      {
        title: "Educational Content",
        icon: <BookOpen className="h-5 w-5" />,
        description:
          "Engaging learning materials that make complex subjects accessible through multimedia elements and interactive exercises.",
        features: [
          "Interactive multimedia lessons",
          "Curriculum-aligned resources",
          "Adaptive learning materials",
          "Accessibility-focused design",
        ],
        link: "/solutions/educational-content",
      },
      {
        title: "Assessment Tools",
        icon: <Lightbulb className="h-5 w-5" />,
        description:
          "Advanced evaluation systems that provide meaningful insights into student learning and help personalize instruction.",
        features: [
          "Diverse assessment formats",
          "Automated grading and feedback",
          "Learning analytics dashboards",
          "Adaptive testing capabilities",
        ],
        link: "/solutions/assessment-tools",
      },
    ],
    art: [
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
      {
        title: "Creative Tools",
        icon: <Code className="h-5 w-5" />,
        description:
          "Specialized software that empowers artists and designers to express their vision with precision and freedom.",
        features: [
          "Intuitive design interfaces",
          "Professional-grade capabilities",
          "Specialized creative workflows",
          "Collaboration features",
        ],
        link: "/solutions/creative-tools",
      },
      {
        title: "Immersive Experiences",
        icon: <Zap className="h-5 w-5" />,
        description:
          "AR/VR and interactive installation technologies that create engaging experiences and captivate audiences.",
        features: [
          "Cutting-edge AR/VR development",
          "Interactive physical installations",
          "Immersive storytelling",
          "Engaging user experiences",
        ],
        link: "/solutions/immersive-experiences",
      },
    ],
    technology: [
      {
        title: "Custom Software Development",
        icon: <Code className="h-5 w-5" />,
        description: "Tailored software solutions designed to address specific business challenges and opportunities.",
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
      {
        title: "Enterprise Solutions",
        icon: <Users className="h-5 w-5" />,
        description:
          "Business software and systems that address complex challenges with scalable, secure, and efficient solutions.",
        features: [
          "Custom business applications",
          "Workflow automation",
          "System integration services",
          "Data management solutions",
        ],
        link: "/solutions/enterprise-solutions",
      },
      {
        title: "AI & Machine Learning",
        icon: <Cpu className="h-5 w-5" />,
        description:
          "Intelligent algorithms and data analysis that transform data into actionable insights and intelligent features.",
        features: [
          "Custom AI model development",
          "Predictive analytics",
          "Natural language processing",
          "Computer vision solutions",
        ],
        link: "/solutions/ai-ml",
      },
    ],
  }

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
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600"
          >
            Our Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Comprehensive solutions at the intersection of Education, Art, and Technology
          </motion.p>
        </div>

        <Tabs defaultValue="education" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="education" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span className="hidden sm:inline">Education</span>
              </TabsTrigger>
              <TabsTrigger value="art" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                <span className="hidden sm:inline">Art</span>
              </TabsTrigger>
              <TabsTrigger value="technology" className="flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                <span className="hidden sm:inline">Technology</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="education">
            <div className="mb-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left mb-8">
                <div className="p-3 rounded-lg bg-blue-50 border-blue-200 text-blue-600">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Education Solutions</h3>
                  <p className="text-gray-600 max-w-3xl">
                    Comprehensive educational solutions that transform learning experiences across schools, colleges,
                    and corporate training environments. We combine cutting-edge technology with pedagogical expertise
                    to create tools that make learning more effective and accessible.
                  </p>
                </div>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {solutions.education.map((solution, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full border-blue-100 hover:border-blue-300 transition-colors hover:shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-md bg-blue-50 text-blue-600">{solution.icon}</div>
                          <CardTitle className="text-lg">{solution.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{solution.description}</p>
                        <ul className="space-y-2">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
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
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Link
                          href={solution.link}
                          className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
                        >
                          Learn More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center mt-8">
              <Button asChild variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                <Link href="/solutions/education">
                  View All Education Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="art">
            <div className="mb-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left mb-8">
                <div className="p-3 rounded-lg bg-purple-50 border-purple-200 text-purple-600">
                  <Palette className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Art Solutions</h3>
                  <p className="text-gray-600 max-w-3xl">
                    Creative technology solutions that empower artists, designers, and cultural institutions to create,
                    showcase, and preserve artistic works. We believe in the power of art to inspire, communicate, and
                    transform, and our solutions enable creative expression across digital and physical spaces.
                  </p>
                </div>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {solutions.art.map((solution, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full border-purple-100 hover:border-purple-300 transition-colors hover:shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-md bg-purple-50 text-purple-600">{solution.icon}</div>
                          <CardTitle className="text-lg">{solution.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{solution.description}</p>
                        <ul className="space-y-2">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-purple-500 flex-shrink-0"
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
                      </CardContent>
                      <CardFooter>
                        <Link
                          href={solution.link}
                          className="inline-flex items-center text-sm font-medium text-purple-600 hover:underline"
                        >
                          Learn More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center mt-8">
              <Button asChild variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                <Link href="/solutions/art">
                  View All Art Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="technology">
            <div className="mb-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left mb-8">
                <div className="p-3 rounded-lg bg-teal-50 border-teal-200 text-teal-600">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Technology Solutions</h3>
                  <p className="text-gray-600 max-w-3xl">
                    Comprehensive IT solutions and services that help organizations leverage technology to achieve their
                    business objectives. We develop scalable, secure, and innovative solutions that leverage the latest
                    advancements in software development, cloud computing, and artificial intelligence.
                  </p>
                </div>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {solutions.technology.map((solution, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full border-teal-100 hover:border-teal-300 transition-colors hover:shadow-md">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-md bg-teal-50 text-teal-600">{solution.icon}</div>
                          <CardTitle className="text-lg">{solution.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{solution.description}</p>
                        <ul className="space-y-2">
                          {solution.features.map((feature, featureIndex) => (
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
                      </CardContent>
                      <CardFooter>
                        <Link
                          href={solution.link}
                          className="inline-flex items-center text-sm font-medium text-teal-600 hover:underline"
                        >
                          Learn More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center mt-8">
              <Button asChild variant="outline" className="border-teal-300 text-teal-600 hover:bg-teal-50">
                <Link href="/solutions/technology">
                  View All Technology Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
