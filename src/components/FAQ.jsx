import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState(null);
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

  const faqs = [
    {
      q: "Who can attend ASTRAX'26?",
      a: "The summit is open to students, researchers, industry professionals, and anyone passionate about the future of Artificial Intelligence."
    },
    {
      q: "Is there a virtual attendance option?",
      a: "Yes! While we highly recommend the in-person experience for networking, all keynote sessions and major panels will be live-streamed for virtual ticket holders."
    },
    {
      q: "How can my startup participate in the showcase?",
      a: "Startups can apply through our official portal. Selected startups will get a booth in the exhibition area and 5 minutes to pitch to our panel of investors."
    },
    {
      q: "Are there hands-on workshops?",
      a: "Yes, there are parallel workshop tracks on Day 2 covering topics like LLM fine-tuning, embodied AI programming, and RAG systems."
    },
    {
      q: "What is the refund policy?",
      a: "Tickets are fully refundable up to 30 days before the event. After that, you may transfer your ticket to another person."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(search.toLowerCase()) || 
    faq.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="faq" className="section-padding" ref={sectionRef}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="text-gradient">Frequently Asked Questions</h2>
        </div>

        <div className="reveal stagger-1" style={{ position: 'relative', marginBottom: '3rem' }}>
          <Search style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
          <input 
            type="text" 
            placeholder="Search questions..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '1.2rem 1.5rem 1.2rem 4rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--glass-border)',
              borderRadius: '50px',
              color: 'var(--text-color)',
              fontSize: '1rem',
              outline: 'none',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredFaqs.length > 0 ? filteredFaqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass reveal stagger-2" 
              style={{ overflow: 'hidden', cursor: 'pointer' }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div style={{ 
                padding: '1.5rem', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                background: openIndex === index ? 'rgba(255, 255, 255, 0.05)' : 'transparent'
              }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 500, margin: 0 }}>{faq.q}</h4>
                <ChevronDown 
                  size={20} 
                  style={{ 
                    transition: 'transform 0.3s', 
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)' 
                  }} 
                />
              </div>
              <div style={{ 
                height: openIndex === index ? 'auto' : 0, 
                opacity: openIndex === index ? 1 : 0,
                padding: openIndex === index ? '0 1.5rem 1.5rem 1.5rem' : '0 1.5rem',
                transition: 'all 0.3s'
              }}>
                <p style={{ margin: 0, fontSize: '1rem' }}>{faq.a}</p>
              </div>
            </div>
          )) : (
            <p className="text-center text-muted" style={{ textAlign: 'center' }}>No results found for "{search}"</p>
          )}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
