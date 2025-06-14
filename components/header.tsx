"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import EATeK from "@/public/EA.png"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      setActiveDropdown(null)
    }
  }

  const toggleDropdown = (dropdown: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeAll = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href && href !== '#') {
        window.location.href = href;
      }
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLAnchorElement;
    const href = target.getAttribute('href');
    if (href) {
      window.location.href = href;
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-sm shadow-sm" ref={dropdownRef}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={closeAll}>
          <Image src={EATeK} alt="EATEK Logo" width={200} height={200}/>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative">
            <Link 
              href="/solutions"
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              onClick={(e) => toggleDropdown("solutions", e)}
            >
              Solutions <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
            </Link>
            <div 
              className={`absolute left-0 top-full mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-gray-200 transition-all duration-200 ${
                activeDropdown === "solutions" ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div className="py-2">
                <Link 
                  href="/education" 
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeAll}
                >
                  Education Solutions
                </Link>
                <Link 
                  href="/art" 
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeAll}
                >
                  Creative Technologies
                </Link>
                <Link 
                  href="/technology" 
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeAll}
                >
                  Enterprise Software
                </Link>
                <div className="border-t border-gray-200 my-2"></div>
                <Link 
                  href="/solutions" 
                  className="block py-2 px-4 text-sm text-teal-600 hover:bg-gray-100"
                  onClick={closeAll}
                >
                  View All Solutions
                </Link>
              </div>
            </div>
          </div>

          <Link 
            href="/products" 
            className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            onClick={handleLinkClick}
          >
            Products
          </Link>

          <div className="relative">
            <Link 
              href="/services"
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              onClick={(e) => toggleDropdown("services", e)}
            >
              Services <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
            </Link>
            <div 
              className={`absolute left-0 top-full mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-gray-200 transition-all duration-200 ${
                activeDropdown === "services" ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div className="py-2">
                <Link 
                  href="/consulting" 
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeAll}
                >
                  IT Consulting
                </Link>
                <Link 
                  href="/development" 
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeAll}
                >
                  Custom Development
                </Link>
                <Link 
                  href="/integration" 
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeAll}
                >
                  System Integration
                </Link>
                <div className="border-t border-gray-200 my-2"></div>
                <Link 
                  href="/services" 
                  className="block py-2 px-4 text-sm text-teal-600 hover:bg-gray-100"
                  onClick={closeAll}
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>

          <Link 
            href="/blog" 
            className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            onClick={handleLinkClick}
          >
            Insights
          </Link>

          <Link 
            href="/community" 
            className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            onClick={handleLinkClick}
          >
            Community
          </Link>

          <Link 
            href="/about" 
            className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
            onClick={handleLinkClick}
          >
            About Us
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild size="sm" className="hidden md:flex bg-gradient-to-r from-cyan-500 via-purple-500 to-red-500 hover:from-cyan-600 hover:via-purple-600 hover:to-red-600">
            <Link href="/contact" onClick={closeAll}>Contact Us</Link>
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
                onClick={() => toggleDropdown("mobile-solutions", {} as React.MouseEvent)}
              >
                Solutions
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeDropdown === "mobile-solutions" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "mobile-solutions" && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link
                    href="/education"
                    className="block text-sm text-gray-600 hover:text-teal-600"
                    onClick={closeAll}
                  >
                    Education Solutions
                  </Link>
                  <Link
                    href="/art"
                    className="block text-sm text-gray-600 hover:text-teal-600"
                    onClick={closeAll}
                  >
                    Creative Technologies
                  </Link>
                  <Link
                    href="/technology"
                    className="block text-sm text-gray-600 hover:text-teal-600"
                    onClick={closeAll}
                  >
                    Enterprise Software
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/products"
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              onClick={handleLinkClick}
            >
              Products
            </Link>

            <div>
              <button
                className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => toggleDropdown("mobile-services", {} as React.MouseEvent)}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeDropdown === "mobile-services" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "mobile-services" && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link
                    href="/consulting"
                    className="block text-sm text-gray-600 hover:text-teal-600"
                    onClick={closeAll}
                  >
                    IT Consulting
                  </Link>
                  <Link
                    href="/development"
                    className="block text-sm text-gray-600 hover:text-teal-600"
                    onClick={closeAll}
                  >
                    Custom Development
                  </Link>
                  <Link
                    href="/integration"
                    className="block text-sm text-gray-600 hover:text-teal-600"
                    onClick={closeAll}
                  >
                    System Integration
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              onClick={handleLinkClick}
            >
              Insights
            </Link>

            <Link
              href="/community"
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              onClick={handleLinkClick}
            >
              Community
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
              onClick={handleLinkClick}
            >
              About Us
            </Link>

            <Button asChild size="sm" className="w-full bg-teal-600 hover:bg-teal-700 mt-4">
              <Link href="/contact" onClick={closeAll}>
                Contact Us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
