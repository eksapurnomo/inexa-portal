import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStatement from './components/BrandStatement';
import Metrics from './components/Metrics';
import Products from './components/Products';
import Architecture from './components/Architecture';
import Ecosystem from './components/Ecosystem';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-slate-500/30">
      <Navbar />
      <main>
        <Hero />
        <BrandStatement />
        <Metrics />
        <Products />
        <Architecture />
        <Ecosystem />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
