import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const researchPapers = [
  {
    id: 1,
    title: 'Adaptive Cognition in Long-Running Autonomous Agents',
    description: 'An analysis of memory-augmented reflection loops and their impact on reducing hallucination in durable AI execution environments.',
    date: 'Oct 2026',
    category: 'Autonomous Cognition',
    authors: 'Inexa Research'
  },
  {
    id: 2,
    title: 'Durable Execution Models for Multi-Provider Routing',
    description: 'Evaluating fault-tolerance and retry semantics when orchestrating complex DAGs across heterogeneous LLM providers.',
    date: 'Sep 2026',
    category: 'Orchestration Systems',
    authors: 'Inexa Core'
  },
  {
    id: 3,
    title: 'Zero-Knowledge Proofs in Decentralized Inference',
    description: 'Applying zk-SNARKs to guarantee the cryptographic correctness of ML model outputs without exposing proprietary model weights.',
    date: 'Aug 2026',
    category: 'Adaptive Intelligence',
    authors: 'Inexa Cryptography Lab'
  }
];

export default function Research() {
  return (
    <section id="research" className="py-32 relative z-10 border-t border-slate-800/50 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold tracking-tighter text-white"
          >
            Research
          </motion.h2>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#" 
            className="mt-6 md:mt-0 text-slate-400 hover:text-slate-200 font-medium tracking-tight inline-flex items-center transition-colors"
          >
            View all publications <ArrowRight className="w-4 h-4 ml-2" />
          </motion.a>
        </div>

        <div className="flex flex-col">
          {researchPapers.map((paper, index) => (
            <motion.article 
              key={paper.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group py-10 border-t border-slate-800/50 grid grid-cols-1 md:grid-cols-4 gap-6 hover:bg-slate-900/30 transition-colors -mx-6 px-6 rounded-2xl"
            >
              <div className="md:col-span-1 flex flex-col space-y-2">
                <span className="text-sm font-semibold tracking-widest uppercase text-slate-500">
                  {paper.category}
                </span>
                <span className="text-sm text-slate-600">
                  {paper.date}
                </span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-200 mb-3 tracking-tighter group-hover:text-white transition-colors">
                  {paper.title}
                </h3>
                <p className="text-slate-400 leading-relaxed tracking-tight mb-4">
                  {paper.description}
                </p>
                <div className="text-sm text-slate-500 font-medium">
                  {paper.authors}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
