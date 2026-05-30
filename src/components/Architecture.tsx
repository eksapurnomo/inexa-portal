import { motion } from 'framer-motion';
import { Database, Cpu, BrainCircuit, LayoutGrid, ArrowUp, Cloud } from 'lucide-react';

const layers = [
  {
    id: 'applications',
    title: 'Applications & Industries',
    description: 'Enterprise ecosystems powered by our infrastructure',
    icon: LayoutGrid,
    color: 'border-slate-800 bg-slate-900/40 text-slate-200',
    delay: 1.0
  },
  {
    id: 'cognitive',
    title: 'Hexa Cognitive Layer',
    description: 'Adaptive planning, memory, and multi-agent coordination',
    icon: BrainCircuit,
    color: 'border-slate-800/80 bg-slate-900/60 text-slate-300',
    delay: 0.8
  },
  {
    id: 'runtime',
    title: 'Hexa Runtime Layer',
    description: 'Durable execution, orchestration, and provider routing',
    icon: Cpu,
    color: 'border-slate-700/60 bg-slate-800/30 text-slate-300',
    delay: 0.6
  },
  {
    id: 'providers',
    title: 'AI Providers',
    description: 'Underlying foundation models and intelligence systems',
    icon: Cloud,
    color: 'border-slate-700/60 bg-slate-800/30 text-slate-400',
    delay: 0.4
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    description: 'Cloud, Compute, GPU, Storage, Networking',
    icon: Database,
    color: 'border-slate-700 bg-slate-800/50 text-slate-500',
    delay: 0.2
  }
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6"
          >
            Systems Architecture
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg leading-relaxed tracking-tight"
          >
            INEXA sits above modern AI providers and infrastructure, providing orchestration, cognition, execution, and operational intelligence.
          </motion.p>
        </div>

        <div className="relative max-w-3xl mx-auto flex flex-col space-y-4 md:space-y-6">
          {/* Central connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700/50 to-transparent -translate-x-1/2 -z-10" />

          {layers.map((layer, index) => (
            <div key={layer.id} className="relative">
              {/* Optional upward arrows between layers */}
              {index !== 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: layer.delay + 0.1, duration: 1 }}
                  className="absolute -top-5 md:-top-7 left-1/2 -translate-x-1/2 text-slate-600"
                >
                  <ArrowUp className="w-5 h-5 opacity-50" />
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: layer.delay, duration: 0.8, ease: "easeOut" }}
                className={`glass-card p-6 md:p-8 rounded-2xl border flex items-center shadow-sm hover:border-slate-600 transition-all duration-700 ${layer.color.split(' ')[0]} ${layer.color.split(' ')[1]}`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-6 bg-slate-900 border border-slate-700 flex-shrink-0 shadow-sm`}>
                  <layer.icon className={`w-6 h-6 ${layer.color.split(' ')[2]}`} />
                </div>
                
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 tracking-tighter">
                    {layer.title}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed tracking-tight">
                    {layer.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
