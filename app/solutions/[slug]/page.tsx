import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { solutionNodes } from "@/lib/solution-data"
import RelatedSolutions from "@/components/related-solutions"
import SolutionFeatures from "@/components/solution-features"
import SolutionCaseStudies from "@/components/solution-case-studies"
import SolutionHero from "@/components/solution-hero"
import SolutionWorkflows from "@/components/solution-workflows"
import SolutionContact from "@/components/solution-contact"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const solution = solutionNodes.find((node) => node.slug === params.slug)

  if (!solution) {
    return {
      title: "Solution Not Found | EATEK",
      description: "The requested solution could not be found.",
    }
  }

  return {
    title: `${solution.name} | EATEK Solutions`,
    description: solution.description,
    openGraph: {
      title: `${solution.name} | EATEK Solutions`,
      description: solution.description,
      images: [
        {
          url: solution.image || "/images/solutions/default-solution.jpg",
          width: 1200,
          height: 630,
          alt: solution.name,
        },
      ],
    },
  }
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = solutionNodes.find((node) => node.slug === params.slug)

  if (!solution) {
    notFound()
  }

  // Get category color class
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

  // Get category text color
  const getCategoryTextColor = (category: string) => {
    switch (category) {
      case "education":
        return "text-blue-500"
      case "art":
        return "text-purple-500"
      case "technology":
        return "text-teal-500"
      case "core":
        return "text-amber-500"
      default:
        return "text-indigo-500"
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

  // Get related solutions
  const relatedSolutions = solutionNodes
    .filter(
      (node) =>
        (solution.connections.includes(node.id) || node.connections.includes(solution.id)) && node.id !== solution.id,
    )
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <SolutionHero
        solution={solution}
        categoryColor={getCategoryColor(solution.category)}
        categoryTextColor={getCategoryTextColor(solution.category)}
        categoryBadgeColor={getCategoryBadgeColor(solution.category)}
      />

      {/* Main Content */}
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p>{solution.fullDescription || solution.description}</p>
                {solution.overview?.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Key Features */}
            <SolutionFeatures features={solution.features || []} categoryColor={getCategoryColor(solution.category)} />

            {/* Benefits */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(solution.benefits || []).map((benefit, i) => (
                  <Card key={i} className="border border-gray-200 dark:border-gray-800">
                    <CardContent className="p-4 flex items-start gap-3">
                      <CheckCircle className={`h-5 w-5 mt-0.5 ${getCategoryTextColor(solution.category)}`} />
                      <div>
                        <h3 className="font-medium">{benefit.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{benefit.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Case Studies */}
            <SolutionCaseStudies
              caseStudies={solution.caseStudies || []}
              categoryColor={getCategoryColor(solution.category)}
              categoryTextColor={getCategoryTextColor(solution.category)}
            />

            {/* Technical Specifications */}
            {solution.specifications && solution.specifications.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight">Technical Specifications</h2>
                <div className="grid grid-cols-1 gap-4">
                  {solution.specifications.map((spec, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
                    >
                      <h3 className="font-medium mb-2">{spec.title}</h3>
                      <ul className="space-y-2">
                        {spec.items.map((item, j) => (
                          <li key={j} className="text-sm flex items-start gap-2">
                            <div className="rounded-full w-1.5 h-1.5 mt-1.5 bg-gray-400 dark:bg-gray-600" />
                            <span className="text-gray-600 dark:text-gray-400">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Info Card */}
            <Card className="border border-gray-200 dark:border-gray-800">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium text-lg">Solution Details</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className={getCategoryBadgeColor(solution.category)}>
                      {solution.category.charAt(0).toUpperCase() + solution.category.slice(1)}
                    </Badge>
                    {solution.tags?.map((tag, i) => (
                      <Badge key={i} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Deployment Options</span>
                    <span>{solution.deploymentOptions?.join(", ") || "Cloud, On-premise"}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Integration</span>
                    <span>{solution.integrationLevel || "Seamless"}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Support</span>
                    <span>{solution.supportLevel || "24/7"}</span>
                  </div>
                </div>

                <div className="pt-2 space-y-3">
                  <Button className={`w-full bg-gradient-to-r ${getCategoryColor(solution.category)}`}>
                    Request Demo
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Solutions */}
            <RelatedSolutions
              solutions={relatedSolutions}
              categoryTextColor={getCategoryTextColor(solution.category)}
            />

            {/* Solution Workflows */}
            <SolutionWorkflows
              solution={solution}
              categoryColor={getCategoryColor(solution.category)}
              categoryTextColor={getCategoryTextColor(solution.category)}
            />

            {/* Contact Card */}
            <SolutionContact categoryColor={getCategoryColor(solution.category)} />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="container px-4 md:px-6 py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/solutions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Solutions
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/#ecosystem-map">
              <Share2 className="mr-2 h-4 w-4" />
              View in Ecosystem Map
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
