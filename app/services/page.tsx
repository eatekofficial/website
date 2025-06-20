import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ServiceDetail from "@/components/service-detail"

export default function ServicesPage() {
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom websites tailored to your business needs, from e-commerce to dynamic web applications.",
      icon: "monitor",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "E-commerce Websites",
        "Static Websites",
        "Dynamic Websites",
        "Industry-Specific Websites (Real Estate & Textiles)",
      ],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your online presence and reach your target audience.",
      icon: "bar-chart",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Email Marketing & Automation",
        "Affiliate Marketing & Lead Generation",
        "E-Commerce Marketing",
      ],
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive, engaging, and memorable digital experiences.",
      icon: "palette",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "No Code Websites",
        "Social Media Posts",
        "Branding & Graphic Design",
        "Video & Motion Graphics",
        "CMS Development (WordPress, Webflow, Shopify, etc.)",
      ],
    },
    {
      id: "content-creation",
      title: "Content Creation",
      description: "High-quality content that tells your story, engages your audience, and drives conversions.",
      icon: "file-text",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Blog & Article Writing",
        "Social Media Content Creation",
        "SEO-Optimized Content",
        "Video Content & Scriptwriting",
        "Copywriting & Sales Copy",
        "Email & Newsletter Content",
        "Infographic & Visual Content",
        "E-Book & Guide Writing",
      ],
    },
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      icon: "smartphone",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Android & iOS Development",
        "Cross-Platform (Flutter, React Native)",
        "Hybrid & Native Apps (Swift, Kotlin)",
        "Enterprise & AI/IoT Mobile Solutions",
        "Maintenance & Support",
      ],
    },
    {
      id: "education-services",
      title: "Education Services",
      description: "E-learning solutions and educational platforms designed to empower learners and educators.",
      icon: "book-open",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "E-Learning Platform Development",
        "Learning Management Systems (LMS)",
        "Online Course Development",
        "Educational Web & Mobile App Development",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-blue-50 via-blue-100 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive solutions at the intersection of education, art, and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} href={`#${service.id}`} className="block">
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
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Service Sections */}
      {services.map((service, index) => (
        <ServiceDetail key={index} service={service} isEven={index % 2 === 0} />
      ))}

      {/* Pricing CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-[800px] mx-auto">
            Explore our pricing options and find the perfect package for your needs.
          </p>
          <Button asChild size="lg">
            <Link href="/pricing">
              View Pricing Options
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
              Find answers to common questions about our services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-2">How long does a typical project take?</h3>
              <p className="text-muted-foreground">
                Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a
                complex application could take several months. We&apos;ll provide a detailed timeline during our initial
                consultation.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-2">Do you offer ongoing support and maintenance?</h3>
              <p className="text-muted-foreground">
                Yes, we offer various support and maintenance packages to ensure your digital products continue to
                perform optimally after launch. These can be tailored to your specific needs and budget.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-2">Can you work with our existing team?</h3>
              <p className="text-muted-foreground">
                We&apos;re experienced in collaborating with in-house teams and can adapt our approach to complement your
                existing resources and workflows.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-2">How do you approach pricing?</h3>
              <p className="text-muted-foreground">
                We offer both project-based and retainer pricing models. Our pricing is transparent and based on the
                scope, complexity, and timeline of your project. We&apos;re happy to discuss options that fit your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your digital presence?</h2>
          <p className="text-lg mb-6 max-w-[800px] mx-auto opacity-90">
            Let&apos;s discuss how our services can help you achieve your goals.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
