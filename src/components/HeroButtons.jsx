import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import agendaPdf from '../assets/Athera_AI_Summit_Chief_Guest_Agenda.pdf';

export default function HeroButtons() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-col sm:flex-row items-center gap-6 mt-10 justify-center w-full max-w-2xl mx-auto"
    >
      <a href="https://unstop.com/conferences/astrax26-ai-innovation-summit-chennai-institute-of-technology-1719170" target="_blank" rel="noreferrer" className="group relative w-full sm:w-auto overflow-hidden rounded-full p-[1px] block">
        <span className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-green rounded-full blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
        <div className="relative bg-black rounded-full px-8 py-3.5 flex items-center justify-center gap-3 w-full h-full transition-all duration-300 group-hover:bg-black/80">
          <span className="text-sm font-semibold tracking-wider text-white">REGISTER NOW</span>
          <ArrowRight size={16} className="text-brand-green group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </a>

      <a href={agendaPdf} download="Athera_AI_Summit_Chief_Guest_Agenda.pdf" className="group flex items-center justify-center gap-3 px-8 py-3.5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 w-full sm:w-auto">
        <span className="text-sm font-medium tracking-wider text-gray-300 group-hover:text-white transition-colors">EVENT AGENDA</span>
        <Download size={16} className="text-gray-400 group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-300" />
      </a>
    </motion.div>
  );
}
