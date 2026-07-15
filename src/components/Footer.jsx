import React from 'react';
import { Mail, Phone, MapPin, Globe, MessageCircle, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-black/80 border-t border-white/5 pt-24 pb-8 overflow-hidden backdrop-blur-xl">
      {/* Background glow */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] bg-brand-purple/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Left Column */}
          <div>
            <div className="text-3xl font-bold font-heading mb-6 text-white tracking-wide">
              ASTRAX<span className="text-brand-purple">'26</span>
            </div>
            <p className="mb-8 max-w-md text-gray-400 leading-relaxed">
              The flagship Artificial Intelligence conference organized by ATHERA. Shaping the future of intelligent systems.
            </p>
            <div className="flex gap-4">
              {/* Website */}
              <a 
                href="https://astrax26.tech/" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-brand-purple/20 hover:text-brand-purple hover:border-brand-purple/50 transition-all duration-300 cursor-pointer relative z-20"
                title="Visit Website"
              >
                <Globe size={18} />
              </a>

              {/* Email Icon */}
              <a 
                href="mailto:athera@citchennai.net" 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-brand-purple/20 hover:text-brand-purple hover:border-brand-purple/50 transition-all duration-300 cursor-pointer relative z-20"
                title="Send Email"
              >
                <MessageCircle size={18} />
              </a>

              {/* Native Web Share */}
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  if (navigator.share) {
                    navigator.share({
                      title: 'ASTRAX\'26 AI Summit',
                      url: 'https://astrax26.tech/'
                    }).catch(console.error);
                  } else {
                    navigator.clipboard.writeText('https://astrax26.tech/');
                    alert('Website link copied to clipboard!');
                  }
                }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-brand-purple/20 hover:text-brand-purple hover:border-brand-purple/50 transition-all duration-300 cursor-pointer relative z-20"
                title="Share Website"
              >
                <Share2 size={18} />
              </button>


            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Quick Links */}
            <div>
              <h4 className="mb-6 text-white font-heading text-lg tracking-wide">Quick Links</h4>
              <ul className="flex flex-col gap-3">
                {['Home', 'About Summit', 'Speakers', 'Schedule'].map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={`#${link.split(' ')[0].toLowerCase()}`} 
                      className="text-gray-400 hover:text-brand-green transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green/0 group-hover:bg-brand-green transition-colors duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-6 text-white font-heading text-lg tracking-wide">Contact Info</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 group">
                  <MapPin size={20} className="text-brand-purple shrink-0 mt-0.5 group-hover:text-brand-green transition-colors duration-300" />
                  <span className="text-gray-400 text-sm leading-relaxed">
                    ATHERA, Dept of AI & ML<br/>
                    Chennai Institute of Technology<br/>
                    Chennai, India
                  </span>
                </li>
                <li className="flex items-center gap-3 group relative z-20">
                  <Mail size={20} className="text-brand-purple shrink-0 group-hover:text-brand-green transition-colors duration-300" />
                  <a href="mailto:athera@citchennai.net" target="_blank" rel="noreferrer" className="text-gray-400 text-sm hover:text-brand-purple transition-colors duration-300">athera@citchennai.net</a>
                </li>
                <li className="flex items-center gap-3 group relative z-20">
                  <Phone size={20} className="text-brand-purple shrink-0 group-hover:text-brand-green transition-colors duration-300" />
                  <a href="tel:+919363988152" className="text-gray-400 text-sm hover:text-brand-purple transition-colors duration-300">+91 9363988152</a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 m-0">
            &copy; 2026 ASTRAX AI Summit. Organized by ATHERA.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
