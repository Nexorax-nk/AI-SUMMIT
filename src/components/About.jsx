import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const reveals = sectionRef.current.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding" ref={sectionRef} style={{ position: 'relative' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          
          <div className="reveal">
            <h2 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1 }}>
              About <br/> ASTRAX'26
            </h2>
            <p style={{ marginTop: '2rem', fontSize: '1.2rem', color: 'var(--text-color)' }}>
              The flagship Artificial Intelligence conference organized by ATHERA. We bring together visionaries, researchers, and builders shaping the next generation of AI.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass glow-border reveal stagger-1" style={{ padding: '2.5rem' }}>
              <div style={{ 
                width: '50px', height: '50px', 
                borderRadius: '12px', 
                background: 'rgba(59, 130, 246, 0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem',
                color: 'var(--primary-color)'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Our Vision</h3>
              <p>To foster a global ecosystem of AI innovation, bridging the gap between academic research and industry application to solve humanity's greatest challenges.</p>
            </div>

            <div className="glass glow-border reveal stagger-2" style={{ padding: '2.5rem' }}>
              <div style={{ 
                width: '50px', height: '50px', 
                borderRadius: '12px', 
                background: 'rgba(139, 92, 246, 0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem',
                color: 'var(--accent-color)'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Our Mission</h3>
              <p>Empowering students and professionals with state-of-the-art knowledge, networking opportunities, and hands-on experience in Artificial Intelligence.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
