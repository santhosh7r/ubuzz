"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, MonitorSmartphone } from "lucide-react"
import Script from "next/script"

const VIDEOS = [
  { src: "https://res.cloudinary.com/dxzrqorub/video/upload/v1776533919/IMG_6853_uuwcx1.mp4", title: "SaaS Expansion", industry: "B2B Tech", duration: "0:45" },
  { src: "https://res.cloudinary.com/dxzrqorub/video/upload/v1776533918/IMG_6852_hufz55.mp4", title: "Brand Identity", industry: "Apparel", duration: "1:02" },
  { src: "https://res.cloudinary.com/dxzrqorub/video/upload/v1776533899/IMG_6851_pffz2h.mp4", title: "Organic Growth", industry: "Consulting", duration: "0:30" },
  { src: "https://res.cloudinary.com/dxzrqorub/video/upload/v1776533887/IMG_6850_z07hrj.mp4", title: "Scale Phase", industry: "Fintech", duration: "0:56" },
  { src: "https://res.cloudinary.com/dxzrqorub/video/upload/v1776533881/IMG_6849_f6flfc.mp4", title: "Local Domination", industry: "Real Estate", duration: "0:41" },
];

type Website = {
  serial: string;
  title: string;
  category: string;
  desc: string;
  url?: string;
  image?: string;
  videoSrc?: string;
};

