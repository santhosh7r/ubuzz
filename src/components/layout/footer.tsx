"use client"
import Link from "next/link"
import { ArrowUpRight, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#030303] pt-32 pb-8 px-6 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col">

        {/* Top Section: CTA & Big Statement */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-[Plus_Jakarta_Sans] font-bold text-white tracking-tight mb-8 leading-[1.1]">
              Ready to build <br /> something <span className="text-[#4361EE]">exceptional?</span>
            </h2>
            <a
              href="mailto:contactubuzz@gmail.com"
              className="group inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full pr-8 pl-2 py-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(67,97,238,0.15)] backdrop-blur-md"
            >
              <div className="w-12 h-12 rounded-full bg-[#4361EE]/20 flex items-center justify-center text-[#4361EE] group-hover:bg-[#4361EE] group-hover:text-black transition-colors shrink-0">
                <Mail size={20} />
              </div>
              <span className="text-white text-lg md:text-xl font-medium tracking-wide">contactubuzz@gmail.com</span>
            </a>
          </div>

          {/* Location / Meta info */}
          <div className="flex flex-col text-[#a1a1aa] font-medium text-sm space-y-2">
            <p className="text-white">Based in</p>
            <p>India — operating globally.</p>
          </div>
        </div>

        {/* Bottom Section: Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-12 gap-12 text-sm font-medium text-gray-400">

          <div className="flex flex-col items-start gap-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Ubuzz/logo.PNG" alt="Ubuzz" className="h-10 w-auto object-contain drop-shadow-lg opacity-90" />
            <p className="text-xs text-gray-500 max-w-xs leading-relaxed mt-2">
              Elite digital experiences and conversion-focused systems for market leaders.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="text-white uppercase tracking-widest text-[#4361EE] font-bold text-[10px] mb-2">Socials</h4>
              <Link href="https://www.instagram.com/ubuzz.in?igsh=NWM5YW41NTdkeW43" target="_blank" className="hover:text-white hover:translate-x-1 transition-transform">Instagram</Link>
              <Link href="https://www.linkedin.com/company/ubuzz-in/" target="_blank" className="hover:text-white hover:translate-x-1 transition-transform">LinkedIn</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white uppercase tracking-widest text-[#4361EE] font-bold text-[10px] mb-2">Navigation</h4>
              <Link href="/#services" className="hover:text-white hover:translate-x-1 transition-transform">Our Services</Link>
              <Link href="/projects" className="hover:text-white hover:translate-x-1 transition-transform">Portfolio</Link>
              <Link href="https://cal.com/santhosh-perumal" target="_blank" className="hover:text-[#4361EE] transition-colors flex items-center gap-1 group">
                Book Call <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* Footer Meta Strip */}
        <div className="w-full flex justify-center items-center mt-16 pt-8 border-t border-white/5 text-xs text-gray-600 font-mono">
          <p>© {new Date().getFullYear()} Ubuzz Digital. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}
