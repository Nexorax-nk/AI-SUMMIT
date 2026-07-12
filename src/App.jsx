import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Speakers from './components/Speakers'
import Timeline from './components/Timeline'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './index.css'

function App() {
  
  useEffect(() => {
    const cursorGlow = document.getElementById('cursor-glow');
    
    const handleMouseMove = (e) => {
      if (cursorGlow) {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div id="cursor-glow"></div>
      <div className="grid-overlay"></div>
      
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Timeline />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
