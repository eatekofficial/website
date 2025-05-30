import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight, ChevronRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold text-sm">
                E
              </div>
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
                EATEK
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Building innovative solutions at the intersection of Education, Art, and Technology.
            </p>

            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-600 mt-0.5" />
                <p className="text-sm text-gray-600">
                  123 Innovation Way
                  <br />
                  Tech District, CA 94103
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-teal-600" />
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-teal-600" />
                <p className="text-sm text-gray-600">contact@eatek.com</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Solutions</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/education"
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors flex items-center gap-1 group"
              >
                <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-teal-600 transition-colors" />
                Education Solutions
              </Link>
              <Link
                href="/art"
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors flex items-center gap-1 group"
              >
                <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-teal-600 transition-colors" />
                Creative Technologies
              </Link>
              <Link
                href="/technology"
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors flex items-center gap-1 group"
              >
                <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-teal-600 transition-colors" />
                Enterprise Software
              </Link>
              <Link
                href="/consulting"
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors flex items-center gap-1 group"
              >
                <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-teal-600 transition-colors" />
                IT Consulting
              </Link>
              <Link
                href="/development"
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors flex items-center gap-1 group"
              >
                <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-teal-600 transition-colors" />
                Custom Development
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors flex items-center gap-1 group"
              >
                <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-teal-600 transition-colors" />
                About Us
              </Link>
              <Link
                href="/blog"
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors flex items-center gap-1 group"
              >
                <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-teal-600 transition-colors" />
                Insights
              </Link>
              <Link
                href="/community"
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors flex items-center gap-1 group"
              >
                <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-teal-600 transition-colors" />
                Community
              </Link>
              <Link
                href="/careers"
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors flex items-center gap-1 group"
              >
                <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-teal-600 transition-colors" />
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-600 hover:text-teal-600 transition-colors flex items-center gap-1 group"
              >
                <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-teal-600 transition-colors" />
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Stay Connected</h3>
            <p className="text-sm text-gray-600">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your email"
                type="email"
                className="max-w-xs border-gray-300 focus-visible:ring-teal-500"
              />
              <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-4 pt-2">
              <Link
                href="#"
                className="text-gray-500 hover:text-teal-600 transition-colors p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-teal-600 transition-colors p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-teal-600 transition-colors p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-teal-600 transition-colors p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} EATEK Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-teal-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-teal-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-gray-500 hover:text-teal-600 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
