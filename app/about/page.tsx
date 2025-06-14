import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import TeamMember from "@/components/team-member"

export default function AboutPage() {
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 15 years of experience in creative technology, Alex leads EATEK's vision to bridge education, art, and technology.",
    },
    {
      name: "Maya Rodriguez",
      role: "Creative Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Maya brings her background in fine arts and digital design to shape EATEK's creative direction and aesthetic vision.",
    },
    {
      name: "Jordan Taylor",
      role: "Technology Lead",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Jordan oversees all technical development, ensuring EATEK's platforms are innovative, scalable, and user-friendly.",
    },
    {
      name: "Sam Washington",
      role: "Education Strategist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With a PhD in Educational Technology, Sam guides EATEK's approach to learning experiences and educational products.",
    },
    {
      name: "Priya Patel",
      role: "Marketing Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Priya leads EATEK's marketing efforts, crafting compelling narratives that connect with our diverse audience.",
    },
    {
      name: "David Kim",
      role: "Product Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "David oversees product development, ensuring our solutions meet the needs of creators and educators alike.",
    },
    {
      name: "Olivia Chen",
      role: "Community Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Olivia builds and nurtures EATEK's community of creators, educators, and technology enthusiasts.",
    },
    {
      name: "Marcus Johnson",
      role: "Business Development",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Marcus forges strategic partnerships that help EATEK expand its impact across industries and regions.",
    },
  ]

  const values = [
    {
      title: "Convergence",
      description: "We believe the most powerful innovations happen at the intersection of disciplines.",
    },
    {
      title: "Emotional Utility",
      description: "Technology should serve human purpose and emotional needs, not the other way around.",
    },
    {
      title: "Soulful Systems",
      description: "We design platforms that respect human creativity and foster meaningful connections.",
    },
    {
      title: "Inclusive Innovation",
      description: "Our solutions are designed to be accessible and empowering for diverse communities.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-blue-50 via-blue-100 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground mb-8">
              EATEK is a movement at the intersection of Education, Art, and Technology, building soulful systems for
              the next generation of creators and changemakers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Mission & Vision</h2>
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-2">Mission</h3>
                  <p className="text-muted-foreground">
                    To architect globally-resonant platforms that blend creativity, purposeful learning, and intuitive
                    technology — all rooted in emotional utility.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-2">Vision</h3>
                  <p className="text-muted-foreground">
                    A world where technology amplifies human creativity and connection, where education is engaging and
                    relevant, and where art is accessible and valued.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-2">Core Formula</h3>
                <p className="text-lg font-medium">EATEK = (Education ↔ Art ↔ Technology) x Emotional Utility</p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="EATEK Mission" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
              The principles that guide everything we do at EATEK.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="What We Do" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">What We Do</h2>
              <p className="text-lg text-muted-foreground">
                At EATEK, we don&pos;t just build products. We build culture systems that empower creators, educators, and
                innovators to make a meaningful impact.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Develop innovative web and mobile applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Create intuitive user experiences and interfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Design educational platforms and learning experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Develop digital marketing strategies for creative businesses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Build community around creative and educational initiatives</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button asChild>
                  <Link href="/services">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
              The passionate individuals behind EATEK&pos;s vision and execution.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <TeamMember key={index} member={member} showBio />
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Community</h2>
              <p className="text-lg text-muted-foreground">
                EATEK is more than a company — it&pos;s a community of creators, educators, technologists, and changemakers
                united by a shared vision of the future.
              </p>
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-2">Creators Network</h3>
                  <p className="text-muted-foreground">
                    A global community of artists, designers, and makers exploring the intersection of creativity and
                    technology.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-2">Education Alliance</h3>
                  <p className="text-muted-foreground">
                    Educators and institutions committed to reimagining learning for the digital age.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-bold mb-2">Tech Innovators</h3>
                  <p className="text-muted-foreground">
                    Developers, engineers, and technologists building tools that empower human creativity.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild>
                  <Link href="/contact">
                    Join Our Community
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=500&width=600" alt="EATEK Community" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to join the movement?</h2>
          <p className="text-lg mb-6 max-w-[800px] mx-auto opacity-90">
            Connect with us to explore how we can collaborate and create impact together.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
