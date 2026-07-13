import React from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles, Calendar, Clock, Lock } from 'lucide-react';

const SPEAKERS = [
  {
    id: 1,
    name: 'Coming Soon',
    role: 'Industry Pioneer',
    category: 'Keynote Speaker',
    timeSlot: 'Day 1 • Morning',
  },
  {
    id: 2,
    name: 'Coming Soon',
    role: 'AI Researcher',
    category: 'Tech Deep Dive',
    timeSlot: 'Day 1 • Afternoon',
  },
  {
    id: 3,
    name: 'Coming Soon',
    role: 'Founder & CEO',
    category: 'Fireside Chat',
    timeSlot: 'Day 2 • Morning',
  },
  {
    id: 4,
    name: 'Coming Soon',
    role: 'Global Leader',
    category: 'Closing Keynote',
    timeSlot: 'Day 2 • Evening',
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
          className="text-center mb-16 sm:mb-20"
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
            From founders redefining industries to researchers pushing the frontier — our speaker lineup is carefully curated to inspire. Full roster dropping soon.
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
              <div className="relative h-72 w-full bg-[#050505] flex items-center justify-center overflow-hidden">
                {/* Animated Background Gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-green/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Glowing Silhouette / Lock Icon */}
                <div className="relative z-10 flex flex-col items-center gap-4 opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                  <div className="w-20 h-20 rounded-full border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.03)] group-hover:shadow-[0_0_30px_rgba(138,43,226,0.2)] group-hover:border-brand-purple/50 transition-all duration-500">
                    <User size={36} className="text-white/50 group-hover:text-brand-purple transition-colors duration-500" />
                  </div>
                  <div className="flex items-center gap-2 bg-black/80 px-4 py-1.5 rounded-full border border-white/10 shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                    <Lock size={12} className="text-brand-green" />
                    <span className="text-[10px] uppercase tracking-widest text-brand-green font-semibold">Locked</span>
                  </div>
                </div>
                
                {/* Bottom Fade Overlay to blend into text section */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Info Section */}
              <div className="p-6 relative z-20 bg-gradient-to-b from-transparent to-black/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-space tracking-widest uppercase text-brand-purple bg-brand-purple/10 px-3 py-1 rounded-md border border-brand-purple/20">
                    {speaker.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] text-gray-400 font-space uppercase tracking-wider">
                    <Clock size={12} className="text-brand-green" />
                    {speaker.timeSlot}
                  </span>
                </div>
                
                <h3 className="text-2xl font-heading text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {speaker.name}
                </h3>
                <p className="text-gray-400 text-sm font-medium mb-6 flex items-center gap-2">
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
