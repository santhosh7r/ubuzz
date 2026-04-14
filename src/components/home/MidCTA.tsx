"use client"
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function MidCTA() {
  return (
    <section className="py-32 px-6 relative z-10 w-full max-w-6xl mx-auto">
      <div className="bg-[#050505] border border-white/5 rounded-[2rem] md:rounded-[3rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden">

        <h2 className="text-5xl md:text-6xl font-[Plus_Jakarta_Sans] font-bold tracking-tight text-white mb-6">Spots are strictly limited.</h2>
        <p className="text-[#a1a1aa] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-light">
          We cap our client intake to guarantee elite quality across every single project.
        </p>
        <Link href="#contact" className="group inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full pr-8 pl-2 py-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(67,97,238,0.15)] backdrop-blur-md">
          <div className="w-12 h-12 rounded-full bg-[#4361EE]/20 flex items-center justify-center text-[#4361EE] group-hover:bg-[#4361EE] group-hover:text-black transition-colors shrink-0">
            <ArrowUpRight size={20} strokeWidth={2.5} />
          </div>
          <span className="text-white text-base md:text-lg font-medium tracking-wide">Check Availability</span>
        </Link>
      </div>
    </section>
  );
}
