import { motion } from 'framer-motion';
import { Zap, Network, Brain, Shield } from 'lucide-react';

const principles = [
  {
    title: 'Event-driven by default',
    description: 'Highly responsive systems that act instantaneously upon real-time state changes and triggers.',
    icon: Zap
  },
  {
    title: 'Deterministic execution (DAG)',
    description: 'Complex operational workflows are compiled into Directed Acyclic Graphs, guaranteeing reliable, predictable execution pathways.',
    icon: Network
  },
  {
    title: 'Memory-first AI',
    description: 'Every action and outcome is systematically retained, allowing the infrastructure to compound intelligence and improve continuously.',
    icon: Brain
  },
  {
    title: 'Governance-aware AI systems',
    description: 'Strict operational guardrails, security boundaries, and full audibility are embedded natively at the infrastructure layer.',
    icon: Shield
  }
];

export default function CorePrinciples() {
  return (
    <section className="py-24 relative z-10 overflow-hidden bg-slate-950/80 border-t border-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4"
          >
            System DNA
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg tracking-tight max-w-2xl mx-auto"
          >
            These principles define how intelligence behaves inside the Hexa infrastructure.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700 transition-colors"
            >
              <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center mb-6">
                <principle.icon className="w-6 h-6 text-slate-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{principle.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
