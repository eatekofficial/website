"use client"

import Hero from "@/components/gsap-hero"
import EcosystemMap from "@/components/ecosystem-map"
import TechnologyStack from "@/components/technology-stack"
import ComprehensiveSolutions from "@/components/comprehensive-solutions"
import CaseStudies from "@/components/case-studies"
import Testimonials from "@/components/testimonials"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Page() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Create animations
    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      gsap.fromTo(
        section.querySelectorAll("h2, h3, p, .animate-in"),
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    })

    return () => {
      // Clean up animations
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <EcosystemMap />
      <ComprehensiveSolutions />
      <TechnologyStack />
      <CaseStudies />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-400 to-blue-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Ideas into Reality?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our expertise in Education, Art, and Technology can help you create innovative solutions.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-teal-600 hover:bg-white/90 border-none">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
