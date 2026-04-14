"use client"
import React from 'react';
import { motion } from 'framer-motion';

const testimonialsList = [
  {
    text: "Ubuzz completely transformed our digital footprint. Their tactical approach to growth helped us scale our B2B operations faster than we ever anticipated.",
    image: "/Tclient/1.jpeg",
    name: "Mr. S. Ananth",
    role: "Founder, Reicuri Private Limited",
  },
  {
    text: "The high-energy video content and targeted ad campaigns drove a massive spike in our gym memberships. They truly understand how to capture an audience's attention.",
    image: "/Tclient/2.jpeg",
    name: "Mr. Vinod Gowda",
    role: "Founder, Rowell Fitness",
  },
  {
    text: "As a design firm, aesthetics mean everything to us. Ubuzz elevated our brand positioning and delivered creative strategies that perfectly aligned with our vision.",
    image: "/Tclient/3.jpeg",
    name: "Ms. Priyanka V M",
    role: "Founder, Vernica Designs",
  },
  {
    text: "Generating quality real estate leads is tough, but their targeted Meta and Google ads brought us exactly who we needed to close more properties this quarter.",
    image: "/Tclient/4.jpeg",
    name: "Mr. Sunil Naidu",
    role: "Founder, 4squarehomes",
  },
  {
    text: "Our user engagement went through the roof after partnering with them. Their short-form content strategies are pure gold for driving conversions.",
    image: "/Tclient/5.jpeg",
    name: "Ms. Shylaja",
    role: "Founder, Winnerspin",
  },
  {
    text: "They knew exactly how to market our high-ticket interior design packages. The leads we are getting now are highly qualified and ready to book.",
    image: "/Tclient/6.jpeg",
    name: "Ms. Priya Saliyan",
    role: "Founder, Vinspace Interiors",
  },
];

const firstColumn = testimonialsList.slice(0, 2);
const secondColumn = testimonialsList.slice(2, 4);
const thirdColumn = testimonialsList.slice(4, 6);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonialsList;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 md:p-10 rounded-3xl border border-white/10 bg-[#050505] shadow-[0_0_30px_rgba(0,0,0,0.5)] max-w-xs w-full" key={i}>
                  <div className="text-[#a1a1aa] leading-relaxed text-sm md:text-base font-light">&quot;{text}&quot;</div>
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full border border-[#4361EE]/30 object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-[Plus_Jakarta_Sans] text-white font-bold tracking-tight text-sm">{name}</div>
                      <div className="text-[11px] text-[#4361EE] tracking-widest uppercase mt-1">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-32 px-6 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="border border-[#4361EE]/30 text-[#4361EE] bg-[#4361EE]/10 py-1.5 px-4 rounded-full text-xs font-bold tracking-[0.15em] uppercase shadow-[0_0_20px_rgba(1,153,255,0.2)]">Testimonials</div>
          </div>

          <h2 className="text-5xl md:text-6xl font-[Plus_Jakarta_Sans] font-bold tracking-tight text-white mb-6 text-center">
            What our users say.
          </h2>
          <p className="text-center text-[#a1a1aa] md:text-lg font-light leading-relaxed">
            Don&apos;t just take our word for it. See what our partners have to say about scaling with absolute precision.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden w-full relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,153,255,0.05)_0%,transparent_70%)] pointer-events-none" />
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
