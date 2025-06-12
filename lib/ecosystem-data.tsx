import { Calendar } from "lucide-react"
import type React from "react"
import {
  GraduationCap,
  Palette,
  Cpu,
  BookOpen,
  Layers,
  BarChart3,
  Lightbulb,
  Cloud,
  BrainCircuit,
  Rocket,
  Sparkles,
  Microscope,
  Gamepad2,
  PenTool,
  Video,
  Building2,
  Users,
  Workflow,
  Laptop,
  Headphones,
  Atom,
  Code,
  Database,
  LineChart,
  Presentation,
  Book,
  Gauge,
  Share2,
  Globe,
  Zap,
  FileText,
  MessageSquare,
  Briefcase,
  Network,
  Shield,
  Settings,
  Server,
  Smartphone,
  FlaskRoundIcon as Flask,
  Camera,
  CuboidIcon as Cube,
} from "lucide-react"

export interface EcosystemNode {
  id: string
  name: string
  icon: React.ReactNode
  description: string
  longDescription: string
  category: "education" | "art" | "technology" | "core"
  link: string
  connections: string[]
  features: Array<{
    title: string
    description: string
    icon: React.ReactNode
  }>
  useCases: Array<{
    title: string
    description: string
    link?: string
  }>
  integrations?: string[]
}

