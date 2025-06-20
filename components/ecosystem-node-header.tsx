import React from "react"
import { type EcosystemNode } from "../lib/ecosystem-data"
import Link from "next/link"
import { getIconComponent } from "../lib/icons"

interface EcosystemNodeHeaderProps {
  node: EcosystemNode
}

export default function EcosystemNodeHeader({ node }: EcosystemNodeHeaderProps) {
  return (
    <div>
      <Link 
        href="/ecosystem" 
        className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-6"
      >
        {getIconComponent("ChevronLeft", "mr-1 h-4 w-4")}
        Back to Ecosystem
      </Link>

      <div className="flex items-center gap-4 mb-4">
        <div className={`p-2 rounded-lg`} style={{ backgroundColor: `${node.color}1a` }}>
          {node.icon && getIconComponent(node.icon, "w-8 h-8")}
        </div>

        <div>
          <h1 className="text-3xl font-bold">{node.name}</h1>
          <div className="text-sm text-gray-500 capitalize">{node.category}</div>
        </div>
      </div>

      <p className="text-xl text-gray-700 mt-4">{node.description}</p>
    </div>
  )
}
