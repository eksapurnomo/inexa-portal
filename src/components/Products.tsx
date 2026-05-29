import { motion } from 'framer-motion';
import { Cpu, BrainCircuit } from 'lucide-react';

const products = [
  {
    title: 'Hexa Runtime',
    tagline: 'Autonomous AI Orchestration Runtime',
    icon: Cpu,
    features: [
      'DAG orchestration',
      'Durable execution',
      'Retries & replay',
      'Multi-provider routing',
      'Observability',
      'Scalable AI workflows'
    ],
    accent: 'bg-blue-500'
  },
  {
    title: 'Hexa Cognitive',
    tagline: 'Adaptive Cognitive Intelligence Layer',
    icon: BrainCircuit,
    features: [
      'Adaptive planning',
      'Memory architecture',
      'Reflection engine',
      'Agent coordination',
      'Long-running autonomy',
      'Self-correcting workflows'
    ],
    accent: 'bg-cyan-500'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">Core Infrastructure</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            The foundational primitives enabling enterprise-grade autonomous operations, designed for massive scale and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
              className="glass-card p-16 rounded-[2.5rem] relative group overflow-hidden border border-slate-800/60 hover:border-slate-700 transition-all duration-700 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Architecture grid visual accent */}
              <div className="absolute top-16 right-16 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 10H90V90H10V10Z" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400" />
                  <path d="M10 50H90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400" />
                  <path d="M50 10V90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-400" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-900 border border-slate-700/50 rounded-2xl flex items-center justify-center mb-8 group-hover:border-slate-600 transition-all duration-500 shadow-sm">
                  <product.icon className="w-7 h-7 text-slate-400 group-hover:text-slate-200 transition-colors" />
                </div>
                
                <h3 className="text-3xl font-semibold text-white mb-3 tracking-tighter">{product.title}</h3>
                <p className="text-slate-400 font-medium mb-10 text-lg tracking-tight">{product.tagline}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-slate-500 group-hover:text-slate-400 transition-colors">
                      <div className="w-1 h-1 rounded-full bg-slate-600 mr-3 flex-shrink-0 group-hover:bg-slate-400 transition-colors" />
                      <span className="text-sm font-medium tracking-wide">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
