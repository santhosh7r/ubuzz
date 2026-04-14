import Hero from "../components/home/Hero";
import TrustedBy from "../components/home/TrustedBy";
import Results from "../components/home/Results";
import About from "../components/home/About";
import Services from "../components/home/Services";
import MidCTA from "../components/home/MidCTA";
import VideoCarouselSection from "../components/home/VideoCarouselSection";
import FounderMessage from "../components/home/FounderMessage";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";
import FAQ from "../components/home/FAQ";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-black text-white">
      {/* Background ambient glow */}
      <div className="glow-purple"></div>

      <Hero />
      <TrustedBy />
      <Results />
      <About />
      <Services />
      <MidCTA />
      <VideoCarouselSection />
      <FounderMessage />
      <Testimonials />
      <Contact />
      <FAQ />
    </div>
  )
}
