"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Box, MonitorSmartphone, Video, Target, Zap, Trophy, ShieldCheck, ChevronRight } from "lucide-react"

const FADE_UP: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const STAGGER = {
  visible: { transition: { staggerChildren: 0.1 } }
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scaleHero = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[500px] bg-electric-blue/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-electric-cyan/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={STAGGER} className="flex flex-col items-center">
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-glass-border">
              <span className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse" />
              <span className="text-sm font-medium text-foreground-muted">Pioneering Digital Excellence</span>
            </motion.div>
            
            <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] max-w-4xl mx-auto">
              We build <span className="text-gradient">brands</span> that <br />
              <span className="text-gradient-blue">dominate the digital era.</span>
            </motion.h1>
            
            <motion.p variants={FADE_UP} className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              Transform your raw potential into high-converting experiences. We blend strategic design with elite engineering to scale your business effortlessly.
            </motion.p>
            
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" variant="gradient" className="rounded-full w-full sm:w-auto text-base group">
                Start Prototyping
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto text-base">
                View Showreel
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ opacity: opacityHero, scale: scaleHero }}
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="mt-16 relative mx-auto max-w-5xl rounded-2xl glass-panel p-2 shadow-2xl shadow-electric-blue/10 border-electric-blue/20"
          >
            <div className="w-full aspect-[16/9] rounded-xl bg-navy-800 border border-glass-border overflow-hidden relative group">
               <Image 
                 src="/dashboard.png" 
                 alt="Ubuzz Dashboard Mockup" 
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 border-y border-glass-border bg-navy-900/50 overflow-hidden">
         <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm text-foreground-muted font-medium mb-6 uppercase tracking-wider">Trusted by elite teams globally</p>
            <div className="flex gap-12 items-center justify-center flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {['Loom', 'Vercel', 'Supabase', 'Stripe', 'Linear'].map(company => (
                 <span key={company} className="text-2xl font-bold text-white tracking-tight">{company}</span>
               ))}
            </div>
         </div>
      </section>

      {/* Ubuzz Standard */}
      <section className="py-24 px-6 relative">
         <div className="max-w-6xl mx-auto">
            <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
               variants={STAGGER} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            >
               <div>
                  <motion.h2 variants={FADE_UP} className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                     The Ubuzz <br/><span className="text-electric-cyan">Standard.</span>
                  </motion.h2>
                  <motion.p variants={FADE_UP} className="text-foreground-muted text-lg mb-8 leading-relaxed">
                     We don't just build, we engineer solutions designed to accelerate growth. No bloat, no friction – just pure performance and absolute precision.
                  </motion.p>
                  <motion.div variants={FADE_UP} className="grid sm:grid-cols-2 gap-6">
                     {[
                        { icon: Zap, title: "Speed", desc: "Sub-second load times engineered natively." },
                        { icon: Trophy, title: "Quality", desc: "Pixel-perfect designs that command authority." },
                        { icon: Target, title: "Results", desc: "Conversion funnels built to maximize ROI." },
                        { icon: ShieldCheck, title: "Strategy", desc: "Data-driven architectures that scale smoothly." },
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                           <div className="p-2 rounded bg-glass border border-glass-border text-electric-cyan shrink-0">
                              <item.icon className="w-5 h-5" />
                           </div>
                           <div>
                              <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                              <p className="text-sm text-foreground-muted">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </motion.div>
               </div>
               <motion.div variants={FADE_UP} className="relative">
                 <div className="absolute inset-0 bg-electric-cyan/20 blur-[100px] rounded-full" />
                 <div className="relative aspect-square rounded-2xl glass-panel p-8 flex flex-col justify-center items-center text-center">
                    <div className="w-24 h-24 rounded-full border border-electric-blue/50 flex items-center justify-center mb-6 relative">
                      <div className="absolute inset-0 border-t-2 border-electric-cyan rounded-full animate-spin [animation-duration:3s]" />
                      <Trophy className="w-10 h-10 text-electric-blue" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Built for Excellence</h3>
                    <p className="text-foreground-muted">Every line of code and pixel works together to secure your market position.</p>
                 </div>
               </motion.div>
            </motion.div>
         </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-navy-800">
         <div className="max-w-6xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER} className="text-center mb-16">
               <motion.h2 variants={FADE_UP} className="text-4xl font-bold mb-4">Core Competencies</motion.h2>
               <motion.p variants={FADE_UP} className="text-foreground-muted max-w-2xl mx-auto">Everything you need to build unquestionable brand confidence under one unified roof.</motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                  { title: "Web Development", desc: "Blazing fast Next.js applications.", icon: MonitorSmartphone },
                  { title: "Social Marketing", desc: "Viral frameworks for organic growth.", icon: Box },
                  { title: "Video Production", desc: "Cinema-grade editing & motion.", icon: Video },
                  { title: "Paid Ads Setup", desc: "Meta & Google campaigns that print.", icon: Target },
               ].map((svc, i) => (
                  <motion.div 
                     initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.1 }} viewport={{ once: true }}
                     key={i} className="group glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:border-electric-blue/50 hover:shadow-[0_0_30px_rgba(0,112,243,0.15)]"
                  >
                     <div className="w-12 h-12 rounded bg-navy-900 border border-glass-border flex items-center justify-center text-white group-hover:text-electric-cyan transition-colors mb-6">
                        <svc.icon className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-bold mb-3">{svc.title}</h3>
                     <p className="text-sm text-foreground-muted leading-relaxed">{svc.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Project Previews */}
      <section className="py-24 px-6">
         <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-12">
               <div>
                  <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
                  <p className="text-foreground-muted">A sneak peek at our recent victories.</p>
               </div>
               <Button variant="ghost" className="hidden sm:inline-flex rounded-full group">
                 View All Projects <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
               </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[1, 2].map((i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group relative rounded-2xl overflow-hidden glass-panel aspect-video border-glass-border cursor-pointer">
                     <div className="absolute inset-0 bg-navy-800 transition-transform duration-500 group-hover:scale-105">
                       {/* Placeholder for project image/video thumbnail */}
                       <div className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-900 relative">
                          <div className={`absolute inset-0 bg-gradient-to-tr ${i===1 ? 'from-electric-blue/20 to-transparent' : 'from-electric-cyan/20 to-transparent'}`}/>
                          <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                             <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-white border-b-8 border-b-transparent ml-1" />
                          </div>
                       </div>
                     </div>
                     <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-navy-900 to-transparent z-20 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-2">
                           <span className="text-xs font-semibold px-2 py-1 bg-white/10 rounded backdrop-blur-md">Web Dev</span>
                           <span className="text-xs font-semibold px-2 py-1 bg-white/10 rounded backdrop-blur-md">Branding</span>
                        </div>
                        <h3 className="text-2xl font-bold">Project Name {i}</h3>
                     </div>
                  </motion.div>
               ))}
            </div>
            
            <div className="mt-8 text-center sm:hidden">
              <Button variant="outline" className="rounded-full w-full">View All Projects</Button>
            </div>
         </div>
      </section>

      {/* Testimonial / Contact Split Section */}
      <section className="py-24 px-6 border-t border-glass-border relative bg-navy-900/50">
         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Testimonial */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <h2 className="text-4xl font-bold mb-12">Don't just take <br/>our word for it.</h2>
               
               <div className="glass-panel p-8 rounded-2xl relative">
                  <div className="absolute -top-6 -left-6 z-0 text-electric-blue/20">
                     <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 11H6.5C6.22386 11 6 10.7761 6 10.5V6.5C6 6.22386 6.22386 6 6.5 6H10.5C10.7761 6 11 6.22386 11 6.5V11C11 14.3137 8.31371 17 5 17H4.5C4.22386 17 4 16.7761 4 16.5V15.5C4 15.2238 4.22386 15 4.5 15H5C6.65685 15 8 13.6569 8 12V11H10ZM20 11H16.5C16.2239 11 16 10.7761 16 10.5V6.5C16 6.22386 16.2239 6 16.5 6H20.5C20.7761 6 21 6.22386 21 6.5V11C21 14.3137 18.3137 17 15 17H14.5C14.2239 17 14 16.7761 14 16.5V15.5C14 15.2239 14.2239 15 14.5 15H15C16.6569 15 18 13.6569 18 12V11H20Z" /></svg>
                  </div>
                  <p className="text-lg relative z-10 mb-8 leading-relaxed font-medium">"Ubuzz radically changed our conversion trajectory. The blend of minimal aesthetic and aggressive performance optimizations helped us scale our ad spend efficiently."</p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-navy-700 overflow-hidden">
                        {/* Placeholder for founder image */}
                     </div>
                     <div>
                        <h4 className="font-bold text-white">Sarah Jenkins</h4>
                        <p className="text-sm text-foreground-muted">Founder, Elevate App</p>
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <div className="glass-panel p-8 rounded-2xl border-electric-blue/30 shadow-[0_0_40px_rgba(0,112,243,0.1)]">
                  <h3 className="text-2xl font-bold mb-6">Let's build together</h3>
                  <form className="space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                           <label className="text-sm text-foreground-muted">First Name</label>
                           <input type="text" className="w-full bg-navy-900 border border-glass-border px-4 py-3 rounded-lg focus:outline-none focus:border-electric-blue transition-colors text-white" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm text-foreground-muted">Last Name</label>
                           <input type="text" className="w-full bg-navy-900 border border-glass-border px-4 py-3 rounded-lg focus:outline-none focus:border-electric-blue transition-colors text-white" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm text-foreground-muted">Email Address</label>
                        <input type="email" className="w-full bg-navy-900 border border-glass-border px-4 py-3 rounded-lg focus:outline-none focus:border-electric-blue transition-colors text-white" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm text-foreground-muted">What do you need help with?</label>
                        <select className="w-full bg-navy-900 border border-glass-border px-4 py-3 rounded-lg focus:outline-none focus:border-electric-blue transition-colors text-white appearance-none">
                           <option>Web Development</option>
                           <option>Marketing Strategy</option>
                           <option>Video Production</option>
                           <option>Comprehensive Package</option>
                        </select>
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm text-foreground-muted">Message</label>
                        <textarea rows={4} className="w-full bg-navy-900 border border-glass-border px-4 py-3 rounded-lg focus:outline-none focus:border-electric-blue transition-colors text-white resize-none" />
                     </div>
                     <Button className="w-full rounded-lg h-12 text-base mt-4" variant="gradient">Submit Request</Button>
                  </form>
               </div>
            </motion.div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 outline-none relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-electric-blue/10 blur-[150px] rounded-full pointer-events-none" />
         
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Ready to <span className="text-gradient-blue">scale</span>?</h2>
            <p className="text-xl text-foreground-muted mb-10 max-w-2xl mx-auto">Stop leaving money on the table with sub-par websites. Upgrade your digital presence and dominate your industry.</p>
            <Button size="lg" variant="gradient" className="rounded-full shadow-2xl shadow-electric-blue/30 h-14 px-10 text-lg">
               Book a Discovery Call
            </Button>
         </div>
      </section>

    </div>
  )
}
