import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Scaling Laws in Decentralized MoE Models',
    excerpt: 'Exploring the performance characteristics of Mixture-of-Experts architectures distributed across heterogeneous node clusters in the INEXA runtime.',
    date: 'Oct 12, 2026',
    author: 'Dr. Sarah Chen',
    category: 'AI Research',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Zero-Knowledge Proofs for Verifiable Inference',
    excerpt: 'How INEXA utilizes zk-SNARKs to guarantee the cryptographic correctness of ML model outputs without revealing proprietary model weights.',
    date: 'Sep 28, 2026',
    author: 'Alex Vollmer',
    category: 'Cryptography',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Tokenomics of Agentic Supply Chains',
    excerpt: 'A game-theoretic analysis of the incentive structures required to align autonomous AI agents coordinating global logistics.',
    date: 'Sep 15, 2026',
    author: 'Elena Rodriguez',
    category: 'Web3 & Economics',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Research() {
  return (
    <section id="research" className="py-24 relative z-10 border-t border-slate-800/50 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Latest Research
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg"
            >
              Deep dives into AI architectures, cryptography, and decentralized systems from the INEXA labs.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group">
              View all publications
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/60 z-10 group-hover:bg-slate-900/20 transition-colors duration-500" />
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-slate-900/80 backdrop-blur-sm rounded-full border border-cyan-500/20">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/50">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {article.date}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
