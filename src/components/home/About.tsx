"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-6 relative z-10 bg-black min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background structural elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTM5LjUgMzkuNUgwVjBoMzkuNXYzOS41em0tMzktWndtMSAzOEgxVjFoMzd2MzdaIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIi8+Cjwvc3ZnPg==')] opacity-40 mix-blend-overlay" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Massive Typography Set */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center z-20 pointer-events-none">
          <h2 className="text-5xl md:text-6xl font-[Plus_Jakarta_Sans] font-bold tracking-tight text-white mb-8 mt-4 text-center leading-[1.1]">
            We engineer <span className="text-[#4361EE]">unfair</span> advantages.
          </h2>
        </motion.div>

        {/* The Core Visual Anchor */}
        <div className="relative w-full max-w-4xl mx-auto h-[350px] md:h-[450px] mt-[-40px] md:mt-[-80px] flex items-center justify-center pointer-events-none z-10">
          {/* Pulsing Core Gradients */}
          <motion.div animate={{ scale: [1, 1.05, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-[#4361EE]/20 blur-[80px] md:blur-[100px] rounded-full mix-blend-screen" />
          <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute w-[150px] h-[150px] md:w-[250px] md:h-[250px] bg-[#4361EE]/10 blur-[60px] rounded-full mix-blend-screen" />

          {/* Abstract Glass Shape */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
            className="w-40 h-40 md:w-64 md:h-64 rounded-full border border-white/10 bg-black/40 backdrop-blur-3xl shadow-[0_0_80px_rgba(1,153,255,0.15)] flex items-center justify-center relative overflow-hidden"
          >
            {/* Inner crosshairs */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#4361EE]/40 to-transparent absolute top-1/2 -translate-y-1/2" />
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#4361EE]/40 to-transparent absolute left-1/2 -translate-x-1/2" />

            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-[#4361EE]/30 shadow-[0_0_40px_rgba(1,153,255,0.4)] flex items-center justify-center bg-black/90 z-10">
              <Zap className="text-[#4361EE] w-5 h-5 md:w-7 md:h-7" />
            </div>
          </motion.div>
        </div>

        {/* Asymmetrical Floating Glass Tenets */}
        <div className="w-full relative max-w-6xl mx-auto -mt-16 md:-mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 z-30 pb-10">

          {/* Tenet I */}
          <motion.div
            animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            className="premium-card p-8 md:p-10 border border-white/10 bg-[#050505]/80 backdrop-blur-2xl rounded-[2rem] relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4361EE]/10 blur-[50px] pointer-events-none transition-all duration-700 group-hover:scale-150 group-hover:bg-[#4361EE]/20" />
            <div className="text-[#4361EE] text-[11px] font-bold tracking-[0.2em] uppercase mb-8 opacity-80">01 // Execution</div>
            <h3 className="text-2xl font-[Plus_Jakarta_Sans] font-bold text-white mb-4 tracking-tight">Tactical Precision.</h3>
            <p className="text-[#a1a1aa] text-sm leading-relaxed">No fluff, no vanity metrics. We construct digital systems engineered strictly for aggressive scale and pure revenue growth.</p>
          </motion.div>

          {/* Tenet II (Lowered) */}
          <motion.div
            animate={{ y: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="premium-card p-8 md:p-10 border border-white/10 bg-[#050505]/80 backdrop-blur-2xl rounded-[2rem] relative overflow-hidden group md:translate-y-16 shadow-2xl"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#4361EE]/10 blur-[50px] pointer-events-none transition-all duration-700 group-hover:scale-150 group-hover:bg-[#4361EE]/20" />
            <div className="text-[#4361EE] text-[11px] font-bold tracking-[0.2em] uppercase mb-8 opacity-80">02 // Aesthetics</div>
            <h3 className="text-2xl font-[Plus_Jakarta_Sans] font-bold text-white mb-4 tracking-tight">Design Elite.</h3>
            <p className="text-[#a1a1aa] text-sm leading-relaxed">Aesthetic excellence isn't an option. We craft striking, high-voltage visual identities that command supreme authority in your market.</p>
          </motion.div>

          {/* Tenet III */}
          <motion.div
            animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="premium-card p-8 md:p-10 border border-white/10 bg-[#050505]/80 backdrop-blur-2xl rounded-[2rem] relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-1/2 right-0 w-32 h-32 bg-[#4361EE]/10 blur-[50px] pointer-events-none transition-all duration-700 group-hover:scale-150 group-hover:bg-[#4361EE]/20" />
            <div className="text-[#4361EE] text-[11px] font-bold tracking-[0.2em] uppercase mb-8 opacity-80">03 // Impact</div>
            <h3 className="text-2xl font-[Plus_Jakarta_Sans] font-bold text-white mb-4 tracking-tight">Pure Scale.</h3>
            <p className="text-[#a1a1aa] text-sm leading-relaxed">Ideas mean nothing without eyeballs. We deploy high-converting creative that absolutely dominates algorithms globally.</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
