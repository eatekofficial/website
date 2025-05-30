import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface JobListingProps {
  job: {
    title: string
    location: string
    type: string
    description: string
    requirements: string[]
  }
}

export default function JobListing({ job }: JobListingProps) {
  return (
    <div className="bg-card p-6 rounded-lg border hover:border-blue-400 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold">{job.title}</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {job.location}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {job.type}
            </span>
          </div>
        </div>
        <Button asChild size="sm">
          <Link href="/contact">
            Apply Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <p className="text-muted-foreground mb-4">{job.description}</p>
      <div>
        <h4 className="font-medium mb-2">Requirements:</h4>
        <ul className="space-y-1 text-sm text-muted-foreground">
          {job.requirements.map((requirement, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-blue-600 mt-0.5"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>{requirement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
