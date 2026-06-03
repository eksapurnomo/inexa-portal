import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArchitecturePage from './pages/ArchitecturePage';
import ProductsOverviewPage from './pages/ProductsOverviewPage';
import HexaRuntimePage from './pages/HexaRuntimePage';
import HexaMemoryPage from './pages/HexaMemoryPage';
import HexaKnowledgePage from './pages/HexaKnowledgePage';
import HexaGovernancePage from './pages/HexaGovernancePage';
import HexaCognitivePage from './pages/HexaCognitivePage';
import ResearchPage from './pages/ResearchPage';
import CompanyPage from './pages/CompanyPage';
import DocsPage from './pages/DocsPage';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-slate-500/30">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/products" element={<ProductsOverviewPage />} />
          <Route path="/products/hexa-cognitive" element={<HexaCognitivePage />} />
          <Route path="/products/hexa-runtime" element={<HexaRuntimePage />} />
          <Route path="/products/hexa-memory" element={<HexaMemoryPage />} />
          <Route path="/products/hexa-knowledge" element={<HexaKnowledgePage />} />
          <Route path="/products/hexa-governance" element={<HexaGovernancePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/docs/:sectionSlug/:pageSlug" element={<DocsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
