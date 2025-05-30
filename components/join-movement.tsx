"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Building, Briefcase, Palette } from "lucide-react"

export default function JoinMovement() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const [category, setCategory] = useState<string>("creator")

  return (
    <section id="join" ref={sectionRef} className="py-20 bg-gradient-to-b from-background/90 to-background">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-800">
            Join the Movement / Early Builders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            EATEK is not launching a product. We're activating a future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start space-x-4 p-6 rounded-lg border bg-card hover:border-teal-500 transition-all">
              <Palette className="h-8 w-8 text-teal-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Creators</h3>
                <p className="text-muted-foreground">
                  Join as collaborators, artists, beta-testers. Help shape tools that understand your creative process.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 rounded-lg border bg-card hover:border-teal-500 transition-all">
              <Building className="h-8 w-8 text-teal-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Institutions</h3>
                <p className="text-muted-foreground">
                  Partner for innovation & pilot programs. Bring emotional utility to your organization.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 rounded-lg border bg-card hover:border-teal-500 transition-all">
              <Briefcase className="h-8 w-8 text-teal-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Investors/Supporters</h3>
                <p className="text-muted-foreground">
                  Be part of the emotional utility era. Support the vision that's redefining the intersection of
                  creativity and technology.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="p-8 rounded-lg border bg-gradient-to-br from-white to-teal-50 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 text-blue-800">Express Interest</h3>

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
                <Label>I am a:</Label>
                <RadioGroup defaultValue="creator" className="grid grid-cols-2 gap-4" onValueChange={setCategory}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="creator" id="creator" />
                    <Label htmlFor="creator">Creator</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="educator" id="educator" />
                    <Label htmlFor="educator">Educator</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="organization" id="organization" />
                    <Label htmlFor="organization">Organization</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="investor" id="investor" />
                    <Label htmlFor="investor">Investor</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">How would you like to contribute?</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your interest in EATEK..."
                  className="min-h-[120px] border-teal-200 focus-visible:ring-teal-500"
                />
              </div>

              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                Submit
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
