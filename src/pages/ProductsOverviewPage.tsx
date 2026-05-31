import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Brain, Workflow } from 'lucide-react';
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

          <div className="grid md:grid-cols-2 gap-8">
            
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
                  Planning, reasoning, memory, reflection, and coordination infrastructure for autonomous intelligence.
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
                  Durable orchestration, execution, routing, replay, and observability infrastructure for intelligent systems.
                </p>
                
                <div className="mt-auto flex items-center text-sm font-medium text-slate-500 group-hover:text-slate-300 transition-colors uppercase tracking-wider">
                  Explore Runtime <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>

          </div>
        </main>

      </div>
    </div>
  );
}
