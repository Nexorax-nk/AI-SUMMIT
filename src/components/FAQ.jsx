import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  Cpu,
  MapPin,
  MessageCircle,
  Mic2,
  Rocket,
  Sparkles,
  Users,
} from 'lucide-react';

const FAQS = [
  {
    category: 'Attendance',
    icon: Users,
    q: "Who can attend ASTRAX’26?",
    a: 'ASTRAX’26 is designed for engineering students, AI and ML enthusiasts, researchers, faculty, developers, data scientists, startups, entrepreneurs, and industry professionals.',
  },
  {
    category: 'About',
    icon: Sparkles,
    q: 'What is the ASTRAX AI Innovation Summit?',
    a: 'It is the flagship AI conference organized by ATHERA, the Department Club of Artificial Intelligence & Machine Learning at Chennai Institute of Technology. The summit brings students, researchers, experts, entrepreneurs, startups, and innovators together.',
  },
  {
    category: 'Focus areas',
    icon: Cpu,
    q: 'Which AI topics will the summit explore?',
    a: 'The program focuses on Generative AI, large language models, Agentic AI, machine learning, deep learning, computer vision, natural language processing, AI in healthcare, and responsible AI.',
  },
  {
    category: 'Program',
    icon: CalendarDays,
    q: 'What is included in the tentative agenda?',
    a: 'The current program runs from 9:00 AM to 11:00 AM and includes registration, a welcome address, an opening keynote, an AI innovation talk, a panel discussion, and a vote of thanks. Final timings will be shared with registered attendees.',
  },
  {
    category: 'Speakers',
    icon: Mic2,
    q: 'Who are the keynote speakers and panel guests?',
    a: 'The summit is expected to feature 8+ keynote speakers and panel guests. Speaker names are currently to be announced and will be published through the official ASTRAX channels once confirmed.',
  },
  {
    category: 'Showcase',
    icon: Rocket,
    q: 'What can startups and innovators expect?',
    a: 'The summit includes a startup showcase, sponsor exhibitions, networking, and opportunities for industry-academia collaboration. Its objectives include showcasing AI innovation, fostering startup engagement, and connecting students with industry.',
  },
  {
    category: 'Venue',
    icon: MapPin,
    q: 'Where is ASTRAX’26 being organized?',
    a: 'The summit is organized by ATHERA, Department of AI & ML, at Chennai Institute of Technology (CIT), Chennai. Detailed venue and arrival information will be provided through official event communication.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-12 sm:py-16 bg-transparent overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-4xl">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="flex items-center justify-center gap-3 text-sm tracking-[0.2em] uppercase text-brand-green mb-4 font-semibold">
            <Sparkles size={16} />
            <span>Summit Briefing</span>
            <Sparkles size={16} />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-heading mb-6 leading-tight text-white">
            Frequently Asked <span className="text-gradient">Questions.</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = faq.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass border transition-all duration-300 rounded-2xl overflow-hidden ${
                  isOpen ? 'border-brand-purple/50 bg-white/[0.03] shadow-[0_10px_30px_rgba(138,43,226,0.1)]' : 'border-white/5 hover:border-white/10 hover:bg-white/[0.01]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? 'bg-brand-purple/20 text-brand-purple border border-brand-purple/30' : 'bg-white/5 text-gray-400 border border-white/5'
                    }`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-space tracking-widest uppercase text-brand-green mb-1">
                        {faq.category}
                      </span>
                      <h3 className={`text-lg sm:text-xl font-heading transition-colors duration-300 ${
                        isOpen ? 'text-white' : 'text-gray-300'
                      }`}>
                        {faq.q}
                      </h3>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 ml-4 transition-transform duration-500 ${isOpen ? 'rotate-180 text-brand-purple' : 'text-gray-500'}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 ml-0 sm:ml-[72px]">
                        <p className="text-gray-400 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          {/* Subtle gradient flash */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-brand-green/10 opacity-50" />
          
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-14 h-14 rounded-full bg-brand-green/20 border border-brand-green/30 flex items-center justify-center text-brand-green">
              <MessageCircle size={24} />
            </div>
            <div>
              <h4 className="text-white font-heading text-xl mb-1">Still have a question?</h4>
              <p className="text-gray-400 text-sm">Connect with the ATHERA summit team.</p>
            </div>
          </div>
          
          <a 
            href="#contact" 
            className="relative z-10 flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-brand-green hover:text-black transition-colors duration-300"
          >
            Contact Team <ArrowUpRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
