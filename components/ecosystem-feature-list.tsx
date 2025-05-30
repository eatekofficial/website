interface EcosystemFeatureListProps {
  features: string[]
  color: string
}

export default function EcosystemFeatureList({ features, color }: EcosystemFeatureListProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center p-4 rounded-lg border border-gray-100 shadow-sm">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0"
              style={{ backgroundColor: color }}
            >
              <span className="text-white font-medium">{index + 1}</span>
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
