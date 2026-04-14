"use client"
import React from 'react';
import { motion } from 'framer-motion';

const leaders = [
  { name: "ROWELL FITNESS", role: "1000+ Leads Generated", imgUrl: "/Tlogo/1.jpeg" },
  { name: "SPORT UTILITY VEHICLES", role: "Digital Marketing", imgUrl: "/Tlogo/2.jpeg" },
  { name: "WINNERSPIN", role: "Web App Development + Digital Marketing", imgUrl: "/Tlogo/3.jpeg" },
  { name: "DR YOUR FITNESS", role: "350+ Leads Generated", imgUrl: "/Tlogo/4.jpeg" },
  { name: "VERNICA", role: "Digital Marketing", imgUrl: "/Tlogo/5.jpeg" },
  { name: "HIS ACADEMY", role: "2000+ Leads Generated", imgUrl: "/Tlogo/6.jpeg" },
  { name: "DREAM DEAL GROUP", role: "Digital Marketing", imgUrl: "/Tlogo/7.jpeg" },
  { name: "FITNESS 1", role: "Digital Marketing !!", imgUrl: "/Tlogo/8.jpeg" },
  { name: "VS INTERIORS", role: "300+ Leads Generated", imgUrl: "/Tlogo/9.jpeg" },
  { name: "4SQUAREHOMES", role: "Digital Marketing", imgUrl: "/Tlogo/10.jpeg" },
];

export default function TrustedBy() {
  return (
    <section className="relative z-10 w-full bg-black py-20 px-4 md:px-0 flex flex-col items-center justify-center overflow-hidden">
      {/* Trusted Leaders Section */}
      <div className="flex flex-col items-center z-10 w-full mb-12">
        <h3 className="text-gray-400 font-barlow text-sm uppercase tracking-[0.2em] mb-12 text-center">
          Founders who trust us to grow their digital presence
        </h3>

        {/* Infinite Marquee Animation - All Screens */}
        <div
          className="w-full max-w-[1200px] mx-auto overflow-hidden flex relative"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          <motion.div
            className="flex gap-12 md:gap-32 items-center pr-12 md:pr-32"
            animate={{ x: "-50%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ width: "fit-content" }}
          >
            {[...leaders, ...leaders, ...leaders].map((leader, index) => (
              <div key={index} className="flex items-center gap-4 min-w-max">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={leader.imgUrl} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-white text-base md:text-2xl font-bold font-league leading-tight">{leader.name}</p>
                  <p className="text-gray-500 text-[10px] md:text-sm font-barlow leading-tight mt-1 uppercase tracking-widest">{leader.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
