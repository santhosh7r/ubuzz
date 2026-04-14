"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    question: "What makes Ubuzz different from other digital agencies?",
    answer: "We don't just run ads or build websites. We construct comprehensive digital machines engineered for high-ticket conversion. Every strategy, from aesthetic positioning to media buying, is tailored specifically to build your market authority and drive actual revenue, not just vanity metrics."
  },
  {
    question: "How long does it take to start seeing actual results?",
    answer: "Our initial sprint usually takes 14-21 days to go live in the market. Depending on your offer and audience, you can typically expect to see qualified conversions and meaningful pipeline engagement within the first 30 days of launch."
  },
  {
    question: "Do I get to work directly with the founder?",
    answer: "Absolutely. We intentionally cap our client intake so that every partner gets direct access to Tharun and the core execution team. You won't ever be handed off to generic junior account managers."
  },
  {
    question: "What specific industries do you specialize in?",
    answer: "We excel at scaling high-ticket coaches, elite B2B service providers, and premium e-commerce brands. If your offer requires establishing deep trust and authority to close, our digital systems are explicitly built for you."
  },
  {
    question: "Will I be permanently locked into a long-term contract?",
    answer: "We believe in earning our keep every single month. While building true authority takes time, we start with flexible 90-day sprints to prove our ROI before discussing permanent long-term integrations."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 relative z-10 bg-black w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">

        {/* Left Side: Editorial Image Block */}
        <div className="w-full md:w-5/12 min-h-[550px] relative rounded-[2rem] overflow-hidden group border border-white/5 bg-[#111]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Ubuzz/faq.png"
            alt="FAQ Background"
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity brightness-90 transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

          <div className="absolute inset-x-8 top-10 z-10">
            <h2 className="text-4xl md:text-5xl font-[Plus_Jakarta_Sans] font-bold text-white tracking-tight leading-[1.1]">
              Frequently Asked<br />Questions
            </h2>
          </div>

          <div className="absolute inset-x-8 bottom-10 z-10 flex flex-col items-start gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-white text-[15px] font-medium tracking-wide leading-relaxed max-w-[280px]">
                "Ubuzz entirely changed how we generate leads. 4x ROI in month one. Absolutely lethal execution."
              </p>
              <div className="flex items-center gap-2 pointer-events-none">
                <div className="flex text-[#FFC107] text-[11px] tracking-widest">
                  ★★★★★
                </div>
                <span className="text-[#888888] text-[11px]">- Ms. Priyanka V M</span>
              </div>
            </div>
            <a
              href="https://cal.com/santhosh-perumal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-bold py-3.5 px-8 rounded-full text-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
            >
              Book Strategy Call
            </a>
          </div>
        </div>

        {/* Right Side: Accordion Items */}
        <div className="w-full md:w-7/12 flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-[#0a0a0a] border ${openIndex === idx ? 'border-white/10 shadow-lg' : 'border-white/5 hover:border-white/10'} rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer w-full flex flex-col items-stretch`}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="flex justify-between items-center p-6 md:p-8 w-full gap-4">
                <h4 className="text-white text-[15px] font-semibold tracking-wide flex-1 leading-snug">{faq.question}</h4>
                <div className={`text-gray-500 shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-90' : 'rotate-0'}`}>
                  {openIndex === idx ? <X size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                </div>
              </div>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="w-full"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 text-[#a1a1aa] text-sm leading-relaxed max-w-[95%]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
