import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Mic, BrainCircuit, MessageSquare, Award } from 'lucide-react';

const agenda = [
  { time: "09:15 AM – 09:25 AM", title: "Welcome Address", desc: "Opening remarks and summit introduction.", icon: Users },
  { time: "09:25 AM – 09:50 AM", title: "Opening Keynote", desc: "Speaker To Be Announced", icon: Mic },
  { time: "09:50 AM – 10:15 AM", title: "AI Innovation Talk", desc: "Speaker To Be Announced", icon: BrainCircuit },
  { time: "10:15 AM – 10:50 AM", title: "Panel Discussion", desc: "Panelists To Be Announced", icon: MessageSquare },
  { time: "10:50 AM – 11:00 AM", title: "Vote of Thanks", desc: "Closing remarks and appreciation.", icon: Award }
];

const Timeline = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress for the central glowing line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  // Transform scroll progress to height percentage
  const heightProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-16 sm:py-24 relative overflow-hidden" ref={containerRef}>
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================
            HEADER SECTION
        ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="text-sm tracking-widest text-brand-purple uppercase mb-3 font-semibold font-inter">
            Summit Agenda
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading mb-4">
            The Flow of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-green">Innovation</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-text-muted leading-relaxed">
            A carefully curated lineup of keynote sessions, expert talks and panel discussions designed to inspire the next generation of AI innovators.
          </p>
        </motion.div>

        {/* =========================================
            TIMELINE LAYOUT
        ========================================= */}
        <div className="relative max-w-4xl mx-auto py-4">
          
          {/* Base Track (Dark Gray) */}
          <div className="absolute top-0 bottom-0 left-[24px] md:left-1/2 md:-translate-x-1/2 w-[2px] bg-white/5 z-0">
            {/* Scroll-driven Glowing Fill (Purple -> Green) */}
            <motion.div 
              style={{ height: heightProgress }}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-brand-purple via-blue-500 to-brand-green shadow-[0_0_15px_rgba(57,255,20,0.5)] origin-top"
            />
            

          </div>

          {/* AGENDA ITEMS */}
          <div className="space-y-8 md:space-y-12">
            {agenda.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const Icon = item.icon;
              
              return (
                <div key={idx} className={`group flex flex-col md:flex-row items-start md:items-center relative w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 z-20 top-6 md:top-auto flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                      className="w-4 h-4 rounded-full bg-black border-2 border-brand-green shadow-[0_0_15px_rgba(57,255,20,0.5)] flex items-center justify-center group-hover:scale-150 group-hover:border-brand-purple group-hover:shadow-[0_0_25px_rgba(138,43,226,0.8)] transition-all duration-300"
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: idx * 0.2 }}
                        className="w-1.5 h-1.5 rounded-full bg-brand-purple group-hover:bg-brand-green transition-colors duration-300"
                      />
                    </motion.div>
                  </div>

                  {/* Connecting Line (Desktop Only) */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-[calc(50%-2rem)] h-[1px] bg-gradient-to-r ${isLeft ? 'right-1/2 from-transparent to-brand-purple/20' : 'left-1/2 from-brand-purple/20 to-transparent'} group-hover:h-[2px] ${isLeft ? 'group-hover:to-brand-purple' : 'group-hover:from-brand-purple'} group-hover:shadow-[0_0_10px_rgba(138,43,226,0.5)] transition-all duration-300 z-0`} />

                  {/* Glass Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 100 }}
                    className="w-[calc(100%-60px)] ml-[60px] md:ml-0 md:w-[calc(50%-3rem)] relative z-10"
                  >
                    <div className="glass p-5 sm:p-6 rounded-2xl border border-white/10 group-hover:border-brand-purple/50 group-hover:shadow-[0_10px_40px_rgba(138,43,226,0.2)] transition-all duration-500 group-hover:-translate-y-1 bg-black/40 backdrop-blur-xl flex justify-between items-center overflow-hidden">
                      
                      {/* Subtle hover gradient background */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-purple/10 via-transparent to-brand-green/10 -z-10" />

                      <div className="pr-4 relative z-10">
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          className="text-brand-green text-xs font-mono tracking-wider mb-2 font-semibold group-hover:text-white transition-colors duration-300"
                        >
                          {item.time}
                        </motion.div>
                        <h4 className="text-lg sm:text-xl font-heading mb-1 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-purple transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-text-muted text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {item.desc}
                        </p>
                      </div>
                      
                      {/* Icon */}
                      <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 items-center justify-center text-gray-400 group-hover:text-white group-hover:scale-110 group-hover:border-brand-green/50 group-hover:bg-brand-green/20 group-hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all duration-500 relative z-10">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;