const WEBSITES: Website[] = [
  {
    serial: "01",
    title: "Winnerspin",
    category: "Fintech SaaS / CRM",
    desc: "An end-to-end CRM and customer portal to manage their entire financial operation. An enterprise-grade, custom SaaS infrastructure engineered for massive scalability.",
    url: "winnerspin.in",
    image: "/Ubuzz/ws.png"
  },
  {
    serial: "02",
    title: "Fitness 1 Studio",
    category: "High-Conversion Landing Page",
    desc: "A high-octane performance landing page engineered specifically for direct-response acquisition. Optimized for maximum aesthetic appeal and seamless visitor-to-lead throughput.",
    url: "fitness1transformationstudio.com",
    image: "/Ubuzz/ft.png"
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'video' | 'web'>('video');

  return (
    <div className="bg-[#000000] min-h-screen text-white relative flex flex-col font-sans selection:bg-[#4361EE]/30 selection:text-white">
      
      {/* ═════════ HEADER AND NAVIGATION ═════════ */}
      <div className="pt-32 pb-16 px-6 max-w-[1400px] mx-auto w-full relative z-10">
        <Link href="/" className="inline-flex items-center gap-4 text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 hover:text-white transition-colors mb-24 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-300" /> Back to Index
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/[0.05] pb-8 gap-10">
          <h1 className="text-[14vw] md:text-[8rem] font-[Plus_Jakarta_Sans] font-bold tracking-tighter leading-[0.85] text-white">
            Works.
          </h1>
          
          <div className="flex flex-col gap-3 font-[Plus_Jakarta_Sans]">
            <button
              onClick={() => setActiveTab('video')}
              className={`text-left text-2xl md:text-3xl font-medium transition-colors duration-500 tracking-tight ${activeTab === 'video' ? 'text-white' : 'text-[#333333] hover:text-gray-400'}`}
            >
              Motion & Content
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`text-left text-2xl md:text-3xl font-medium transition-colors duration-500 tracking-tight ${activeTab === 'web' ? 'text-white' : 'text-[#333333] hover:text-gray-400'}`}
            >
              Digital Platforms
            </button>
          </div>
        </div>
      </div>

      {/* ═════════ ACTIVE LAYOUT ═════════ */}
      <div className="flex-grow max-w-[1400px] mx-auto px-6 w-full pb-40 relative z-10">
        <AnimatePresence mode="wait">
          
          {/* MULTI-GRID VIDEO GALLERY */}
          {activeTab === 'video' && (
            <motion.div
              key="video"
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -10, filter: "blur(4px)" }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full relative"
            >
              {/* VIDEO PLAYER ASSETS REMOVED FOR NATIVE HTML5 */}

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-4">
                {VIDEOS.map((v, i) => (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 * i, duration: 0.6 }}
                    key={i}
                    className="relative group bg-[#050505] w-full aspect-[9/16] cursor-pointer rounded-[20px] overflow-hidden border border-white/[0.03] hover:border-white/[0.1] transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                  >
                    <video 
                      src={v.src}
                      className="w-full h-full object-cover scale-[1.02] transition-transform duration-700 group-hover:scale-105 pointer-events-none z-0" 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      ref={el => { if (el) el.playbackRate = 1.25; }} 
                    />



                    <div className="absolute inset-0 border border-white/10 rounded-[20px] pointer-events-none z-30" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ASYMMETRICAL WEB PLATFORMS LAYOUT */}
          {activeTab === 'web' && (
            <motion.div
              key="web"
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -10, filter: "blur(4px)" }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col w-full"
            >
              {/* VIDEO PLAYER ASSETS REMOVED FOR NATIVE HTML5 */}

              {WEBSITES.map((p, i) => (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 * i, duration: 0.8 }}
                  key={i} 
                  className="group flex flex-col lg:flex-row items-stretch w-full border-b border-white/[0.05] last:border-0 py-16 gap-12 lg:gap-24"
                >
                  {/* Text Section */}
                  <div className="w-full lg:w-4/12 flex flex-col justify-start">
                    <span className="text-[10px] text-gray-500 font-mono mb-8 block">{p.serial} / {WEBSITES.length.toString().padStart(2, '0')}</span>
                    <h2 className="text-3xl md:text-5xl font-[Plus_Jakarta_Sans] font-bold tracking-tight mb-8 text-white group-hover:text-[#4361EE] transition-colors duration-500 leading-tight">
                      {p.title}
                    </h2>
                    <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-gray-400 mb-6 block border-l border-[#4361EE] pl-4">
                      {p.category}
                    </span>
                    <p className="text-gray-500 text-sm leading-[1.8] max-w-sm font-light">
                      {p.desc}
                    </p>
                    {p.url && (
                    <a href={`https://${p.url}`} target="_blank" rel="noopener noreferrer" className="mt-12 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.15em] text-white group-hover:text-[#4361EE] transition-colors w-max cursor-pointer">
                      View Platform <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                    )}
                  </div>
                  
                  {/* Image/Mockup Section */}
                  <div className="w-full lg:w-8/12 flex items-center justify-center lg:justify-end relative group-hover:border-white/[0.1] transition-colors duration-700 min-h-[300px] lg:min-h-auto rounded-[20px]">
                    {p.image ? (
                      <div className="w-full relative aspect-video rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.6)] border border-white/10 group-hover:border-white/20 transition-all duration-700">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={p.image} 
                          alt={p.title} 
                          className="w-full h-full object-cover scale-[1.02] transition-transform duration-1000 group-hover:scale-[1.05]" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                      </div>
                    ) : p.videoSrc ? (
                      <div className="w-full h-full bg-[#050505] lg:aspect-auto border border-white/[0.03] flex items-center justify-center relative overflow-hidden group-hover:border-white/[0.1] transition-colors duration-700 rounded-[20px] shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                        <video 
                          src={p.videoSrc}
                          className="w-full h-full object-cover scale-[1.02] transition-transform duration-700 group-hover:scale-[1.05] pointer-events-none z-0" 
                          autoPlay 
                          muted 
                          loop 
                          playsInline 
                          ref={el => { if (el) el.playbackRate = 1.25; }} 
                        />
                        <div className="absolute inset-0 border border-white/10 rounded-[20px] pointer-events-none z-30" />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-[#050505] lg:aspect-auto border border-white/[0.03] flex items-center justify-center relative overflow-hidden group-hover:border-white/[0.1] transition-colors duration-700 rounded-[20px] shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#4361EE]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
                        <div className="text-[#333] font-mono text-[10px] tracking-widest uppercase flex flex-col items-center gap-3">
                          <MonitorSmartphone size={24} className="opacity-50" strokeWidth={1} />
                          Interface Assets Protected
                        </div>
                        <div className="absolute inset-0 border border-white/10 rounded-[20px] pointer-events-none z-30" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </div>
  )
}
