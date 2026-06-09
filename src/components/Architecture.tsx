import { motion } from 'framer-motion';
import { ArrowRight, Workflow, Server, RefreshCw } from 'lucide-react';

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6"
          >
            Hexa Infrastructure Engine
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg leading-relaxed tracking-tight"
          >
            How it works internally.
          </motion.p>
        </div>

        {/* The Core Flow Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full flex justify-center mb-24"
        >
          <div className="w-full max-w-4xl bg-slate-900/50 rounded-3xl p-6 md:p-10 border border-slate-800/80 shadow-2xl backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white mb-6 text-center tracking-wide uppercase text-slate-400">🧠 The Core Flow</h3>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-sm md:text-base font-medium text-slate-300">
              <span className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">Trigger</span>
              <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
              <span className="px-4 py-2 bg-emerald-900/30 text-emerald-400 border border-emerald-800/50 rounded-lg">Cognitive</span>
              <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
              <span className="px-4 py-2 bg-blue-900/30 text-blue-400 border border-blue-800/50 rounded-lg">Runtime</span>
              <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
              <span className="px-4 py-2 bg-amber-900/30 text-amber-400 border border-amber-800/50 rounded-lg">Memory</span>
              <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
              <span className="px-4 py-2 bg-purple-900/30 text-purple-400 border border-purple-800/50 rounded-lg">Knowledge</span>
              <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
              <span className="px-4 py-2 bg-rose-900/30 text-rose-400 border border-rose-800/50 rounded-lg">Governance</span>
              <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:block" />
              <span className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">Output</span>
            </div>
          </div>
        </motion.div>

        {/* Architecture Details */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Workflow Architecture */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-2xl bg-slate-900/30 border border-slate-800/50"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                <Workflow className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">Workflow Architecture</h3>
            </div>
            <ul className="space-y-4 mb-6">
              <li className="text-slate-400 text-sm leading-relaxed">
                <strong className="text-slate-200 block mb-1">DAG Execution:</strong> 
                Plans are parsed and executed as Directed Acyclic Graphs to ensure sequence integrity and deterministic outcomes.
              </li>
              <li className="text-slate-400 text-sm leading-relaxed">
                <strong className="text-slate-200 block mb-1">Event-Driven Flow (Redis Streams):</strong> 
                High-throughput messaging system handles real-time triggers and inter-engine communication seamlessly.
              </li>
            </ul>
            <p className="text-xs font-medium text-indigo-400/80 bg-indigo-500/10 p-3 rounded-lg border border-indigo-500/20">
              Every workflow is compiled into a deterministic execution graph before any action is taken.
            </p>
          </motion.div>

          {/* System Infrastructure */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-2xl bg-slate-900/30 border border-slate-800/50"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                <Server className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">System Infrastructure</h3>
            </div>
            <ul className="space-y-4 mb-6">
              <li className="text-slate-400 text-sm leading-relaxed">
                <strong className="text-slate-200 block mb-1">Microservices:</strong> 
                A highly decoupled architecture allowing each domain to scale independently based on load.
              </li>
              <li className="text-slate-400 text-sm leading-relaxed">
                <strong className="text-slate-200 block mb-1">Event Bus:</strong> 
                The central nervous system routing state changes and intents across the entire infrastructure.
              </li>
              <li className="text-slate-400 text-sm leading-relaxed">
                <strong className="text-slate-200 block mb-1">State Store:</strong> 
                Ultra-fast, persistent storage mechanisms maintaining the exact status of millions of concurrent tasks.
              </li>
            </ul>
            <p className="text-xs font-medium text-emerald-400/80 bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">
              This layer ensures Hexa behaves like a distributed intelligence system rather than a traditional backend platform.
            </p>
          </motion.div>

          {/* Execution Lifecycle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="p-8 rounded-2xl bg-slate-900/30 border border-slate-800/50"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">Execution Lifecycle</h3>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="text-slate-400 text-sm"><strong className="text-slate-200">Request:</strong> External trigger ingested.</li>
              <li className="text-slate-400 text-sm"><strong className="text-slate-200">Plan:</strong> Cognitive formulates DAG plan.</li>
              <li className="text-slate-400 text-sm"><strong className="text-slate-200">Execute:</strong> Runtime orchestrates steps.</li>
              <li className="text-slate-400 text-sm"><strong className="text-slate-200">Learn:</strong> Memory captures success/failure.</li>
              <li className="text-slate-400 text-sm"><strong className="text-slate-200">Govern:</strong> Governance monitors policies.</li>
            </ul>
            <p className="text-xs font-medium text-amber-400/80 bg-amber-500/10 p-3 rounded-lg border border-amber-500/20">
              This lifecycle ensures every decision is traceable, reversible, and governable.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
