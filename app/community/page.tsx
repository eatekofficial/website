import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Users, Award, BookOpen, Zap } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function CommunityPage() {
  const benefits = [
    {
      title: "Connect with Like-minded Individuals",
      description:
        "Join a global network of creators, educators, and technologists passionate about building the future.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Access Exclusive Resources",
      description: "Get early access to tools, courses, and content to accelerate your growth and learning.",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "Participate in Community Events",
      description:
        "Virtual workshops, masterclasses, and networking sessions focused on education, art, and technology.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Fellowship Opportunities",
      description: "Apply for the ELAN 20' fellowship program to collaborate on groundbreaking projects.",
      icon: <Award className="h-6 w-6" />,
    },
  ]

  const fellowshipProjects = [
    {
      title: "Emotional Intelligence in AI Systems",
      description: "Researching and developing frameworks for integrating emotional intelligence into AI interactions.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Immersive Learning Environments",
      description: "Creating next-generation educational spaces that blend physical and digital elements.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Creative Technology for Social Impact",
      description: "Developing tech-enabled artistic interventions that address pressing social challenges.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const communityLevels = [
    {
      title: "Explorer",
      description: "For those curious about the intersection of education, art, and technology.",
      features: ["Access to community forum", "Monthly newsletter", "Invitation to virtual events"],
    },
    {
      title: "Creator",
      description: "For active practitioners in creative technology, education, or artistic fields.",
      features: [
        "All Explorer benefits",
        "Access to resource library",
        "Project showcasing opportunities",
        "Peer feedback sessions",
      ],
    },
    {
      title: "Catalyst",
      description: "For leaders and innovators driving change in their fields.",
      features: [
        "All Creator benefits",
        "Mentorship opportunities",
        "Early access to EATEK tools",
        "Fellowship program eligibility",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-teal-50 via-blue-50 to-background">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-teal-500 to-blue-600">
                Join the EATEK Community
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Connect, collaborate, and create with fellow innovators at the intersection of education, art, and
                technology.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-20 bg-gradient-to-b from-background to-teal-50/20">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-br from-teal-600 to-blue-700">
                Why Join Our Community?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                EATEK is more than an organization — it's a growing ecosystem of creators, educators, and innovators.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <div className="flex items-start gap-4 p-6 rounded-lg border bg-gradient-to-br from-white to-teal-50 shadow-md hover:shadow-lg transition-all">
                  <div className="bg-teal-100 p-3 rounded-full text-teal-600">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-blue-800">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ELAN 20' Fellowship */}
      <section className="py-20 bg-gradient-to-b from-teal-50/20 to-blue-50/20">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
                Fellowship Program
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-teal-600">
                ELAN 20' — The Future Builders
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                An elite fellowship bringing together 20 visionary creators to build at the frontier of education, art,
                and technology.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-2">About the Fellowship</h3>
                <p className="text-muted-foreground">
                  ELAN 20' is a six-month intensive collaboration program where selected fellows work directly with the
                  EATEK team and industry experts to develop groundbreaking projects that push the boundaries of what's
                  possible.
                </p>
                <div className="space-y-4">
                  <h4 className="text-lg font-bold">What Fellows Receive:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>$10,000 project development grant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>Mentorship from industry leaders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>Access to EATEK's network and resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>Showcase opportunities at major events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                      <span>Potential for continued partnership or investment</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:opacity-90"
                  >
                    <Link href="#apply">
                      Apply for ELAN 20'
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Fellowship Project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-rows-2 gap-4">
                  <div className="relative h-30 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Fellowship Collaboration"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-30 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Fellowship Showcase"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Current Fellowship Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {fellowshipProjects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border overflow-hidden shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="relative h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Community Levels */}
      <section className="py-20 bg-gradient-to-b from-blue-50/20 to-background">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-br from-teal-600 to-blue-600">
                Community Membership Levels
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the level of engagement that fits your journey and goals.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {communityLevels.map((level, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <div className="bg-gradient-to-b from-white to-teal-50 rounded-lg border shadow-md hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="p-6 border-b">
                    <h3 className="text-2xl font-bold mb-1">{level.title}</h3>
                    <p className="text-muted-foreground">{level.description}</p>
                  </div>
                  <div className="p-6 flex-grow">
                    <h4 className="font-bold mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {level.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 border-t">
                    <Button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:opacity-90 text-white">
                      Join as {level.title}
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="right">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-br from-teal-600 to-blue-700">
                  Join Our Community
                </h2>
                <p className="text-lg text-muted-foreground">
                  Whether you're interested in the general community or the ELAN 20' fellowship, start your journey with
                  us by filling out this application.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="text-xl font-bold mb-2">What Happens Next?</h3>
                    <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                      <li>Our team reviews your application (1-2 weeks)</li>
                      <li>Selected applicants receive an invitation to join</li>
                      <li>ELAN 20' fellowship candidates proceed to interviews</li>
                      <li>Welcome onboarding and community introduction</li>
                    </ol>
                  </div>
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="text-xl font-bold mb-2">Selection Criteria</h3>
                    <p className="text-muted-foreground mb-4">We select community members and fellows based on:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                        <span>Alignment with EATEK's vision and values</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                        <span>Unique perspective and expertise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                        <span>Potential for meaningful contribution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                        <span>Commitment to collaborative growth</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div className="p-8 rounded-lg border bg-white shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-blue-800">Application Form</h3>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className="border-teal-200 focus-visible:ring-teal-500" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="border-teal-200 focus-visible:ring-teal-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>I am applying for:</Label>
                    <RadioGroup defaultValue="community" className="grid grid-cols-1 gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="community" id="community" />
                        <Label htmlFor="community">General Community Membership</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fellowship" id="fellowship" />
                        <Label htmlFor="fellowship">ELAN 20' Fellowship Program</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="both" id="both" />
                        <Label htmlFor="both">Both Community & Fellowship</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="background">Your Background</Label>
                    <RadioGroup defaultValue="creator" className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="creator" id="creator" />
                        <Label htmlFor="creator">Creator/Artist</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="educator" id="educator" />
                        <Label htmlFor="educator">Educator</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="technologist" id="technologist" />
                        <Label htmlFor="technologist">Technologist</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to join the EATEK community?</Label>
                    <Textarea
                      id="motivation"
                      placeholder="Tell us what interests you about EATEK and what you hope to gain and contribute..."
                      className="min-h-[120px] border-teal-200 focus-visible:ring-teal-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio or Website (optional)</Label>
                    <Input
                      id="portfolio"
                      placeholder="https://"
                      className="border-teal-200 focus-visible:ring-teal-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:opacity-90 text-white"
                  >
                    Submit Application
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Community Testimonials */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-teal-600">
                Community Voices
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from our community members about their experience with EATEK.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <blockquote className="p-6 rounded-lg border bg-gradient-to-br from-white to-teal-50 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Community Member"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">Sarah J.</p>
                    <p className="text-sm text-muted-foreground">Digital Artist & Educator</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground mb-4">
                  "Joining the EATEK community has transformed my practice. The intersection of art and technology is
                  where I've always wanted to work, and finding like-minded collaborators has been invaluable."
                </p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-teal-600"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </blockquote>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <blockquote className="p-6 rounded-lg border bg-gradient-to-br from-white to-blue-50 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Community Member"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">Marcus T.</p>
                    <p className="text-sm text-muted-foreground">EdTech Developer</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground mb-4">
                  "The ELAN fellowship was a career-defining experience. Working alongside talented creators with the
                  support of the EATEK team helped me bring my vision to life in ways I couldn't have imagined."
                </p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-blue-600"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </blockquote>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <blockquote className="p-6 rounded-lg border bg-gradient-to-br from-white to-teal-50 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Community Member"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">Aisha K.</p>
                    <p className="text-sm text-muted-foreground">Museum Experience Designer</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground mb-4">
                  "The community events and resources have been game-changing for my work. I've connected with
                  collaborators, learned new skills, and found inspiration in the collective creativity of EATEK."
                </p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-teal-600"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to join the movement?</h2>
            <p className="text-lg mb-6 max-w-[800px] mx-auto opacity-90">
              Become part of a community that's building the future at the intersection of education, art, and
              technology.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link href="#apply">Apply Today</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
