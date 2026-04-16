"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-black/70 backdrop-blur-2xl py-2"
          : "bg-transparent py-4"
          } ${isMenuOpen ? "bg-transparent" : ""}`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">

          {/* DESKTOP LEFT — LOGO */}
          <div className="hidden md:flex items-center">
            <Link href="/" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Ubuzz/logo.PNG" alt="Ubuzz" className="h-[64px] w-auto drop-shadow-lg object-contain" />
            </Link>
          </div>

          {/* DESKTOP CENTER — NAV LINKS */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/#services"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide"
            >
              Our Services
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide"
            >
              Portfolio
            </Link>
          </div>

          {/* DESKTOP RIGHT — CTA */}
          <div className="hidden md:flex">
            <Link
              href="https://cal.com/ubuzz-in/30min"
              className="group inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full pr-5 pl-1.5 py-1.5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(67,97,238,0.15)] backdrop-blur-md"
            >
              <div className="w-8 h-8 rounded-full bg-[#4361EE]/20 flex items-center justify-center text-[#4361EE] group-hover:bg-[#4361EE] group-hover:text-black transition-colors shrink-0">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </div>
              <span className="text-white text-sm font-medium tracking-wide">Book a Quick Call</span>
            </Link>
          </div>

          {/* MOBILE LEFT — LOGO */}
          <div className="md:hidden flex items-center -ml-2">
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Ubuzz/logo.PNG" alt="Ubuzz" className="h-[52px] w-auto drop-shadow-lg object-contain pl-2" />
            </Link>
          </div>

          {/* MOBILE RIGHT — MENU BUTTON */}
          <div className="md:hidden ml-auto flex items-center relative z-[60]">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black pt-32 px-6 md:hidden flex flex-col items-center space-y-10 overflow-hidden"
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.3 }}>
              <Link href="/#services" onClick={toggleMenu} className="text-4xl sm:text-5xl font-bold text-gray-300 hover:text-white transition-colors font-[Plus_Jakarta_Sans] tracking-tight">
                Our Plans
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.3 }}>
              <Link href="/projects" onClick={toggleMenu} className="text-4xl sm:text-5xl font-bold text-gray-300 hover:text-white transition-colors font-[Plus_Jakarta_Sans] tracking-tight">
                Case-Studies
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.3 }} className="w-full flex justify-center mt-8">
              <Link href="https://cal.com/santhosh-perumal" onClick={toggleMenu} className="group inline-flex items-center w-full max-w-[280px] gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full pr-8 pl-2 py-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(67,97,238,0.15)] backdrop-blur-md">
                <div className="w-12 h-12 rounded-full bg-[#4361EE]/20 flex items-center justify-center text-[#4361EE] group-hover:bg-[#4361EE] group-hover:text-black transition-colors shrink-0">
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
                <span className="text-white text-base font-medium tracking-wide mx-auto">Book a Quick Call</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
