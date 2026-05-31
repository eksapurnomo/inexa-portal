import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArchitecturePage from './pages/ArchitecturePage';
import ProductsOverviewPage from './pages/ProductsOverviewPage';
import HexaRuntimePage from './pages/HexaRuntimePage';
import HexaCognitivePage from './pages/HexaCognitivePage';
import ResearchPage from './pages/ResearchPage';
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-slate-500/30">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/products" element={<ProductsOverviewPage />} />
          <Route path="/products/hexa-runtime" element={<HexaRuntimePage />} />
          <Route path="/products/hexa-cognitive" element={<HexaCognitivePage />} />
          <Route path="/research" element={<ResearchPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
