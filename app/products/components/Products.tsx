'use client'
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Shield, 
  Code, 
  TrendingUp, 
  Play,
  Globe,
  Search,
  GitBranch,
  Database,
  BarChart3,
  Users,
  FileText,
  Settings,
  Mail,
  Video,
  UserPlus,
  Terminal,
  Star,
  Eye
} from "lucide-react";

interface Role {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: string;
  icon: React.ReactNode;
  color: string;
  useCase: string;
  features: string[];
}

interface RoleCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  isActive: boolean;
  onClick: () => void;
}

function RoleCard({ title, subtitle, description, icon, color, isActive, onClick }: RoleCardProps) {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-300 ${
        isActive 
          ? 'bg-gray-700/70 border-blue-500/50 ring-2 ring-blue-500/30' 
          : 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/70'
      } backdrop-blur-sm`}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg ${color}`}>
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg">
              {title} <span className="text-gray-400 font-normal hidden">{subtitle}</span>
            </h3>
            <p className="text-gray-300 text-sm mt-2">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface WorkflowNodeProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  position: { x: number; y: number };
  color: string;
  size?: "sm" | "md" | "lg";
}

function WorkflowNode({ title, subtitle, icon, position, color, size = "md" }: WorkflowNodeProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-20 h-20",
    lg: "w-24 h-24"
  };

  return (
    <div 
      className="absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
    >
      <div className={`${sizeClasses[size]} ${color} rounded-xl border border-gray-600/50 backdrop-blur-sm flex items-center justify-center hover:scale-105 transition-transform duration-200`}>
        {icon}
      </div>
      <div className="text-center mt-2">
        <p className="text-white text-sm font-medium">{title}</p>
        {subtitle && <p className="text-gray-400 text-xs">{subtitle}</p>}
      </div>
    </div>
  );
}

function ConnectionLine({ from, to }: { from: { x: number; y: number }; to: { x: number; y: number } }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <line
        x1={`${from.x}%`}
        y1={`${from.y}%`}
        x2={`${to.x}%`}
        y2={`${to.y}%`}
        stroke="url(#lineGradient)"
        strokeWidth="2"
        strokeDasharray="5,5"
        className="animate-pulse"
      />
    </svg>
  );
}

