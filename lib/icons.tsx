import * as LucideIcons from "lucide-react"

// Create a mapping of icon names to their components
export const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  Lightbulb: LucideIcons.Lightbulb,
  BookOpen: LucideIcons.BookOpen,
  Palette: LucideIcons.Palette,
  Cpu: LucideIcons.Cpu,
  Rocket: LucideIcons.Rocket,
  Users: LucideIcons.Users,
  LineChart: LucideIcons.LineChart,
  School: LucideIcons.School,
  ClipboardCheck: LucideIcons.ClipboardCheck,
  FlaskConical: LucideIcons.FlaskConical,
  Cloud: LucideIcons.Cloud,
  BrainCircuit: LucideIcons.BrainCircuit,
  Smartphone: LucideIcons.Smartphone,
  PenTool: LucideIcons.PenTool,
  VrHeadset: LucideIcons.HeadsetIcon,
  Building: LucideIcons.Building,
  BarChart3: LucideIcons.BarChart3,
  GraduationCap: LucideIcons.GraduationCap,
  Laptop: LucideIcons.Laptop,
  Atom: LucideIcons.Atom,
  Share2: LucideIcons.Share2,
  Handshake: LucideIcons.Handshake,
  Blocks: LucideIcons.Blocks,
  Workflow: LucideIcons.Workflow,
  Presentation: LucideIcons.Presentation,
  ChevronLeft: LucideIcons.ChevronLeft,
  ChevronRight: LucideIcons.ChevronRight,
  ArrowRight: LucideIcons.ArrowRight,
  Filter: LucideIcons.Filter,
  Search: LucideIcons.Search,
  HelpCircle: LucideIcons.HelpCircle,
}

// Helper function to get an icon component by name
export function getIconComponent(iconName: string, className = "h-6 w-6") {
  const IconComponent = iconComponents[iconName] || LucideIcons.HelpCircle
  return <IconComponent className={className} />
}

// Type for icon names
export type IconName = keyof typeof iconComponents
