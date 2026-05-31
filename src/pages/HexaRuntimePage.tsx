import { Link } from 'react-router-dom';
import { 
  ChevronRight, CheckCircle2, 
  Workflow, AlertTriangle, ShieldCheck, Clock, RotateCcw, Activity, Network
} from 'lucide-react';
import { HexaRuntimeDiagram } from '../components/diagrams/HexaRuntimeDiagram';

const SidebarLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors">
    {children}
  </a>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.2 5.2 0 0 0-1.5-3.8 4.3 4.3 0 0 0 0-3.8s-1.2-.4-4 1.5a13.2 13.2 0 0 0-7 0c-2.8-1.9-4-1.5-4-1.5a4.3 4.3 0 0 0 0 3.8A5.2 5.2 0 0 0 3 12c0 5.2 3 6.4 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
    <path d="M3 19s1 1 3 1 2-1 3-1" />
  </svg>
);

export default function HexaRuntimePage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="py-4 flex items-center text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <Link to="/products" className="hover:text-slate-300 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-slate-300">Hexa Runtime</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 pb-24 relative">
          
          {/* Sticky Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-1">
              <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Hexa Runtime</h3>
              <SidebarLink href="#overview">Overview</SidebarLink>
              <SidebarLink href="#executive-summary">Executive Summary</SidebarLink>
              <SidebarLink href="#problems">Why Runtime Exists</SidebarLink>
              <SidebarLink href="#capabilities">Core Capabilities</SidebarLink>
              <SidebarLink href="#execution-flow">Execution Flow</SidebarLink>
              <SidebarLink href="#components">Architecture Components</SidebarLink>
              <SidebarLink href="#roadmap">Future Roadmap</SidebarLink>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 max-w-4xl">
            
            {/* HERO */}
            <section id="overview" className="py-12 border-b border-slate-800/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/50 flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-slate-300" />
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">
                  Hexa Runtime
                </h1>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed max-w-3xl tracking-tight mb-8">
                Durable execution infrastructure for autonomous systems. Orchestration, routing, and observability built for reliability.
              </p>
              <div className="flex items-center gap-4 mb-2">
                <a href="https://github.com/exa-space/hexa-runtime" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg border border-slate-700 transition-colors">
                  <GithubIcon className="w-4 h-4 mr-2" />
                  View Source
                </a>
              </div>
            </section>

            {/* EXECUTIVE SUMMARY */}
            <section id="executive-summary" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Executive Summary</h2>
              <div className="prose prose-invert max-w-none text-slate-400">
                <p className="mb-4 leading-relaxed">
                  Hexa Runtime is a high-performance, asynchronous AI runtime engine designed for executing multi-agent workflows structured as Directed Acyclic Graphs (DAGs). It is built with production durability, resilience, security, and strict token/cost efficiency in mind.
                </p>
                <p className="leading-relaxed">
                  It rigorously separates orchestration and execution from intelligence. While Hexa Cognitive handles the <em>"what"</em>, Hexa Runtime governs the <em>"how"</em>—managing semaphore-based concurrency, circuit breakers, hybrid caching, and telemetry dead-letter queues.
                </p>
              </div>
            </section>

            {/* WHY RUNTIME EXISTS */}
            <section id="problems" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Why Runtime Exists</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Building reliable AI systems on top of stochastic models and fragile APIs requires robust execution guarantees. Hexa Runtime solves core infrastructural challenges:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Provider Instability', desc: 'LLM APIs suffer from rate limits and outages. Circuit breakers are required.' },
                  { title: 'Workflow Failures', desc: 'Long-running tasks fail mid-execution without durable checkpointing to resume.' },
                  { title: 'Token Waste', desc: 'Redundant LLM queries burn budget. Exact and semantic caching is missing.' },
                  { title: 'Process Exhaustion', desc: 'Unbounded concurrency causes connection pool exhaustion and livelocks.' },
                  { title: 'Observability Loss', desc: 'Telemetry failures crash the main execution loop if not properly buffered.' }
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
                      <h4 className="text-slate-200 font-medium text-sm">Fail-Safe LLM Gateway</h4>
                      <p className="text-slate-500 text-xs mt-1">Wraps providers in circuit breakers (`aiobreaker`). Routes to fallback models automatically on failure.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Async DAG Executor</h4>
                      <p className="text-slate-500 text-xs mt-1">Dependency-aware resolution with semaphores limiting maximum concurrent nodes to prevent starvation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Durable Checkpointing</h4>
                      <p className="text-slate-500 text-xs mt-1">State is serialized and written to Redis/MySQL after every single node completion.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Resilient Retries</h4>
                      <p className="text-slate-500 text-xs mt-1">Automated exponential retries with jitter and cumulative wall-clock limits.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Hybrid Response Caching</h4>
                      <p className="text-slate-500 text-xs mt-1">Exact key-value caching (Redis) paired with semantic matching (Qdrant) minimizes token consumption.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Durable Telemetry</h4>
                      <p className="text-slate-500 text-xs mt-1">Captures sub-cent token counts safely using Redis hashes and Dead-Letter Queues (DLQ).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">OpenTelemetry Instrumentation</h4>
                      <p className="text-slate-500 text-xs mt-1">Rich tracing spans mapping workflows, individual node executions, and backend API hops.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Graceful Shutdown</h4>
                      <p className="text-slate-500 text-xs mt-1">Intercepts SIGTERM signals to cancel running tasks cleanly and save outstanding state.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ARCHITECTURE DIAGRAM */}
            <section id="execution-flow" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Execution Architecture</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                The diagram below illustrates the flow from a cognitive DAG request through semaphore-limited execution, hybrid cache checking, telemetry writing, and the multi-provider LLM circuit breaker routing.
              </p>
              
              <div className="p-8 border border-slate-800 rounded-xl bg-slate-900/30">
                <HexaRuntimeDiagram />
              </div>
            </section>

            {/* ARCHITECTURE COMPONENTS */}
            <section id="components" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Stack Components</h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'FastAPI Gateway', icon: Network, desc: 'Handles rate limits, programmatic prompt injection guards, and JWT auth.' },
                  { name: 'DAG Executor', icon: Activity, desc: 'Async task manager with dependency-aware resolution and reverse mapping.' },
                  { name: 'Redis Cache & Locks', icon: ShieldCheck, desc: 'Exact SHA-256 hash caching, telemetry DLQ, and distributed locking.' },
                  { name: 'Qdrant Vector DB', icon: RotateCcw, desc: 'Houses tenant-isolated embeddings for semantic cache matching.' },
                  { name: 'Observability Stack', icon: Clock, desc: 'structlog for JSON logging, OpenTelemetry for traces, and Redis for durable cost tracking.' }
                ].map(comp => (
                  <div key={comp.name} className="p-6 border border-slate-800 rounded-xl bg-slate-900/30 hover:bg-slate-900/50 hover:-translate-y-1 hover:shadow-[0_8px_24px_-8px_rgba(16,185,129,0.15)] hover:border-slate-700/80 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <comp.icon className="w-5 h-5 text-slate-400" />
                      <h3 className="text-white font-medium">{comp.name}</h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{comp.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FUTURE ROADMAP */}
            <section id="roadmap" className="py-16">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Future Roadmap</h2>
              
              <div className="flex flex-wrap gap-4">
                {[
                  'Dynamic DAG Generation',
                  'Durable Step Execution Persistence',
                  'Dense/Sparse Hybrid Vector Search',
                  'Dashboard Visualization UI'
                ].map(item => (
                  <div key={item} className="px-5 py-3 border border-slate-800 rounded-full bg-slate-900/20 text-slate-400 text-sm font-medium tracking-tight">
                    {item}
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
