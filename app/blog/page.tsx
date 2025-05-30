import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import AnimatedSection from "@/components/animated-section"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Creative Education: Merging Art and Technology",
    description:
      "An in-depth exploration of how educational institutions are reimagining curriculum to prepare students for a future where creativity and technical skills are equally valued.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "September 5, 2023",
    category: "Education",
    author: {
      name: "Alex Chen",
      image: "/placeholder.svg?height=40&width=40",
      initials: "AC",
    },
    slug: "future-creative-education",
  }

  const blogPosts = [
    {
      title: "The Convergence of Education and Technology in 2023",
      description:
        "Exploring how educational institutions are leveraging technology to create more engaging and effective learning experiences.",
      image: "/placeholder.svg?height=400&width=600",
      date: "June 15, 2023",
      category: "Education",
      author: {
        name: "Alex Chen",
        image: "/placeholder.svg?height=40&width=40",
        initials: "AC",
      },
      slug: "convergence-education-technology-2023",
    },
    {
      title: "Art in the Digital Age: Beyond NFTs",
      description:
        "How artists are using technology to create immersive experiences and reach new audiences beyond the NFT boom.",
      image: "/placeholder.svg?height=400&width=600",
      date: "July 22, 2023",
      category: "Art",
      author: {
        name: "Maya Rodriguez",
        image: "/placeholder.svg?height=40&width=40",
        initials: "MR",
      },
      slug: "art-digital-age-beyond-nfts",
    },
    {
      title: "Building Emotional Utility into Tech Products",
      description:
        "Why the next generation of technology needs to prioritize emotional connection and human-centered design.",
      image: "/placeholder.svg?height=400&width=600",
      date: "August 10, 2023",
      category: "Technology",
      author: {
        name: "Jordan Taylor",
        image: "/placeholder.svg?height=40&width=40",
        initials: "JT",
      },
      slug: "building-emotional-utility-tech-products",
    },
    {
      title: "The Role of AI in Creative Processes",
      description:
        "Examining how artificial intelligence is being used as a collaborative tool for artists, designers, and creators.",
      image: "/placeholder.svg?height=400&width=600",
      date: "August 28, 2023",
      category: "Technology",
      author: {
        name: "Sam Washington",
        image: "/placeholder.svg?height=40&width=40",
        initials: "SW",
      },
      slug: "role-ai-creative-processes",
    },
    {
      title: "Designing Learning Experiences for Gen Z",
      description:
        "Strategies for creating educational content that resonates with digital natives and addresses their unique learning preferences.",
      image: "/placeholder.svg?height=400&width=600",
      date: "September 12, 2023",
      category: "Education",
      author: {
        name: "Maya Rodriguez",
        image: "/placeholder.svg?height=40&width=40",
        initials: "MR",
      },
      slug: "designing-learning-experiences-gen-z",
    },
    {
      title: "The Intersection of Physical and Digital Art",
      description:
        "How artists are blending traditional mediums with digital technologies to create hybrid art forms and experiences.",
      image: "/placeholder.svg?height=400&width=600",
      date: "September 20, 2023",
      category: "Art",
      author: {
        name: "Alex Chen",
        image: "/placeholder.svg?height=40&width=40",
        initials: "AC",
      },
      slug: "intersection-physical-digital-art",
    },
  ]

  const categories = ["All", "Education", "Art", "Technology", "Innovation", "Design"]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-teal-50 via-blue-50 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-800">
                EATEK Blog
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Insights, ideas, and explorations at the intersection of education, art, and technology.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <AnimatedSection direction="right" className="w-full md:w-auto">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 border-teal-200 focus-visible:ring-teal-500 w-full"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" className="w-full md:w-auto overflow-auto">
              <div className="flex gap-2 pb-2 md:pb-0">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    size="sm"
                    className={
                      index === 0 ? "bg-teal-600 hover:bg-teal-700" : "border-teal-200 text-teal-700 hover:bg-teal-50"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-8">Featured Article</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Link href={`/blog/${featuredPost.slug}`} className="block">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow border-teal-100 hover:border-teal-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-full w-full overflow-hidden">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-teal-600 text-white hover:bg-teal-700">
                        {featuredPost.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 hover:text-teal-600 transition-colors">
                        {featuredPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{featuredPost.date}</p>
                      <p className="text-muted-foreground">{featuredPost.description}</p>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={featuredPost.author.image || "/placeholder.svg"}
                            alt={featuredPost.author.name}
                          />
                          <AvatarFallback className="bg-teal-100 text-teal-800">
                            {featuredPost.author.initials}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{featuredPost.author.name}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 bg-gradient-to-b from-background to-teal-50/30">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-8">Latest Articles</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow border-teal-100 hover:border-teal-300">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform hover:scale-105 duration-500"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-teal-600 text-white hover:bg-teal-700">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-2 hover:text-teal-600 transition-colors">{post.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">{post.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-3">{post.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={post.author.image || "/placeholder.svg"} alt={post.author.name} />
                          <AvatarFallback className="bg-teal-100 text-teal-800">{post.author.initials}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{post.author.name}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-teal-600" />
                    </CardFooter>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 text-center">
            <AnimatedSection>
              <Button className="bg-teal-600 hover:bg-teal-700">Load More Articles</Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-teal-100 to-blue-100">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground mb-8">
                Get the latest insights and articles delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="border-teal-200 focus-visible:ring-teal-500"
                />
                <Button className="bg-teal-600 hover:bg-teal-700">Subscribe</Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
