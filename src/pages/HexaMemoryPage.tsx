import { Link } from 'react-router-dom';
import { 
  ChevronRight, CheckCircle2, 
  Database, AlertTriangle
} from 'lucide-react';

const SidebarLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors">
    {children}
  </a>
);

export default function HexaMemoryPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="py-4 flex items-center text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <Link to="/products" className="hover:text-slate-300 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-slate-300">Hexa Memory</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 pb-24 relative">
          
          {/* Sticky Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-1">
              <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Hexa Memory</h3>
              <SidebarLink href="#overview">Overview</SidebarLink>
              <SidebarLink href="#executive-summary">Executive Summary</SidebarLink>
              <SidebarLink href="#problems">Why Memory Exists</SidebarLink>
              <SidebarLink href="#capabilities">Core Capabilities</SidebarLink>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 max-w-4xl">
            
            {/* HERO */}
            <section id="overview" className="py-12 border-b border-slate-800/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/50 flex items-center justify-center">
                  <Database className="w-6 h-6 text-slate-300" />
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">
                  Hexa Memory
                </h1>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed max-w-3xl tracking-tight mb-8">
                The hippocampus of Hexa Platform. Persisting semantic knowledge, user preferences, and structured execution histories safely via PostgreSQL and pgvector.
              </p>
            </section>

            {/* EXECUTIVE SUMMARY */}
            <section id="executive-summary" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Executive Summary</h2>
              <div className="prose prose-invert max-w-none text-slate-400">
                <p className="mb-4 leading-relaxed">
                  Hexa Memory acts as the hippocampus of Hexa Platform, responsible for storing episodic memory, execution history, and user preferences. Using PostgreSQL with the pgvector extension, it performs semantic searches over 2048-dimensional vectors to recall past experiences.
                </p>
                <p className="leading-relaxed">
                  It introduces strict multi-tenant isolation and guarantees that memory is only persisted after the Runtime confirms a successful execution, providing a hallucination-free experience baseline.
                </p>
              </div>
            </section>

            {/* WHY MEMORY EXISTS */}
            <section id="problems" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Why Memory Exists</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Large Language Models lack continuous learning outside their context windows. Hexa Memory solves critical issues in stateful AI agents:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Hallucination Poisoning', desc: 'Saving failed thoughts corrupts future memory. Storage must be deferred until runtime success.' },
                  { title: 'Context Window Limits', desc: 'LLMs cannot process years of history. Semantic search retrieves only relevant context.' },
                  { title: 'Data Isolation', desc: 'Cross-tenant data leaks are unacceptable. Row-Level Security ensures absolute isolation.' },
                  { title: 'Loss of Persona', desc: 'Without memory, AI forgets user preferences and past interactions instantly.' }
                ].map(problem => (
                  <div key={problem.title} className="p-5 border border-slate-800/60 rounded-xl bg-slate-900/20 flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-slate-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-white text-sm font-semibold mb-1">{problem.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{problem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CORE CAPABILITIES */}
            <section id="capabilities" className="py-16">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Core Capabilities</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Runtime-Confirmed Persistence</h4>
                      <p className="text-slate-500 text-xs mt-1">Memory is strictly saved only after Hexa Runtime confirms a successful execution callback.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Semantic Search</h4>
                      <p className="text-slate-500 text-xs mt-1">Utilizes cosine distance matching over 2048-dimensional BytePlus embeddings for high-accuracy recall.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Multi-Tenant Isolation</h4>
                      <p className="text-slate-500 text-xs mt-1">Every query requires tenant_id and team_id verification, enforced via composite indexes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Schema Structure</h4>
                      <p className="text-slate-500 text-xs mt-1">Organized via memory_records with explicit content, metadata, and memory_type classifications.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
