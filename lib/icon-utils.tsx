import * as LucideIcons from "lucide-react"
import React from 'react';

// Create a mapping of icon names to their components
export const iconComponents: Record<string, React.ComponentType<any>> = {
  Lightbulb: LucideIcons.Lightbulb,
  BookOpen: LucideIcons.BookOpen,
  Palette: LucideIcons.Palette,
  Cpu: LucideIcons.Cpu,
  Rocket: LucideIcons.Rocket,
  Users: LucideIcons.Users,
  LineChart: LucideIcons.LineChart,
  Layers: LucideIcons.Layers,
  Microscope: LucideIcons.Microscope,
  Video: LucideIcons.Video,
  PenTool: LucideIcons.PenTool,
  Gamepad2: LucideIcons.Gamepad2,
  Building2: LucideIcons.Building2,
  BarChart3: LucideIcons.BarChart3,
  Cloud: LucideIcons.Cloud,
  BrainCircuit: LucideIcons.BrainCircuit,
  ChevronLeft: LucideIcons.ChevronLeft,
  ChevronRight: LucideIcons.ChevronRight,
  Plus: LucideIcons.Plus,
  Minus: LucideIcons.Minus,
  Home: LucideIcons.Home,
  Info: LucideIcons.Info,
  X: LucideIcons.X,
  Search: LucideIcons.Search,
}

// Type for valid icon names
export type IconName = keyof typeof iconComponents

/**
 * Renders an icon component by name
 * @param iconName - Name of the icon to render
 * @param className - Optional CSS classes to apply to the icon
 * @returns A React component for the icon
 */
export const renderIcon = (
  iconName: string, 
  className = "w-5 h-5"
): React.ReactNode => {
  const IconComponent = iconComponents[iconName] || LucideIcons.HelpCircle
  return <IconComponent className={className} />
}
