"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function FounderMessage() {
  return (
    <section className="py-24 md:py-32 px-6 relative z-10 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-20 items-center">
        
        {/* Left Column: Massive Editorial Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
          className="w-full md:w-5/12 relative"
        >
          <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 shadow-[0_0_60px_rgba(67,97,238,0.1)] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/Ubuzz/founder.jpeg" 
              alt="Tharun - Founder of Ubuzz" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Elegant overlay fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
            
            <div className="absolute bottom-10 left-10 right-10 z-10">
              <h3 className="text-4xl md:text-5xl font-[Plus_Jakarta_Sans] font-bold text-white tracking-tight mb-2">Tharun</h3>
              <p className="text-[#4361EE] font-semibold tracking-[0.2em] text-xs uppercase">Founder & Creative Director</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Minimalist Typography & Message */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-7/12 flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-[#4361EE]"></span>
            <span className="text-[#4361EE] font-bold text-xs tracking-[0.2em] uppercase">The Vision</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-[Plus_Jakarta_Sans] font-bold tracking-tight text-white mb-10 leading-[1.05]">
            Built by someone who<br className="hidden md:block" /> actually <span className="text-[#4361EE]">cares.</span>
          </h2>

          <div className="space-y-8 text-[#a1a1aa] text-lg md:text-xl leading-relaxed font-light max-w-2xl border-l border-white/10 pl-6 md:pl-10">
            <p>
              &quot;I started Ubuzz because I was tired of seeing good businesses get burned by agencies that over-promised and under-delivered. Here, there are no generic templates and no &apos;account managers&apos; who don&apos;t understand your business.&quot;
            </p>
            <p>
              &quot;Every client acts as a deep partner. Your success literally dictates our success. We take on a limited number of projects each month because quality simply isn&apos;t negotiable.&quot;
            </p>
          </div>

          {/* Minimal Contact Action */}
          <div className="mt-14 flex items-center">
            <a 
              href="mailto:contactubuzz@gmail.com" 
              className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full pr-8 pl-2 py-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(67,97,238,0.15)] backdrop-blur-md"
            >
              <div className="w-12 h-12 rounded-full bg-[#4361EE]/20 flex items-center justify-center text-[#4361EE] group-hover:bg-[#4361EE] group-hover:text-black transition-colors shrink-0">
                <Mail size={20} />
              </div>
              <span className="text-white text-base md:text-xl font-medium tracking-wide">contactubuzz@gmail.com</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
