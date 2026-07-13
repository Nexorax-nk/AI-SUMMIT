import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Users, Rocket, GraduationCap, Microscope, Laptop, Briefcase, Quote } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative bg-transparent overflow-hidden pt-12 sm:pt-16 pb-16 sm:pb-20">
      <div className="container relative z-10 mx-auto px-6">
        
        {/* =========================================
            HEADER SECTION
        ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="text-sm tracking-[0.2em] uppercase text-text-muted mb-3 font-semibold">
            About The AI Innovation Summit
          </div>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[2px] w-20 mx-auto mb-6 bg-gradient-to-r from-transparent via-brand-purple to-brand-green"
          />
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-6 font-heading leading-tight">
            Where Ideas Meet <span className="text-gradient">Intelligence.</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg text-text-muted leading-relaxed">
            Presented under ASTRAX'26, the AI Innovation Summit brings together students, researchers, innovators, startups and industry leaders to explore the future of Artificial Intelligence through meaningful conversations, emerging technologies and collaborative experiences.
          </p>
        </motion.div>

        {/* =========================================
            MAIN SPLIT-SCREEN (BENTO STYLE)
        ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 sm:mb-20">
          
          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
            
            {/* Why This Summit Matters */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl sm:text-4xl font-heading mb-4 text-white">
                Why This Summit Matters
              </h3>
              <p className="text-text-muted mb-2 leading-relaxed text-lg">
                Artificial Intelligence is transforming every industry.
              </p>
              <p className="text-text-muted leading-relaxed text-lg">
                The AI Innovation Summit creates a space where knowledge is shared, innovation is celebrated and future leaders come together to shape what's next.
              </p>
            </motion.div>

            {/* Who Should Attend (Inline Pills) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-sm tracking-widest uppercase text-brand-purple mb-4 font-semibold">Who Should Attend</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Students', icon: <GraduationCap size={16} /> },
                  { label: 'Researchers', icon: <Microscope size={16} /> },
                  { label: 'Developers', icon: <Laptop size={16} /> },
                  { label: 'Industry', icon: <Briefcase size={16} /> }
                ].map((item, idx) => (
                  <div key={idx} className="glass px-4 py-2 flex items-center gap-2 rounded-full border border-white/5 text-sm text-gray-300 hover:border-brand-purple/50 transition-colors shadow-sm cursor-default">
                    <span className="text-brand-green">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quote Card (Integrated seamlessly) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass p-6 rounded-2xl border-l-[3px] border-l-brand-purple border-t border-t-white/5 border-r border-r-white/5 border-b border-b-white/5 relative overflow-hidden shadow-[0_10px_30px_rgba(138,43,226,0.1)]"
            >
              <div className="absolute top-2 right-2 p-2 opacity-10 text-brand-purple">
                <Quote size={80} />
              </div>
              <p className="text-lg font-heading italic text-gray-200 relative z-10 leading-relaxed pr-8">
                "The future of Artificial Intelligence begins with the people who choose to explore it."
              </p>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: AI Illustration (The Masterpiece) */}
          <div className="lg:col-span-7 relative flex justify-center items-center order-1 lg:order-2 w-full min-h-[350px] sm:min-h-[450px]">
             {/* Deep Ambient Glow */}
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 via-transparent to-brand-green/20 rounded-full blur-[80px] -z-10" />

             <motion.div 
               animate={{ y: [-15, 15, -15] }} 
               transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
               className="relative w-full h-full flex justify-center items-center"
             >
               {/* Complex Gyroscopic Rings (Simulated 3D with 2D Transforms) */}
               
               {/* Ring 1 (Diagonal Tilt) */}
               <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]" style={{ transform: 'rotate(-30deg) scaleY(0.35)' }}>
                 <motion.div 
                   animate={{ rotate: 360 }} 
                   transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                   className="w-full h-full rounded-full border-[2px] border-brand-purple/40 border-l-brand-purple border-r-transparent"
                 >
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[12px] bg-brand-purple rounded-full shadow-[0_0_20px_#8a2be2,0_0_40px_#8a2be2]" />
                 </motion.div>
               </div>

               {/* Ring 2 (Opposite Diagonal Tilt) */}
               <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]" style={{ transform: 'rotate(30deg) scaleY(0.35)' }}>
                 <motion.div 
                   animate={{ rotate: -360 }} 
                   transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                   className="w-full h-full rounded-full border-[2px] border-brand-green/30 border-t-brand-green border-b-transparent"
                 >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-[9px] bg-brand-green rounded-full shadow-[0_0_20px_#39ff14,0_0_40px_#39ff14]" />
                 </motion.div>
               </div>

               {/* Ring 3 (Flat Background Ring) */}
               <motion.div 
                 animate={{ rotate: 360 }} 
                 transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                 className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full border border-dashed border-white/5 -z-10"
               />

               {/* Hyper-Glow Core Sphere */}
               <motion.div 
                 whileHover={{ scale: 1.05, boxShadow: "0 0 80px rgba(57,255,20,0.4), inset 0 0 40px rgba(138,43,226,0.6)" }}
                 className="relative flex items-center justify-center w-36 h-36 sm:w-48 sm:h-48 rounded-full z-20 cursor-pointer group transition-all duration-500 overflow-hidden"
                 style={{
                   background: 'rgba(5,5,5,0.7)',
                   boxShadow: 'inset 0 0 30px rgba(138,43,226,0.5), 0 0 40px rgba(57,255,20,0.15)',
                   backdropFilter: 'blur(10px)',
                   WebkitBackdropFilter: 'blur(10px)',
                   border: '1px solid rgba(255,255,255,0.1)'
                 }}
               >
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-green/20" />
                 <div className="absolute inset-0 rounded-full animate-pulse opacity-50" style={{ background: 'radial-gradient(circle, rgba(57,255,20,0.3) 0%, transparent 60%)' }} />
                 <BrainCircuit className="text-white w-14 h-14 sm:w-20 sm:h-20 relative z-20 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover:text-brand-green group-hover:drop-shadow-[0_0_20px_rgba(57,255,20,0.8)] transition-colors duration-500" />
               </motion.div>
               
               {/* Holographic Floating Data Nodes */}
               <motion.div 
                 animate={{ y: [-15, 10, -15], x: [-10, 5, -10] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0 }}
                 className="absolute top-[5%] left-[-5%] sm:left-[5%] glass px-5 py-3 flex items-center gap-4 rounded-2xl border-t border-t-brand-green/60 border-l border-l-brand-green/30 shadow-[0_15px_35px_rgba(57,255,20,0.1)] z-30 bg-black/60 backdrop-blur-xl"
               >
                 <div className="bg-brand-green/20 p-2 rounded-xl border border-brand-green/30">
                   <Cpu size={20} className="text-brand-green drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[9px] font-space tracking-[0.2em] text-brand-green uppercase mb-0.5">Engine</span>
                   <span className="text-sm font-bold text-white tracking-wide">Quantum Compute</span>
                 </div>
               </motion.div>

               <motion.div 
                 animate={{ y: [15, -10, 15], x: [10, -5, 10] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-[5%] right-[-5%] sm:right-[5%] glass px-5 py-3 flex items-center gap-4 rounded-2xl border-b border-b-brand-purple/60 border-r border-r-brand-purple/30 shadow-[0_15px_35px_rgba(138,43,226,0.1)] z-30 bg-black/60 backdrop-blur-xl"
               >
                 <div className="bg-brand-purple/20 p-2 rounded-xl border border-brand-purple/30">
                   <Microscope size={20} className="text-brand-purple drop-shadow-[0_0_8px_rgba(138,43,226,0.8)]" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[9px] font-space tracking-[0.2em] text-brand-purple uppercase mb-0.5">Data</span>
                   <span className="text-sm font-bold text-white tracking-wide">Neural Research</span>
                 </div>
               </motion.div>
               
               <motion.div 
                 animate={{ y: [-10, 15, -10], x: [5, -10, 5] }}
                 transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
                 className="absolute top-[15%] right-[0%] sm:right-[15%] glass px-4 py-2 flex items-center gap-2 rounded-full border border-white/20 shadow-[0_5px_15px_rgba(255,255,255,0.05)] z-10 bg-white/5 backdrop-blur-md"
               >
                 <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_#60a5fa]" />
                 <span className="text-[10px] font-space tracking-widest text-gray-200 uppercase">Syncing...</span>
               </motion.div>

             </motion.div>
          </div>

        </div>

        {/* =========================================
            BENTO GRID: THE EXPERIENCE
        ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { title: 'Knowledge', desc: 'Gain insights from AI experts and thought leaders.', icon: <BrainCircuit size={28} className="text-brand-purple" /> },
            { title: 'Technology', desc: 'Discover emerging AI innovations and tools.', icon: <Cpu size={28} className="text-brand-green" /> },
            { title: 'Collaboration', desc: 'Exchange ideas with researchers, students and professionals.', icon: <Users size={28} className="text-blue-400" /> },
            { title: 'Innovation', desc: 'Explore possibilities shaping the future.', icon: <Rocket size={28} className="text-brand-purple" /> }
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass p-8 flex flex-col items-start border border-white/5 rounded-2xl hover:bg-white/[0.02] transition-all group"
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
            >
              <div className="mb-6 p-4 rounded-xl bg-white/5 group-hover:scale-110 group-hover:bg-brand-purple/10 transition-all duration-300">
                {card.icon}
              </div>
              <h4 className="mb-3 text-xl font-heading text-white">{card.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* =========================================
            BOTTOM TIMELINE: THE JOURNEY
        ========================================= */}
        <div className="max-w-4xl mx-auto pt-4">
          <div className="relative flex justify-between items-center w-full px-4 sm:px-12">
            
            {/* Background connecting line track */}
            <div className="absolute top-[22px] left-[10%] right-[10%] h-[2px] bg-white/5 -z-10" />
            
            {/* Animated glowing line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-[22px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-purple to-brand-green z-0 origin-left"
            />

            {[
              { step: 'Explore', delay: 0 },
              { step: 'Learn', delay: 0.3 },
              { step: 'Connect', delay: 0.6 },
              { step: 'Innovate', delay: 0.9 }
            ].map((node, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: node.delay }}
                className="flex flex-col items-center relative z-10"
              >
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: node.delay + 0.2 }}
                  className="w-12 h-12 rounded-full bg-brand-dark border-2 border-brand-green flex justify-center items-center mb-4 shadow-[0_0_15px_rgba(57,255,20,0.2)]"
                >
                  <div className="w-3 h-3 rounded-full bg-brand-purple shadow-[0_0_8px_rgba(138,43,226,0.8)]" />
                </motion.div>
                <span className="text-xs sm:text-sm font-semibold tracking-[0.1em] uppercase text-gray-300">
                  {node.step}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
