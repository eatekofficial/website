import { Project } from '@/type/project';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with advanced filtering, real-time inventory management, and secure payment processing. Built with modern technologies for optimal performance.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Full Stack",
    status: "completed",
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "Machine learning powered content generation tool that creates high-quality articles, social media posts, and marketing copy using advanced NLP models.",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "AI/ML",
    status: "completed",
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    id: 3,
    title: "Real-Time Analytics Dashboard",
    description: "Interactive dashboard providing real-time insights with beautiful data visualizations, customizable widgets, and export capabilities for business intelligence.",
    technologies: ["Vue.js", "D3.js", "WebSocket", "MongoDB", "Express"],
    imageUrl: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800",
    category: "Data Visualization",
    status: "in-progress",
    githubUrl: "https://github.com"
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    description: "Cross-platform mobile application for fitness tracking with workout plans, nutrition logging, and social features to connect with other fitness enthusiasts.",
    technologies: ["React Native", "Firebase", "TypeScript", "Redux"],
    imageUrl: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Mobile",
    status: "completed",
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    id: 5,
    title: "Blockchain Voting System",
    description: "Secure and transparent voting platform built on blockchain technology, ensuring immutable records and democratic participation with advanced cryptography.",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
    imageUrl: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Blockchain",
    status: "planned",
    githubUrl: "https://github.com"
  },
  {
    id: 6,
    title: "Cloud Infrastructure Manager",
    description: "DevOps tool for managing cloud infrastructure with automated deployments, monitoring, scaling, and cost optimization across multiple cloud providers.",
    technologies: ["Go", "Kubernetes", "Terraform", "AWS", "Prometheus"],
    imageUrl: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "DevOps",
    status: "in-progress",
    githubUrl: "https://github.com"
  }
];