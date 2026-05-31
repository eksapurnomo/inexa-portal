import { Link } from 'react-router-dom';
import { 
  ChevronRight, ArrowDown, CheckCircle2, 
  Brain, AlertTriangle, Lightbulb, Database, Users, Target
} from 'lucide-react';

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
              <SidebarLink href="#roadmap">Future Roadmap</SidebarLink>
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
                Planning, reasoning, memory, reflection, and coordination infrastructure for autonomous intelligence.
              </p>
            </section>

            {/* EXECUTIVE SUMMARY */}
            <section id="executive-summary" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Executive Summary</h2>
              <div className="prose prose-invert max-w-none text-slate-400">
                <p className="mb-4 leading-relaxed">
                  Hexa Cognitive provides the intelligence architecture required for autonomous systems to plan, act, and remember. While foundation models provide raw reasoning, Hexa Cognitive provides the structured framework to turn reasoning into reliable multi-step decisions.
                </p>
                <p className="leading-relaxed">
                  It takes responsibility for context persistence, self-correction, and breaking down complex user goals into actionable plans that can be handed off to Hexa Runtime for execution.
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
                  { title: 'Limited Reasoning', desc: 'Models struggle to maintain logical consistency across very long contexts.' },
                  { title: 'No Long-Term Memory', desc: 'Critical user context and past decisions are lost between sessions.' },
                  { title: 'Weak Planning', desc: 'Inability to reliably break down complex, multi-day objectives.' },
                  { title: 'Fragmented Context', desc: 'Data scattered across disparate systems cannot be synthesized.' },
                  { title: 'Inconsistent Decision-Making', desc: 'Lack of reflection mechanisms leads to uncorrected errors.' }
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
                      <h4 className="text-slate-200 font-medium text-sm">Planning</h4>
                      <p className="text-slate-500 text-xs mt-1">Hierarchical decomposition of high-level goals into sub-tasks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Reasoning</h4>
                      <p className="text-slate-500 text-xs mt-1">Multi-step logic evaluation and probability assessment.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Reflection</h4>
                      <p className="text-slate-500 text-xs mt-1">Critique and self-evaluation of proposed plans before action.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Memory</h4>
                      <p className="text-slate-500 text-xs mt-1">Episodic and semantic storage of past interactions.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Context Persistence</h4>
                      <p className="text-slate-500 text-xs mt-1">Durable state that survives across individual LLM calls.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Agent Coordination</h4>
                      <p className="text-slate-500 text-xs mt-1">Synchronizing context between specialized sub-agents.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Self-Correction</h4>
                      <p className="text-slate-500 text-xs mt-1">Dynamic replanning when encountering execution failures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* COGNITIVE FLOW */}
            <section id="cognitive-flow" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Cognitive Flow</h2>
              
              <div className="flex flex-col items-center justify-center p-12 border border-slate-800 rounded-xl bg-slate-900/20 font-mono text-sm max-w-2xl mx-auto">
                {['Goal', 'Planning', 'Reasoning', 'Memory', 'Reflection', 'Decision', 'Runtime Execution'].map((step, idx, arr) => (
                  <div key={step} className="flex flex-col items-center w-full">
                    <div className={`px-6 py-3 border rounded-lg text-center w-64 ${
                      idx === arr.length - 1 ? 'border-cyan-700 bg-cyan-900/30 text-cyan-400' : 
                      idx === 0 ? 'border-slate-700 bg-slate-800 text-white' : 
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
                  { name: 'Planner', icon: Target, desc: 'Generates step-by-step resolution graphs for complex user requests.' },
                  { name: 'Reasoning Engine', icon: Lightbulb, desc: 'Evaluates logical consistency and context relevance.' },
                  { name: 'Memory Layer', icon: Database, desc: 'Vector and graph databases for semantic and episodic recall.' },
                  { name: 'Reflection Layer', icon: Brain, desc: 'Self-critique modules that analyze outputs prior to execution.' },
                  { name: 'Coordination Layer', icon: Users, desc: 'Manages handoffs between specialized cognitive agents.' }
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
                  'Cognitive Memory Fabric',
                  'Multi-Agent Coordination',
                  'Distributed Intelligence',
                  'Autonomous Decision Systems'
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
