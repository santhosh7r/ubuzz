"use client"
import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

export default function Contact() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view","theme":"dark"});
    })();
  }, [])

  return (
    <section id="contact" className="py-24 px-6 relative z-10 bg-black w-full">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center w-full">
        <h2 className="text-5xl md:text-6xl font-[Plus_Jakarta_Sans] font-bold tracking-tight mb-12 text-center text-white">
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4361EE] to-[#4361EE]">dominate?</span>
        </h2>
        
        <div className="w-full min-h-[750px]">
           <Cal namespace="30min"
              calLink="ubuzz-in/30min"
              style={{width:"100%", height:"100%", overflow:"hidden"}}
              config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}}
           />
        </div>
      </div>
    </section>
  );
}
