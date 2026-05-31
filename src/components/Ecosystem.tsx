import { motion, type Variants } from 'framer-motion';
import { 
  Building2, MessageSquareText, LineChart, Store, Truck, Landmark, 
  Activity, Network, Brain, Globe, CheckCircle2
} from 'lucide-react';

const industryCards = [
  {
    id: 'enterprise-ops',
    title: 'Enterprise Operations',
    description: 'Automate complex business processes across departments, workflows, and decision chains.',
    icon: Building2,
    examples: ['Workflow Automation', 'Internal Operations', 'Task Coordination', 'Process Intelligence']
  },
  {
    id: 'ai-customer',
    title: 'AI Customer Platforms',
    description: 'Build intelligent customer experiences across chat, support, sales, and engagement channels.',
    icon: MessageSquareText,
    examples: ['AI Customer Service', 'Omnichannel Support', 'AI Sales Assistants', 'Customer Intelligence']
  },
  {
    id: 'digital-finance',
    title: 'Digital Finance Infrastructure',
    description: 'Power modern financing, payments, risk analysis, and financial operations with autonomous intelligence.',
    icon: LineChart,
    examples: ['Digital Financing', 'AI Underwriting', 'Payment Systems', 'Risk Assessment']
  },
  {
    id: 'marketplaces',
    title: 'Intelligent Marketplaces',
    description: 'Enable AI-native commerce platforms with automation, recommendations, and operational intelligence.',
    icon: Store,
    examples: ['Ecommerce Platforms', 'Product Intelligence', 'Seller Operations', 'Customer Recommendations']
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    description: 'Coordinate inventory, warehousing, transportation, and fulfillment through intelligent workflows.',
    icon: Truck,
    examples: ['Inventory Optimization', 'Shipment Tracking', 'Warehouse Operations', 'Route Intelligence']
  },
  {
    id: 'public-sector',
    title: 'Public Sector & Smart Services',
    description: 'Modernize citizen services, licensing, document processing, and public operations.',
    icon: Landmark,
    examples: ['Digital Services', 'Smart Administration', 'Permit Processing', 'Citizen Support']
  }
];

const emergingCards = [
  {
    id: 'autonomous-ops',
    title: 'Autonomous Operations Centers',
    description: 'AI-managed operational environments coordinating agents, workflows, and human oversight.',
    icon: Activity
  },
  {
    id: 'multi-agent',
    title: 'Multi-Agent Enterprise Systems',
    description: 'Large-scale coordination between specialized AI agents across business functions.',
    icon: Network
  },
  {
    id: 'cognitive-automation',
    title: 'Cognitive Process Automation',
    description: 'Decision-aware automation combining reasoning, planning, memory, and execution.',
    icon: Brain
  },
  {
    id: 'distributed-intelligence',
    title: 'Distributed Intelligence Networks',
    description: 'Connected intelligence systems operating across providers, infrastructure, and environments.',
    icon: Globe
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
    <section id="ecosystem" className="py-24 relative z-10 bg-slate-950/50 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 1: INDUSTRIES */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4"
            >
              Industries Powered by INEXA
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg tracking-tight max-w-2xl mx-auto"
            >
              Autonomous intelligence infrastructure for real-world systems, operations, and digital platforms.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industryCards.map((card) => (
              <motion.div key={card.id} variants={itemVariants} className="h-full">
                <div className="rounded-xl p-8 h-full flex flex-col bg-slate-900/30 border border-slate-800/60 hover:bg-slate-900/50 hover:border-slate-700 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700/50 flex items-center justify-center mb-6">
                    <card.icon className="w-5 h-5 text-slate-300" />
                  </div>
                  
                  <h3 className="text-lg font-medium text-white mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                  
                  <ul className="mt-auto space-y-2">
                    {card.examples.map((example, i) => (
                      <li key={i} className="flex items-center text-xs text-slate-500 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-slate-600" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* SECTION 2: EMERGING ECOSYSTEMS */}
        <div className="pt-24 border-t border-slate-800/50">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4"
            >
              Emerging Ecosystems
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-base tracking-tight max-w-2xl mx-auto"
            >
              Next-generation autonomous systems powered by cognitive and runtime infrastructure.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {emergingCards.map((card) => (
              <motion.div key={card.id} variants={itemVariants} className="h-full">
                <div className="rounded-xl p-8 h-full flex items-start bg-slate-900/20 border border-slate-800/40 hover:bg-slate-900/40 hover:border-slate-700 transition-colors duration-300">
                  <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mr-5">
                    <card.icon className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white mb-2 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
