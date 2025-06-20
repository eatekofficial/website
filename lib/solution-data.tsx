// Define the solution node type
export interface SolutionNode {
  id: string
  slug: string
  name: string
  icon: string
  description: string
  fullDescription?: string
  overview?: string[]
  color: string
  position: { x: number; y: number }
  connections: string[]
  link: string
  category: "education" | "art" | "technology" | "core"
  size: "large" | "medium" | "small"
  image?: string
  features?: Array<{
    title: string
    description: string
    icon?: string
  }>
  benefits?: Array<{
    title: string
    description: string
  }>
  caseStudies?: Array<{
    title: string
    client: string
    description: string
    image?: string
    testimonial?: {
      quote: string
      author: string
      role: string
    }
    link?: string
  }>
  specifications?: Array<{
    title: string
    items: string[]
  }>
  deploymentOptions?: string[]
  integrationLevel?: string
  supportLevel?: string
  tags?: string[]
  highlights?: string[]
  demoVideo?: string
  workflows?: Array<{
    title: string
    description: string
    steps: Array<{
      title: string
      includes: string[]
    }>
  }>
}

// Define the solution workflows
const workflows = {
  digitalClassroom: {
    title: "Digital Classroom Transformation",
    description: "Complete solution for modernizing educational environments",
    steps: [
      {
        title: "Needs Assessment",
        includes: ["consulting", "education"],
      },
      {
        title: "Infrastructure Setup",
        includes: ["classroom-tech", "iot"],
      },
      {
        title: "Platform Integration",
        includes: ["e-learning", "integration"],
      },
      {
        title: "Content Development",
        includes: ["educational-content", "digital-media"],
      },
      {
        title: "Training & Support",
        includes: ["certification", "community"],
      },
    ],
  },
  creativeStudio: {
    title: "Creative Studio Pipeline",
    description: "End-to-end workflow for digital content creation",
    steps: [
      {
        title: "Concept Development",
        includes: ["innovation-lab", "art"],
      },
      {
        title: "Asset Creation",
        includes: ["visual-arts", "music-production", "photography"],
      },
      {
        title: "Digital Production",
        includes: ["digital-art", "creative-tools"],
      },
      {
        title: "Interactive Implementation",
        includes: ["game-design", "immersive"],
      },
      {
        title: "Distribution & Showcase",
        includes: ["digital-media", "marketing"],
      },
    ],
  },
  enterpriseSolution: {
    title: "Enterprise Technology Deployment",
    description: "Comprehensive business technology implementation",
    steps: [
      {
        title: "Business Analysis",
        includes: ["consulting", "data-analytics"],
      },
      {
        title: "Solution Architecture",
        includes: ["technology", "enterprise"],
      },
      {
        title: "Infrastructure Setup",
        includes: ["cloud", "database", "cybersecurity"],
      },
      {
        title: "Application Development",
        includes: ["web-development", "mobile-apps"],
      },
      {
        title: "Deployment & Optimization",
        includes: ["devops", "ai-ml"],
      },
    ],
  },
  innovationPipeline: {
    title: "Innovation Pipeline",
    description: "From concept to market-ready solution",
    steps: [
      {
        title: "Idea Generation",
        includes: ["innovation-lab", "research"],
      },
      {
        title: "Prototype Development",
        includes: ["startup-accelerator", "technology"],
      },
      {
        title: "Validation & Testing",
        includes: ["assessment", "community"],
      },
      {
        title: "Solution Integration",
        includes: ["integration", "consulting"],
      },
      {
        title: "Market Launch",
        includes: ["partnerships", "marketing"],
      },
    ],
  },
}

