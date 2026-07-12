import { motion } from 'framer-motion';
import HeroButtons from './HeroButtons';
import HighlightCards from './HighlightCards';
import EventInfoCard from './EventInfoCard';
import bgVideo from '../assets/hero-bg-video.mp4';
import { Mouse } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden">
      
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* Dark Overlays for depth and readability */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-purple/20 via-transparent to-transparent z-10 mix-blend-screen" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 flex flex-col items-center text-center mt-12 md:mt-0">
        
        {/* Small Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-3 sm:gap-4 mb-4"
        >
          <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-brand-purple" />
          <h2 className="text-brand-green font-space font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm">
            ASTRAX'26
          </h2>
          <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-brand-purple" />
        </motion.div>

        {/* Large Heading */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-orbitron font-black text-[clamp(2.5rem,8vw,6rem)] tracking-tight leading-[1.1] mb-2 sm:mb-4 w-full"
        >
          <span className="text-white block mb-1 sm:mb-2 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">AI INNOVATION</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-purple to-brand-green filter drop-shadow-[0_0_20px_rgba(138,43,226,0.3)]">SUMMIT</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-space text-base sm:text-lg md:text-2xl text-gray-300 font-medium tracking-wide mt-4 sm:mt-6 mb-3 sm:mb-4 px-2"
        >
          SHAPING THE <span className="text-brand-green font-semibold">FUTURE</span> OF ARTIFICIAL INTELLIGENCE
        </motion.p>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-inter text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4"
        >
          Join students, innovators, researchers, startups and industry experts to discover the future of Artificial Intelligence through inspiring talks, networking and innovation.
        </motion.p>

        {/* Highlight Cards */}
        <HighlightCards />

        {/* Buttons */}
        <HeroButtons />

        {/* Event Info Card */}
        <EventInfoCard />
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <Mouse size={24} className="text-gray-400 animate-bounce" />
        <span className="text-[10px] font-space tracking-[0.2em] text-gray-500 uppercase">Scroll to explore</span>
      </motion.div>
    </section>
  );
}
