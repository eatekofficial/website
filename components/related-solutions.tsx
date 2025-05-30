import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface RelatedSolutionsProps {
  solutions: any[]
  categoryTextColor: string
}

export default function RelatedSolutions({ solutions, categoryTextColor }: RelatedSolutionsProps) {
  if (!solutions || solutions.length === 0) {
    return null
  }

  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Related Solutions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {solutions.map((solution, i) => (
            <Link
              key={i}
              href={`/solutions/${solution.slug}`}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">{solution.icon}</div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate">{solution.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{solution.description}</p>
              </div>
              <ArrowRight className={`h-4 w-4 ${categoryTextColor}`} />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