// Export the solution nodes with detailed information
export const solutionNodes: SolutionNode[] = [
  // Core central node
  {
    id: "eatek",
    slug: "eatek-ecosystem",
    name: "EATEK Ecosystem",
    icon: "Atom",
    description: "Education, Art & Technology Ecosystem",
    fullDescription:
      "The EATEK Ecosystem is a comprehensive framework that integrates education, art, and technology to create innovative solutions for the modern world. Our ecosystem approach ensures that all solutions work together seamlessly, providing a holistic experience for users across domains.",
    overview: [
      "At the heart of EATEK is the belief that the intersection of education, art, and technology creates the most powerful and meaningful solutions. Our ecosystem is designed to foster collaboration between these domains, enabling cross-pollination of ideas and approaches.",
      "The EATEK Ecosystem provides a foundation for all our solutions, ensuring they can integrate seamlessly with each other while maintaining their unique strengths and capabilities. This interconnected approach allows for more comprehensive and effective solutions to complex problems.",
    ],
    color: "from-indigo-500 to-blue-600",
    position: { x: 50, y: 50 },
    connections: ["education", "art", "technology"],
    link: "/",
    category: "core",
    size: "large",
    image: "/placeholder.svg?height=720&width=1280&text=EATEK+Ecosystem",
    features: [
      {
        title: "Seamless Integration",
        description:
          "All solutions within the ecosystem are designed to work together seamlessly, providing a unified experience.",
        icon: "Share2",
      },
      {
        title: "Cross-Domain Innovation",
        description:
          "Leveraging the strengths of education, art, and technology to create unique and powerful solutions.",
        icon: "Lightbulb",
      },
      {
        title: "Scalable Architecture",
        description: "Built on a flexible and scalable foundation that can adapt to changing needs and technologies.",
        icon: "Blocks",
      },
      {
        title: "Comprehensive Support",
        description: "End-to-end support for all solutions within the ecosystem, ensuring a smooth experience.",
        icon: "Handshake",
      },
    ],
    benefits: [
      {
        title: "Unified Experience",
        description: "A consistent and cohesive experience across all solutions and touchpoints.",
      },
      {
        title: "Reduced Complexity",
        description: "Simplified management and operation through integrated systems and processes.",
      },
      {
        title: "Enhanced Innovation",
        description: "Cross-pollination of ideas and approaches leads to more innovative solutions.",
      },
      {
        title: "Future-Proof Investment",
        description: "Continuous evolution and adaptation to emerging technologies and methodologies.",
      },
    ],
    caseStudies: [
      {
        title: "Global Education Initiative",
        client: "International Education Foundation",
        description:
          "Implemented a comprehensive ecosystem approach to transform educational delivery across 12 countries, integrating technology, art-based learning, and traditional education methodologies.",
        image: "/placeholder.svg?height=600&width=800&text=Global+Education+Initiative",
        testimonial: {
          quote:
            "The EATEK Ecosystem has revolutionized how we approach education globally. The integration of technology and art into our educational framework has resulted in significantly improved engagement and outcomes.",
          author: "Dr. Sarah Johnson",
          role: "Director of Innovation, International Education Foundation",
        },
        link: "/case-studies/global-education-initiative",
      },
    ],
    specifications: [
      {
        title: "Core Technologies",
        items: [
          "Cloud-native architecture",
          "API-first design",
          "Microservices-based implementation",
          "Real-time data synchronization",
          "Advanced analytics and reporting",
        ],
      },
      {
        title: "Integration Capabilities",
        items: [
          "REST and GraphQL APIs",
          "Webhook support",
          "SSO and identity management",
          "Data import/export tools",
          "Third-party plugin system",
        ],
      },
    ],
    deploymentOptions: ["Cloud", "Hybrid", "On-premise"],
    integrationLevel: "Enterprise-grade",
    supportLevel: "24/7 Premium",
    tags: ["Ecosystem", "Integration", "Innovation"],
    highlights: ["Seamless Integration", "Cross-Domain Innovation"],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    workflows: [
      workflows.digitalClassroom,
      workflows.creativeStudio,
      workflows.enterpriseSolution,
      workflows.innovationPipeline,
    ],
  },

  // Main category nodes
  {
    id: "education",
    slug: "education-solutions",
    name: "Education Solutions",
    icon: "GraduationCap",
    description: "Learning platforms and educational technology",
    fullDescription:
      "EATEK's Education Solutions provide comprehensive tools and platforms for modern learning environments. From e-learning platforms to assessment tools, our solutions are designed to enhance the educational experience for students and educators alike.",
    overview: [
      "Education is at the core of EATEK's mission. Our Education Solutions are designed to transform how knowledge is shared, accessed, and absorbed in today's digital world.",
      "We combine cutting-edge technology with proven pedagogical approaches to create solutions that are not only effective but also engaging and accessible to learners of all ages and backgrounds.",
    ],
    color: "from-blue-400 to-blue-600",
    position: { x: 30, y: 30 },
    connections: [
      "eatek",
      "art",
      "technology",
      "e-learning",
      "educational-content",
      "assessment",
      "stem-education",
      "language-learning",
    ],
    link: "/education",
    category: "education",
    size: "large",
    image: "/placeholder.svg?height=720&width=1280&text=Education+Solutions",
    features: [
      {
        title: "Comprehensive Learning Management",
        description: "End-to-end platforms for course creation, delivery, and management.",
        icon: "School",
      },
      {
        title: "Interactive Learning Experiences",
        description: "Engaging and immersive educational content that enhances retention and understanding.",
        icon: "Presentation",
      },
      {
        title: "Advanced Assessment Tools",
        description: "Sophisticated evaluation mechanisms that provide meaningful insights into student progress.",
        icon: "BarChart3",
      },
      {
        title: "Personalized Learning Paths",
        description: "Adaptive learning experiences tailored to individual student needs and learning styles.",
        icon: "Workflow",
      },
    ],
    benefits: [
      {
        title: "Enhanced Student Engagement",
        description: "More engaging and interactive learning experiences that capture and maintain student interest.",
      },
      {
        title: "Improved Learning Outcomes",
        description: "Better retention and understanding through personalized and adaptive learning approaches.",
      },
      {
        title: "Efficient Administration",
        description: "Streamlined management of courses, students, and educational resources.",
      },
      {
        title: "Data-Driven Insights",
        description: "Comprehensive analytics to understand student performance and optimize teaching strategies.",
      },
    ],
    caseStudies: [
      {
        title: "Digital Transformation of Higher Education",
        client: "National University Consortium",
        description:
          "Implemented a comprehensive suite of education solutions across 15 universities, transforming traditional learning environments into dynamic digital ecosystems.",
        image: "/placeholder.svg?height=600&width=800&text=Higher+Education+Transformation",
        testimonial: {
          quote:
            "EATEK's Education Solutions have fundamentally changed how we approach teaching and learning. The integration of technology has not only improved efficiency but has also significantly enhanced the quality of education we provide.",
          author: "Prof. Michael Chen",
          role: "Chief Academic Officer, National University Consortium",
        },
        link: "/case-studies/higher-education-transformation",
      },
    ],
    specifications: [
      {
        title: "Platform Capabilities",
        items: [
          "Learning Management System (LMS)",
          "Content Management System (CMS)",
          "Student Information System (SIS)",
          "Assessment and Evaluation Tools",
          "Analytics and Reporting Dashboard",
        ],
      },
      {
        title: "Technical Specifications",
        items: [
          "Cloud-based deployment",
          "Mobile-responsive design",
          "API-driven architecture",
          "SCORM and xAPI compliance",
          "LTI integration support",
        ],
      },
    ],
    deploymentOptions: ["Cloud", "Self-hosted", "Hybrid"],
    integrationLevel: "Comprehensive",
    supportLevel: "Premium",
    tags: ["Education", "Learning", "EdTech"],
    highlights: ["Personalized Learning", "Advanced Analytics"],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    workflows: [workflows.digitalClassroom, workflows.innovationPipeline],
  },

  // E-Learning Platform
  {
    id: "e-learning",
    slug: "e-learning-platform",
    name: "E-Learning Platform",
    icon: "Laptop",
    description: "Interactive online learning environments",
    fullDescription:
      "EATEK's E-Learning Platform provides a comprehensive solution for creating, delivering, and managing online courses and educational content. The platform is designed to be intuitive, engaging, and effective for both educators and learners.",
    overview: [
      "Our E-Learning Platform is built on the latest educational technology, incorporating best practices in online learning and instructional design. It provides a flexible and scalable solution that can be adapted to various educational contexts, from K-12 to higher education and corporate training.",
      "The platform emphasizes engagement and interaction, with features designed to promote active learning and collaboration among students. It also provides robust tools for educators to create, manage, and assess learning experiences.",
    ],
    color: "from-blue-300 to-blue-500",
    position: { x: 15, y: 20 },
    connections: ["education", "educational-content", "assessment"],
    link: "/products/e-learning",
    category: "education",
    size: "medium",
    image: "/placeholder.svg?height=720&width=1280&text=E-Learning+Platform",
    features: [
      {
        title: "Course Creation Studio",
        description: "Intuitive tools for creating engaging and interactive online courses.",
        icon: "Presentation",
      },
      {
        title: "Interactive Learning Environment",
        description: "Engaging interface with support for various content types and interactive elements.",
        icon: "Laptop",
      },
      {
        title: "Collaborative Tools",
        description: "Discussion forums, group projects, and real-time collaboration features.",
        icon: "Share2",
      },
      {
        title: "Comprehensive Assessment",
        description: "Various assessment types with automated grading and detailed feedback.",
        icon: "BarChart3",
      },
    ],
    benefits: [
      {
        title: "Flexible Learning",
        description: "Learn anytime, anywhere, at your own pace with accessible online content.",
      },
      {
        title: "Enhanced Engagement",
        description: "Interactive elements and collaborative features keep learners engaged and motivated.",
      },
      {
        title: "Efficient Administration",
        description: "Streamlined course management and automated administrative tasks.",
      },
      {
        title: "Data-Driven Insights",
        description: "Comprehensive analytics to track progress and optimize learning experiences.",
      },
    ],
    caseStudies: [
      {
        title: "Corporate Training Transformation",
        client: "Global Financial Services Corp",
        description:
          "Implemented the E-Learning Platform to transform corporate training for 50,000+ employees across 30 countries, resulting in a 40% increase in training completion rates and significant cost savings.",
        image: "/placeholder.svg?height=600&width=800&text=Corporate+Training",
        testimonial: {
          quote:
            "The E-Learning Platform has revolutionized how we approach employee training. The engaging content and flexible learning options have significantly improved participation and knowledge retention.",
          author: "Jennifer Martinez",
          role: "Chief Learning Officer, Global Financial Services Corp",
        },
        link: "/case-studies/corporate-training-transformation",
      },
    ],
    specifications: [
      {
        title: "Platform Features",
        items: [
          "Course authoring tools",
          "Content library and management",
          "Discussion forums and messaging",
          "Assignment submission and grading",
          "Quiz and assessment engine",
          "Progress tracking and reporting",
        ],
      },
      {
        title: "Technical Specifications",
        items: [
          "Cloud-based SaaS solution",
          "Responsive design for all devices",
          "LTI and API integration",
          "SCORM and xAPI compliance",
          "Single Sign-On (SSO) support",
          "Data encryption and security",
        ],
      },
    ],
    deploymentOptions: ["Cloud", "Self-hosted", "Hybrid"],
    integrationLevel: "Extensive",
    supportLevel: "24/7 Premium",
    tags: ["E-Learning", "Online Education", "LMS"],
    highlights: ["Interactive Learning", "Comprehensive Analytics"],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    workflows: [workflows.digitalClassroom],
  },

  // Add more detailed solution nodes here...
  // For brevity, I'm not including all nodes with full details, but the structure would be similar
]

