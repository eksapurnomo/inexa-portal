import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import Research from './components/Research';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <Ecosystem />
        <Research />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
