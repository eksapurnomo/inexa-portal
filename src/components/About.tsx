import { motion } from 'framer-motion';
import { Network, BrainCircuit, Blocks } from 'lucide-react';

const features = [
  {
    icon: BrainCircuit,
    title: 'Autonomous AI Agents',
    description: 'Empowering specialized agents to perform complex reasoning, analysis, and execution across decentralized networks.'
  },
  {
    icon: Blocks,
    title: 'Blockchain Integrity',
    description: 'Ensuring cryptographic trust, immutable audit trails, and verifiable computation for every AI inference.'
  },
  {
    icon: Network,
    title: 'Tokenized Ecosystem',
    description: 'Aligning incentives through a robust token economy that rewards node operators, data providers, and model creators.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-cyan-900/20 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pioneering the <br />
              <span className="text-gradient">Intelligence Transition</span>
            </h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              INEXA is not just another protocol; it is the foundational layer for the post-AGI economy. We believe that intelligence should be open, verifiable, and economically aligned with the creators and operators who sustain it.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              By converging Web3 primitives with state-of-the-art AI infrastructure, we are building a permissionless ecosystem where machines can transact, collaborate, and evolve securely.
            </p>
            
            <button className="px-8 py-3 rounded-full border border-cyan-500/50 text-cyan-400 font-medium hover:bg-cyan-500/10 transition-colors">
              Read Our Manifesto
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {features.map((feature, idx) => (
              <div key={idx} className="glass rounded-2xl p-6 flex items-start space-x-4 border border-slate-800/50 hover:border-slate-700 transition-colors">
                <div className="flex-shrink-0 p-3 bg-slate-800/50 rounded-lg text-cyan-400">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
