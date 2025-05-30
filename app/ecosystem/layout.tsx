import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "EATEK Ecosystem",
    template: "%s | EATEK Ecosystem",
  },
  description:
    "Explore the interconnected universe of EATEK's solutions across Education, Art, and Technology domains.",
}

export default function EcosystemLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
