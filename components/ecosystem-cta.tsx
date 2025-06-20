import React from "react"
import { type EcosystemNode } from "../lib/ecosystem-data"
import { Button } from "../components/ui/button"
import Link from "next/link"
import { getIconComponent } from "../lib/icons"

interface EcosystemCTAProps {
  node: EcosystemNode
}

export default function EcosystemCTA({ node }: EcosystemCTAProps) {
  return (
    <section className="bg-gray-50 p-8 rounded-xl border border-gray-100">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full" style={{ backgroundColor: `${node.color}20` }}>
            {node.icon && getIconComponent(node.icon, "w-8 h-8")}
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Interested in {node.name}?</h2>
        <p className="text-gray-600 mb-6">
          Connect with us to learn more about how you can get involved or benefit from our {node.category} initiatives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/ecosystem">Explore More Nodes</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
