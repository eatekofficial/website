"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Palette, Cpu } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function BlogPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const blogPosts = [
    {
      title: "The Convergence of Education and Technology in 2023",
      description:
        "Exploring how educational institutions are leveraging technology to create more engaging and effective learning experiences.",
      icon: <BookOpen className="h-12 w-12 text-teal-600/70" />,
      date: "June 15, 2023",
      category: "Education",
      author: {
        name: "Alex Chen",
        initials: "AC",
      },
      slug: "convergence-education-technology-2023",
    },
    {
      title: "Art in the Digital Age: Beyond NFTs",
      description:
        "How artists are using technology to create immersive experiences and reach new audiences beyond the NFT boom.",
      icon: <Palette className="h-12 w-12 text-teal-600/70" />,
      date: "July 22, 2023",
      category: "Art",
      author: {
        name: "Maya Rodriguez",
        initials: "MR",
      },
      slug: "art-digital-age-beyond-nfts",
    },
    {
      title: "Building Emotional Utility into Tech Products",
      description:
        "Why the next generation of technology needs to prioritize emotional connection and human-centered design.",
      icon: <Cpu className="h-12 w-12 text-teal-600/70" />,
      date: "August 10, 2023",
      category: "Technology",
      author: {
        name: "Jordan Taylor",
        initials: "JT",
      },
      slug: "building-emotional-utility-tech-products",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="blog" ref={sectionRef} className="py-20 bg-gradient-to-b from-background/90 to-background">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-blue-600 to-teal-600">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, ideas, and explorations at the intersection of education, art, and technology.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow border-teal-100 hover:border-teal-300">
                  <div className="h-48 w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50">
                    {post.icon}
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
                        <AvatarFallback className="bg-teal-100 text-teal-800">{post.author.initials}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{post.author.name}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-teal-600" />
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
