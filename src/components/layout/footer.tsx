import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-glass-border bg-navy-900 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-electric-cyan to-electric-blue flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">U</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Ubuzz</span>
            </Link>
            <p className="text-foreground-muted max-w-sm mb-6 leading-relaxed">
              We build high-converting digital experiences. Minimal, fast, and engineered for growth. Let's elevate your brand together.
            </p>
            <div className="flex items-center gap-4 text-sm font-semibold text-foreground-muted">
              <Link href="#" className="hover:text-electric-blue transition-colors">X (Twitter)</Link>
              <Link href="#" className="hover:text-electric-blue transition-colors">Instagram</Link>
              <Link href="#" className="hover:text-electric-blue transition-colors">LinkedIn</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-foreground-muted">
              <li><Link href="/projects" className="hover:text-white transition-colors">Work</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Subscribe</h4>
            <p className="text-sm text-foreground-muted mb-4">Get the latest insights on conversion and design directly to your inbox.</p>
            <form className="flex border border-glass-border rounded-lg overflow-hidden focus-within:border-electric-blue transition-colors">
              <input type="email" placeholder="Enter your email" className="bg-transparent px-4 py-2 w-full outline-none text-white text-sm" />
              <button type="submit" className="bg-glass-hover hover:bg-glass flex items-center justify-center px-4 transition-colors">
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground-muted">
          <p>© {new Date().getFullYear()} Ubuzz Digital. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
