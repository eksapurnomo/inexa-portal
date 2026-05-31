import { Link } from 'react-router-dom';
import { 
  ChevronRight, ArrowDown, CheckCircle2, 
  Workflow, AlertTriangle, ShieldCheck, Clock, Route, RotateCcw, Activity
} from 'lucide-react';

const SidebarLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors">
    {children}
  </a>
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
              <p className="text-xl text-slate-400 leading-relaxed max-w-3xl tracking-tight mb-10">
                Durable orchestration, execution, routing, replay, and observability infrastructure for intelligent systems.
              </p>
            </section>

            {/* EXECUTIVE SUMMARY */}
            <section id="executive-summary" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Executive Summary</h2>
              <div className="prose prose-invert max-w-none text-slate-400">
                <p className="mb-4 leading-relaxed">
                  Hexa Runtime is the foundational execution layer of the INEXA platform. It strictly separates intelligence (decisions) from execution (actions), ensuring that complex, long-running processes remain durable, observable, and resilient to failure.
                </p>
                <p className="leading-relaxed">
                  While the cognitive layer dictates <em>what</em> needs to happen, Hexa Runtime dictates <em>how</em> it happens—managing retries, provider routing, checkpointing, and state persistence.
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
                  { title: 'Workflow Failures', desc: 'Long-running tasks fail mid-execution without a way to resume.' },
                  { title: 'Provider Instability', desc: 'API timeouts, rate limits, and outages disrupt operations.' },
                  { title: 'Execution Interruptions', desc: 'Process crashes lead to complete data and progress loss.' },
                  { title: 'Context Loss', desc: 'State is dropped between complex multi-step reasoning chains.' },
                  { title: 'Retry Complexity', desc: 'Custom exponential backoff and routing logic is difficult to scale.' }
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
                      <h4 className="text-slate-200 font-medium text-sm">Workflow Orchestration</h4>
                      <p className="text-slate-500 text-xs mt-1">Coordinate complex, multi-step processes reliably.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">DAG Execution</h4>
                      <p className="text-slate-500 text-xs mt-1">Execute tasks via Directed Acyclic Graphs for parallelism.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Scheduling</h4>
                      <p className="text-slate-500 text-xs mt-1">Time-based and event-driven trigger mechanisms.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Routing</h4>
                      <p className="text-slate-500 text-xs mt-1">Dynamic payload routing to optimal AI providers.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Checkpointing</h4>
                      <p className="text-slate-500 text-xs mt-1">Persist execution state at every critical juncture.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Replay</h4>
                      <p className="text-slate-500 text-xs mt-1">Resume execution from the exact point of failure.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Retry Management</h4>
                      <p className="text-slate-500 text-xs mt-1">Intelligent backoff and jitter for transient errors.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Observability</h4>
                      <p className="text-slate-500 text-xs mt-1">Complete telemetry and logging of all execution states.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* EXECUTION FLOW */}
            <section id="execution-flow" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Execution Flow</h2>
              
              <div className="flex flex-col items-center justify-center p-12 border border-slate-800 rounded-xl bg-slate-900/20 font-mono text-sm max-w-2xl mx-auto">
                {['Request', 'Workflow', 'Runtime Engine', 'Provider Router', 'Execution', 'Checkpoint', 'Replay'].map((step, idx, arr) => (
                  <div key={step} className="flex flex-col items-center w-full">
                    <div className={`px-6 py-3 border rounded-lg text-center w-64 ${
                      idx === 0 || idx === arr.length - 1 ? 'border-slate-700 bg-slate-800 text-white' : 
                      'border-slate-600 bg-slate-900/50 text-slate-300'
                    }`}>
                      {step}
                    </div>
                    {idx < arr.length - 1 && (
                      <ArrowDown className="w-5 h-5 text-slate-600 my-3" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* ARCHITECTURE COMPONENTS */}
            <section id="components" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Architecture Components</h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'Runtime Engine', icon: Activity, desc: 'The core execution loop managing task lifecycle and concurrency.' },
                  { name: 'Execution Router', icon: Route, desc: 'Directs workloads to appropriate AI models or compute resources.' },
                  { name: 'State Manager', icon: ShieldCheck, desc: 'Maintains strict consistency of workflow states across nodes.' },
                  { name: 'Checkpoint Layer', icon: RotateCcw, desc: 'Serializes memory and execution state to durable storage.' },
                  { name: 'Observability Layer', icon: Clock, desc: 'Aggregates metrics, traces, and structured logs.' }
                ].map(comp => (
                  <div key={comp.name} className="p-6 border border-slate-800 rounded-xl bg-slate-900/30">
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
                  'Distributed Runtime',
                  'Multi-Region Execution',
                  'Event Streaming',
                  'Agent Runtime Mesh'
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
