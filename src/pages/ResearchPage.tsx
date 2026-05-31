import { Link } from 'react-router-dom';
import { ChevronRight, FileText, FlaskConical, Clock } from 'lucide-react';

const roadmapItems = [
  {
    title: 'Durable Execution for Autonomous Systems',
    description: 'Investigating novel checkpointing mechanisms for stateful LLM operations that survive complete infrastructure failure.',
  },
  {
    title: 'Cognitive Memory Architecture',
    description: 'Designing graph-based memory structures that allow agents to reason over episodic history without context window limits.',
  },
  {
    title: 'Provider-Agnostic AI Infrastructure',
    description: 'Standardizing unified orchestration patterns to seamlessly route requests across heterogeneous LLM providers.',
  },
  {
    title: 'Multi-Agent Coordination Patterns',
    description: 'Exploring consensus algorithms and negotiation protocols for independent autonomous agents operating in shared environments.',
  },
  {
    title: 'Autonomous Operations Design',
    description: 'Frameworks for human-in-the-loop oversight in systems that operate autonomously for extended temporal horizons.',
  }
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

          {/* PUBLISHED RESEARCH */}
          <section className="mb-24">
            <h2 className="text-2xl font-semibold text-white tracking-tight mb-8 flex items-center gap-3">
              <FileText className="w-6 h-6 text-slate-500" />
              Published Research
            </h2>
            
            <div className="p-12 border border-slate-800 border-dashed rounded-2xl bg-slate-900/10 flex flex-col items-center justify-center text-center">
              <FlaskConical className="w-10 h-10 text-slate-600 mb-4 opacity-50" />
              <h3 className="text-lg font-medium text-slate-300 mb-2">Research publications coming soon</h3>
              <p className="text-slate-500 text-sm max-w-md">
                Our team is currently preparing our foundational papers on durable execution and cognitive orchestration. Check back later for updates.
              </p>
            </div>
          </section>

          {/* RESEARCH ROADMAP */}
          <section>
            <h2 className="text-2xl font-semibold text-white tracking-tight mb-8 flex items-center gap-3">
              <Clock className="w-6 h-6 text-slate-500" />
              Research Roadmap
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {roadmapItems.map((item, idx) => (
                <div key={idx} className="p-8 border border-slate-800 rounded-2xl bg-slate-900/30 flex flex-col h-full hover:border-slate-700 hover:bg-slate-900/50 transition-colors duration-300">
                  <div className="mb-4 flex items-center">
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold uppercase tracking-widest border border-slate-700">
                      Planned
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
