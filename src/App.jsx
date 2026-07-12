import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlaceholderSection from './components/PlaceholderSection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-purple/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Placeholder sections for smooth scrolling */}
        <PlaceholderSection id="about" title="About" />
        <PlaceholderSection id="speakers" title="Speakers & Panels" />
        <PlaceholderSection id="timeline" title="Timeline & Highlights" />
        <PlaceholderSection id="faq" title="FAQ" />
        <PlaceholderSection id="contact" title="Contact" />
      </main>
    </div>
  );
}

export default App;
