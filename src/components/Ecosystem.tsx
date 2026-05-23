import { motion, type Variants } from 'framer-motion';
import { Hexagon, ShoppingCart, Coins, Truck, ArrowRight } from 'lucide-react';

const cards = [
  {
    id: 'runtime',
    title: 'Hexa Runtime',
    description: 'A distributed execution layer enabling seamless and secure AI model inference across decentralized nodes globally.',
    icon: Hexagon,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'marketplace',
    title: 'Marketplace',
    description: 'An open, permissionless exchange for high-quality datasets, AI agents, and custom machine learning models.',
    icon: ShoppingCart,
    color: 'from-cyan-400 to-emerald-400',
  },
  {
    id: 'finance',
    title: 'Finance Layer',
    description: 'Embedded DeFi primitives providing seamless tokenization, staking, and automated rewards for ecosystem participants.',
    icon: Coins,
    color: 'from-violet-500 to-fuchsia-400',
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Network',
    description: 'Smart logistics protocols utilizing AI predictions to optimize decentralized physical infrastructure networks (DePIN).',
    icon: Truck,
    color: 'from-amber-400 to-orange-500',
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            The <span className="text-gradient">INEXA</span> Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Four synergistic layers powering the future of decentralized intelligence and commerce.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card) => (
            <motion.div key={card.id} variants={itemVariants} className="h-full">
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col group cursor-pointer relative overflow-hidden">
                {/* Background gradient blur on hover */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-full`} />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-6 border border-slate-700/50 group-hover:border-slate-600 transition-colors`}>
                    <card.icon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {card.description}
                  </p>
                  
                  <div className="mt-auto flex items-center text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition-colors">
                    Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
