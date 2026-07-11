import React, { useEffect, useRef } from 'react';

const Timeline = () => {
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

  const schedule = [
    { time: "08:00 AM", title: "Registration & Breakfast", desc: "Collect your badges and network." },
    { time: "09:30 AM", title: "Opening Address", desc: "Welcome to ASTRAX'26 by ATHERA." },
    { time: "10:00 AM", title: "Keynote: The Future of AGI", desc: "Dr. Sarah Chen on alignment." },
    { time: "11:30 AM", title: "AI Innovation Talks", desc: "Lightning talks from industry leaders." },
    { time: "01:00 PM", title: "Networking Lunch", desc: "Connect with peers and sponsors." },
    { time: "02:30 PM", title: "Panel Discussion", desc: "Ethics of Artificial General Intelligence." },
    { time: "04:30 PM", title: "Startup Showcase", desc: "Top 5 AI startups present their products." },
    { time: "06:00 PM", title: "Closing Ceremony", desc: "Awards and final remarks." }
  ];

  const highlights = [
    "Keynote Sessions",
    "AI Innovation Talks",
    "Startup Showcase",
    "Networking",
    "Industry Experts",
    "Sponsor Exhibitions"
  ];

  return (
    <section id="timeline" className="section-padding" ref={sectionRef}>
      <div className="container">
        
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="text-gradient">Summit Itinerary & Highlights</h2>
        </div>

        <div className="grid-2">
          
          {/* Timeline Column */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: '20px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, var(--primary-color), var(--accent-color))',
              opacity: 0.3
            }} />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {schedule.map((item, index) => (
                <div key={index} className="reveal stagger-1" style={{ display: 'flex', gap: '2rem', position: 'relative' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--bg-color)',
                    border: '2px solid var(--primary-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                    boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)'
                  }}>
                    <div style={{ width: '10px', height: '10px', background: 'var(--accent-color)', borderRadius: '50%' }} />
                  </div>
                  <div className="glass" style={{ padding: '1.5rem', flex: 1 }}>
                    <span style={{ color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: 600 }}>{item.time}</span>
                    <h3 style={{ margin: '0.5rem 0', fontSize: '1.25rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.95rem', margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Column */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ position: 'sticky', top: '150px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {highlights.map((highlight, index) => (
                  <div key={index} className={`glass reveal stagger-${(index % 3) + 1}`} style={{
                    padding: '1rem 2rem',
                    borderRadius: '50px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-color)',
                    fontWeight: 500,
                    cursor: 'default',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  >
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="glass glow-border reveal stagger-3" style={{ marginTop: '4rem', padding: '3rem', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '1rem' }}>Ready to shape the future?</h3>
                <p style={{ marginBottom: '2rem' }}>Secure your spot before tickets run out.</p>
                <a href="#register" className="btn btn-primary" style={{ width: '100%' }}>Register for ASTRAX'26</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Timeline;