export const ecosystemNodes: EcosystemNode[] = [
  // Core EATEK Node
  {
    id: "eatek",
    name: "EATEK Ecosystem",
    icon: <Atom className="h-6 w-6" />,
    description: "The central platform connecting Education, Art, and Technology solutions",
    longDescription:
      "The EATEK Ecosystem is our comprehensive platform that seamlessly integrates solutions across Education, Art, and Technology domains. It serves as the central hub that connects all our specialized tools and services, enabling powerful cross-domain collaborations and innovations. By bringing together these diverse but complementary areas, EATEK creates unique opportunities for holistic approaches to complex challenges.",
    category: "core",
    link: "/ecosystem/eatek",
    connections: ["education", "art", "technology", "innovation-lab", "startup-accelerator", "community", "consulting"],
    features: [
      {
        title: "Cross-Domain Integration",
        description:
          "Seamlessly connect solutions from education, art, and technology domains for comprehensive approaches",
        icon: <Share2 className="h-5 w-5" />,
      },
      {
        title: "Unified Data Platform",
        description: "Centralized data management and analytics across all connected solutions and services",
        icon: <Database className="h-5 w-5" />,
      },
      {
        title: "Ecosystem API",
        description: "Robust API framework allowing third-party integrations and custom solution development",
        icon: <Code className="h-5 w-5" />,
      },
      {
        title: "Global Collaboration",
        description: "Tools for cross-functional teams to work together regardless of geographic location",
        icon: <Globe className="h-5 w-5" />,
      },
      {
        title: "Innovation Framework",
        description: "Structured methodology for developing and implementing innovative solutions",
        icon: <Lightbulb className="h-5 w-5" />,
      },
      {
        title: "Comprehensive Analytics",
        description: "Advanced analytics and reporting across all ecosystem components",
        icon: <LineChart className="h-5 w-5" />,
      },
    ],
    useCases: [
      {
        title: "Educational Institution Transformation",
        description:
          "Complete digital transformation for educational institutions, integrating learning platforms, creative tools, and technical infrastructure",
        link: "/case-studies/educational-transformation",
      },
      {
        title: "Creative Industry Innovation",
        description:
          "Comprehensive solution for creative industries combining digital tools, educational resources, and technical infrastructure",
        link: "/case-studies/creative-industry",
      },
      {
        title: "Smart City Initiatives",
        description:
          "Integrated approach to smart city development combining educational programs, artistic elements, and technological infrastructure",
        link: "/case-studies/smart-city",
      },
      {
        title: "Corporate Innovation Programs",
        description:
          "End-to-end innovation programs for corporations that leverage educational methodologies, creative approaches, and cutting-edge technology",
        link: "/case-studies/corporate-innovation",
      },
    ],
    integrations: [
      "education",
      "art",
      "technology",
      "e-learning",
      "assessment",
      "stem-education",
      "digital-media",
      "creative-tools",
      "immersive",
      "enterprise",
      "cloud",
      "ai-ml",
      "innovation-lab",
      "startup-accelerator",
      "community",
      "consulting",
    ],
  },

  // Main Category Nodes
  {
    id: "education",
    name: "Education Solutions",
    icon: <GraduationCap className="h-6 w-6" />,
    description: "Comprehensive learning platforms and educational technology solutions",
    longDescription:
      "Our Education Solutions comprise a comprehensive suite of learning platforms and educational technologies designed to transform how knowledge is shared, accessed, and absorbed. From interactive e-learning platforms to sophisticated assessment tools and specialized STEM education resources, our solutions empower educators and learners alike with cutting-edge tools that enhance the educational experience and improve outcomes.",
    category: "education",
    link: "/ecosystem/education",
    connections: [
      "eatek",
      "art",
      "technology",
      "e-learning",
      "assessment",
      "stem-education",
      "innovation-lab",
      "community",
    ],
    features: [
      {
        title: "Adaptive Learning",
        description: "Personalized learning paths that adapt to individual student needs and progress",
        icon: <Gauge className="h-5 w-5" />,
      },
      {
        title: "Interactive Content",
        description: "Engaging multimedia content that enhances understanding and retention",
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        title: "Comprehensive Analytics",
        description: "Detailed insights into student performance and learning patterns",
        icon: <LineChart className="h-5 w-5" />,
      },
      {
        title: "Collaborative Learning",
        description: "Tools for group projects, discussions, and peer-to-peer learning",
        icon: <Users className="h-5 w-5" />,
      },
      {
        title: "Curriculum Management",
        description: "Streamlined tools for creating, organizing, and delivering educational content",
        icon: <Book className="h-5 w-5" />,
      },
      {
        title: "Certification Programs",
        description: "Structured paths for skill development with recognized certifications",
        icon: <FileText className="h-5 w-5" />,
      },
    ],
    useCases: [
      {
        title: "K-12 Education",
        description: "Comprehensive digital learning environments for primary and secondary education institutions",
        link: "/case-studies/k12-education",
      },
      {
        title: "Higher Education",
        description: "Advanced learning platforms and tools for universities and colleges",
        link: "/case-studies/higher-education",
      },
      {
        title: "Corporate Training",
        description: "Professional development and training solutions for businesses and organizations",
        link: "/case-studies/corporate-training",
      },
      {
        title: "Lifelong Learning",
        description: "Accessible educational resources for continuous learning throughout all life stages",
        link: "/case-studies/lifelong-learning",
      },
    ],
    integrations: ["e-learning", "assessment", "stem-education", "digital-media", "ai-ml", "community"],
  },
  {
    id: "art",
    name: "Art Solutions",
    icon: <Palette className="h-6 w-6" />,
    description: "Creative tools and digital media production solutions",
    longDescription:
      "Our Art Solutions encompass a diverse range of creative tools and digital media production technologies that empower artists, designers, and content creators. From professional digital media production suites to intuitive creative tools and immersive experience platforms, we provide the technological foundation for artistic expression and innovation in the digital age.",
    category: "art",
    link: "/ecosystem/art",
    connections: [
      "eatek",
      "education",
      "technology",
      "digital-media",
      "creative-tools",
      "immersive",
      "innovation-lab",
      "community",
    ],
    features: [
      {
        title: "Creative Suites",
        description: "Professional-grade tools for digital art, design, and content creation",
        icon: <PenTool className="h-5 w-5" />,
      },
      {
        title: "Media Production",
        description: "Comprehensive solutions for video, audio, and multimedia production",
        icon: <Video className="h-5 w-5" />,
      },
      {
        title: "Immersive Technologies",
        description: "AR, VR, and mixed reality platforms for creating immersive experiences",
        icon: <Gamepad2 className="h-5 w-5" />,
      },
      {
        title: "Collaborative Creation",
        description: "Tools for real-time collaboration on creative projects",
        icon: <Users className="h-5 w-5" />,
      },
      {
        title: "Digital Asset Management",
        description: "Systems for organizing, storing, and retrieving creative assets",
        icon: <Layers className="h-5 w-5" />,
      },
      {
        title: "Creative AI Tools",
        description: "AI-powered assistants and generators for creative workflows",
        icon: <Sparkles className="h-5 w-5" />,
      },
    ],
    useCases: [
      {
        title: "Digital Content Creation",
        description: "Professional tools for creating digital art, design, and multimedia content",
        link: "/case-studies/digital-content-creation",
      },
      {
        title: "Interactive Exhibitions",
        description: "Technology solutions for museums, galleries, and interactive exhibitions",
        link: "/case-studies/interactive-exhibitions",
      },
      {
        title: "Entertainment Production",
        description: "Comprehensive tools for film, animation, and game development",
        link: "/case-studies/entertainment-production",
      },
      {
        title: "Creative Education",
        description: "Platforms that combine artistic tools with educational methodologies",
        link: "/case-studies/creative-education",
      },
    ],
    integrations: ["digital-media", "creative-tools", "immersive", "e-learning", "ai-ml", "innovation-lab"],
  },
  {
    id: "technology",
    name: "Technology Solutions",
    icon: <Cpu className="h-6 w-6" />,
    description: "Innovative software and technical infrastructure solutions",
    longDescription:
      "Our Technology Solutions provide the robust technical foundation that powers modern organizations. From enterprise-grade business applications to scalable cloud infrastructure and cutting-edge AI and machine learning capabilities, we deliver the technological backbone that enables innovation, efficiency, and growth across all sectors.",
    category: "technology",
    link: "/ecosystem/technology",
    connections: ["eatek", "education", "art", "enterprise", "cloud", "ai-ml", "innovation-lab", "consulting"],
    features: [
      {
        title: "Enterprise Applications",
        description: "Comprehensive business software solutions for organizations of all sizes",
        icon: <Building2 className="h-5 w-5" />,
      },
      {
        title: "Cloud Infrastructure",
        description: "Scalable, secure, and reliable cloud computing services",
        icon: <Cloud className="h-5 w-5" />,
      },
      {
        title: "AI & Machine Learning",
        description: "Advanced artificial intelligence and machine learning capabilities",
        icon: <BrainCircuit className="h-5 w-5" />,
      },
      {
        title: "Data Management",
        description: "Comprehensive solutions for data storage, processing, and analytics",
        icon: <Database className="h-5 w-5" />,
      },
      {
        title: "Integration Services",
        description: "Tools and services for connecting disparate systems and applications",
        icon: <Network className="h-5 w-5" />,
      },
      {
        title: "Cybersecurity",
        description: "Robust security solutions to protect data and systems",
        icon: <Shield className="h-5 w-5" />,
      },
    ],
    useCases: [
      {
        title: "Business Transformation",
        description: "Comprehensive digital transformation solutions for businesses and organizations",
        link: "/case-studies/business-transformation",
      },
      {
        title: "Data-Driven Decision Making",
        description: "Advanced analytics and AI solutions for data-driven business intelligence",
        link: "/case-studies/data-driven-decisions",
      },
      {
        title: "Technical Infrastructure",
        description: "Scalable and secure technical infrastructure for organizations of all sizes",
        link: "/case-studies/technical-infrastructure",
      },
      {
        title: "Custom Software Development",
        description: "Bespoke software solutions tailored to specific organizational needs",
        link: "/case-studies/custom-software",
      },
    ],
    integrations: ["enterprise", "cloud", "ai-ml", "e-learning", "digital-media", "consulting"],
  },

  // Education Subcategory Nodes
  {
    id: "e-learning",
    name: "E-Learning Platforms",
    icon: <Laptop className="h-6 w-6" />,
    description: "Interactive online learning environments and course delivery systems",
    longDescription:
      "Our E-Learning Platforms provide comprehensive solutions for creating, delivering, and managing online educational content. These platforms combine intuitive course creation tools, interactive learning environments, and robust administrative features to create engaging and effective digital learning experiences for students of all ages and educational levels.",
    category: "education",
    link: "/ecosystem/e-learning",
    connections: ["education", "assessment", "digital-media", "cloud"],
    features: [
      {
        title: "Course Creation Studio",
        description: "Intuitive tools for building engaging online courses with multimedia content",
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        title: "Interactive Learning",
        description: "Engaging activities, quizzes, and simulations that enhance understanding",
        icon: <Gamepad2 className="h-5 w-5" />,
      },
      {
        title: "Progress Tracking",
        description: "Comprehensive tools for monitoring student engagement and achievement",
        icon: <LineChart className="h-5 w-5" />,
      },
      {
        title: "Discussion Forums",
        description: "Collaborative spaces for student-teacher and peer-to-peer interactions",
        icon: <MessageSquare className="h-5 w-5" />,
      },
      {
        title: "Mobile Learning",
        description: "Responsive design for learning on any device, anywhere, anytime",
        icon: <Smartphone className="h-5 w-5" />,
      },
      {
        title: "Content Library",
        description: "Extensive collection of ready-to-use educational resources and templates",
        icon: <Book className="h-5 w-5" />,
      },
    ],
    useCases: [
      {
        title: "Academic Institutions",
        description: "Comprehensive online learning environments for schools, colleges, and universities",
        link: "/case-studies/academic-e-learning",
      },
      {
        title: "Corporate Training",
        description: "Professional development platforms for employee training and skill development",
        link: "/case-studies/corporate-e-learning",
      },
      {
        title: "Continuing Education",
        description: "Flexible learning solutions for professional certifications and continuing education",
        link: "/case-studies/continuing-education",
      },
      {
        title: "Global Education Access",
        description: "Platforms that provide educational opportunities to underserved communities worldwide",
        link: "/case-studies/global-education-access",
      },
    ],
    integrations: ["assessment", "stem-education", "digital-media", "cloud", "ai-ml"],
  },
  {
    id: "assessment",
    name: "Assessment Tools",
    icon: <BarChart3 className="h-6 w-6" />,
    description: "Comprehensive evaluation and feedback systems for educational contexts",
    longDescription:
      "Our Assessment Tools provide sophisticated solutions for evaluating student knowledge, skills, and progress. These tools go beyond traditional testing to offer diverse assessment methods, detailed analytics, and personalized feedback that help educators gain deeper insights into student learning and enable more targeted instructional approaches.",
    category: "education",
    link: "/ecosystem/assessment",
    connections: ["education", "e-learning", "ai-ml", "stem-education"],
    features: [
      {
        title: "Diverse Assessment Types",
        description: "Multiple formats including quizzes, essays, projects, and performance tasks",
        icon: <Layers className="h-5 w-5" />,
      },
      {
        title: "Automated Grading",
        description: "AI-powered grading tools that save time and provide consistent evaluation",
        icon: <Zap className="h-5 w-5" />,
      },
      {
        title: "Performance Analytics",
        description: "Detailed insights into student performance across various metrics",
        icon: <LineChart className="h-5 w-5" />,
      },
      {
        title: "Personalized Feedback",
        description: "Tailored feedback mechanisms that guide student improvement",
        icon: <MessageSquare className="h-5 w-5" />,
      },
      {
        title: "Competency Tracking",
        description: "Systems for monitoring skill development and mastery over time",
        icon: <Gauge className="h-5 w-5" />,
      },
      {
        title: "Secure Testing",
        description: "Robust security features for high-stakes assessment integrity",
        icon: <Shield className="h-5 w-5" />,
      },
    ],
    useCases: [
      {
        title: "Academic Assessment",
        description: "Comprehensive evaluation tools for schools, colleges, and universities",
        link: "/case-studies/academic-assessment",
      },
      {
        title: "Professional Certification",
        description: "Secure and reliable testing solutions for professional certifications and licensure",
        link: "/case-studies/professional-certification",
      },
      {
        title: "Formative Assessment",
        description: "Ongoing evaluation tools that provide immediate feedback to guide learning",
        link: "/case-studies/formative-assessment",
      },
      {
        title: "Competency-Based Education",
        description: "Assessment systems that focus on demonstrating skills and competencies",
        link: "/case-studies/competency-assessment",
      },
    ],
    integrations: ["e-learning", "stem-education", "ai-ml", "cloud"],
  },
  {
    id: "stem-education",
    name: "STEM Education",
    icon: <Microscope className="h-6 w-6" />,
    description: "Specialized tools and resources for science, technology, engineering, and mathematics education",
    longDescription:
      "Our STEM Education solutions provide specialized tools and resources designed specifically for teaching and learning in science, technology, engineering, and mathematics. These solutions combine interactive simulations, virtual labs, coding platforms, and project-based learning tools to create engaging and effective STEM learning experiences that prepare students for future careers in these critical fields.",
    category: "education",
    link: "/ecosystem/stem-education",
    connections: ["education", "e-learning", "assessment", "digital-media", "creative-tools"],
    features: [
      {
        title: "Interactive Simulations",
        description: "Virtual experiments and simulations that demonstrate scientific concepts",
        icon: <Zap className="h-5 w-5" />,
      },
      {
        title: "Coding Platforms",
        description: "Accessible programming environments for learning computer science",
        icon: <Code className="h-5 w-5" />,
      },
      {
        title: "Virtual Labs",
        description: "Digital laboratories for conducting experiments safely and efficiently",
        icon: <Flask className="h-5 w-5" />,
      },
      {
        title: "Engineering Design Tools",
        description: "Software for creating, testing, and refining engineering projects",
        icon: <Settings className="h-5 w-5" />,
      },
      {
        title: "Math Visualization",
        description: "Tools that make abstract mathematical concepts concrete and understandable",
        icon: <LineChart className="h-5 w-5" />,
      },
      {
        title: "Project-Based Learning",
        description: "Frameworks for collaborative, hands-on STEM projects",
        icon: <Rocket className="h-5 w-5" />,
      },
    ],
    useCases: [
      {
        title: "K-12 STEM Programs",
        description: "Comprehensive STEM education solutions for primary and secondary schools",
        link: "/case-studies/k12-stem",
      },
      {
        title: "Higher Education STEM",
        description: "Advanced tools for university-level science, technology, engineering, and mathematics",
        link: "/case-studies/higher-ed-stem",
      },
      {
        title: "Workforce Development",
        description: "STEM training programs designed to prepare students for in-demand technical careers",
        link: "/case-studies/stem-workforce",
      },
      {
        title: "Informal STEM Learning",
        description: "Educational tools for museums, science centers, and after-school programs",
        link: "/case-studies/informal-stem",
      },
    ],
    integrations: ["e-learning", "assessment", "digital-media", "creative-tools", "ai-ml"],
  },

  // Art Subcategory Nodes
  {
    id: "digital-media",
    name: "Digital Media",
    icon: <Video className="h-6 w-6" />,
    description: "Professional tools for creating and managing digital visual content",
    longDescription:
      "Our Digital Media solutions provide comprehensive tools for creating, editing, and managing visual content across various digital formats. From video production and animation to graphic design and photography, these solutions offer professional-grade capabilities that empower creators to bring their visions to life with precision and efficiency.",
    category: "art",
    link: "/ecosystem/digital-media",
    connections: ["art", "creative-tools", "immersive", "e-learning", "stem-education"],
    features: [
      {
        title: "Video Production",
        description: "Professional tools for filming, editing, and post-production",
        icon: <Video className="h-5 w-5" />,
      },
      {
        title: "Motion Graphics",
        description: "Tools for creating animated graphics and visual effects",
        icon: <Sparkles className="h-5 w-5" />,
      },
      {
        title: "Digital Photography",
        description: "Software for editing, enhancing, and managing digital photos",
        icon: <Camera className="h-5 w-5" />,
      },
      {
        title: "3D Modeling &amp; Animation",
        description: "Tools for creating and animating 3D models and environments",
        icon: <Cube className="h-5 w-5" />,
      },
      {
        title: "Audio Production",
        description: "Software for recording, editing, and mixing audio tracks",
        icon: <Headphones className="h-5 w-5" />,
      },
      {
        title: "Streaming Solutions",
        description: "Platforms for live streaming and on-demand video content",
        icon: <Share2 className="h-5 w-5" />,
      },
    ],
    useCases: [
      {
        title: "Content Marketing",
        description: "Tools for creating engaging visual content for marketing campaigns",
        link: "/case-studies/content-marketing",
      },
      {
        title: "E-Learning Content",
        description: "Solutions for producing high-quality video and multimedia content for online courses",
        link: "/case-studies/e-learning-content",
      },
      {
        title: "Social Media",
        description: "Tools for creating and managing visual content for social media platforms",
        link: "/case-studies/social-media-content",
      },
      {
        title: "Broadcast Media",
        description: "Professional tools for television and film production",
        link: "/case-studies/broadcast-media",
      },
    ],
    integrations: ["creative-tools", "immersive", "e-learning", "stem-education", "ai-ml"],
  },

  // Art Subcategory Nodes
  {
    id: "creative-tools",
    name: "Creative Tools",
    icon: <PenTool className="h-6 w-6" />,
    description: "Software and platforms for digital art, design, and content creation",
    longDescription:
      "Our Creative Tools provide a wide range of software and platforms for digital art, design, and content creation. From graphic design and illustration to video editing and 3D modeling, these tools empower artists and designers to bring their creative visions to life with precision and efficiency.",
    category: "art",
    link: "/ecosystem/creative-tools",
    connections: ["art", "digital-media", "immersive", "e-learning", "stem-education"],
    features: [
      {
        title: "Graphic Design",
        description: "Software for creating logos, illustrations, and marketing materials",
        icon: <PenTool className="h-5 w-5" />,
      },
      {
        title: "Illustration",
        description: "Tools for creating digital paintings, drawings, and sketches",
        icon: <Palette className="h-5 w-5" />,
      },
      {
        title: "Video Editing",
        description: "Software for editing and post-processing video footage",
        icon: <Video className="h-5 w-5" />,
      },
      {
        title: "3D Modeling",
        description: "Tools for creating and manipulating 3D models and environments",
        icon: <Cube className="h-5 w-5" />,
      },
      {
        title: "Animation",
        description: "Software for creating animated graphics and visual effects",
        icon: <Sparkles className="h-5 w-5" />,
      },
      {
        title: "Web Design",
        description: "Tools for designing and building websites and web applications",
        icon: <Laptop className="h-5 w-5" />,
      },
    ],
    useCases: [
      {
        title: "Brand Identity",
        description: "Tools for creating and maintaining a consistent brand identity",
        link: "/case-studies/brand-identity",
      },
      {
        title: "Marketing Materials",
        description: "Software for creating brochures, flyers, and other marketing materials",
        link: "/case-studies/marketing-materials",
      },
      {
        title: "Web Design",
        description: "Tools for designing and building websites and web applications",
        link: "/case-studies/web-design",
      },
      {
        title: "Game Development",
        description: "Software for creating 2D and 3D games",
        link: "/case-studies/game-development",
      },
    ],
    integrations: ["digital-media", "immersive", "e-learning", "stem-education", "ai-ml"],
  },

  // Art Subcategory Nodes
  {
    id: "immersive",
    name: "Immersive Experiences",
    icon: <Gamepad2 className="h-6 w-6" />,
    description: "Platforms and technologies for creating virtual and augmented reality experiences",
    longDescription:
      "Our Immersive Experiences solutions provide platforms and technologies for creating virtual and augmented reality experiences. From VR headsets and AR apps to 3D environments and interactive simulations, these tools enable creators to build engaging and immersive experiences for entertainment, education, and training.",
    category: "art",
    link: "/ecosystem/immersive",
    connections: ["art", "digital-media", "creative-tools", "e-learning", "stem-education"],
    features: [
      {
        title: "VR Headsets",
        description: "Virtual reality headsets for immersive gaming and entertainment",
        icon: <Headphones className="h-5 w-5" />,
      },
      {
        title: "AR Apps",
        description: "Augmented reality apps for overlaying digital content onto the real world",
        icon: <Smartphone className="h-5 w-5" />,
      },
      {
        title: "3D Environments",
        description: "Tools for creating and exploring 3D environments",
        icon: <Cube className="h-5 w-5" />,
      },
      {
        title: "Interactive Simulations",
        description: "Software for creating interactive simulations and training programs",
        icon: <Zap className="h-5 w-5" />,
      },
      {
        title: "Motion Tracking",
        description: "Technologies for tracking movement and gestures in virtual environments",
        icon: <Workflow className="h-5 w-5" />,
      },
      {
        title: "Spatial Audio",
        description: "Tools for creating immersive audio experiences",
        icon: <Headphones className="h-5 w-5" />,
      },
    ],
    useCases: [
      {
        title: "Gaming",
        description: "Platforms for creating and playing virtual reality games",
        link: "/case-studies/vr-gaming",
      },
      {
        title: "Education",
        description: "Tools for creating immersive educational experiences",
        link: "/case-studies/vr-education",
      },
      {
        title: "Training",
        description: "Software for creating virtual reality training programs",
        link: "/case-studies/vr-training",
      },
      {
        title: "Entertainment",
        description: "Platforms for creating immersive entertainment experiences",
        link: "/case-studies/vr-entertainment",
      },
    ],
    integrations: ["digital-media", "creative-tools", "e-learning", "stem-education", "ai-ml"],
  },

  // Technology Subcategory Nodes
  {
    id: "enterprise",
    name: "Enterprise Solutions",
    icon: <Building2 className="h-6 w-6" />,
    description: "Comprehensive software and services for managing business operations",
    longDescription:
      "Our Enterprise Solutions provide comprehensive software and services for managing business operations. From CRM and ERP systems to project management and collaboration tools, these solutions help organizations streamline their workflows, improve efficiency, and make better decisions.",
    category: "technology",
    link: "/ecosystem/enterprise",
    connections: ["technology", "cloud", "ai-ml", "consulting"],
    features: [
      {
        title: "CRM",
        description: "Customer relationship management software for managing customer interactions",
        icon: <Users className="h-5 w-5" />,
      },
      {
        title: "ERP",
        description: "Enterprise resource planning software for managing business processes",
        icon: <Workflow className="h-5 w-5" />,
      },
      {
        title: "Project Management",
        description: "Tools for planning, tracking, and managing projects",
        icon: <Briefcase className="h-5 w-5" />,
      },
      {
        title: "Collaboration",
        description: "Software for team collaboration and communication",
        icon: <MessageSquare className="h-5 w-5" />,
      },
      {
        title: "Business Intelligence",
        description: "Tools for analyzing business data and making informed decisions",
        icon: <LineChart className="h-5 w-5" />,
      },
      {
        title: "Security",
        description: "Software for protecting business data and systems",
        icon: <Shield className="h-5 w-5" />,
      },
    ],
    useCases: [
      {
        title: "Business Process Automation",
        description: "Tools for automating repetitive business tasks",
        link: "/case-studies/business-process-automation",
      },
      {
        title: "Data Analysis",
        description: "Software for analyzing business data and making informed decisions",
        link: "/case-studies/data-analysis",
      },
      {
        title: "Customer Relationship Management",
        description: "Tools for managing customer interactions and improving customer satisfaction",
        link: "/case-studies/customer-relationship-management",
      },
      {
        title: "Supply Chain Management",
        description: "Software for managing the flow of goods and services",
        link: "/case-studies/supply-chain-management",
      },
    ],
    integrations: ["cloud", "ai-ml", "consulting"],
  },

  // Technology Subcategory Nodes
  {
    id: "cloud",
    name: "Cloud Solutions",
    icon: <Cloud className="h-6 w-6" />,
    description: "Scalable and reliable cloud computing services",
    longDescription:
      "Our Cloud Solutions provide scalable and reliable cloud computing services. From infrastructure as a service (IaaS) to platform as a service (PaaS) and software as a service (SaaS), these solutions offer organizations the flexibility and scalability they need to run their businesses in the cloud.",
    category: "technology",
    link: "/ecosystem/cloud",
    connections: ["technology", "enterprise", "ai-ml", "consulting"],
    features: [
      {
        title: "IaaS",
        description: "Infrastructure as a service for renting virtual servers and storage",
        icon: <Server className="h-5 w-5" />,
      },
      {
        title: "PaaS",
        description: "Platform as a service for developing and deploying applications",
        icon: <Code className="h-5 w-5" />,
      },
      {
        title: "SaaS",
        description: "Software as a service for accessing applications over the internet",
        icon: <Zap className="h-5 w-5" />,
      },
      {
        title: "Storage",
        description: "Cloud storage for storing and accessing data",
        icon: <Database className="h-5 w-5" />,
      },
      {
        title: "Networking",
        description: "Cloud networking for connecting virtual servers and applications",
        icon: <Network className="h-5 w-5" />,
      },
      {
        title: "Security",
        description: "Cloud security for protecting data and applications",
        icon: <Shield className="h-5 w-5" />,
      },
    ],
    useCases: [
      {
        title: "Web Hosting",
        description: "Cloud hosting for websites and web applications",
        link: "/case-studies/web-hosting",
      },
      {
        title: "Data Storage",
        description: "Cloud storage for storing and accessing data",
        link: "/case-studies/data-storage",
      },
      {
        title: "Application Development",
        description: "Cloud platforms for developing and deploying applications",
        link: "/case-studies/application-development",
      },
      {
        title: "Disaster Recovery",
        description: "Cloud solutions for backing up and recovering data",
        link: "/case-studies/disaster-recovery",
      },
    ],
    integrations: ["enterprise", "ai-ml", "consulting"],
  },

  // Technology Subcategory Nodes
  {
    id: "ai-ml",
    name: "AI &amp; ML Solutions",
    icon: <BrainCircuit className="h-6 w-6" />,
    description: "Advanced artificial intelligence and machine learning capabilities",
    longDescription:
      "Our AI &amp; ML Solutions provide advanced artificial intelligence and machine learning capabilities. From machine learning algorithms and natural language processing to computer vision and robotics, these solutions help organizations automate tasks, improve decision-making, and create new products and services.",
    category: "technology",
    link: "/ecosystem/ai-ml",
    connections: ["technology", "enterprise", "cloud", "consulting"],
    features: [
      {
        title: "Machine Learning",
        description: "Algorithms for learning from data and making predictions",
        icon: <BrainCircuit className="h-5 w-5" />,
      },
      {
        title: "Natural Language Processing",
        description: "Tools for understanding and processing human language",
        icon: <FileText className="h-5 w-5" />,
      },
      {
        title: "Computer Vision",
        description: "Software for analyzing and understanding images and videos",
        icon: <Video className="h-5 w-5" />,
      },
      {
        title: "Robotics",
        description: "Platforms for developing and controlling robots",
        icon: <Cpu className="h-5 w-5" />,
      },
      {
        title: "Data Analysis",
        description: "Tools for analyzing data and extracting insights",
        icon: <LineChart className="h-5 w-5" />,
      },
      {
        title: "Automation",
        description: "Software for automating tasks and processes",
        icon: <Zap className="h-5 w-5" />,
      },
    ],
    useCases: [
      {
        title: "Predictive Analytics",
        description: "Tools for predicting future outcomes based on historical data",
        link: "/case-studies/predictive-analytics",
      },
      {
        title: "Chatbots",
        description: "AI-powered chatbots for customer service and support",
        link: "/case-studies/chatbots",
      },
      {
        title: "Image Recognition",
        description: "Software for identifying objects and people in images and videos",
        link: "/case-studies/image-recognition",
      },
      {
        title: "Robotic Process Automation",
        description: "Software for automating repetitive tasks using robots",
        link: "/case-studies/robotic-process-automation",
      },
    ],
    integrations: ["technology", "enterprise", "cloud", "consulting"],
  },

  // Core Subcategory Nodes
  {
    id: "innovation-lab",
    name: "Innovation Lab",
    icon: <Lightbulb className="h-6 w-6" />,
    description: "A space for experimentation and development of new ideas",
    longDescription:
      "Our Innovation Lab is a dedicated space for experimentation and development of new ideas. We provide the resources, tools, and expertise to help organizations explore new technologies, develop innovative solutions, and bring their ideas to life.",
    category: "core",
    link: "/ecosystem/innovation-lab",
    connections: ["eatek", "education", "art", "technology"],
    features: [
      {
        title: "Prototyping",
        description: "Tools and resources for building prototypes of new products and services",
        icon: <Rocket className="h-5 w-5" />,
      },
      {
        title: "Experimentation",
        description: "A safe space for experimenting with new technologies and ideas",
        icon: <Microscope className="h-5 w-5" />,
      },
      {
        title: "Collaboration",
        description: "A collaborative environment for working with other innovators",
        icon: <Users className="h-5 w-5" />,
      },
      {
        title: "Mentorship",
        description: "Access to experienced mentors who can provide guidance and support",
        icon: <GraduationCap className="h-5 w-5" />,
      },
      {
        title: "Funding",
        description: "Access to funding for promising new ideas",
        icon: <Briefcase className="h-5 w-5" />,
      },
      {
        title: "Networking",
        description: "Opportunities to network with other innovators and investors",
        icon: <Network className="h-5 w-5" />,
      },
    ],
    useCases: [
      {
        title: "New Product Development",
        description: "A space for developing new products and services",
        link: "/case-studies/new-product-development",
      },
      {
        title: "Technology Exploration",
        description: "A space for exploring new technologies",
        link: "/case-studies/technology-exploration",
      },
      {
        title: "Startup Incubation",
        description: "A space for incubating new startups",
        link: "/case-studies/startup-incubation",
      },
      {
        title: "Corporate Innovation",
        description: "A space for corporate innovation",
        link: "/case-studies/corporate-innovation",
      },
    ],
    integrations: ["education", "art", "technology"],
  },

  // Core Subcategory Nodes
  {
    id: "startup-accelerator",
    name: "Startup Accelerator",
    icon: <Rocket className="h-6 w-6" />,
    description: "A program for accelerating the growth of startups",
    longDescription:
      "Our Startup Accelerator is a program for accelerating the growth of startups. We provide startups with the resources, mentorship, and funding they need to succeed.",
    category: "core",
    link: "/ecosystem/startup-accelerator",
    connections: ["eatek", "education", "art", "technology"],
    features: [
      {
        title: "Mentorship",
        description: "Access to experienced mentors who can provide guidance and support",
        icon: <GraduationCap className="h-5 w-5" />,
      },
      {
        title: "Funding",
        description: "Access to funding for promising startups",
        icon: <Briefcase className="h-5 w-5" />,
      },
      {
        title: "Networking",
        description: "Opportunities to network with other startups and investors",
        icon: <Network className="h-5 w-5" />,
      },
      {
        title: "Office Space",
        description: "Access to office space and other resources",
        icon: <Building2 className="h-5 w-5" />,
      },
      {
        title: "Training",
        description: "Training on topics such as business planning, marketing, and sales",
        icon: <BookOpen className="h-5 w-5" />,
      },
      {
        title: "Demo Day",
        description: "An opportunity to pitch your startup to investors",
        icon: <Presentation className="h-5 w-5" />,
      },
    ],
    useCases: [
      {
        title: "Startup Growth",
        description: "A program for accelerating the growth of startups",
        link: "/case-studies/startup-growth",
      },
      {
        title: "Venture Capital",
        description: "A program for connecting startups with venture capitalists",
        link: "/case-studies/venture-capital",
      },
      {
        title: "Angel Investing",
        description: "A program for connecting startups with angel investors",
        link: "/case-studies/angel-investing",
      },
      {
        title: "Corporate Venturing",
        description: "A program for connecting startups with corporate ventures",
        link: "/case-studies/corporate-venturing",
      },
    ],
    integrations: ["education", "art", "technology"],
  },

  // Core Subcategory Nodes
  {
    id: "community",
    name: "Community",
    icon: <Users className="h-6 w-6" />,
    description: "A network of educators, artists, and technologists",
    longDescription:
      "Our Community is a network of educators, artists, and technologists who are passionate about innovation. We provide a space for members to connect, collaborate, and share ideas.",
    category: "core",
    link: "/ecosystem/community",
    connections: ["eatek", "education", "art", "technology"],
    features: [
      {
        title: "Forums",
        description: "Online forums for discussing topics of interest",
        icon: <MessageSquare className="h-5 w-5" />,
      },
      {
        title: "Events",
        description: "In-person and online events for networking and learning",
        icon: <Calendar className="h-5 w-5" />,
      },
      {
        title: "Groups",
        description: "Groups for connecting with people who share your interests",
        icon: <Users className="h-5 w-5" />,
      },
      {
        title: "Resources",
        description: "A library of resources for educators, artists, and technologists",
        icon: <BookOpen className="h-5 w-5" />,
      },
      {
        title: "Mentorship",
        description:
          "A mentorship program for connecting experienced professionals with those who are new to the field",
        icon: <GraduationCap className="h-5 w-5" />,
      },
      {
        title: "Job Board",
        description: "A job board for finding opportunities in education, art, and technology",
        icon: <Briefcase className="h-5 w-5" />,
      },
    ],
    useCases: [
      {
        title: "Networking",
        description: "A network for connecting with other educators, artists, and technologists",
        link: "/case-studies/community-networking",
      },
      {
        title: "Collaboration",
        description: "A space for collaborating on projects",
        link: "/case-studies/community-collaboration",
      },
      {
        title: "Learning",
        description: "A community for learning about new technologies and trends",
        link: "/case-studies/community-learning",
      },
      {
        title: "Support",
        description: "A community for supporting each other",
        link: "/case-studies/community-support",
      },
    ],
    integrations: ["education", "art", "technology"],
  },

  // Core Subcategory Nodes
  {
    id: "consulting",
    name: "Consulting Services",
    icon: <Briefcase className="h-6 w-6" />,
    description: "Expert advice and guidance for organizations",
    longDescription:
      "Our Consulting Services provide expert advice and guidance for organizations. We help organizations solve their most pressing challenges and achieve their goals.",
    category: "core",
    link: "/ecosystem/consulting",
    connections: ["eatek", "education", "art", "technology"],
    features: [
      {
        title: "Strategy",
        description: "Help with developing and implementing business strategies",
        icon: <LineChart className="h-5 w-5" />,
      },
      {
        title: "Technology",
        description: "Advice on selecting and implementing new technologies",
        icon: <Cpu className="h-5 w-5" />,
      },
      {
        title: "Marketing",
        description: "Help with developing and implementing marketing campaigns",
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        title: "Operations",
        description: "Advice on improving business operations",
        icon: <Settings className="h-5 w-5" />,
      },
      {
        title: "Finance",
        description: "Help with financial planning and analysis",
        icon: <BarChart3 className="h-5 w-5" />,
      },
      {
        title: "Human Resources",
        description: "Advice on managing human resources",
        icon: <Users className="h-5 w-5" />,
      },
    ],
    useCases: [
      {
        title: "Business Transformation",
        description: "Help with transforming businesses",
        link: "/case-studies/business-transformation",
      },
      {
        title: "Technology Implementation",
        description: "Advice on implementing new technologies",
        link: "/case-studies/technology-implementation",
      },
      {
        title: "Marketing Strategy",
        description: "Help with developing marketing strategies",
        link: "/case-studies/marketing-strategy",
      },
      {
        title: "Operational Improvement",
        description: "Advice on improving business operations",
        link: "/case-studies/operational-improvement",
      },
    ],
    integrations: ["education", "art", "technology"],
  },
]
