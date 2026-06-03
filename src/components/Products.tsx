import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Database, Network, ShieldCheck } from 'lucide-react';

const coreSystems = [
  {
    title: 'Hexa Cognitive',
    tagline: 'Intelligence & Planning Layer',
    icon: BrainCircuit,
    features: [
      'Adaptive planning',
      'Multi-agent coordination',
      'Context orchestration',
      'Decision structuring'
    ],
  },
  {
    title: 'Hexa Runtime',
    tagline: 'Execution Layer',
    icon: Cpu,
    features: [
      'Durable execution engine',
      'Multi-provider routing',
      'Failover & reliability system',
      'Stateless compute layer'
    ],
  },
  {
    title: 'Hexa Memory',
    tagline: 'Experience Layer',
    icon: Database,
    features: [
      'Vector-based memory (pgvector)',
      'Semantic retrieval',
      'Execution history tracking',
      'Long-term context persistence'
    ],
  },
  {
    title: 'Hexa Knowledge',
    tagline: 'Truth & Data Layer',
    icon: Network,
    features: [
      'SAP / SQL / REST integration',
      'Real-time enterprise data access',
      'Secure connector vault',
      'Structured data grounding'
    ],
  },
  {
    title: 'Hexa Governance',
    tagline: 'Control & Safety Layer',
    icon: ShieldCheck,
    features: [
      'Risk classification (0–4)',
      'Human approval workflow',
      'Policy enforcement engine',
      'Audit trail system'
    ],
  }
];

export default function Products() {
  return (
    <section id="ecosystem" className="py-32 relative overflow-hidden bg-slate-950">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            Hexa Platform Architecture
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Hexa Platform unifies intelligence, execution, memory, knowledge, and governance into a single enterprise-grade AI infrastructure layer.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreSystems.map((system, index) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className="glass-card p-10 rounded-3xl relative group overflow-hidden border border-slate-800/60 hover:border-slate-700 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-900 border border-slate-700/50 rounded-2xl flex items-center justify-center mb-6 group-hover:border-slate-600 transition-all duration-500 shadow-sm">
                  <system.icon className="w-6 h-6 text-slate-400 group-hover:text-slate-200 transition-colors" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">{system.title}</h3>
                <p className="text-slate-400 font-medium mb-8 text-sm tracking-tight uppercase tracking-wider">{system.tagline}</p>
                
                <div className="space-y-4">
                  {system.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-slate-500 group-hover:text-slate-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-3 flex-shrink-0 group-hover:bg-slate-400 transition-colors" />
                      <span className="text-sm tracking-wide font-medium">{feature}</span>
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
