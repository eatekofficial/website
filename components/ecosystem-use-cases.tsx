interface UseCase {
  title: string
  description: string
}

interface EcosystemUseCasesProps {
  useCases: UseCase[]
}

export default function EcosystemUseCases({ useCases }: EcosystemUseCasesProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Use Cases</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => (
          <div key={index} className="p-6 rounded-lg bg-gray-50 border border-gray-100">
            <h3 className="font-medium text-lg mb-2">{useCase.title}</h3>
            <p className="text-gray-600">{useCase.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
