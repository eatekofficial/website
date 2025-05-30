import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Solutions | EATEK",
    template: "%s | EATEK Solutions",
  },
  description: "Explore EATEK's comprehensive suite of solutions across Education, Art, and Technology domains.",
}

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
