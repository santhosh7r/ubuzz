"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';

export const ACTUAL_VIDEOS = [
  { src: 'https://res.cloudinary.com/dxzrqorub/video/upload/v1776533919/IMG_6853_uuwcx1.mp4' },
  { src: 'https://res.cloudinary.com/dxzrqorub/video/upload/v1776533918/IMG_6852_hufz55.mp4' },
  { src: 'https://res.cloudinary.com/dxzrqorub/video/upload/v1776533899/IMG_6851_pffz2h.mp4' },
  { src: 'https://res.cloudinary.com/dxzrqorub/video/upload/v1776533887/IMG_6850_z07hrj.mp4' },
  { src: 'https://res.cloudinary.com/dxzrqorub/video/upload/v1776533881/IMG_6849_f6flfc.mp4' },
];

const VideoCarousel = () => {
  const videos = ACTUAL_VIDEOS;

  // Triplicate the array for smooth infinite x-axis looping
  const carouselItems = [...videos, ...videos, ...videos];

  return (
    <div className="relative w-full overflow-hidden py-10 mt-10 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      {/* Infinite Scroll Track */}
      <motion.div 
        animate={{ x: ["0%", "-33.333%"] }} 
        transition={{ repeat: Infinity, ease: "linear", duration: 35 }} 
        className="flex gap-4 md:gap-8 w-max will-change-transform hover:[animation-play-state:paused]"
      >
        {carouselItems.map((v, index) => (
          <div 
            key={index}
            className="relative group w-[220px] md:w-[320px] lg:w-[360px] aspect-[9/16] bg-[#050505] overflow-hidden rounded-[2rem] border border-white/10 hover:border-white/30 transition-colors duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex-shrink-0 pointer-events-none"
          >
            {/* Raw Video Injection - Autoplaying, 1.5x Speed, No Controls */}
            {v.src ? (
              <video 
                src={v.src}
                className="w-full h-full object-cover scale-[1.02] transition-transform duration-700 group-hover:scale-105 pointer-events-none" 
                autoPlay 
                muted 
                loop 
                playsInline 
                ref={el => { if (el) el.playbackRate = 1.5; }} 
              />
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-white/[0.02]">
                  <span className="text-white/20 text-xs font-bold uppercase tracking-widest">Placeholder</span>
                </div>
            )}

            {/* Inner Glow Hack */}
            <div className="absolute inset-0 border-[2px] border-white/5 pointer-events-none rounded-[2rem]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function VideoCarouselSection() {
  return (
    <section className="py-32 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-8 gap-6">
          <div>
             <div className="flex justify-center mb-6">
               <div className="border border-[#4361EE]/30 text-[#4361EE] bg-[#4361EE]/10 py-1.5 px-4 rounded-full text-xs font-bold tracking-[0.15em] uppercase shadow-[0_0_20px_rgba(1,153,255,0.2)]">Short-Form Content</div>
             </div>
            <h2 className="text-5xl md:text-6xl font-[Plus_Jakarta_Sans] font-bold tracking-tight text-white">Videos that dominate algorithms.</h2>
          </div>
        </div>
      </div>

      {/* VIDEO PLAYER ASSETS REMOVED FOR NATIVE HTML5 */}

      {/* Carousel Injection (Replaces Grid) */}
      <VideoCarousel />
    </section>
  );
}
