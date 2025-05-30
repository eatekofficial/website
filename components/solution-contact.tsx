"use client"

import Link from "next/link"
import { Mail, MessageSquare, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SolutionContactProps {
  categoryColor: string
}

export default function SolutionContact({ categoryColor }: SolutionContactProps) {
  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Need Help?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Our solution experts are ready to answer your questions and help you find the right solution for your needs.
        </p>

        <div className="space-y-3">
          <Button className={`w-full bg-gradient-to-r ${categoryColor}`} asChild>
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Sales
            </Link>
          </Button>

          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="w-full" asChild>
              <Link href="tel:+1234567890">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Link>
            </Button>

            <Button variant="outline" className="w-full" asChild>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  // Open chat widget
                  console.log("Open chat widget")
                }}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Live Chat
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
