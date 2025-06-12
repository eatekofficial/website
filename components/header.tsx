"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import EATeK from "@/public/EA.png"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* <div className="h-8 w-8 flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold text-sm">
            E
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
            EATEK
          </span> */}
        <Image src={EATeK} alt="EATEK Logo" width={200} height={200}/>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative group">
            {/* <button
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => toggleDropdown("solutions")}
            >
              Solutions <ChevronDown className="h-4 w-4" />
            </button> */}
            <div className="absolute left-0 top-full mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2 px-3">
                <Link href="/education" className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Education Solutions
                </Link>
                <Link href="/art" className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Creative Technologies
                </Link>
                <Link href="/technology" className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Enterprise Software
                </Link>
                <div className="border-t border-gray-200 my-2"></div>
                <Link href="/solutions" className="block py-2 px-3 text-sm text-teal-600 hover:bg-gray-100 rounded-md">
                  View All Solutions
                </Link>
              </div>
            </div>
          </div>

          <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
            Products
          </Link>

          <div className="relative group">
            <button
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => toggleDropdown("services")}
            >
              Services <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2 px-3">
                <Link href="/consulting" className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  IT Consulting
                </Link>
                <Link
                  href="/development"
                  className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Custom Development
                </Link>
                <Link
                  href="/integration"
                  className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  System Integration
                </Link>
                <div className="border-t border-gray-200 my-2"></div>
                <Link href="/services" className="block py-2 px-3 text-sm text-teal-600 hover:bg-gray-100 rounded-md">
                  View All Services
                </Link>
              </div>
            </div>
          </div>

          <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
            Insights
          </Link>

          <Link href="/community" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
            Community
          </Link>

          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
            About Us
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild size="sm" className="hidden md:flex  bg-gradient-to-r from-cyan-500 via-purple-500 to-red-500 hover:bg-teal-700">
            <Link href="/contact">Contact Us</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-teal-600 hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <div>
              <button
                className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => toggleDropdown("mobile-solutions")}
              >
                Solutions{" "}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeDropdown === "mobile-solutions" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "mobile-solutions" && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link
                    href="/education"
                    className="block text-sm text-gray-600 hover:text-teal-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Education Solutions
                  </Link>
                  <Link
                    href="/art"
                    className="block text-sm text-gray-600 hover:text-teal-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Creative Technologies
                  </Link>
                  <Link
                    href="/technology"
                    className="block text-sm text-gray-600 hover:text-teal-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Enterprise Software
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/products"
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>

            <div>
              <button
                className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => toggleDropdown("mobile-services")}
              >
                Services{" "}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeDropdown === "mobile-services" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "mobile-services" && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link
                    href="/consulting"
                    className="block text-sm text-gray-600 hover:text-teal-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    IT Consulting
                  </Link>
                  <Link
                    href="/development"
                    className="block text-sm text-gray-600 hover:text-teal-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Custom Development
                  </Link>
                  <Link
                    href="/integration"
                    className="block text-sm text-gray-600 hover:text-teal-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    System Integration
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Insights
            </Link>

            <Link
              href="/community"
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>

            <Button asChild size="sm" className="w-full bg-teal-600 hover:bg-teal-700 mt-4">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
