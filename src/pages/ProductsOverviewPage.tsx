import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Brain, Workflow, ShieldCheck, Route, Database, RotateCcw, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductsOverviewPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="py-4 flex items-center text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-slate-300">Products</span>
        </nav>

        <main className="max-w-4xl py-12 pb-24">
          <section className="mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
              INEXA Products
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl tracking-tight">
              Modular infrastructure for autonomous intelligence. Explore our foundational layers for cognition and execution.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col"
            >
              <Link to="/products/hexa-cognitive" className="flex flex-col h-full p-8 border border-slate-800 rounded-2xl bg-slate-900/30 hover:bg-slate-900/60 hover:border-slate-700 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/50 flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-slate-300" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Hexa Cognitive</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  Cognitive infrastructure for autonomous intelligence. Planning, adaptive replanning, and safe memory persistence.
                </p>
                
                <div className="mt-auto flex items-center text-sm font-medium text-slate-500 group-hover:text-slate-300 transition-colors uppercase tracking-wider">
                  Explore Cognitive <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group flex flex-col"
            >
              <Link to="/products/hexa-runtime" className="flex flex-col h-full p-8 border border-slate-800 rounded-2xl bg-slate-900/30 hover:bg-slate-900/60 hover:border-slate-700 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/50 flex items-center justify-center mb-6">
                  <Workflow className="w-6 h-6 text-slate-300" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Hexa Runtime</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  Durable execution infrastructure for autonomous systems. Orchestration, routing, and observability built for reliability.
                </p>
                
                <div className="mt-auto flex items-center text-sm font-medium text-slate-500 group-hover:text-slate-300 transition-colors uppercase tracking-wider">
                  Explore Runtime <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>

          </div>

          {/* WHY INEXA */}
          <section className="pt-16 border-t border-slate-800/50">
            <h2 className="text-3xl font-semibold tracking-tighter text-white mb-10">
              Why INEXA
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Runtime-Confirmed Memory Persistence', icon: ShieldCheck, desc: 'Memory is safely persisted to PostgreSQL only after the Runtime confirms a successful execution callback, preventing hallucination poisoning.' },
                { title: 'Multi-Provider Failover Execution', icon: Route, desc: 'LLM Gateway uses circuit breakers (`aiobreaker`). If a provider hits timeouts or 5xx limits, traffic routes to fallback providers instantly.' },
                { title: 'Hybrid Exact + Semantic Cache', icon: Database, desc: 'Combines Redis for exact SHA-256 hash caching with Qdrant for semantic vector matching, drastically reducing token waste.' },
                { title: 'Durable Telemetry Pipeline', icon: Activity, desc: 'Sub-cent token tracking is pushed to a Redis Dead-Letter Queue (DLQ), ensuring observability failures never crash the main loop.' },
                { title: 'Adaptive Replanning Architecture', icon: RotateCcw, desc: 'When execution fails, Hexa Cognitive parses the runtime error and dynamically patches the DAG up to 3 times before aborting.' },
                { title: 'Vendor-Agnostic Deployment', icon: Workflow, desc: 'Completely uncoupled from specific cloud vendors or foundation models, allowing deployment across bare-metal, Vast.ai, AWS, or Azure.' }
              ].map(feature => (
                <div key={feature.title} className="p-6 border border-slate-800/60 rounded-xl bg-slate-900/20 hover:bg-slate-900/40 hover:-translate-y-1 hover:shadow-[0_8px_24px_-8px_rgba(99,102,241,0.15)] hover:border-slate-700/80 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3 text-white">
                    <feature.icon className="w-5 h-5 text-slate-400" />
                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* DEPLOYMENT TARGETS */}
          <section className="pt-16 mt-16 border-t border-slate-800/50">
            <h2 className="text-3xl font-semibold tracking-tighter text-white mb-4">
              Deployment Targets
            </h2>
            <p className="text-slate-400 mb-10 leading-relaxed max-w-2xl">
              Architectural patterns supported by INEXA's cognitive and runtime layers across key industries.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Enterprise Operations',
                  items: ['Workflow Automation', 'Internal AI Copilot', 'Knowledge Systems', 'Process Orchestration']
                },
                {
                  title: 'Digital Finance',
                  items: ['Risk Analysis', 'Lending Automation', 'Fraud Detection', 'AI Financial Services']
                },
                {
                  title: 'Marketplace Platforms',
                  items: ['Product Intelligence', 'Seller Copilot', 'Content Moderation', 'Recommendation Systems']
                },
                {
                  title: 'Logistics & Supply Chain',
                  items: ['Fleet Coordination', 'Route Optimization', 'Inventory Intelligence', 'Supply Monitoring']
                },
                {
                  title: 'Public Sector',
                  items: ['Citizen Services', 'Case Management', 'Knowledge Access', 'Digital Operations']
                }
              ].map(target => (
                <div key={target.title} className="p-6 border border-slate-800/60 rounded-xl bg-slate-900/20">
                  <h3 className="font-semibold text-white mb-4">{target.title}</h3>
                  <ul className="space-y-2">
                    {target.items.map(item => (
                      <li key={item} className="text-sm text-slate-400 flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 mr-3 flex-shrink-0 opacity-60"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

        </main>

      </div>
    </div>
  );
}
