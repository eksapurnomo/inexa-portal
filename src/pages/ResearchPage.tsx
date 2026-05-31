import { Link } from 'react-router-dom';
import { ChevronRight, Clock } from 'lucide-react';

const researchDirections = [
  { title: 'Autonomous Planning Systems', status: 'In Development', description: 'Investigating dynamic context-aware autonomous planning architectures that can navigate complex multi-step reasoning goals.' },
  { title: 'Adaptive Replanning', status: 'In Development', description: 'Strategies for real-time path correction when an autonomous system encounters runtime errors or logical dead-ends.' },
  { title: 'Cognitive Memory Graphs', status: 'Planned', description: 'Architecting semantic knowledge representations that persist across distinct sessions without state corruption.' },
  { title: 'Multi-Agent Coordination', status: 'Planned', description: 'Protocols for distributing cognitive load across specialized autonomous agents working in parallel.' },
  { title: 'Durable Execution Infrastructure', status: 'In Development', description: 'Building the fundamental routing, execution, and state checkpointing primitives for non-deterministic AI tasks.' },
  { title: 'Runtime Reliability', status: 'In Development', description: 'System-level guarantees for observability, failure handling, and retry semantics within an autonomous loop.' },
  { title: 'Provider-Agnostic AI Infrastructure', status: 'In Development', description: 'Techniques for normalizing LLM interactions, streaming, and tool use across divergent foundation models.' },
  { title: 'Verified Memory Persistence', status: 'Planned', description: 'Mechanisms ensuring memory logs are only permanently appended following explicit confirmation of operational success.' }
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="py-4 flex items-center text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-slate-300">Research</span>
        </nav>

        <main className="max-w-5xl py-12 pb-24">
          
          <section className="mb-20">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
              Research & Insights
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl tracking-tight">
              Research directions shaping the future of autonomous intelligence infrastructure.
            </p>
          </section>

          {/* RESEARCH DIRECTIONS */}
          <section>
            <h2 className="text-2xl font-semibold text-white tracking-tight mb-8 flex items-center gap-3">
              <Clock className="w-6 h-6 text-slate-500" />
              Research Directions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {researchDirections.map((item, idx) => (
                <div key={idx} className="p-8 border border-slate-800 rounded-2xl bg-slate-900/30 flex flex-col h-full hover:border-slate-700 hover:bg-slate-900/50 hover:-translate-y-1 hover:shadow-[0_8px_24px_-8px_rgba(255,255,255,0.05)] transition-all duration-300">
                  <div className="mb-4 flex items-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border ${
                      item.status === 'In Development' 
                        ? 'bg-indigo-900/30 text-indigo-300 border-indigo-500/30' 
                        : 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
