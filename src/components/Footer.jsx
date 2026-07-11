import React from 'react';
import { Mail, Phone, MapPin, Globe, MessageCircle, Share2, Disc as Discord } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" style={{ 
      position: 'relative', 
      background: 'rgba(5, 8, 22, 0.9)', 
      borderTop: '1px solid var(--glass-border)',
      paddingTop: '6rem',
      overflow: 'hidden'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid-2" style={{ gap: '4rem', marginBottom: '4rem' }}>
          
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '1.5rem' }}>
              ASTRAX<span style={{ color: 'var(--primary-color)' }}>'26</span>
            </div>
            <p style={{ marginBottom: '2rem', maxWidth: '400px' }}>
              The flagship Artificial Intelligence conference organized by ATHERA. Shaping the future of intelligent systems.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" className="glass" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}><MessageCircle size={18} /></a>
              <a href="#" className="glass" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}><Globe size={18} /></a>
              <a href="#" className="glass" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}><Share2 size={18} /></a>
              <a href="#" className="glass" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}><Discord size={18} /></a>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-color)', fontSize: '1.1rem' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li><a href="#hero" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Home</a></li>
                <li><a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>About Summit</a></li>
                <li><a href="#speakers" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Speakers</a></li>
                <li><a href="#timeline" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Schedule</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-color)', fontSize: '1.1rem' }}>Contact Info</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <MapPin size={20} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>ATHERA, Dept of AI & ML<br/>Chennai Institute of Technology<br/>Chennai, India</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Mail size={20} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>contact@astrax.cit.edu</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Phone size={20} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>+91 98765 43210</span>
                </li>
              </ul>
            </div>
          </div>
          
        </div>

        <div style={{ 
          borderTop: '1px solid var(--glass-border)', 
          padding: '2rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ fontSize: '0.9rem', margin: 0 }}>&copy; 2026 ASTRAX AI Summit. Organized by ATHERA.</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
