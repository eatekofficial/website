import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  service: {
    title: string
    description: string
    icon: string
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-card p-6 rounded-lg border h-full hover:border-primary transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-blue-100 p-3 rounded-full text-blue-600">
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
            className="h-6 w-6"
          >
            {service.icon === "monitor" && (
              <>
                <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                <line x1="8" x2="16" y1="21" y2="21"></line>
                <line x1="12" x2="12" y1="17" y2="21"></line>
              </>
            )}
            {service.icon === "bar-chart" && (
              <>
                <line x1="12" x2="12" y1="20" y2="10"></line>
                <line x1="18" x2="18" y1="20" y2="4"></line>
                <line x1="6" x2="6" y1="20" y2="16"></line>
              </>
            )}
            {service.icon === "palette" && (
              <>
                <circle cx="13.5" cy="6.5" r=".5"></circle>
                <circle cx="17.5" cy="10.5" r=".5"></circle>
                <circle cx="8.5" cy="7.5" r=".5"></circle>
                <circle cx="6.5" cy="12.5" r=".5"></circle>
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
              </>
            )}
            {service.icon === "file-text" && (
              <>
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" x2="8" y1="13" y2="13"></line>
                <line x1="16" x2="8" y1="17" y2="17"></line>
                <line x1="10" x2="8" y1="9" y2="9"></line>
              </>
            )}
            {service.icon === "smartphone" && (
              <>
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                <line x1="12" x2="12" y1="18" y2="18"></line>
              </>
            )}
            {service.icon === "book-open" && (
              <>
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </>
            )}
          </svg>
        </div>
        <h3 className="text-xl font-bold">{service.title}</h3>
      </div>
      <p className="text-muted-foreground mb-4">{service.description}</p>
      <Link
        href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
        className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
      >
        Learn More
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  )
}
