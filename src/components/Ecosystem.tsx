import { motion, type Variants } from 'framer-motion';
import { Cloud, Zap, Landmark, ShoppingCart, Truck, Activity, ArrowRight } from 'lucide-react';

const cards = [
  {
    id: 'ai-saas',
    title: 'AI SaaS Platforms',
    description: 'Build scalable AI-native applications, autonomous copilots, and intelligent workflow systems powered by durable orchestration.',
    icon: Cloud,
  },
  {
    id: 'enterprise-automation',
    title: 'Enterprise Automation',
    description: 'Enable autonomous business operations, adaptive workflows, decision automation, and enterprise-grade process orchestration.',
    icon: Zap,
  },
  {
    id: 'finance-infrastructure',
    title: 'Finance Infrastructure',
    description: 'Power next-generation digital finance systems including payment infrastructure, intelligent financial operations, and crypto transaction support.',
    icon: Landmark,
  },
  {
    id: 'marketplace',
    title: 'Marketplace Systems',
    description: 'Support real digital commerce ecosystems, AI-powered ecommerce platforms, transaction orchestration, and scalable marketplace operations.',
    icon: ShoppingCart,
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    description: 'Enable intelligent logistics orchestration, supply chain visibility, adaptive routing, and distributed workflow coordination.',
    icon: Truck,
  },
  {
    id: 'autonomous-ops',
    title: 'Autonomous Operations',
    description: 'Deploy long-running autonomous systems capable of adaptive reasoning, self-correction, memory persistence, and multi-agent coordination.',
    icon: Activity,
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-32 relative z-10 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
          >
            Industries Powered by <span className="text-gradient">INEXA</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Our core infrastructure powers transformative autonomous systems across every major sector of the digital economy.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cards.map((card) => (
            <motion.div key={card.id} variants={itemVariants} className="h-full">
              <div className="glass-card rounded-2xl p-8 h-full flex flex-col group cursor-pointer relative overflow-hidden border border-slate-800/60 hover:border-slate-700 hover:bg-slate-900/40 transition-all duration-500 hover:-translate-y-1">
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/50 flex items-center justify-center mb-6 group-hover:border-slate-600 transition-colors shadow-sm">
                    <card.icon className="w-6 h-6 text-slate-400 group-hover:text-slate-200 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 tracking-tighter group-hover:text-slate-100 transition-colors">
                    {card.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-slate-300 transition-colors">
                    {card.description}
                  </p>
                  
                  <div className="mt-auto flex items-center text-sm font-medium text-slate-500 group-hover:text-slate-300 transition-colors uppercase tracking-wider">
                    Explore Sector <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
