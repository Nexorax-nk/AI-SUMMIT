import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-purple/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Speakers />
        <Timeline />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
