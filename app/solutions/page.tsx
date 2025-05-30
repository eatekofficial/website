import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { getSolutionsByCategory } from "@/lib/solution-data"

export const metadata = {
  title: "Solutions | EATEK",
  description: "Explore EATEK's comprehensive suite of solutions across Education, Art, and Technology domains.",
}

export default function SolutionsPage() {
  // Group solutions by category
  const educationSolutions = getSolutionsByCategory("education")
  const artSolutions = getSolutionsByCategory("art")
  const technologySolutions = getSolutionsByCategory("technology")
  const coreSolutions = getSolutionsByCategory("core")

  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "education":
        return "from-blue-500 to-blue-600"
      case "art":
        return "from-purple-500 to-purple-600"
      case "technology":
        return "from-teal-500 to-teal-600"
      case "core":
        return "from-amber-500 to-amber-600"
      default:
        return "from-indigo-500 to-indigo-600"
    }
  }

  // Get category badge color
  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case "education":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "art":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20"
      case "technology":
        return "bg-teal-500/10 text-teal-500 border-teal-500/20"
      case "core":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20"
      default:
        return "bg-indigo-500/10 text-indigo-500 border-indigo-500/20"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-gray-950/40" />

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/95 to-white/80 dark:from-gray-900/80 dark:via-gray-900/95 dark:to-gray-900/80" />

        <div className="container relative px-4 md:px-6 py-12 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">EATEK Solutions</h1>

            <p className="text-xl text-gray-600 dark:text-gray-400">
              Explore our comprehensive suite of solutions across Education, Art, and Technology domains.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input type="search" placeholder="Search solutions..." className="pl-10 w-full" />
              </div>

              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="container px-4 md:px-6 py-12">
        {/* Education Solutions */}
        <SolutionCategory
          title="Education Solutions"
          description="Transform learning experiences with our comprehensive education technology solutions."
          solutions={educationSolutions}
          categoryColor={getCategoryColor("education")}
          categoryBadgeColor={getCategoryBadgeColor("education")}
        />

        {/* Art Solutions */}
        <SolutionCategory
          title="Art Solutions"
          description="Empower creativity and expression with our innovative art and design tools."
          solutions={artSolutions}
          categoryColor={getCategoryColor("art")}
          categoryBadgeColor={getCategoryBadgeColor("art")}
        />

        {/* Technology Solutions */}
        <SolutionCategory
          title="Technology Solutions"
          description="Build and scale with our cutting-edge technology infrastructure and services."
          solutions={technologySolutions}
          categoryColor={getCategoryColor("technology")}
          categoryBadgeColor={getCategoryBadgeColor("technology")}
        />

        {/* Core Solutions */}
        <SolutionCategory
          title="Core Services"
          description="Leverage our foundational services that span across domains for comprehensive support."
          solutions={coreSolutions}
          categoryColor={getCategoryColor("core")}
          categoryBadgeColor={getCategoryBadgeColor("core")}
        />
      </div>

      {/* CTA Section */}
      <div className="container px-4 md:px-6 py-12 md:py-24">
        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="relative">
            {/* Background Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-600 opacity-90" />

            <div className="relative p-8 md:p-12 text-white">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Not sure which solution is right for you?</h2>

                <p className="text-lg text-white/80">
                  Our solution experts can help you find the perfect fit for your specific needs and challenges.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                    Schedule a Consultation
                  </Button>

                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    View Solution Map
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SolutionCategory({
  title,
  description,
  solutions,
  categoryColor,
  categoryBadgeColor,
}: {
  title: string
  description: string
  solutions: any[]
  categoryColor: string
  categoryBadgeColor: string
}) {
  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">{description}</p>
        </div>

        <Button variant="ghost" asChild className={`text-${categoryColor.split("-")[1].split(" ")[0]}`}>
          <Link href={`/solutions?category=${title.toLowerCase().split(" ")[0]}`}>
            View All {title}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution, i) => (
          <Card key={i} className="border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col h-full">
            <div className="relative h-48">
              <Image
                src={solution.image || `/placeholder.svg?height=400&width=600&text=${solution.name}`}
                alt={solution.name}
                fill
                className="object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-10`} />

              <div className="absolute top-4 left-4">
                <Badge variant="outline" className={categoryBadgeColor}>
                  {solution.category.charAt(0).toUpperCase() + solution.category.slice(1)}
                </Badge>
              </div>

              <div className="absolute bottom-4 right-4 p-2 rounded-full bg-white/90 dark:bg-gray-900/90 shadow-lg">
                {solution.icon}
              </div>
            </div>

            <CardContent className="flex-1 flex flex-col p-6">
              <h3 className="text-xl font-medium mb-2">{solution.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{solution.description}</p>

              <Button
                variant="ghost"
                asChild
                className={`text-${categoryColor.split("-")[1].split(" ")[0]} justify-start px-0 hover:px-2`}
              >
                <Link href={`/solutions/${solution.slug}`}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