export default function Products() {
  const [activeRole, setActiveRole] = useState("Sec Ops");

  const roles = [
    {
      id: "IT Ops",
      title: "IT Ops",
      subtitle: "can",
      description: "On-board new employees with automated workflows and seamless integration.",
      status: "Active",
      icon: <Zap className="w-5 h-5 text-orange-400" />,
      color: "bg-orange-500/20",
      useCase: "Streamline employee onboarding processes with automated workflows and task management.",
      features: [
        "Automated account provisioning",
        "Equipment assignment tracking",
        "Document collection and verification",
        "Training module assignment",
        "Progress monitoring"
      ]
    },
    {
      id: "Sec Ops",
      title: "Sec Ops",
      subtitle: "can",
      description: "Enhance security operations with automated incident response.",
      status: "Active",
      icon: <Shield className="w-5 h-5 text-red-400" />,
      color: "bg-red-500/20",
      useCase: "Automate security incident response and threat mitigation processes.",
      features: [
        "Automated threat detection",
        "Incident response workflows",
        "Security alert triage",
        "Compliance reporting",
        "Integration with security tools"
      ]
    },
    {
      id: "Dev Ops",
      title: "Dev Ops",
      subtitle: "can",
      description: "Streamline development workflows with CI/CD automation.",
      status: "Active",
      icon: <Code className="w-5 h-5 text-green-400" />,
      color: "bg-green-500/20",
      useCase: "Automate build, test, and deployment processes for faster delivery.",
      features: [
        "Automated testing",
        "Continuous integration",
        "Infrastructure as code",
        "Environment management",
        "Performance monitoring"
      ]
    },
    {
      id: "Sales",
      title: "Sales",
      subtitle: "can",
      description: "Automate sales processes and customer relationship management.",
      status: "Active",
      icon: <TrendingUp className="w-5 h-5 text-blue-400" />,
      color: "bg-blue-500/20",
      useCase: "Streamline sales processes and improve customer relationship management.",
      features: [
        "Lead management",
        "Opportunity tracking",
        "Sales forecasting",
        "Customer communication",
        "Performance analytics"
      ]
    },
    {
      id: "You",
      title: "You",
      subtitle: "can",
      description: "Customize and extend our platform to fit your unique needs.",
      status: "Active",
      icon: <Play className="w-5 h-5 text-purple-400" />,
      color: "bg-purple-500/20",
      useCase: "Tailor the platform to your specific business requirements.",
      features: [
        "Custom workflow creation",
        "API integration",
        "UI customization",
        "Role-based access control",
        "Custom reporting"
      ]
    }
  ];

  const workflows = {
    "IT Ops": {
      nodes: [
        {
          title: "New employee request",
          icon: <UserPlus className="w-6 h-6 text-orange-400" />,
          position: { x: 15, y: 70 },
          color: "bg-gray-800/80"
        },
        {
          title: "Create accounts",
          icon: <Users className="w-6 h-6 text-blue-400" />,
          position: { x: 35, y: 70 },
          color: "bg-gray-800/80"
        },
        {
          title: "Setup hardware",
          subtitle: "Laptop, phone, access cards",
          icon: <Settings className="w-6 h-6 text-green-400" />,
          position: { x: 55, y: 35 },
          color: "bg-gray-800/80",
          size: "lg" as const
        },
        {
          title: "Configure software",
          subtitle: "Install apps, setup VPN",
          icon: <Code className="w-6 h-6 text-purple-400" />,
          position: { x: 75, y: 35 },
          color: "bg-gray-800/80",
          size: "lg" as const
        },
        {
          title: "Send welcome email",
          subtitle: "Instructions & credentials",
          icon: <Mail className="w-6 h-6 text-cyan-400" />,
          position: { x: 85, y: 70 },
          color: "bg-gray-800/80"
        }
      ],
      connections: [
        { from: { x: 15, y: 70 }, to: { x: 35, y: 70 } },
        { from: { x: 35, y: 70 }, to: { x: 55, y: 35 } },
        { from: { x: 55, y: 35 }, to: { x: 75, y: 35 } },
        { from: { x: 75, y: 35 }, to: { x: 85, y: 70 } }
      ]
    },
    "Sec Ops": {
      nodes: [
        {
          title: "On new issue",
          icon: <Zap className="w-6 h-6 text-orange-400" />,
          position: { x: 15, y: 70 },
          color: "bg-gray-800/80"
        },
        {
          title: "Extract IPs and domains",
          icon: <GitBranch className="w-6 h-6 text-yellow-400" />,
          position: { x: 35, y: 70 },
          color: "bg-gray-800/80"
        },
        {
          title: "VirusTotal: Scan URL",
          subtitle: "POST: https://www.virustotal.c...",
          icon: <Globe className="w-6 h-6 text-blue-400" />,
          position: { x: 50, y: 35 },
          color: "bg-gray-800/80",
          size: "lg" as const
        },
        {
          title: "VirusTotal: Get report",
          subtitle: "GET: https://www.virustotal.co...",
          icon: <Globe className="w-6 h-6 text-blue-400" />,
          position: { x: 70, y: 35 },
          color: "bg-gray-800/80",
          size: "lg" as const
        },
        {
          title: "urlscan.io",
          subtitle: "perform scan",
          icon: <Search className="w-6 h-6 text-red-400" />,
          position: { x: 60, y: 85 },
          color: "bg-gray-800/80"
        },
        {
          title: "Merge reports",
          subtitle: "append",
          icon: <Database className="w-6 h-6 text-cyan-400" />,
          position: { x: 80, y: 70 },
          color: "bg-gray-800/80"
        },
        {
          title: "Post results",
          subtitle: "update issue",
          icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
          position: { x: 95, y: 70 },
          color: "bg-gray-800/80"
        }
      ],
      connections: [
        { from: { x: 15, y: 70 }, to: { x: 35, y: 70 } },
        { from: { x: 35, y: 70 }, to: { x: 50, y: 35 } },
        { from: { x: 50, y: 35 }, to: { x: 70, y: 35 } },
        { from: { x: 35, y: 70 }, to: { x: 60, y: 85 } },
        { from: { x: 70, y: 35 }, to: { x: 80, y: 70 } },
        { from: { x: 60, y: 85 }, to: { x: 80, y: 70 } },
        { from: { x: 80, y: 70 }, to: { x: 95, y: 70 } }
      ]
    },
    "Dev Ops": {
      nodes: [
        {
          title: "Natural language input",
          icon: <FileText className="w-6 h-6 text-green-400" />,
          position: { x: 15, y: 70 },
          color: "bg-gray-800/80"
        },
        {
          title: "Parse requirements",
          icon: <Search className="w-6 h-6 text-yellow-400" />,
          position: { x: 35, y: 70 },
          color: "bg-gray-800/80"
        },
        {
          title: "Generate API calls",
          subtitle: "Convert to REST/GraphQL",
          icon: <Terminal className="w-6 h-6 text-blue-400" />,
          position: { x: 55, y: 35 },
          color: "bg-gray-800/80",
          size: "lg" as const
        },
        {
          title: "Execute requests",
          subtitle: "Handle authentication",
          icon: <Play className="w-6 h-6 text-purple-400" />,
          position: { x: 75, y: 35 },
          color: "bg-gray-800/80",
          size: "lg" as const
        },
        {
          title: "Format response",
          subtitle: "Return structured data",
          icon: <Database className="w-6 h-6 text-cyan-400" />,
          position: { x: 85, y: 70 },
          color: "bg-gray-800/80"
        }
      ],
      connections: [
        { from: { x: 15, y: 70 }, to: { x: 35, y: 70 } },
        { from: { x: 35, y: 70 }, to: { x: 55, y: 35 } },
        { from: { x: 55, y: 35 }, to: { x: 75, y: 35 } },
        { from: { x: 75, y: 35 }, to: { x: 85, y: 70 } }
      ]
    },
    "Sales": {
      nodes: [
        {
          title: "Customer reviews",
          icon: <Star className="w-6 h-6 text-yellow-400" />,
          position: { x: 15, y: 70 },
          color: "bg-gray-800/80"
        },
        {
          title: "Sentiment analysis",
          icon: <BarChart3 className="w-6 h-6 text-green-400" />,
          position: { x: 35, y: 70 },
          color: "bg-gray-800/80"
        },
        {
          title: "Extract key themes",
          subtitle: "Identify pain points",
          icon: <Search className="w-6 h-6 text-blue-400" />,
          position: { x: 55, y: 35 },
          color: "bg-gray-800/80",
          size: "lg" as const
        },
        {
          title: "Generate insights",
          subtitle: "Customer behavior patterns",
          icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
          position: { x: 75, y: 35 },
          color: "bg-gray-800/80",
          size: "lg" as const
        },
        {
          title: "Create report",
          subtitle: "Actionable recommendations",
          icon: <FileText className="w-6 h-6 text-cyan-400" />,
          position: { x: 85, y: 70 },
          color: "bg-gray-800/80"
        }
      ],
      connections: [
        { from: { x: 15, y: 70 }, to: { x: 35, y: 70 } },
        { from: { x: 35, y: 70 }, to: { x: 55, y: 35 } },
        { from: { x: 55, y: 35 }, to: { x: 75, y: 35 } },
        { from: { x: 75, y: 35 }, to: { x: 85, y: 70 } }
      ]
    },
    "You": {
      nodes: [
        {
          title: "Watch our pitch",
          icon: <Video className="w-6 h-6 text-purple-400" />,
          position: { x: 30, y: 50 },
          color: "bg-gray-800/80",
          size: "lg" as const
        },
        {
          title: "See the demo",
          icon: <Eye className="w-6 h-6 text-blue-400" />,
          position: { x: 70, y: 50 },
          color: "bg-gray-800/80",
          size: "lg" as const
        }
      ],
      connections: [
        { from: { x: 30, y: 50 }, to: { x: 70, y: 50 } }
      ]
    }
  };

  const currentWorkflow = workflows[activeRole as keyof typeof workflows];

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Container Box - Everything inside one big box */}
        <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm border-2">
          <CardContent className="p-8">
            {/* Role Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              {roles.map((role, index) => (
                <RoleCard 
                  key={index} 
                  {...role} 
                  isActive={activeRole === role.id}
                  onClick={() => setActiveRole(role.id)}
                />
              ))}
            </div>

            {/* Workflow Diagram Section */}
            <div className="border-t border-gray-700/50 pt-8">
              {roles.map((role) => activeRole === role.id && (
                <div key={role.id} className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-full md:w-1/3 space-y-4">
                      <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-3 rounded-lg ${role.color}`}>
                            {role.icon}
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-white">{role.title}</h2>
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full">
                              {role.status}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-300">{role.description}</p>
                      </div>
                      
                      <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                        <h3 className="text-lg font-semibold text-white mb-3">Use Case</h3>
                        <p className="text-gray-300 text-sm">{role.useCase}</p>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-2/3">
                      <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                        <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {role.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                    <h3 className="text-lg font-semibold text-white mb-4">Workflow</h3>
                    <div className="relative h-64 w-full bg-gray-900/30 rounded-lg border border-dashed border-gray-700/50 flex items-center justify-center">
                      <p className="text-gray-500">Workflow visualization will appear here</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}