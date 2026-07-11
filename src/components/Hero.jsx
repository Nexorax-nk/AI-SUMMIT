import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const speed = el.getAttribute('data-speed') || 1;
        el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" ref={heroRef} style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: '80px', // to account for navbar
      overflow: 'hidden'
    }}>
      {/* Particle container handled in App level or CSS */}
      <div className="particles">
        {/* Simple CSS particles */}
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${Math.random() * 10 + 10}s`
          }} />
        ))}
      </div>

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
        
        <div className="parallax reveal active" data-speed="2" style={{ marginBottom: '1.5rem' }}>
          <span style={{
            padding: '0.5rem 1rem',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            borderRadius: '50px',
            fontSize: '0.875rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--secondary-color)'
          }}>The Flagship Conference</span>
        </div>

        <h1 className="parallax reveal active stagger-1" data-speed="1.5" style={{ marginBottom: '1rem' }}>
          <span className="text-gradient">ASTRAX'26</span><br />
          AI Innovation Summit
        </h1>

        <p className="parallax reveal active stagger-2" data-speed="1" style={{ 
          maxWidth: '600px', 
          margin: '0 auto 3rem auto',
          fontSize: '1.25rem'
        }}>
          "Shaping the Future of Artificial Intelligence"<br/>
          Join the brightest minds at ATHERA, Chennai Institute of Technology.
        </p>

        <div className="parallax reveal active stagger-3" data-speed="0.5" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <a href="#register" className="btn btn-primary">Register Now</a>
          <a href="#about" className="btn btn-secondary">Explore Summit</a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'slideUp 2s infinite alternate',
        opacity: 0.5
      }}>
        <div style={{
          width: '30px',
          height: '50px',
          border: '2px solid var(--text-muted)',
          borderRadius: '15px',
          display: 'flex',
          justifyContent: 'center',
          padding: '5px'
        }}>
          <div style={{
            width: '6px',
            height: '6px',
            background: 'var(--text-muted)',
            borderRadius: '50%',
            animation: 'fadeIn 1s infinite alternate'
          }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
