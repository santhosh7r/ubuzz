"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MonitorSmartphone, Video, BarChart, PenTool, Share2 } from 'lucide-react';

const servicesData = [
  { title: "Website Development", desc: "We design fast, responsive, and visually stunning websites tailored to your business goals. Built to convert visitors into customers.", icon: MonitorSmartphone },
  { title: "Social Media Marketing", desc: "We manage your social media with strategy and creativity. From content planning to engagement, we grow your brand.", icon: Share2 },
  { title: "Video Production / Editing", desc: "We turn your raw footage into sharp, impactful videos. Perfect for promos, ads, reels, and social content.", icon: Video },
  { title: "Meta / Google Ads", desc: "Reach your audience with targeted ads on Meta and Google, maximizing ROI through optimized campaigns.", icon: BarChart },
  { title: "Brand Strategy", desc: "Complete visual identity and macro positioning to dominate your exact market with zero compromises.", icon: PenTool },
];

export default function Services() {
  const [activeSegment, setActiveSegment] = useState<number>(0);

  return (
    <section id="services" className="py-24 md:py-40 px-6 relative z-10 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Navigation Sticky */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <h2 className="text-5xl md:text-6xl font-[Plus_Jakarta_Sans] font-bold tracking-tight text-white leading-[1.1] mb-6">Mastery in five disciplines.</h2>
          <p className="text-[#a1a1aa] text-base md:text-lg leading-relaxed font-light mb-12 max-w-md">
            One unified strategy. Zero compromise. We execute on these five pillars with unyielding precision.
          </p>

          <div className="flex flex-col gap-3">
            {servicesData.map((s, i) => {
              const isActive = activeSegment === i;
              return (
                 <button 
                   key={i}
                   onClick={() => setActiveSegment(i)}
                   className={`text-left w-full px-6 py-5 rounded-[1.5rem] transition-all duration-500 flex items-center justify-between group overflow-hidden relative ${isActive ? 'bg-white/5 border border-white/10 shadow-lg' : 'hover:bg-white/[0.02] border border-transparent'}`}
                 >
                   {isActive && <div className="absolute inset-0 bg-gradient-to-r from-[#4361EE]/10 to-transparent pointer-events-none" />}
                   <div className="flex items-center gap-6 relative z-10">
                     <span className={`font-[Plus_Jakarta_Sans] text-sm md:text-base font-bold tracking-[0.15em] ${isActive ? 'text-[#4361EE]' : 'text-gray-600'}`}>0{i+1}</span>
                     <span className={`font-[Plus_Jakarta_Sans] text-lg md:text-xl font-bold tracking-tight transition-colors ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>{s.title}</span>
                   </div>
                   <ArrowRight size={18} className={`relative z-10 transition-all duration-500 ${isActive ? 'text-[#4361EE] translate-x-0 opacity-100' : 'text-gray-600 -translate-x-4 opacity-0 group-hover:opacity-50 group-hover:-translate-x-2'}`} />
                 </button>
              )
            })}
          </div>
        </div>

        {/* Right Column: Display Card Vault */}
        <div className="lg:col-span-7 w-full h-[450px] md:h-[600px] lg:h-[700px]">
           <div className="w-full h-full rounded-[2.5rem] border border-white/10 bg-[#050505] p-10 md:p-16 relative overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)]">
             
             {/* Backdrop ambient */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(1,153,255,0.06)_0%,transparent_70%)] pointer-events-none transition-opacity duration-1000" />
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] opacity-60 pointer-events-none" />
             
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeSegment}
                 initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                 animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                 exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                 transition={{ duration: 0.5, ease: "easeInOut" }}
                 className="relative z-10 h-full flex flex-col justify-between"
               >
                 <div className="w-24 h-24 rounded-[1.5rem] bg-[#4361EE]/10 border border-[#4361EE]/20 flex items-center justify-center text-[#4361EE] shadow-[0_0_40px_rgba(1,153,255,0.2)]">
                   {React.createElement(servicesData[activeSegment].icon, { size: 40 })}
                 </div>
                 
                 <div className="mt-auto">
                   <h3 className="text-4xl md:text-5xl lg:text-6xl font-[Plus_Jakarta_Sans] font-bold text-white mb-6 tracking-tight leading-[1.1]">
                     {servicesData[activeSegment].title}.
                   </h3>
                   <p className="text-[#a1a1aa] text-lg md:text-xl leading-relaxed max-w-lg font-light">
                     {servicesData[activeSegment].desc}
                   </p>
                 </div>
               </motion.div>
             </AnimatePresence>
           </div>
        </div>
        
      </div>
    </section>
  );
}
