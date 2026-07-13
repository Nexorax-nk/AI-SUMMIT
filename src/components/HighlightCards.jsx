import { motion } from 'framer-motion';
import { Bot, Brain, Rocket, Globe } from 'lucide-react';

export default function HighlightCards() {
  const highlights = [
    { icon: <Bot size={20} className="text-brand-green" />, title: 'Generative AI' },
    { icon: <Brain size={20} className="text-pink-400" />, title: 'Machine Learning' },
    { icon: <Rocket size={20} className="text-orange-400" />, title: 'Innovation' },
    { icon: <Globe size={20} className="text-blue-400" />, title: 'Networking' }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-wrap items-center justify-center gap-4 mt-8 max-w-3xl mx-auto"
    >
      {highlights.map((highlight, index) => (
        <motion.div 
          key={index} 
          variants={item}
          className="glass-card px-5 py-2.5 flex items-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
        >
          <span className="text-xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{highlight.icon}</span>
          <span className="text-sm font-medium text-gray-200 tracking-wide">{highlight.title}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
