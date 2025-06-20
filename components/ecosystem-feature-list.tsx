interface EcosystemFeatureListProps {
  features: string[];
  color: string;
}

export default function EcosystemFeatureList({ features, color }: EcosystemFeatureListProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Features</h2>
      <ul className="grid md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="rounded-full p-1 mt-1" style={{ backgroundColor: color }}>
              {/* ...icon or bullet point */}
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
