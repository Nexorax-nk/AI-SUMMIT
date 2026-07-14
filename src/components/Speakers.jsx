import React from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles, Calendar, Clock, Lock } from 'lucide-react';
import leonardImg from '../assets/speakers/leonard.jpg';
import arunImg from '../assets/speakers/arun.jpg';
import rameshImg from '../assets/speakers/ramesh.jpg';

const SPEAKERS = [
  {
    id: 1,
    name: 'Leonard Selvaraja Fernando',
    role: 'CEO & Director of Eng, icrewsystems',
    category: 'Keynote Speaker',
    timeSlot: 'Day 1 • Morning',
    image: leonardImg
  },
  {
    id: 2,
    name: 'Arun Nair',
    role: 'CEO, Startup Singam',
    category: 'Tech Deep Dive',
    timeSlot: 'Day 1 • Afternoon',
    image: arunImg
  },
  {
    id: 3,
    name: 'Ramesh Babu',
    role: 'Manager Consulting Expert @ CGI',
    category: 'Fireside Chat',
    timeSlot: 'Day 2 • Morning',
    image: rameshImg
  }
];

const Speakers = () => {
  return (
    <section id="speakers" className="relative py-12 sm:py-16 bg-transparent overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/10 blur-[150px] rounded-full -z-10 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-3 text-sm tracking-[0.2em] uppercase text-brand-purple mb-4 font-semibold">
            <Sparkles size={16} />
            <span>The Lineup</span>
            <Sparkles size={16} />
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading mb-6 leading-tight text-white">
            World-Class <span className="text-gradient">Visionaries.</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-text-muted leading-relaxed">
            From founders redefining industries to researchers pushing the frontier — our speaker lineup is carefully curated to inspire. Meet the experts shaping tomorrow.
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-6xl mx-auto">
          {SPEAKERS.map((speaker, idx) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass relative group rounded-3xl overflow-hidden border border-white/5 hover:border-brand-purple/30 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_20px_40px_rgba(138,43,226,0.15)] bg-black/40 backdrop-blur-xl"
            >
              {/* Photo Placeholder Area */}
              <div className="relative h-56 w-full bg-[#050505] flex items-center justify-center overflow-hidden">
                {/* Animated Background Gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-green/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Glowing Silhouette / Profile Image */}
                <div className="relative z-10 flex flex-col items-center gap-3 opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border-2 border-brand-purple/20 bg-[#050505] flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.03)] group-hover:shadow-[0_0_30px_rgba(138,43,226,0.4)] group-hover:border-brand-purple/50 transition-all duration-500 overflow-hidden">
                    {speaker.image ? (
                      <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                    ) : (
                      <User size={32} className="text-white/80 group-hover:text-brand-purple transition-colors duration-500" />
                    )}
                  </div>
                </div>
                
                {/* Bottom Fade Overlay to blend into text section */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Info Section */}
              <div className="p-5 relative z-20 bg-gradient-to-b from-transparent to-black/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-space tracking-widest uppercase text-brand-purple bg-brand-purple/10 px-2.5 py-0.5 rounded-md border border-brand-purple/20">
                    {speaker.category}
                  </span>
                  <span className="flex items-center gap-1 text-[9px] text-gray-400 font-space uppercase tracking-wider">
                    <Clock size={10} className="text-brand-green" />
                    {speaker.timeSlot}
                  </span>
                </div>
                
                <h3 className="text-xl font-heading text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {speaker.name}
                </h3>
                <p className="text-gray-400 text-xs font-medium mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                  {speaker.role}
                </p>
                
                {/* Decorative Bottom Line that animates on hover */}
                <div className="w-full h-[1px] bg-white/10 mb-4 relative overflow-hidden rounded-full">
                  <div className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-brand-purple to-brand-green group-hover:w-full transition-all duration-700 ease-out" />
                </div>
                
                <div className="flex items-center justify-between text-[10px] text-gray-500 font-medium uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> ASTRAX'26</span>
                  <span>Chennai Tech</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Speakers;
