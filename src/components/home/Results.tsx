"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedNumber } from '../ui/AnimatedNumber';

export default function Results() {
  return (
    <section className="pb-24 pt-8 md:pt-12 px-6 relative z-10 w-full max-w-5xl mx-auto">
      <div className="relative w-full rounded-[2.5rem] bg-[#070707] border border-white/5 border-b-[#4361EE]/40 pb-12 pt-8 px-8 shadow-[0_15px_40px_-15px_rgba(67,97,238,0.15)] flex flex-col items-center">

        {/* Subtle blue bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#4361EE] to-transparent opacity-80 blur-[2px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[5px] bg-[#4361EE]/20 blur-xl rounded-full" />

        {/* Results Badge */}
        <div className="px-6 py-1.5 rounded-full border border-[#4361EE]/40 bg-[#4361EE]/10 text-white text-[15px] font-medium shadow-[0_0_20px_rgba(67,97,238,0.2)] mb-6">
          Results
        </div>

        <h2 className="text-5xl md:text-6xl font-[Plus_Jakarta_Sans] font-bold tracking-tight text-white mb-16 text-center">
          The proof is in the numbers
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="text-4xl font-bold text-white mb-2 leading-none">
              <AnimatedNumber value={1782} suffix="+" />
            </div>
            <div className="text-white text-lg font-medium tracking-tight">Videos Created</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="text-4xl font-bold text-white mb-2 leading-none">
              <AnimatedNumber value={2.0} suffix="B+" decimals={1} />
            </div>
            <div className="text-white text-lg font-medium tracking-tight">Views Generated</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="text-4xl font-bold text-white mb-2 leading-none">
              <AnimatedNumber value={826729} />
            </div>
            <div className="text-white text-lg font-medium tracking-tight">Total Count Hours</div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
