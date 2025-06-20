import React from "react"
import Link from "next/link"
import { type EcosystemNode } from "../lib/ecosystem-data"
import { getIconComponent } from "../lib/icons"

interface EcosystemRelatedNodesProps {
  nodes: EcosystemNode[]
}

export default function EcosystemRelatedNodes({ nodes }: EcosystemRelatedNodesProps) {
  if (!nodes.length) return null

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Related Nodes</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {nodes.map((node) => (
          <Link
            key={node.id}
            href={`/ecosystem/${node.slug}`}
            className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: node.color }}>
                {node.icon && getIconComponent(node.icon, "w-5 h-5 text-white")}
              </div>
              <div>
                <h3 className="font-medium">{node.name}</h3>
                <p className="text-sm text-gray-500 capitalize">{node.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
