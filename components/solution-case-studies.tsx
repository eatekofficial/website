"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"

interface SolutionCaseStudiesProps {
  caseStudies: Array<{
    title: string
    client: string
    description: string
    image?: string
    testimonial?: {
      quote: string
      author: string
      role: string
    }
    link?: string
  }>
  categoryColor: string
  categoryTextColor: string
}

export default function SolutionCaseStudies({
  caseStudies,
  categoryColor,
  categoryTextColor,
}: SolutionCaseStudiesProps) {
  const [activeCase, setActiveCase] = useState(0)

  if (!caseStudies || caseStudies.length === 0) {
    return null
  }

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Case Studies</h2>

      {caseStudies.length === 1 ? (
        <SingleCaseStudy
          caseStudy={caseStudies[0]}
          categoryColor={categoryColor}
          categoryTextColor={categoryTextColor}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex overflow-x-auto gap-2 pb-2 hide-scrollbar">
            {caseStudies.map((caseStudy, i) => (
              <button
                key={i}
                onClick={() => setActiveCase(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCase === i
                    ? `bg-gradient-to-r ${categoryColor} text-white`
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {caseStudy.client}
              </button>
            ))}
          </div>

          <div className="relative">
            {caseStudies.map((caseStudy, i) => (
              <div
                key={i}
                className={`transition-opacity duration-300 ${activeCase === i ? "opacity-100" : "opacity-0 absolute inset-0"}`}
              >
                <SingleCaseStudy
                  caseStudy={caseStudy}
                  categoryColor={categoryColor}
                  categoryTextColor={categoryTextColor}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

function SingleCaseStudy({
  caseStudy,
  categoryColor,
  categoryTextColor,
}: {
  caseStudy: any
  categoryColor: string
  categoryTextColor: string
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
      <div className="lg:col-span-3 p-6 space-y-4">
        <div>
          <h3 className="text-xl font-medium">{caseStudy.title}</h3>
          <p className={`text-sm ${categoryTextColor}`}>{caseStudy.client}</p>
        </div>

        <p className="text-gray-600 dark:text-gray-400">{caseStudy.description}</p>

        {caseStudy.testimonial && (
          <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex gap-4">
              <Quote className={`h-8 w-8 ${categoryTextColor} opacity-80`} />
              <div>
                <p className="italic text-gray-600 dark:text-gray-400">"{caseStudy.testimonial.quote}"</p>
                <div className="mt-2">
                  <p className="font-medium">{caseStudy.testimonial.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{caseStudy.testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {caseStudy.link && (
          <div className="pt-2">
            <Button variant="ghost" asChild className={categoryTextColor}>
              <Link href={caseStudy.link}>
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>

      <div className="lg:col-span-2 relative min-h-[200px] lg:min-h-full">
        <Image
          src={caseStudy.image || "/placeholder.svg?height=600&width=800"}
          alt={caseStudy.title}
          fill
          className="object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-20`} />
      </div>
    </div>
  )
}
