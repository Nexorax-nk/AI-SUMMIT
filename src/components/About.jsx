import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Users, Rocket, GraduationCap, Microscope, Laptop, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative', background: 'transparent', overflow: 'hidden', padding: '4rem 0' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* =========================================
            SECTION ONE: HEADER
        ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{ fontSize: '0.875rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem', fontWeight: '600' }}>
            ABOUT THE AI INNOVATION SUMMIT
          </div>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ 
              height: '2px', 
              width: '80px', 
              margin: '0 auto 1.5rem auto', 
              background: 'linear-gradient(90deg, transparent, var(--primary-color), var(--accent-color), transparent)' 
            }} 
          />
          
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
            Where Ideas Meet <span className="text-gradient">Intelligence.</span>
          </h2>
          
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.125rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Presented under ASTRAX'26, the AI Innovation Summit brings together students, researchers, innovators, startups and industry leaders to explore the future of Artificial Intelligence through meaningful conversations, emerging technologies and collaborative experiences.
          </p>
        </motion.div>

        {/* =========================================
            SECTION TWO: WHY THIS SUMMIT
        ========================================= */}
        <div className="grid-2" style={{ alignItems: 'center', marginBottom: '4rem' }}>
          {/* Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
              Why This Summit Matters
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '0.5rem', lineHeight: 1.6 }}>
              Artificial Intelligence is transforming every industry.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              The AI Innovation Summit creates a space where knowledge is shared, innovation is celebrated and future leaders come together to shape what's next.
            </p>
          </motion.div>

          {/* Right Side: AI Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px', position: 'relative' }}
          >
            {/* Very slow floating animation for the entire illustration */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              {/* Glowing Core */}
              <div style={{
                position: 'relative', width: '60px', height: '60px', borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                boxShadow: '0 0 50px rgba(138, 46, 255, 0.4)', zIndex: 2
              }} />
              
              {/* Rotating Holographic Rings */}
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                style={{ position: 'absolute', width: '160px', height: '160px', border: '1px dashed var(--secondary-color)', borderRadius: '50%', opacity: 0.3, zIndex: 1 }} />
              <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                style={{ position: 'absolute', width: '220px', height: '220px', border: '1px solid var(--accent-color)', borderRadius: '50%', opacity: 0.15, zIndex: 1 }} />

              {/* Neural Connections & Particles */}
              <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, overflow: 'visible' }}>
                <motion.line x1="50%" y1="50%" x2="20%" y2="20%" stroke="var(--primary-color)" strokeWidth="1" opacity="0.3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
                <motion.line x1="50%" y1="50%" x2="80%" y2="30%" stroke="var(--accent-color)" strokeWidth="1" opacity="0.3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.8 }} />
                <motion.line x1="50%" y1="50%" x2="30%" y2="80%" stroke="var(--secondary-color)" strokeWidth="1" opacity="0.3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2 }} />
                <motion.line x1="50%" y1="50%" x2="70%" y2="70%" stroke="var(--primary-color)" strokeWidth="1" opacity="0.3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.6 }} />
                
                <circle cx="20%" cy="20%" r="3" fill="var(--primary-color)" opacity="0.5" />
                <circle cx="80%" cy="30%" r="3" fill="var(--accent-color)" opacity="0.5" />
                <circle cx="30%" cy="80%" r="3" fill="var(--secondary-color)" opacity="0.5" />
                <circle cx="70%" cy="70%" r="3" fill="var(--primary-color)" opacity="0.5" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* =========================================
            SECTION THREE: THE AI SUMMIT EXPERIENCE
        ========================================= */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Knowledge', desc: 'Gain insights from AI experts and thought leaders.', icon: <BrainCircuit size={24} color="var(--primary-color)" /> },
              { title: 'Technology', desc: 'Discover emerging AI innovations and tools.', icon: <Cpu size={24} color="var(--accent-color)" /> },
              { title: 'Collaboration', desc: 'Exchange ideas with researchers, students and professionals.', icon: <Users size={24} color="var(--secondary-color)" /> },
              { title: 'Innovation', desc: 'Explore possibilities shaping the future.', icon: <Rocket size={24} color="var(--primary-color)" /> }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass" 
                style={{ 
                  padding: '1.5rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'flex-start',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '12px',
                  transition: 'box-shadow 0.3s ease'
                }}
                whileHover={{ y: -3, boxShadow: '0 0 20px rgba(138, 46, 255, 0.2)', borderColor: 'rgba(168, 255, 60, 0.3)' }}
              >
                <div style={{ marginBottom: '1rem' }}>{card.icon}</div>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1.125rem', fontFamily: 'var(--font-heading)' }}>{card.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================
            SECTION FOUR: WHO SHOULD ATTEND
        ========================================= */}
        <div style={{ marginBottom: '4rem' }}>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', fontSize: '1.75rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}
          >
            Who Should Attend
          </motion.h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {[
              { label: 'Students', icon: <GraduationCap size={20} /> },
              { label: 'Researchers', icon: <Microscope size={20} /> },
              { label: 'Developers', icon: <Laptop size={20} /> },
              { label: 'Industry Professionals', icon: <Briefcase size={20} /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass"
                style={{ 
                  padding: '1.25rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  gap: '0.75rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                <div style={{ color: 'var(--accent-color)' }}>{item.icon}</div>
                <div style={{ fontSize: '0.95rem', fontWeight: '500' }}>{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================
            SECTION FIVE: THE SUMMIT JOURNEY
        ========================================= */}
        <div style={{ marginBottom: '4rem', padding: '0 1rem' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            position: 'relative',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            {/* Background connecting line track */}
            <div style={{ position: 'absolute', top: '16px', left: '10%', right: '10%', height: '2px', background: 'rgba(255,255,255,0.05)', zIndex: 0 }} />
            
            {/* Animated glowing line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ 
                position: 'absolute', top: '16px', left: '10%', right: '10%', height: '2px', 
                background: 'linear-gradient(90deg, var(--primary-color), var(--accent-color))', 
                zIndex: 1, transformOrigin: 'left' 
              }} 
            />

            {[
              { step: 'Explore', delay: 0 },
              { step: 'Learn', delay: 0.3 },
              { step: 'Connect', delay: 0.6 },
              { step: 'Innovate', delay: 0.9 }
            ].map((node, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: node.delay }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2 }}
              >
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: node.delay + 0.2 }}
                  style={{ 
                    width: '32px', height: '32px', borderRadius: '50%', background: '#050505',
                    border: '2px solid var(--accent-color)', display: 'flex', justifyContent: 'center', alignItems: 'center',
                    marginBottom: '0.75rem', boxShadow: '0 0 10px rgba(168, 255, 60, 0.3)'
                  }}
                >
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)' }} />
                </motion.div>
                <span style={{ fontSize: '0.85rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  {node.step}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================
            BOTTOM: QUOTE
        ========================================= */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem auto' }}
        >
          <h3 className="text-gradient" style={{ 
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', 
            lineHeight: 1.3, 
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontWeight: 400
          }}>
            "The future of Artificial Intelligence begins with the people who choose to explore it."
          </h3>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

