import Image from "next/image"

interface ServiceDetailProps {
  service: {
    id: string
    title: string
    description: string
    icon: string
    image: string
    features: string[]
  }
  isEven: boolean
}

export default function ServiceDetail({ service, isEven }: ServiceDetailProps) {
  return (
    <section id={service.id} className={`py-20 ${isEven ? "bg-blue-50/50" : ""}`}>
      <div className="container px-4 md:px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
          <div className={`space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
            <div className="flex items-center gap-4 mb-2">
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
              <h2 className="text-3xl font-bold">{service.title}</h2>
            </div>
            <p className="text-lg text-muted-foreground">{service.description}</p>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Features</h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
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
                      className="h-5 w-5 text-blue-600 mt-0.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`relative h-[400px] rounded-lg overflow-hidden ${isEven ? "lg:order-2" : "lg:order-1"}`}>
            <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
