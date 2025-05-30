import {
  type LucideIcon,
  Lightbulb,
  BookOpen,
  Palette,
  Cpu,
  Rocket,
  Users,
  LineChart,
  School,
  ClipboardCheck,
  FlaskConical,
  Cloud,
  BrainCircuit,
  Smartphone,
  PenTool,
  HeadsetIcon as VrHeadset,
  Building,
  BarChart3,
} from "lucide-react"

export type EcosystemNode = {
  id: string
  name: string
  slug: string
  description: string
  icon: LucideIcon
  category: "core" | "education" | "art" | "technology" | "service"
  parent?: string
  color: string
  features: string[]
  useCases: {
    title: string
    description: string
  }[]
  relatedNodes: string[]
  content: {
    intro: string
    mission: string
    vision: string
    approach: string
    benefits: string[]
  }
}

export const ecosystemNodes: EcosystemNode[] = [
  // Core Node
  {
    id: "eatek",
    name: "EATEK Core",
    slug: "eatek-core",
    description:
      "The central hub of our ecosystem, connecting education, art, and technology to drive innovation and positive change.",
    icon: Lightbulb,
    category: "core",
    color: "#6366f1",
    features: [
      "Integrated ecosystem management",
      "Cross-disciplinary collaboration",
      "Innovation incubation",
      "Sustainable development focus",
      "Global community engagement",
    ],
    useCases: [
      {
        title: "Ecosystem Orchestration",
        description:
          "Coordinating resources, expertise, and initiatives across education, art, and technology sectors.",
      },
      {
        title: "Innovation Pipeline",
        description:
          "Facilitating the journey from creative concept to market-ready solution through our integrated ecosystem.",
      },
      {
        title: "Community Building",
        description: "Creating spaces for diverse stakeholders to connect, collaborate, and co-create solutions.",
      },
    ],
    relatedNodes: [
      "education",
      "art",
      "technology",
      "innovation-lab",
      "startup-accelerator",
      "community-programs",
      "consulting-services",
    ],
    content: {
      intro:
        "EATEK Core serves as the central nervous system of our ecosystem, connecting and coordinating activities across education, art, and technology domains. We believe in the power of interdisciplinary collaboration to solve complex challenges and create meaningful impact.",
      mission:
        "To integrate education, art, and technology in ways that foster innovation, promote sustainability, and enhance human potential.",
      vision:
        "A world where the boundaries between disciplines dissolve, creating new possibilities for learning, creating, and problem-solving.",
      approach:
        "We take a systems-thinking approach, recognizing that the most innovative solutions emerge at the intersection of diverse fields. By facilitating connections between educators, artists, technologists, and communities, we create fertile ground for transformative ideas to take root and flourish.",
      benefits: [
        "Access to a diverse network of experts and innovators",
        "Opportunities for cross-disciplinary collaboration",
        "Resources for developing and scaling impactful solutions",
        "Support for navigating complex challenges",
        "Platform for amplifying your work and reaching new audiences",
      ],
    },
  },

  // Main Category Nodes
  {
    id: "education",
    name: "Education",
    slug: "education",
    description: "Transforming learning experiences through innovative approaches, tools, and methodologies.",
    icon: BookOpen,
    category: "education",
    parent: "eatek",
    color: "#0ea5e9",
    features: [
      "Lifelong learning pathways",
      "Personalized education solutions",
      "Accessible learning technologies",
      "Educator professional development",
      "Research-based pedagogical approaches",
    ],
    useCases: [
      {
        title: "Future-Ready Curriculum Development",
        description:
          "Creating educational content that prepares learners for the challenges and opportunities of tomorrow.",
      },
      {
        title: "Educational Technology Integration",
        description:
          "Helping institutions adopt and effectively utilize digital tools to enhance teaching and learning.",
      },
      {
        title: "Learning Experience Design",
        description: "Crafting engaging, effective learning journeys that meet diverse learner needs.",
      },
    ],
    relatedNodes: ["e-learning-platforms", "assessment-tools", "stem-education", "eatek", "art", "technology"],
    content: {
      intro:
        "The Education node of our ecosystem focuses on transforming learning experiences through innovative approaches, tools, and methodologies. We work at the intersection of pedagogy, technology, and design to create educational solutions that are engaging, effective, and equitable.",
      mission:
        "To reimagine education for a rapidly changing world, ensuring all learners have access to high-quality learning experiences that prepare them for the future.",
      vision:
        "Education systems that are adaptive, learner-centered, and connected to real-world challenges and opportunities.",
      approach:
        "We combine evidence-based educational practices with cutting-edge technologies and creative design approaches. By bringing together educators, learners, technologists, and community stakeholders, we co-create solutions that address real educational needs and challenges.",
      benefits: [
        "Access to innovative educational tools and resources",
        "Opportunities to pilot new approaches and technologies",
        "Professional development for educators and learning designers",
        "Research partnerships to evaluate and improve educational outcomes",
        "Connections to a global community of education innovators",
      ],
    },
  },
  {
    id: "art",
    name: "Art",
    slug: "art",
    description:
      "Exploring creativity and expression through digital and traditional mediums, fostering cultural innovation.",
    icon: Palette,
    category: "art",
    parent: "eatek",
    color: "#ec4899",
    features: [
      "Digital art creation tools",
      "Creative expression platforms",
      "Cultural heritage preservation",
      "Artist development programs",
      "Cross-media collaboration spaces",
    ],
    useCases: [
      {
        title: "Digital Art Exhibitions",
        description: "Creating immersive virtual galleries that showcase artistic works to global audiences.",
      },
      {
        title: "Creative Technology Workshops",
        description: "Helping artists explore new mediums and technologies to expand their creative practice.",
      },
      {
        title: "Cultural Storytelling",
        description: "Using art and technology to preserve and share cultural narratives and heritage.",
      },
    ],
    relatedNodes: ["digital-media", "creative-tools", "immersive-experiences", "eatek", "education", "technology"],
    content: {
      intro:
        "The Art node of our ecosystem celebrates creativity and expression through both digital and traditional mediums. We believe in the power of art to inspire, challenge, and transform, especially when in dialogue with education and technology.",
      mission:
        "To nurture artistic expression and innovation, creating spaces where creativity can flourish and connect with other domains.",
      vision:
        "A world where art is accessible to all, integrated into daily life, and recognized as essential to human development and social progress.",
      approach:
        "We support artists in exploring new technologies and mediums, while also bringing artistic thinking into educational and technological contexts. By fostering cross-disciplinary collaboration, we help create works and experiences that bridge traditional boundaries.",
      benefits: [
        "Access to cutting-edge creative technologies and tools",
        "Opportunities for exhibition and audience engagement",
        "Collaborations with educators and technologists",
        "Professional development and skill-building workshops",
        "Funding and resources for innovative artistic projects",
      ],
    },
  },
  {
    id: "technology",
    name: "Technology",
    slug: "technology",
    description: "Developing and implementing innovative technological solutions to address complex challenges.",
    icon: Cpu,
    category: "technology",
    parent: "eatek",
    color: "#10b981",
    features: [
      "Emerging technology research",
      "Sustainable tech development",
      "Digital infrastructure solutions",
      "Technology ethics frameworks",
      "Inclusive design practices",
    ],
    useCases: [
      {
        title: "Sustainable Technology Solutions",
        description:
          "Developing technologies that address environmental challenges while minimizing ecological footprint.",
      },
      {
        title: "Digital Transformation",
        description: "Helping organizations navigate technological change and implement effective digital strategies.",
      },
      {
        title: "Inclusive Technology Design",
        description: "Creating technological solutions that are accessible and beneficial to diverse user groups.",
      },
    ],
    relatedNodes: ["enterprise-solutions", "cloud-services", "ai-ml", "eatek", "education", "art"],
    content: {
      intro:
        "The Technology node of our ecosystem focuses on developing and implementing innovative technological solutions to address complex challenges. We believe technology should be a force for positive change, designed with human needs and values at the center.",
      mission:
        "To harness the power of technology to solve meaningful problems and create a more equitable, sustainable future.",
      vision:
        "Technology that empowers people, strengthens communities, and contributes to the well-being of our planet.",
      approach:
        "We take a human-centered approach to technology development, starting with understanding the needs and contexts of the people who will use and be affected by our solutions. We prioritize ethical considerations, sustainability, and accessibility throughout the design and development process.",
      benefits: [
        "Access to technical expertise and resources",
        "Opportunities to pilot and test new technologies",
        "Support for responsible innovation and ethical technology development",
        "Connections to potential users and implementation partners",
        "Guidance on technology strategy and digital transformation",
      ],
    },
  },

  // Education Subcategory Nodes
  {
    id: "e-learning-platforms",
    name: "E-Learning Platforms",
    slug: "e-learning-platforms",
    description:
      "Digital environments that facilitate online learning, offering courses, resources, and interactive experiences.",
    icon: School,
    category: "education",
    parent: "education",
    color: "#0284c7",
    features: [
      "Adaptive learning pathways",
      "Interactive content creation",
      "Learning analytics",
      "Mobile-friendly interfaces",
      "Collaborative learning tools",
    ],
    useCases: [
      {
        title: "Corporate Training Programs",
        description: "Delivering scalable, consistent training experiences across distributed teams.",
      },
      {
        title: "Higher Education Online Courses",
        description: "Creating engaging digital learning experiences for university students.",
      },
      {
        title: "Lifelong Learning Communities",
        description: "Building platforms that support continuous learning throughout different life stages.",
      },
    ],
    relatedNodes: ["education", "assessment-tools", "digital-media", "cloud-services"],
    content: {
      intro:
        "Our E-Learning Platforms node focuses on creating digital environments that facilitate effective online learning. We design and develop platforms that go beyond content delivery to create engaging, interactive, and personalized learning experiences.",
      mission:
        "To make high-quality learning accessible to everyone through innovative digital platforms that adapt to learner needs and contexts.",
      vision:
        "Learning platforms that break down barriers to education and create meaningful connections between learners, educators, and knowledge.",
      approach:
        "We combine learning science, user experience design, and advanced technologies to create platforms that are both pedagogically sound and user-friendly. Our platforms emphasize active learning, social interaction, and personalization to maximize engagement and effectiveness.",
      benefits: [
        "Scalable delivery of educational content and experiences",
        "Data-driven insights into learner engagement and progress",
        "Flexibility for learners to access education anytime, anywhere",
        "Opportunities for global collaboration and knowledge sharing",
        "Reduced costs compared to traditional educational delivery models",
      ],
    },
  },
  {
    id: "assessment-tools",
    name: "Assessment Tools",
    slug: "assessment-tools",
    description: "Solutions for evaluating learning outcomes, measuring progress, and providing meaningful feedback.",
    icon: ClipboardCheck,
    category: "education",
    parent: "education",
    color: "#0369a1",
    features: [
      "Authentic assessment design",
      "Real-time feedback mechanisms",
      "Competency-based evaluation",
      "Adaptive testing",
      "Portfolio assessment tools",
    ],
    useCases: [
      {
        title: "Skills Certification",
        description: "Verifying and credentialing specific competencies for professional advancement.",
      },
      {
        title: "Formative Classroom Assessment",
        description: "Providing educators with tools to continuously monitor and support student learning.",
      },
      {
        title: "Self-directed Learning Progress",
        description: "Helping independent learners track their development and identify next steps.",
      },
    ],
    relatedNodes: ["education", "e-learning-platforms", "ai-ml", "stem-education"],
    content: {
      intro:
        "Our Assessment Tools node develops solutions for evaluating learning outcomes, measuring progress, and providing meaningful feedback. We believe assessment should be a learning opportunity, not just a measurement tool.",
      mission:
        "To transform assessment from a point of stress to a valuable learning experience that motivates and guides further development.",
      vision:
        "Assessment systems that capture authentic learning, provide actionable insights, and recognize diverse forms of achievement and growth.",
      approach:
        "We design assessment tools that go beyond traditional testing to capture meaningful evidence of learning. Our approaches emphasize formative feedback, authentic tasks, and learner agency, while leveraging technology to make assessment more efficient, timely, and informative.",
      benefits: [
        "More accurate and comprehensive picture of learner abilities",
        "Reduced assessment burden through efficient, technology-enhanced tools",
        "Immediate, actionable feedback for learners and educators",
        "Support for personalized learning pathways based on assessment results",
        "Recognition of diverse skills and competencies beyond traditional measures",
      ],
    },
  },
  {
    id: "stem-education",
    name: "STEM Education",
    slug: "stem-education",
    description: "Programs and resources focused on science, technology, engineering, and mathematics learning.",
    icon: FlaskConical,
    category: "education",
    parent: "education",
    color: "#0ea5e9",
    features: [
      "Hands-on learning kits",
      "Project-based curriculum",
      "Virtual laboratories",
      "Coding and robotics programs",
      "Real-world problem solving",
    ],
    useCases: [
      {
        title: "K-12 STEM Integration",
        description: "Helping schools incorporate STEM across the curriculum in engaging, meaningful ways.",
      },
      {
        title: "After-school STEM Programs",
        description: "Creating enrichment opportunities that spark interest in STEM careers and concepts.",
      },
      {
        title: "Industry-Education Partnerships",
        description: "Connecting students with STEM professionals for mentorship and authentic learning experiences.",
      },
    ],
    relatedNodes: ["education", "technology", "e-learning-platforms", "assessment-tools"],
    content: {
      intro:
        "Our STEM Education node develops programs and resources focused on science, technology, engineering, and mathematics learning. We believe in making STEM accessible, engaging, and relevant to learners of all backgrounds.",
      mission:
        "To inspire the next generation of innovators, problem-solvers, and critical thinkers through meaningful STEM learning experiences.",
      vision: "STEM education that is integrated, inclusive, and connected to real-world challenges and opportunities.",
      approach:
        "We emphasize hands-on, project-based learning that allows students to experience the excitement of discovery and creation. By connecting STEM concepts to real-world problems and integrating arts and humanities perspectives, we help learners see the relevance and impact of STEM in their lives and communities.",
      benefits: [
        "Development of critical 21st century skills and competencies",
        "Increased engagement and motivation through authentic learning experiences",
        "Preparation for high-demand careers in STEM fields",
        "Cultivation of problem-solving mindsets applicable across domains",
        "Opportunities to connect with STEM professionals and mentors",
      ],
    },
  },

  // Art Subcategory Nodes
  {
    id: "digital-media",
    name: "Digital Media",
    slug: "digital-media",
    description:
      "Creation and distribution of content across digital platforms, including video, audio, and interactive media.",
    icon: Smartphone,
    category: "art",
    parent: "art",
    color: "#db2777",
    features: [
      "Multi-platform content creation",
      "Digital storytelling tools",
      "Media distribution strategies",
      "Audience engagement analytics",
      "Transmedia narrative development",
    ],
    useCases: [
      {
        title: "Brand Storytelling",
        description: "Creating compelling digital narratives that communicate brand values and connect with audiences.",
      },
      {
        title: "Educational Content",
        description: "Developing engaging digital media that makes complex concepts accessible and interesting.",
      },
      {
        title: "Cultural Documentation",
        description: "Using digital media to preserve and share cultural practices, stories, and heritage.",
      },
    ],
    relatedNodes: ["art", "creative-tools", "e-learning-platforms", "immersive-experiences"],
    content: {
      intro:
        "Our Digital Media node focuses on the creation and distribution of content across digital platforms, including video, audio, and interactive media. We help creators harness the power of digital tools to tell stories, share ideas, and connect with audiences.",
      mission:
        "To empower creators to express themselves effectively through digital media and reach their intended audiences.",
      vision:
        "A media landscape where diverse voices can be heard, quality content is valued, and digital tools enhance rather than diminish human connection.",
      approach:
        "We combine technical expertise with storytelling principles and audience insights to create media that resonates. Our work spans from concept development through production to distribution strategy, with a focus on creating content that is both meaningful and engaging.",
      benefits: [
        "Access to cutting-edge digital production tools and techniques",
        "Guidance on effective storytelling and communication strategies",
        "Support for reaching and engaging target audiences",
        "Opportunities to collaborate with other creators across disciplines",
        "Resources for measuring impact and refining content approaches",
      ],
    },
  },
  {
    id: "creative-tools",
    name: "Creative Tools",
    slug: "creative-tools",
    description: "Software, hardware, and methodologies that enable artistic creation and expression.",
    icon: PenTool,
    category: "art",
    parent: "art",
    color: "#be185d",
    features: [
      "Digital art software",
      "Creative process frameworks",
      "Collaborative creation platforms",
      "Accessible design tools",
      "AI-assisted creative applications",
    ],
    useCases: [
      {
        title: "Professional Creative Workflows",
        description: "Enhancing productivity and possibilities for working artists and designers.",
      },
      {
        title: "Educational Creative Environments",
        description: "Providing tools that help learners explore and develop their creative abilities.",
      },
      {
        title: "Community Art Initiatives",
        description: "Supporting collective creative expression through accessible tools and platforms.",
      },
    ],
    relatedNodes: ["art", "digital-media", "ai-ml", "immersive-experiences"],
    content: {
      intro:
        "Our Creative Tools node develops and provides software, hardware, and methodologies that enable artistic creation and expression. We believe in democratizing access to creative tools and expanding the possibilities for artistic expression through technology.",
      mission:
        "To put powerful, intuitive creative tools in the hands of artists, designers, and creators of all backgrounds and skill levels.",
      vision:
        "A world where technology amplifies human creativity rather than replacing it, and where creative expression is accessible to everyone.",
      approach:
        "We design tools that balance power with usability, technical capability with intuitive interfaces. By working closely with artists and creators throughout the development process, we ensure our tools serve real creative needs and workflows while opening new possibilities for expression.",
      benefits: [
        "Access to innovative tools that expand creative possibilities",
        "Reduced technical barriers to artistic expression",
        "Support for efficient, effective creative workflows",
        "Opportunities to collaborate with other creators",
        "Resources for learning and mastering new creative techniques",
      ],
    },
  },
  {
    id: "immersive-experiences",
    name: "Immersive Experiences",
    slug: "immersive-experiences",
    description: "Virtual, augmented, and mixed reality environments that create engaging, multi-sensory experiences.",
    icon: VrHeadset,
    category: "art",
    parent: "art",
    color: "#ec4899",
    features: [
      "Virtual reality environments",
      "Augmented reality applications",
      "Interactive installations",
      "Spatial storytelling",
      "Multi-sensory experience design",
    ],
    useCases: [
      {
        title: "Educational Simulations",
        description:
          "Creating immersive learning environments that allow for experiential understanding of complex concepts.",
      },
      {
        title: "Virtual Exhibitions",
        description: "Designing digital spaces that showcase art and artifacts in new, interactive ways.",
      },
      {
        title: "Therapeutic Applications",
        description: "Developing immersive experiences that support mental health and wellbeing.",
      },
    ],
    relatedNodes: ["art", "digital-media", "creative-tools", "ai-ml"],
    content: {
      intro:
        "Our Immersive Experiences node creates virtual, augmented, and mixed reality environments that offer engaging, multi-sensory experiences. We explore how immersive technologies can transform how we learn, create, connect, and experience the world around us.",
      mission:
        "To harness the power of immersive technologies to create meaningful, transformative experiences that wouldn't be possible in traditional mediums.",
      vision:
        "Immersive technologies that enhance human connection, understanding, and creativity rather than isolating or distracting us.",
      approach:
        "We focus on the human experience first, using technology as a means rather than an end. Our immersive experiences are designed with clear purpose, thoughtful interaction design, and attention to both the technical and emotional aspects of the user experience.",
      benefits: [
        "Creation of experiences that transcend physical limitations",
        "New ways to engage audiences and communicate complex ideas",
        "Opportunities to prototype and test concepts in virtual environments",
        "Access to cutting-edge immersive technologies and expertise",
        "Support for developing immersive storytelling and design skills",
      ],
    },
  },

  // Technology Subcategory Nodes
  {
    id: "enterprise-solutions",
    name: "Enterprise Solutions",
    slug: "enterprise-solutions",
    description: "Comprehensive technology systems and services designed for organizational needs and challenges.",
    icon: Building,
    category: "technology",
    parent: "technology",
    color: "#059669",
    features: [
      "Digital transformation strategy",
      "Custom software development",
      "System integration",
      "Business process automation",
      "Enterprise architecture design",
    ],
    useCases: [
      {
        title: "Operational Efficiency",
        description: "Streamlining workflows and processes through integrated technological solutions.",
      },
      {
        title: "Customer Experience Enhancement",
        description: "Creating digital touchpoints that improve service delivery and customer satisfaction.",
      },
      {
        title: "Data-Driven Decision Making",
        description: "Implementing systems that provide actionable insights from organizational data.",
      },
    ],
    relatedNodes: ["technology", "cloud-services", "ai-ml", "consulting-services"],
    content: {
      intro:
        "Our Enterprise Solutions node develops comprehensive technology systems and services designed for organizational needs and challenges. We help businesses and institutions leverage technology to improve operations, enhance experiences, and achieve strategic objectives.",
      mission:
        "To create technology solutions that solve real business problems and create sustainable value for organizations and their stakeholders.",
      vision:
        "Organizations empowered by technology that aligns with their purpose, enhances human capabilities, and adapts to changing needs.",
      approach:
        "We take a holistic approach to enterprise technology, considering not just technical requirements but organizational culture, user needs, and business strategy. Our solutions are designed for integration, scalability, and long-term sustainability, with a focus on creating systems that people actually want to use.",
      benefits: [
        "Improved operational efficiency and reduced costs",
        "Enhanced ability to adapt to market changes and opportunities",
        "Better decision-making through integrated data and analytics",
        "Improved customer and employee experiences",
        "Reduced technical debt and maintenance challenges",
      ],
    },
  },
  {
    id: "cloud-services",
    name: "Cloud Services",
    slug: "cloud-services",
    description:
      "Infrastructure, platforms, and software delivered over the internet, offering scalability and flexibility.",
    icon: Cloud,
    category: "technology",
    parent: "technology",
    color: "#047857",
    features: [
      "Cloud migration strategy",
      "Serverless architecture",
      "Multi-cloud management",
      "Cloud security solutions",
      "Scalable infrastructure design",
    ],
    useCases: [
      {
        title: "Global Application Deployment",
        description: "Delivering software services to users worldwide with high availability and performance.",
      },
      {
        title: "Data Storage and Processing",
        description: "Managing large volumes of data with flexible, cost-effective cloud solutions.",
      },
      {
        title: "Development Environment Standardization",
        description: "Creating consistent, reproducible environments for software development and testing.",
      },
    ],
    relatedNodes: ["technology", "enterprise-solutions", "ai-ml", "e-learning-platforms"],
    content: {
      intro:
        "Our Cloud Services node focuses on infrastructure, platforms, and software delivered over the internet, offering scalability and flexibility. We help organizations leverage cloud technologies to reduce costs, increase agility, and focus on their core mission.",
      mission:
        "To harness the power of cloud computing to make technology more accessible, scalable, and resilient for organizations of all sizes.",
      vision:
        "Technology infrastructure that adapts seamlessly to changing needs, enabling innovation without the burden of legacy systems.",
      approach:
        "We help organizations navigate the complex landscape of cloud options to find the right solutions for their specific needs. Our approach emphasizes security, cost optimization, and alignment with business objectives, ensuring that cloud adoption creates real value rather than just technical change.",
      benefits: [
        "Reduced capital expenditure on IT infrastructure",
        "Increased agility and faster time-to-market",
        "Improved scalability to handle varying workloads",
        "Enhanced disaster recovery and business continuity",
        "Access to advanced technologies without specialized in-house expertise",
      ],
    },
  },
  {
    id: "ai-ml",
    name: "AI & ML",
    slug: "ai-ml",
    description:
      "Artificial intelligence and machine learning solutions that automate tasks, generate insights, and enhance capabilities.",
    icon: BrainCircuit,
    category: "technology",
    parent: "technology",
    color: "#10b981",
    features: [
      "Predictive analytics",
      "Natural language processing",
      "Computer vision applications",
      "Recommendation systems",
      "Ethical AI frameworks",
    ],
    useCases: [
      {
        title: "Personalized Experiences",
        description: "Creating adaptive systems that respond to individual user needs and preferences.",
      },
      {
        title: "Process Automation",
        description: "Streamlining repetitive tasks through intelligent automation systems.",
      },
      {
        title: "Data-Driven Insights",
        description: "Uncovering patterns and opportunities in complex datasets through advanced analytics.",
      },
    ],
    relatedNodes: ["technology", "enterprise-solutions", "cloud-services", "assessment-tools"],
    content: {
      intro:
        "Our AI & ML node develops artificial intelligence and machine learning solutions that automate tasks, generate insights, and enhance capabilities. We focus on creating AI systems that augment human intelligence and solve meaningful problems.",
      mission:
        "To develop AI solutions that are not just technically sophisticated but ethically sound, transparent, and centered on human needs.",
      vision:
        "AI technologies that empower people, reduce drudgery, and help address complex challenges while respecting human autonomy and values.",
      approach:
        "We take a human-centered approach to AI development, starting with a clear understanding of the problem to be solved and the people affected. Our process emphasizes data quality, model explainability, continuous evaluation, and ethical considerations throughout the development lifecycle.",
      benefits: [
        "Automation of routine tasks to free human time for higher-value work",
        "Discovery of insights and patterns not visible through traditional analysis",
        "Enhanced decision-making through predictive capabilities",
        "Personalization of products and services at scale",
        "New capabilities that weren't possible with traditional programming approaches",
      ],
    },
  },

  // Core Services Nodes
  {
    id: "innovation-lab",
    name: "Innovation Lab",
    slug: "innovation-lab",
    description: "A collaborative space for experimentation, prototyping, and developing cutting-edge solutions.",
    icon: Rocket,
    category: "service",
    parent: "eatek",
    color: "#8b5cf6",
    features: [
      "Rapid prototyping facilities",
      "Design thinking workshops",
      "Technology sandboxes",
      "Cross-disciplinary collaboration",
      "Innovation methodology training",
    ],
    useCases: [
      {
        title: "New Product Development",
        description: "Rapidly testing and refining concepts before full-scale investment.",
      },
      {
        title: "Organizational Innovation Culture",
        description: "Building capacity for continuous innovation within established organizations.",
      },
      {
        title: "Complex Problem Solving",
        description: "Applying creative approaches to address challenging, multifaceted issues.",
      },
    ],
    relatedNodes: ["eatek", "startup-accelerator", "consulting-services", "education", "art", "technology"],
    content: {
      intro:
        "Our Innovation Lab provides a collaborative space for experimentation, prototyping, and developing cutting-edge solutions. We bring together diverse perspectives and expertise to tackle complex challenges and explore new possibilities at the intersection of education, art, and technology.",
      mission:
        "To create an environment where bold ideas can be rapidly tested, refined, and developed into impactful solutions.",
      vision:
        "A dynamic innovation ecosystem where boundaries between disciplines dissolve and unexpected connections lead to breakthrough solutions.",
      approach:
        "We combine design thinking, agile methodologies, and systems approaches to guide the innovation process. Our lab provides both the physical and intellectual space for experimentation, with access to tools, technologies, and expertise across multiple domains.",
      benefits: [
        "Access to prototyping tools and technologies",
        "Structured innovation processes to guide development",
        "Diverse community of collaborators and co-creators",
        "Safe space to experiment and learn from failure",
        "Support for moving from concept to implementation",
      ],
    },
  },
  {
    id: "startup-accelerator",
    name: "Startup Accelerator",
    slug: "startup-accelerator",
    description: "Programs and resources to help early-stage ventures grow, develop, and secure investment.",
    icon: BarChart3,
    category: "service",
    parent: "eatek",
    color: "#7c3aed",
    features: [
      "Mentorship networks",
      "Seed funding opportunities",
      "Business model development",
      "Market validation support",
      "Investor pitch preparation",
    ],
    useCases: [
      {
        title: "EdTech Ventures",
        description: "Supporting startups focused on transforming education through technology.",
      },
      {
        title: "Creative Economy Businesses",
        description: "Helping creative entrepreneurs build sustainable business models around their work.",
      },
      {
        title: "Social Impact Startups",
        description: "Accelerating ventures that address social and environmental challenges.",
      },
    ],
    relatedNodes: ["eatek", "innovation-lab", "consulting-services", "enterprise-solutions"],
    content: {
      intro:
        "Our Startup Accelerator provides programs and resources to help early-stage ventures grow, develop, and secure investment. We focus particularly on startups working at the intersection of education, art, and technology with potential for significant positive impact.",
      mission:
        "To help promising ventures overcome early obstacles and develop into sustainable, impactful organizations.",
      vision:
        "A thriving ecosystem of innovative ventures that are transforming education, art, and technology while creating value for their communities and stakeholders.",
      approach:
        "We provide a structured program that combines mentorship, education, resources, and connections to help startups refine their business models, validate their market, develop their products, and prepare for investment and growth. Our approach emphasizes both business success and positive impact.",
      benefits: [
        "Personalized mentorship from experienced entrepreneurs and industry experts",
        "Access to seed funding and investor networks",
        "Structured curriculum covering key business development areas",
        "Peer community of fellow entrepreneurs for support and collaboration",
        "Connections to potential customers, partners, and talent",
      ],
    },
  },
  {
    id: "community-programs",
    name: "Community Programs",
    slug: "community-programs",
    description:
      "Initiatives that engage diverse stakeholders in learning, creating, and collaborating for collective benefit.",
    icon: Users,
    category: "service",
    parent: "eatek",
    color: "#6d28d9",
    features: [
      "Community workshops and events",
      "Skill-sharing networks",
      "Collaborative projects",
      "Public engagement initiatives",
      "Youth development programs",
    ],
    useCases: [
      {
        title: "Digital Literacy Development",
        description: "Building essential technology skills across diverse community groups.",
      },
      {
        title: "Collaborative Art Projects",
        description: "Bringing communities together through creative expression and shared creation.",
      },
      {
        title: "Citizen Science Initiatives",
        description: "Engaging community members in meaningful scientific research and data collection.",
      },
    ],
    relatedNodes: ["eatek", "education", "art", "stem-education"],
    content: {
      intro:
        "Our Community Programs create initiatives that engage diverse stakeholders in learning, creating, and collaborating for collective benefit. We believe in the power of community to drive positive change and create opportunities for shared growth and development.",
      mission:
        "To build vibrant, connected communities where people can learn together, create together, and address shared challenges.",
      vision:
        "Communities empowered with the knowledge, skills, and connections to shape their own futures and contribute to collective wellbeing.",
      approach:
        "We design programs that respond to community needs and aspirations, with a focus on building capacity, fostering connections, and creating platforms for collective action. Our approach emphasizes inclusivity, accessibility, and sustainability, ensuring that programs create lasting value for participants.",
      benefits: [
        "Access to learning opportunities and skill development",
        "Connections to diverse community members and resources",
        "Platforms for collaborative problem-solving and creation",
        "Opportunities to contribute to meaningful community initiatives",
        "Support for developing community leadership and capacity",
      ],
    },
  },
  {
    id: "consulting-services",
    name: "Consulting Services",
    slug: "consulting-services",
    description: "Expert guidance and support for organizations navigating complex challenges and opportunities.",
    icon: LineChart,
    category: "service",
    parent: "eatek",
    color: "#5b21b6",
    features: [
      "Strategic planning",
      "Digital transformation guidance",
      "Educational program design",
      "Creative strategy development",
      "Impact assessment frameworks",
    ],
    useCases: [
      {
        title: "Organizational Change Management",
        description: "Guiding institutions through significant transitions and transformations.",
      },
      {
        title: "Experience Design",
        description: "Creating meaningful, effective experiences for customers, users, or learners.",
      },
      {
        title: "Innovation Strategy",
        description: "Developing approaches to foster and sustain innovation within organizations.",
      },
    ],
    relatedNodes: ["eatek", "enterprise-solutions", "education", "art", "technology"],
    content: {
      intro:
        "Our Consulting Services provide expert guidance and support for organizations navigating complex challenges and opportunities. We bring together insights from education, art, and technology to help clients develop innovative, effective solutions.",
      mission:
        "To help organizations navigate complexity, seize opportunities, and create sustainable value for their stakeholders.",
      vision: "Organizations that are adaptive, purpose-driven, and equipped to thrive in a rapidly changing world.",
      approach:
        "We take a collaborative, systems-thinking approach to consulting, working closely with clients to understand their unique context and co-create solutions. Our interdisciplinary team brings diverse perspectives and expertise, allowing us to address multifaceted challenges with innovative, holistic approaches.",
      benefits: [
        "Access to specialized expertise across multiple domains",
        "Fresh perspectives on persistent challenges",
        "Structured processes for developing and implementing solutions",
        "Support for building internal capacity and capabilities",
        "Connections to broader ecosystem resources and partners",
      ],
    },
  },
]

export function getNodeById(id: string): EcosystemNode | undefined {
  return ecosystemNodes.find((node) => node.id === id)
}

export function getRelatedNodes(nodeId: string): EcosystemNode[] {
  const node = getNodeById(nodeId)
  if (!node) return []

  return node.relatedNodes.map((id) => getNodeById(id)).filter((node): node is EcosystemNode => node !== undefined)
}

export function getAllNodesByCategory(category: EcosystemNode["category"]): EcosystemNode[] {
  return ecosystemNodes.filter((node) => node.category === category)
}
