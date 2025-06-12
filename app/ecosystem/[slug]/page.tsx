import { ecosystemNodes, getRelatedNodes } from "@/lib/ecosystem-data"
import EcosystemNodeHeader from "@/components/ecosystem-node-header"
import EcosystemFeatureList from "@/components/ecosystem-feature-list"
import EcosystemUseCases from "@/components/ecosystem-use-cases"
import EcosystemRelatedNodes from "@/components/ecosystem-related-nodes"
import EcosystemCTA from "@/components/ecosystem-cta"
import { notFound } from "next/navigation"

interface EcosystemNodePageProps {
  params: {
    slug: string
  }
}

export default function EcosystemNodePage({ params }: EcosystemNodePageProps) {
  // Find node by matching the slug instead of assuming slug is the id
  const node = ecosystemNodes.find((n) => n.slug === params.slug)

  if (!node) {
    notFound()
  }

  const relatedNodes = getRelatedNodes(node.id)

  return (
    <div className="container max-w-4xl py-12">
      <EcosystemNodeHeader node={node} />

      <div className="mt-12 space-y-16">
        <section>
          <h2 className="text-2xl font-semibold mb-6">About {node.name}</h2>
          <div className="prose prose-lg max-w-none">
            <p>{node.content.intro}</p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">Our Mission</h3>
            <p className="text-gray-700">{node.content.mission}</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">Our Vision</h3>
            <p className="text-gray-700">{node.content.vision}</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Our Approach</h2>
          <p className="text-gray-700">{node.content.approach}</p>
        </section>

        <EcosystemFeatureList features={node.features} color={node.color} />

        <EcosystemUseCases useCases={node.useCases} />

        <section>
          <h2 className="text-2xl font-semibold mb-6">Benefits</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {node.content.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="rounded-full p-1 mt-1" style={{ backgroundColor: node.color }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {relatedNodes.length > 0 && <EcosystemRelatedNodes nodes={relatedNodes} />}

        <EcosystemCTA node={node} />
      </div>
    </div>
  )
}
