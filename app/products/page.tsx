import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"

export default function ProductsPage() {
  const products = [
    {
      id: "portli",
      title: "Portli",
      description: "A comprehensive project management tool designed for creative teams.",
      status: "Ideated",
      icon: "layout-grid",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Intuitive task management",
        "Visual workflow builder",
        "Creative asset organization",
        "Team collaboration tools",
        "Integration with creative software",
      ],
      useCase:
        "Design agencies and creative studios looking to streamline their project workflows and improve team collaboration.",
    },
    {
      id: "flowbox",
      title: "FlowBox",
      description: "Streamline your creative workflow with our intuitive design collaboration platform.",
      status: "Ideated",
      icon: "box",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Real-time design collaboration",
        "Version control for creative assets",
        "Feedback and annotation tools",
        "Design system management",
        "Client presentation mode",
      ],
      useCase:
        "Designers and creative teams who need to collaborate on projects and share work with clients efficiently.",
    },
    {
      id: "skillsync",
      title: "SkillSync",
      description: "Connect skills with opportunities in this next-generation learning marketplace.",
      status: "Ideated",
      icon: "refresh-cw",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Skill-based matching algorithm",
        "Peer-to-peer learning exchange",
        "Project-based learning opportunities",
        "Verified skill credentials",
        "Community knowledge sharing",
      ],
      useCase:
        "Professionals looking to upskill, organizations seeking talent, and educators wanting to connect with learners.",
    },
    {
      id: "storyos",
      title: "StoryOS",
      description: "An operating system for narrative development and storytelling across mediums.",
      status: "Ideated",
      icon: "book",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Cross-medium story development",
        "Narrative structure templates",
        "Character and world-building tools",
        "Collaborative storytelling features",
        "Publishing and distribution options",
      ],
      useCase:
        "Writers, filmmakers, game developers, and content creators working on narrative projects across different media formats.",
    },
    {
      id: "lumiere",
      title: "Lumière",
      description: "Illuminate your creative process with our AI-powered ideation assistant.",
      status: "Ideated",
      icon: "lightbulb",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "AI-powered creative prompts",
        "Idea visualization tools",
        "Concept development framework",
        "Reference and inspiration library",
        "Collaborative brainstorming features",
      ],
      useCase:
        "Creators facing creative blocks, teams needing fresh perspectives, and educators looking for innovative teaching approaches.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-blue-50 via-blue-100 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Our Products</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Innovative solutions designed to empower creators, educators, and changemakers.
            </p>
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              Currently in ideation and development phase
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Link key={index} href={`#${product.id}`} className="block">
                <div className="bg-card p-6 rounded-lg border h-full hover:border-primary transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
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
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                        {product.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Product Sections */}
      {products.map((product, index) => (
        <ProductDetail key={index} product={product} isEven={index % 2 === 0} />
      ))}

      {/* Product Roadmap */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Product Roadmap</h2>
            <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
              Our vision for the future of EATEK's product ecosystem.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              {/* Milestones */}
              <div className="space-y-12">
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-card border">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-xl font-bold mb-2">Phase 1: Concept Development</h3>
                    <p className="text-muted-foreground">
                      Refining our product concepts through research, user interviews, and market analysis.
                    </p>
                    <span className="inline-flex items-center mt-3 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      In Progress
                    </span>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-card border">
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
                      className="h-6 w-6 text-muted-foreground"
                    >
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-xl font-bold mb-2">Phase 2: Prototype Development</h3>
                    <p className="text-muted-foreground">
                      Building functional prototypes of our core products for testing and validation.
                    </p>
                    <span className="inline-flex items-center mt-3 px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                      Upcoming
                    </span>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-card border">
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
                      className="h-6 w-6 text-muted-foreground"
                    >
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-xl font-bold mb-2">Phase 3: Beta Launch</h3>
                    <p className="text-muted-foreground">
                      Releasing beta versions to early adopters for feedback and refinement.
                    </p>
                    <span className="inline-flex items-center mt-3 px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                      Upcoming
                    </span>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-card border">
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
                      className="h-6 w-6 text-muted-foreground"
                    >
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-xl font-bold mb-2">Phase 4: Public Launch</h3>
                    <p className="text-muted-foreground">
                      Official release of our products to the public with full feature sets.
                    </p>
                    <span className="inline-flex items-center mt-3 px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                      Future
                    </span>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-card border">
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
                      className="h-6 w-6 text-muted-foreground"
                    >
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-xl font-bold mb-2">Phase 5: Ecosystem Integration</h3>
                    <p className="text-muted-foreground">
                      Connecting all products into a seamless ecosystem for creators and educators.
                    </p>
                    <span className="inline-flex items-center mt-3 px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                      Future
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Join Our Early Access Program</h2>
              <p className="text-lg text-muted-foreground">
                Be among the first to experience our products and help shape their development. Early access members
                receive:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-primary mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Exclusive preview access to beta releases</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-primary mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Direct input into product development</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-primary mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Special pricing for early adopters</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-primary mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Priority support and training</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button asChild>
                  <Link href="/contact">
                    Apply for Early Access
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Early Access" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in our products?</h2>
          <p className="text-lg mb-6 max-w-[800px] mx-auto opacity-90">
            Join our waitlist to stay updated on our product development and be the first to know when we launch.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">Join the Waitlist</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
