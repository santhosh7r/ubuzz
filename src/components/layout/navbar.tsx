"use client"
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <nav className={`mx-auto max-w-6xl px-6 lg:px-8 py-3 rounded-2xl flex items-center justify-between transition-all duration-300 ${scrolled ? 'glass-panel mx-4 lg:mx-auto' : 'bg-transparent'}`}>
        <Link href="/" className="flex items-center gap-2 relative z-10 group">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-electric-cyan to-electric-blue flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-bold text-xl leading-none">U</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Ubuzz</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-1 glass-panel px-2 py-1 rounded-full bg-glass">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link key={link.href} href={link.href} className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-white text-foreground-muted">
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-glass-hover rounded-full z-0 border border-glass-border"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:inline-flex rounded-full">Book a Call</Button>
          <Button className="rounded-full" variant="gradient">Get Started</Button>
        </div>
      </nav>
    </header>
  )
}
