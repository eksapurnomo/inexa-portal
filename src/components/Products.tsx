import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Database, Network, ShieldCheck } from 'lucide-react';

const coreSystems = [
  {
    title: 'Hexa Cognitive',
    subtitle: 'Think',
    status: 'Active',
    statusColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    icon: BrainCircuit,
    description: 'Synthesizes complex operational goals into actionable, multi-step strategic plans. Evaluates real-world constraints and dynamically optimizes decision pathways.',
  },
  {
    title: 'Hexa Runtime',
    subtitle: 'Act',
    status: 'Active',
    statusColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    icon: Cpu,
    description: 'Drives the reliable, distributed execution of planned operational workflows. Adapts immediately to shifting environments, unforeseen variables, and execution errors.',
  },
  {
    title: 'Hexa Memory',
    subtitle: 'Learn',
    status: 'Beta',
    statusColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    icon: Database,
    description: 'Continuously ingests execution outcomes to refine structural decision-making models. Retains robust historical state data to provide deep temporal context.',
  },
  {
    title: 'Hexa Knowledge',
    subtitle: 'Connect',
    status: 'Beta',
    statusColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    icon: Network,
    description: 'Centralizes scattered enterprise data into a unified, high-availability context layer. Translates unstructured enterprise information into highly accessible, structured intelligence.',
  },
  {
    title: 'Hexa Governance',
    subtitle: 'Control',
    status: 'Roadmap',
    statusColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    icon: ShieldCheck,
    description: 'Enforces strict compliance, security policies, and operational guardrails universally. Provides granular, transparent oversight and complete audibility for all autonomous actions.',
  }
];

export default function Products() {
  return (
    <section id="features" className="py-32 relative overflow-hidden bg-slate-950">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            The 5 Engines of Hexa
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Five foundational capability domains of the Hexa AI Operating System.
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
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-slate-900 border border-slate-700/50 rounded-2xl flex items-center justify-center group-hover:border-slate-600 transition-all duration-500 shadow-sm">
                    <system.icon className="w-6 h-6 text-slate-400 group-hover:text-slate-200 transition-colors" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${system.statusColor}`}>
                    {system.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-1 tracking-tight">{system.title}</h3>
                <p className="text-slate-400 font-medium mb-6 text-sm tracking-tight uppercase tracking-wider">{system.subtitle}</p>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {system.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