// Helper function to get a solution by ID
export function getSolutionById(id: string): SolutionNode | undefined {
  return solutionNodes.find((node) => node.id === id)
}

// Helper function to get a solution by slug
export function getSolutionBySlug(slug: string): SolutionNode | undefined {
  return solutionNodes.find((node) => node.slug === slug)
}

// Helper function to get related solutions
export function getRelatedSolutions(id: string, limit = 3): SolutionNode[] {
  const solution = getSolutionById(id)
  if (!solution) return []
  return solutionNodes
    .filter((node) =>
      solution.connections.includes(node.id) || node.connections.includes(solution.id)
    )
    .filter((node) => node.id !== solution.id)
    .slice(0, limit)
}

// Helper function to get solutions by category
export function getSolutionsByCategory(category: string): SolutionNode[] {
  return solutionNodes.filter((node) => node.category === category)
}

// Helper function to get solutions by workflow
export function getSolutionsByWorkflow(workflowId: string): SolutionNode[] {
  const workflow = Object.values(workflows).find((w) => w.title.toLowerCase().replace(/\s+/g, "-") === workflowId)
  if (!workflow) return []
  const nodeIds = workflow.steps.flatMap((step) => step.includes)
  return solutionNodes.filter((node) => nodeIds.includes(node.id))
}