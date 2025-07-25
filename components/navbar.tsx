"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })

      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-slate-900/90 backdrop-blur-md shadow-lg shadow-blue-500/10 py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="#home" className="relative w-56 h-16">
          <Image
            src="/portfolio/images/rocket.png"
            alt="Ali Mohsin Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-blue-400",
                  activeSection === link.href.substring(1) ? "text-blue-400" : "text-slate-300",
                )}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <a
            href="C:/Users/alimo/Documents/portfolio/public/AliMohsin.pdf"
            download
            className="bg-slate-700/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-500 text-blue-400 hover:text-white rounded-full p-3 transition-all duration-300 border border-slate-600 hover:border-transparent flex items-center gap-2"
          >
            <FileDown className="h-5 w-5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="h-8 w-8 text-blue-400" /> : <Menu className="h-8 w-8 text-blue-400" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md shadow-lg py-4">
          <nav className="container flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-blue-400 p-2",
                  activeSection === link.href.substring(1) ? "text-blue-400" : "text-slate-300",
                )}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                }}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="C:/Users/alimo/Documents/portfolio/public/AliMohsin.pdf"
              download
              className="text-lg font-medium transition-colors hover:text-blue-400 p-2 flex items-center gap-2"
            >
              <FileDown className="h-5 w-5" />
              <span>Resume</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
