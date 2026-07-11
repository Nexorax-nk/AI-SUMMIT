import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(5, 8, 22, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
          ASTRAX<span style={{ color: 'var(--primary-color)' }}>'26</span>
        </div>

        {/* Links (Desktop) */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="nav-links">
          <a href="#hero" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Home</a>
          <a href="#about" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>About</a>
          <a href="#speakers" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Speakers</a>
          <a href="#timeline" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Timeline</a>
          <a href="#faq" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>FAQ</a>
          <a href="#contact" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Contact</a>
        </div>

        {/* CTA */}
        <a href="#register" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
          Register Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
