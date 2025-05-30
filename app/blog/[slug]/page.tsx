import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // In a real application, you would fetch the blog post data based on the slug
  // For this example, we'll use hardcoded data
  const post = {
    title: "The Future of Creative Education: Merging Art and Technology",
    description:
      "An in-depth exploration of how educational institutions are reimagining curriculum to prepare students for a future where creativity and technical skills are equally valued.",
    content: `
      <p>In today's rapidly evolving digital landscape, the traditional boundaries between disciplines are blurring. Nowhere is this more evident than in the intersection of art and technology, where creative expression meets technical innovation.</p>
      
      <h2>The Changing Landscape of Education</h2>
      
      <p>Educational institutions around the world are recognizing the need to prepare students for a future where interdisciplinary skills are not just beneficial but essential. The traditional separation between STEM subjects and the arts is giving way to more integrated approaches that acknowledge the value of creative thinking in technical fields and technical literacy in creative pursuits.</p>
      
      <p>This shift is being driven by several factors:</p>
      
      <ul>
        <li>The growing demand for professionals who can bridge technical and creative domains</li>
        <li>The recognition that innovation often happens at the intersection of disciplines</li>
        <li>The increasing accessibility of tools that blend art and technology</li>
        <li>The need for human creativity in an age of automation and artificial intelligence</li>
      </ul>
      
      <h2>Emerging Educational Models</h2>
      
      <p>Forward-thinking institutions are developing new curricula and pedagogical approaches that integrate art and technology in meaningful ways. These include:</p>
      
      <h3>Project-Based Learning</h3>
      
      <p>Rather than teaching art and technology as separate subjects, educators are increasingly using project-based approaches that require students to apply both creative and technical skills to solve complex problems. For example, students might be tasked with creating an interactive installation that communicates a social message, requiring them to consider both aesthetic choices and technical implementation.</p>
      
      <h3>Collaborative Studios</h3>
      
      <p>Some institutions are creating collaborative studio environments where students from different disciplines—such as fine arts, computer science, and design—work together on shared projects. This approach mirrors real-world creative technology environments and helps students develop the communication and collaboration skills needed to work across disciplinary boundaries.</p>
      
      <h3>Technology-Enhanced Arts Education</h3>
      
      <p>Arts programs are increasingly incorporating technology into their curricula, recognizing that digital tools are now fundamental to many creative practices. This includes everything from digital painting and 3D modeling to interactive media and virtual reality.</p>
      
      <h2>Case Studies in Creative Education</h2>
      
      <p>Several institutions are leading the way in reimagining creative education for the digital age:</p>
      
      <h3>Rhode Island School of Design (RISD)</h3>
      
      <p>RISD's STEM to STEAM initiative advocates for adding Art to the traditional STEM subjects (Science, Technology, Engineering, and Mathematics). The program emphasizes the importance of design thinking and creative problem-solving in innovation and has influenced educational policy at both the state and national levels.</p>
      
      <h3>MIT Media Lab</h3>
      
      <p>The MIT Media Lab exemplifies the power of interdisciplinary collaboration, bringing together researchers from diverse backgrounds to work on projects that span art, design, science, and technology. The lab's "antidisciplinary" approach has led to groundbreaking innovations in areas such as wearable computing, tangible interfaces, and affective computing.</p>
      
      <h2>Challenges and Opportunities</h2>
      
      <p>Despite the clear benefits of integrating art and technology in education, there are challenges to implementing these approaches:</p>
      
      <h3>Institutional Silos</h3>
      
      <p>Many educational institutions are still organized around traditional disciplinary boundaries, making it difficult to create truly integrated programs. Overcoming these structural barriers requires leadership commitment and new organizational models.</p>
      
      <h3>Assessment Challenges</h3>
      
      <p>Traditional assessment methods may not adequately capture the complex skills developed through interdisciplinary learning. Educators need to develop new approaches to evaluating both technical proficiency and creative innovation.</p>
      
      <h3>Access and Equity</h3>
      
      <p>Ensuring equitable access to both artistic and technological resources remains a challenge, particularly in underresourced communities. Addressing this requires investment in infrastructure, tools, and teacher training.</p>
      
      <h2>The Future of Creative Education</h2>
      
      <p>As we look to the future, several trends are likely to shape the evolution of creative education:</p>
      
      <h3>Personalized Learning Pathways</h3>
      
      <p>Advances in educational technology are making it possible to create more personalized learning experiences that adapt to individual students' interests and learning styles. This could allow for more fluid movement between artistic and technical domains based on student passion and aptitude.</p>
      
      <h3>Industry-Education Partnerships</h3>
      
      <p>Closer collaboration between educational institutions and industry can help ensure that curricula remain relevant to real-world needs and provide students with authentic learning experiences. These partnerships can take many forms, from guest lectures and workshops to internships and collaborative projects.</p>
      
      <h3>Lifelong Learning Models</h3>
      
      <p>As the pace of technological change accelerates, the need for continuous learning throughout one's career becomes more important. Educational institutions are developing new models for lifelong learning that allow professionals to update their skills and explore new creative and technical domains throughout their lives.</p>
      
      <h2>Conclusion</h2>
      
      <p>The future of creative education lies at the intersection of art and technology. By breaking down traditional disciplinary boundaries and fostering environments where creative and technical skills can flourish together, educational institutions can prepare students for a future where the ability to navigate between these domains will be increasingly valuable.</p>
      
      <p>As we continue to explore this frontier, we must remain committed to principles of access, equity, and inclusion, ensuring that the benefits of integrated creative education are available to all students, regardless of background or circumstance.</p>
      
      <p>The institutions and educators who embrace this challenge will not only better serve their students but will also contribute to a more innovative, creative, and humane technological future.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "September 5, 2023",
    readTime: "8 min read",
    category: "Education",
    author: {
      name: "Alex Chen",
      bio: "Founder & Creative Director at EATEK with a background in educational technology and digital arts.",
      image: "/placeholder.svg?height=100&width=100",
      initials: "AC",
    },
    relatedPosts: [
      {
        title: "Designing Learning Experiences for Gen Z",
        slug: "designing-learning-experiences-gen-z",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "The Role of AI in Creative Processes",
        slug: "role-ai-creative-processes",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Art in the Digital Age: Beyond NFTs",
        slug: "art-digital-age-beyond-nfts",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-teal-50 via-blue-50 to-background">
        <div className="container px-4 md:px-6">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all articles
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Badge variant="secondary" className="bg-teal-600 text-white hover:bg-teal-700 mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-6 max-w-4xl">{post.title}</h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={post.author.image || "/placeholder.svg"} alt={post.author.name} />
                  <AvatarFallback className="bg-teal-100 text-teal-800">{post.author.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">Author</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{post.date}</span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{post.readTime}</span>
              </div>

              <Button variant="outline" size="sm" className="ml-auto">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Image */}
      <AnimatedSection direction="up" delay={0.3}>
        <div className="relative h-[300px] md:h-[500px] w-full">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>
      </AnimatedSection>

      {/* Article Content */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <AnimatedSection className="lg:col-span-8">
              <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-headings:font-bold prose-p:text-muted-foreground prose-a:text-teal-600 hover:prose-a:text-teal-700 prose-img:rounded-lg">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
            </AnimatedSection>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <AnimatedSection direction="left" className="mb-8">
                  <div className="bg-teal-50 rounded-lg p-6 border border-teal-100">
                    <h3 className="text-xl font-bold mb-4">About the Author</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={post.author.image || "/placeholder.svg"} alt={post.author.name} />
                        <AvatarFallback className="bg-teal-100 text-teal-800 text-lg">
                          {post.author.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold">{post.author.name}</h4>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{post.author.bio}</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="left" delay={0.1}>
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                    <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {post.relatedPosts.map((relatedPost, index) => (
                        <Link key={index} href={`/blog/${relatedPost.slug}`} className="block group">
                          <div className="flex gap-3">
                            <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                              <Image
                                src={relatedPost.image || "/placeholder.svg"}
                                alt={relatedPost.title}
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                              />
                            </div>
                            <h4 className="font-medium group-hover:text-teal-600 transition-colors">
                              {relatedPost.title}
                            </h4>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-teal-100 to-blue-100">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">Enjoyed this article?</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter to get more insights on education, art, and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-teal-200 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
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
