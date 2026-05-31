import { Link } from 'react-router-dom';
import { 
  ChevronRight, CheckCircle2, 
  Brain, AlertTriangle, Database, Target, Route
} from 'lucide-react';
import { HexaCognitiveDiagram } from '../components/diagrams/HexaCognitiveDiagram';

const SidebarLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors">
    {children}
  </a>
);

export default function HexaCognitivePage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="py-4 flex items-center text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <Link to="/products" className="hover:text-slate-300 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-slate-300">Hexa Cognitive</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 pb-24 relative">
          
          {/* Sticky Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-1">
              <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Hexa Cognitive</h3>
              <SidebarLink href="#overview">Overview</SidebarLink>
              <SidebarLink href="#executive-summary">Executive Summary</SidebarLink>
              <SidebarLink href="#problems">Why Cognitive Exists</SidebarLink>
              <SidebarLink href="#capabilities">Core Capabilities</SidebarLink>
              <SidebarLink href="#cognitive-flow">Cognitive Flow</SidebarLink>
              <SidebarLink href="#components">Architecture Components</SidebarLink>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 max-w-4xl">
            
            {/* HERO */}
            <section id="overview" className="py-12 border-b border-slate-800/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/50 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-slate-300" />
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">
                  Hexa Cognitive
                </h1>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed max-w-3xl tracking-tight mb-10">
                Cognitive infrastructure for autonomous intelligence. Planning, adaptive replanning, and safe memory persistence.
              </p>
            </section>

            {/* EXECUTIVE SUMMARY */}
            <section id="executive-summary" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Executive Summary</h2>
              <div className="prose prose-invert max-w-none text-slate-400">
                <p className="mb-4 leading-relaxed">
                  Hexa Cognitive is a dedicated microservice operating above the runtime layer. It is responsible for higher-order intelligence tasks: transforming natural language intents into executable DAGs, managing cognitive checkpoints, persisting semantic memory, and orchestrating self-correction.
                </p>
                <p className="leading-relaxed">
                  It acts as the brain that directs the Hexa Runtime muscles. By strictly isolating cognitive logic from execution physics, it enables complex autonomous session management, strict budgeting, and safe memory lineage.
                </p>
              </div>
            </section>

            {/* WHY COGNITIVE EXISTS */}
            <section id="problems" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Why Cognitive Exists</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Raw LLMs are stateless and prone to hallucination over long horizons. Hexa Cognitive addresses the inherent limitations of stateless AI integration:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Hallucination Poisoning', desc: 'Saving failed thoughts corrupts future memory. Storage must be deferred until runtime success.' },
                  { title: 'Execution Brittleness', desc: 'Workflows fail when real-world APIs change. Adaptive replanning is required.' },
                  { title: 'Runaway Loops', desc: 'Autonomous agents can burn infinite budgets without strict session management.' },
                  { title: 'Redundant Planning', desc: 'Re-planning identical intents wastes tokens. Deterministic replay caching is needed.' }
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
            <section id="capabilities" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Core Capabilities</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Adaptive Replanning</h4>
                      <p className="text-slate-500 text-xs mt-1">Dynamically patches failed DAG nodes using runtime error contexts, supporting up to 3 self-correction iterations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Autonomy Sessions</h4>
                      <p className="text-slate-500 text-xs mt-1">Tracks execution budgets and limits (max_iterations, max_runtime_seconds) with endpoints to pause or terminate.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Safe Memory Persistence</h4>
                      <p className="text-slate-500 text-xs mt-1">Memory is strictly saved only after Hexa Runtime confirms a successful execution callback.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Memory Lineage</h4>
                      <p className="text-slate-500 text-xs mt-1">Persists semantic memory in PostgreSQL, tracing up to 10 hops of parent-child ancestry chains.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Replay Cache</h4>
                      <p className="text-slate-500 text-xs mt-1">Uses deterministic hashing to check for previously generated plans and avoid redundant planning.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Cognitive Checkpoints</h4>
                      <p className="text-slate-500 text-xs mt-1">Tracks planner state, autonomy state, memory references, and plan versions throughout the lifecycle.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* COGNITIVE FLOW */}
            <section id="cognitive-flow" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Cognitive / Runtime Workflow</h2>
              
              
              <div className="p-8 border border-slate-800 rounded-xl bg-slate-900/20 mx-auto">
                <HexaCognitiveDiagram />
              </div>
            </section>

            {/* ARCHITECTURE COMPONENTS */}
            <section id="components" className="py-16">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Architecture Components</h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'LLM Planner', icon: Target, desc: 'Generates execution DAGs from user intents while checking replay caches.' },
                  { name: 'Replay Cache', icon: Route, desc: 'Avoids redundant planning using deterministic hashes of inputs.' },
                  { name: 'Autonomy Manager', icon: Brain, desc: 'Enforces session bounds, budgeting, and execution limits.' },
                  { name: 'Memory Lineage', icon: Database, desc: 'PostgreSQL-backed ancestry tracker for semantic knowledge graphs.' }
                ].map(comp => (
                  <div key={comp.name} className="p-6 border border-slate-800 rounded-xl bg-slate-900/30 hover:bg-slate-900/50 hover:-translate-y-1 hover:shadow-[0_8px_24px_-8px_rgba(99,102,241,0.15)] hover:border-slate-700/80 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <comp.icon className="w-5 h-5 text-slate-400" />
                      <h3 className="text-white font-medium">{comp.name}</h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{comp.desc}</p>
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
