import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PlaceholderSection from './components/PlaceholderSection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-purple/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Speakers />
        <PlaceholderSection id="timeline" title="Timeline & Highlights" />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
