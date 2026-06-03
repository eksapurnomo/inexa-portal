import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Brain, Workflow, Database, Globe, Shield, ArrowUpRight } from 'lucide-react';
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

        <main className="max-w-5xl mx-auto py-12 pb-24">
          <section className="mb-16 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
              EXA Space Product Suite
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl tracking-tight">
              Modular components of Hexa Platform for enterprise AI systems.
            </p>
          </section>

          {/* MAIN PRODUCT */}
          <section className="mb-20">
            <div className="p-8 md:p-12 border border-slate-800 rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-400"></div>
              <div className="flex flex-col md:flex-row gap-10 justify-between items-start md:items-center">
                <div>
                  <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest">
                    Main Product
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hexa Platform</h2>
                  <p className="text-xl text-slate-400 font-medium mb-6">Human-Governed AI Workforce System</p>
                  
                  <ul className="space-y-3 mb-8">
                    {['Orchestration Layer', 'Execution Engine', 'Memory System', 'Knowledge Integration', 'Governance & Approval System'].map((item) => (
                      <li key={item} className="flex items-center text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    <Link to="/architecture" className="flex items-center px-6 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-200 transition-colors">
                      Explore Architecture <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <a href="/company#contact" className="flex items-center px-6 py-3 border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
                      Request Demo <ArrowUpRight className="w-4 h-4 ml-2 text-slate-400" />
                    </a>
                  </div>
                </div>
                
                {/* Abstract Visual Representation */}
                <div className="hidden lg:flex w-72 h-72 rounded-full border border-slate-800 bg-slate-900/50 items-center justify-center relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0%,transparent_70%)] rounded-full"></div>
                  <div className="w-48 h-48 rounded-full border border-slate-700/50 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                      <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/40"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ARCHITECTURE COMPONENTS */}
          <section>
            <div className="flex items-center mb-10">
              <h2 className="text-2xl font-semibold tracking-tighter text-white">Architecture Components</h2>
              <div className="h-px bg-slate-800 flex-grow ml-6"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Link to="/products/hexa-cognitive" className="flex flex-col h-full p-6 border border-slate-800/80 rounded-2xl bg-slate-900/30 hover:bg-slate-800/50 hover:border-slate-700 transition-all group">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-950/40 border border-blue-900/50 flex items-center justify-center text-blue-400">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Hexa Cognitive</h3>
                      <p className="text-xs text-blue-400/80 font-mono">The Planning Layer</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {['DAG Planning', 'Context Injection', 'AI Orchestration'].map(item => (
                      <li key={item} className="text-sm text-slate-400 flex items-center">
                        <span className="w-1 h-1 rounded-full bg-slate-600 mr-2"></span> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs font-semibold text-slate-500 group-hover:text-blue-400 transition-colors flex items-center">
                    VIEW COMPONENT <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <Link to="/products/hexa-runtime" className="flex flex-col h-full p-6 border border-slate-800/80 rounded-2xl bg-slate-900/30 hover:bg-slate-800/50 hover:border-slate-700 transition-all group">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-indigo-950/40 border border-indigo-900/50 flex items-center justify-center text-indigo-400">
                      <Workflow className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Hexa Runtime</h3>
                      <p className="text-xs text-indigo-400/80 font-mono">The Execution Layer</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {['LLM Execution', 'Tool Execution', 'Stateless Processing'].map(item => (
                      <li key={item} className="text-sm text-slate-400 flex items-center">
                        <span className="w-1 h-1 rounded-full bg-slate-600 mr-2"></span> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs font-semibold text-slate-500 group-hover:text-indigo-400 transition-colors flex items-center">
                    VIEW COMPONENT <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <Link to="/products/hexa-memory" className="flex flex-col h-full p-6 border border-slate-800/80 rounded-2xl bg-slate-900/30 hover:bg-slate-800/50 hover:border-slate-700 transition-all group">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-900/50 flex items-center justify-center text-purple-400">
                      <Database className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Hexa Memory</h3>
                      <p className="text-xs text-purple-400/80 font-mono">The Experience Layer</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {['Vector Memory (pgvector)', 'Semantic Search', 'Execution History'].map(item => (
                      <li key={item} className="text-sm text-slate-400 flex items-center">
                        <span className="w-1 h-1 rounded-full bg-slate-600 mr-2"></span> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs font-semibold text-slate-500 group-hover:text-purple-400 transition-colors flex items-center">
                    VIEW COMPONENT <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <Link to="/products/hexa-knowledge" className="flex flex-col h-full p-6 border border-slate-800/80 rounded-2xl bg-slate-900/30 hover:bg-slate-800/50 hover:border-slate-700 transition-all group">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950/40 border border-emerald-900/50 flex items-center justify-center text-emerald-400">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Hexa Knowledge</h3>
                      <p className="text-xs text-emerald-400/80 font-mono">The Data Layer</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {['SAP / SQL / REST Integration', 'Real-time Data Access', 'Secure Connectors'].map(item => (
                      <li key={item} className="text-sm text-slate-400 flex items-center">
                        <span className="w-1 h-1 rounded-full bg-slate-600 mr-2"></span> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs font-semibold text-slate-500 group-hover:text-emerald-400 transition-colors flex items-center">
                    VIEW COMPONENT <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <Link to="/products/hexa-governance" className="flex flex-col h-full p-6 border border-slate-800/80 rounded-2xl bg-slate-900/30 hover:bg-slate-800/50 hover:border-slate-700 transition-all group">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-rose-950/40 border border-rose-900/50 flex items-center justify-center text-rose-400">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Hexa Governance</h3>
                      <p className="text-xs text-rose-400/80 font-mono">The Control Layer</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {['Risk Engine (0–4)', 'Human Approval Workflow', 'Audit Trail'].map(item => (
                      <li key={item} className="text-sm text-slate-400 flex items-center">
                        <span className="w-1 h-1 rounded-full bg-slate-600 mr-2"></span> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs font-semibold text-slate-500 group-hover:text-rose-400 transition-colors flex items-center">
                    VIEW COMPONENT <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </Link>
              </motion.div>

            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
