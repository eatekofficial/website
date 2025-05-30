import React from "react"
import type { EcosystemNode } from "./ecosystem-data"
import Link from "next/link"

interface EcosystemRelatedNodesProps {
  nodes: EcosystemNode[]
}

export default function EcosystemRelatedNodes({ nodes }: EcosystemRelatedNodesProps) {
  return (
    <section>
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
                {React.createElement(node.icon, {
                  size: 20,
                  className: "text-white",
                })}
              </div>
              <div>
                <h3 className="font-medium">{node.name}</h3>
                <div className="text-xs text-gray-500 capitalize">{node.category}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
