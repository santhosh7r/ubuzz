"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative z-10 pt-48 pb-20 md:pt-56 md:pb-32 px-6 flex flex-col items-center justify-center text-center max-w-6xl mx-auto min-h-[90vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-10"
      >
        <div className="flex -space-x-3">
          {["/Tlogo/1.jpeg", "/Tlogo/2.jpeg", "/Tlogo/3.jpeg", "/Tlogo/10.jpeg"].map((imgSrc, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} className="w-12 h-12 rounded-full border-2 border-black object-cover relative z-10" src={imgSrc} alt={`Brand ${i + 1}`} />
          ))}
        </div>
        <span className="text-sm sm:text-base text-gray-400 font-medium tracking-wide">
          Trusted by <span className="text-white font-semibold">117+</span> brands who care about quality
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl md:text-7xl lg:text-[5.5rem] font-[Plus_Jakarta_Sans] font-extrabold tracking-[-0.03em] leading-[1.05] mb-8"
      >
        Build authority with work<br className="hidden md:block" /> that <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-300 to-gray-600">actually converts.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
      >
        We turn your raw ideas into digital machines that build authority, grow your audience, and actually convert. No fluff. No delays. Just results.
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
        <Link href="#contact" className="group inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full pr-8 pl-2 py-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(67,97,238,0.15)] backdrop-blur-md">
          <div className="w-12 h-12 rounded-full bg-[#4361EE]/20 flex items-center justify-center text-[#4361EE] group-hover:bg-[#4361EE] group-hover:text-black transition-colors shrink-0">
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </div>
          <span className="text-white text-base md:text-lg font-medium tracking-wide">Book Your Free Strategy Call</span>
        </Link>
      </motion.div>
    </section>
  );
}
