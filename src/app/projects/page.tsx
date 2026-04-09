"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ExternalLink } from "lucide-react"

const FADE_UP: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const STAGGER = {
  visible: { transition: { staggerChildren: 0.1 } }
}

export default function Projects() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-electric-blue/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={STAGGER}>
            <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Our <span className="text-gradient">Work</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed">
              Case studies and selected projects demonstrating our approach to creating high-converting, category-leading digital brands.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Web Development Projects */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 border-b border-glass-border pb-6 flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-electric-blue/20 flex items-center justify-center text-electric-cyan">
                <ExternalLink className="w-5 h-5" />
             </div>
             <h2 className="text-3xl font-bold">Web Development & Design</h2>
          </div>

          <div className="space-y-32">
             {/* Project 1 */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-glass border border-glass-border mb-6">
                      <span className="text-xs font-semibold text-electric-cyan uppercase tracking-wider">Fintech</span>
                   </div>
                   <h3 className="text-4xl font-bold mb-4">PayFlow Dashboard</h3>
                   <p className="text-foreground-muted text-lg mb-8 leading-relaxed">A complete overhaul of PayFlow's core web application. We focused on reducing friction in the payment funnel and introducing a modern, minimal UI.</p>
                   
                   <div className="grid grid-cols-3 gap-6 mb-8">
                     <div>
                        <h4 className="text-white font-bold mb-1">+150%</h4>
                        <p className="text-sm text-foreground-muted">Conversion</p>
                     </div>
                     <div>
                        <h4 className="text-white font-bold mb-1">-40%</h4>
                        <p className="text-sm text-foreground-muted">Bounce Rate</p>
                     </div>
                     <div>
                        <h4 className="text-white font-bold mb-1">0.8s</h4>
                        <p className="text-sm text-foreground-muted">Load Time</p>
                     </div>
                   </div>

                   <Button variant="outline" className="rounded-full">Read Case Study</Button>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-[4/3] rounded-2xl glass-panel overflow-hidden border-glass-border group p-4">
                   <div className="absolute inset-0 bg-navy-800" />
                   <div className="relative w-full h-full rounded-xl bg-navy-950 border border-glass-border overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-105">
                     <div className="h-8 border-b border-glass-border bg-navy-900 flex items-center px-4 gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-glass" />
                        <div className="w-2.5 h-2.5 rounded-full bg-glass" />
                        <div className="w-2.5 h-2.5 rounded-full bg-glass" />
                     </div>
                     <div className="p-6">
                        <div className="h-6 w-32 bg-glass rounded mb-8" />
                        <div className="grid grid-cols-3 gap-4">
                           <div className="h-24 bg-glass rounded col-span-2" />
                           <div className="h-24 bg-glass rounded" />
                        </div>
                     </div>
                   </div>
                </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing & Video */}
      <section className="py-32 px-6 bg-navy-900/50 border-t border-glass-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 border-b border-glass-border pb-6 flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-electric-cyan/20 flex items-center justify-center text-electric-cyan">
                <Play className="w-5 h-5 ml-1" />
             </div>
             <h2 className="text-3xl font-bold">Digital Marketing & Video</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
                { title: "SaaS Launch VSL", client: "Nexus Data", result: "$200k+ ROAS" },
                { title: "Organic TikTok Growth", client: "Aura Skincare", result: "3M+ Views" },
                { title: "YouTube Authority Build", client: "Creator X", result: "+40k Subs" }
             ].map((proj, i) => (
                <motion.div 
                   initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                   key={i} className="group glass-panel rounded-2xl overflow-hidden cursor-pointer"
                >
                   <div className="aspect-[9/16] relative bg-navy-800 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                         <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center scale-90 group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-6 h-6 text-white ml-1" />
                         </div>
                      </div>

                      <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent">
                         <p className="text-electric-cyan text-sm font-semibold mb-1">{proj.client}</p>
                         <h3 className="text-xl font-bold mb-3">{proj.title}</h3>
                         <div className="inline-flex items-center px-3 py-1 rounded bg-white/10 text-sm font-medium">
                            Result: {proj.result}
                         </div>
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
         <h2 className="text-4xl font-bold mb-6">Let's create your next big win.</h2>
         <Button size="lg" variant="gradient" className="rounded-full">Get Started</Button>
      </section>
    </div>
  )
}
