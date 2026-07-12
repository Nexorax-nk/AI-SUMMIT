import React, { useEffect, useRef } from 'react';

const Speakers = () => {
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

  const speakers = [
    {
      name: "Dr. Sarah Chen",
      designation: "Chief AI Scientist",
      company: "NeuralMind",
      topic: "AGI architectures and alignment",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Marcus Rodriguez",
      designation: "VP of Engineering",
      company: "Quantum Compute",
      topic: "Scaling LLMs efficiently",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Dr. Elena Volkov",
      designation: "Head of Robotics",
      company: "Boston Dynamics",
      topic: "Embodied AI in the real world",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="speakers" className="section-padding" ref={sectionRef} style={{ background: 'rgba(5, 8, 22, 0.5)' }}>
      <div className="container">
        
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="text-gradient">Speakers & Visionaries</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>Learn from the pioneers building the intelligent systems of tomorrow.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          marginBottom: '6rem'
        }}>
          {speakers.map((speaker, index) => (
            <div key={index} className={`glass glow-border reveal stagger-${index + 1}`} style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ height: '300px', width: '100%', overflow: 'hidden' }}>
                <img 
                  src={speaker.img} 
                  alt={speaker.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-color)' }}>{speaker.name}</h3>
                <p style={{ color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.2rem' }}>{speaker.designation}</p>
                <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', opacity: 0.8 }}>{speaker.company}</p>
                <div style={{
                  padding: '1rem',
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '8px',
                  border: '1px solid var(--glass-border)'
                }}>
                  <p style={{ fontSize: '0.85rem', margin: 0 }}><strong>Topic:</strong> {speaker.topic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Panel Discussion */}
        <div className="glass reveal" style={{ padding: '4rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            background: 'radial-gradient(circle at 100% 0%, rgba(6, 182, 212, 0.15), transparent 50%)',
            pointerEvents: 'none'
          }} />
          
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--secondary-color)', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Featured Event
              </div>
              <h2 style={{ marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>The Great Panel Discussion</h2>
              <p style={{ marginBottom: '2rem' }}>Theme: "Navigating the Ethics of Artificial General Intelligence"</p>
              
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Moderator</p>
                  <p style={{ fontWeight: 600, color: 'white' }}>David Chen, Wired</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Guests</p>
                  <p style={{ fontWeight: 600, color: 'white' }}>All Keynote Speakers</p>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
               <div style={{ width: '100%', height: '300px', borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
                 <img src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1000" alt="Audience" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,8,22,1), transparent)' }} />
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Speakers;
