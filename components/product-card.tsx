import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProductCardProps {
  product: {
    title: string
    description: string
    status: string
    icon: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
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
            {product.icon === "layout-grid" && (
              <>
                <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                <rect width="7" height="7" x="3" y="14" rx="1"></rect>
              </>
            )}
            {product.icon === "box" && (
              <>
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                <path d="m3.29 7 8.11 4.66a.5.5 0 0 0 .5 0L20 7"></path>
                <path d="M12 22V12"></path>
              </>
            )}
            {product.icon === "refresh-cw" && (
              <>
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                <path d="M8 16H3v5"></path>
              </>
            )}
            {product.icon === "book" && (
              <>
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
              </>
            )}
            {product.icon === "lightbulb" && (
              <>
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                <path d="M9 18h6"></path>
                <path d="M10 22h4"></path>
              </>
            )}
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold">{product.title}</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {product.status}
          </span>
        </div>
      </div>
      <p className="text-muted-foreground mb-4">{product.description}</p>
      <Link
        href={`/products#${product.title.toLowerCase().replace(/\s+/g, "-")}`}
        className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
      >
        Learn More
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  )
}
