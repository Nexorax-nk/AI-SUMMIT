import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Speakers & Panels', href: '#speakers' },
  { name: 'Timeline & Highlights', href: '#timeline' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#');
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      if (isScrollingRef.current) return;

      const sections = navLinks.map(link => link.href === '#' ? 'home' : link.href.substring(1));
      let current = '#';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 150 && bottom >= 150) {
             current = section === 'home' ? '#' : `#${section}`;
             break;
          }
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setActiveSection(href);
    isScrollingRef.current = true;
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }

    // Re-enable scroll spy after animation finishes
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/40 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo area */}
        <div className="flex items-center cursor-pointer" onClick={(e) => handleScrollTo(e, '#')}>
          <img src={logo} alt="ASTRAX'26 Logo" className="h-12 sm:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-sm font-inter transition-colors duration-300 relative group py-1 ${
                  isActive ? 'text-brand-green font-medium' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                
                {/* Active Dot with Framer Motion layoutId for smooth sliding */}
                {isActive && (
                  <motion.span 
                    layoutId="activeNavDot"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute -bottom-1.5 left-0 right-0 mx-auto w-1.5 h-1.5 rounded-full bg-brand-green shadow-[0_0_8px_rgba(0,255,128,0.6)]"
                  />
                )}

                {/* Hover Underline */}
                <span className={`absolute -bottom-1.5 left-0 w-full h-[2px] bg-brand-green transform origin-left transition-transform duration-300 ease-out rounded-full ${isActive ? 'scale-x-0' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </a>
            );
          })}
        </div>

        {/* Desktop Register Button */}
        <button className="hidden md:flex items-center gap-2 group border border-brand-purple/50 rounded-full px-6 py-2.5 bg-brand-purple/10 hover:bg-brand-purple/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(138,43,226,0.5)]">
          <span className="text-xs font-semibold tracking-wider text-white">REGISTER NOW</span>
          <ArrowRight size={14} className="text-white group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2 -mr-2 hover:text-brand-green transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 border-b border-white/10 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      handleScrollTo(e, link.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-base font-inter relative group w-fit flex items-center ${isActive ? 'text-brand-green font-medium' : 'text-gray-300'}`}
                  >
                    {isActive && (
                      <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-brand-green shadow-[0_0_8px_rgba(0,255,128,0.6)]"></span>
                    )}
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-brand-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                );
              })}
              <button className="flex items-center justify-center gap-2 group border border-brand-purple/50 rounded-full px-6 py-3 bg-brand-purple/10 w-full mt-4 hover:bg-brand-purple/20 transition-all duration-300">
                <span className="text-xs font-semibold tracking-wider text-white">REGISTER NOW</span>
                <ArrowRight size={14} className="text-white group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
