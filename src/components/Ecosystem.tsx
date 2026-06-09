import { motion } from 'framer-motion';
import { Building2, Users, Landmark, ShoppingCart, Truck, Landmark as Government, Cpu } from 'lucide-react';

const industries = [
  {
    title: 'Enterprise Operations',
    description: 'Automate high-volume administrative and strategic workflows. Optimize workforce productivity through intelligent assistance. Reduce operational bottlenecks with predictive resource management.',
    icon: Building2,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10'
  },
  {
    title: 'AI Customer Platforms',
    description: 'Power dynamic, conversational customer support systems. Anticipate user needs with predictive interaction models. Unify customer journeys across disparate touchpoints.',
    icon: Users,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    title: 'Digital Finance',
    description: 'Automate intricate compliance and regulatory reporting. Enhance fraud detection through continuous, adaptive monitoring. Optimize algorithmic trading and risk management strategies.',
    icon: Landmark,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10'
  },
  {
    title: 'Intelligent Marketplaces',
    description: 'Optimize supply and demand matching with predictive algorithms. Automate dynamic pricing models based on real-time market conditions. Ensure marketplace integrity through autonomous oversight.',
    icon: ShoppingCart,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },
  {
    title: 'Logistics & Supply Chain',
    description: 'Predict and mitigate supply chain disruptions proactively. Optimize routing and inventory distribution in real-time. Automate complex procurement and vendor management workflows.',
    icon: Truck,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10'
  },
  {
    title: 'Public Sector & Smart Services',
    description: 'Optimize urban resource distribution and civic planning. Enhance the delivery of essential public services. Automate complex bureaucratic and regulatory processes.',
    icon: Government,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10'
  },
  {
    title: 'Emerging Autonomous Systems',
    description: 'Orchestrate fleets of autonomous physical devices. Enable complex, multi-agent coordination in dynamic environments. Process edge data to drive localized, intelligent actions.',
    icon: Cpu,
    color: 'text-rose-400',
    bgColor: 'bg-rose-500/10'
  }
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 relative z-10 bg-slate-950/50 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4"
          >
            The Hexa Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg tracking-tight"
          >
            Hexa is designed to operate across complex, high-dependency environments where automation, intelligence, and governance converge.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div 
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="rounded-2xl p-8 bg-slate-900/40 border border-slate-800/60 hover:border-slate-700 transition-colors"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${industry.bgColor}`}>
                <industry.icon className={`w-6 h-6 ${industry.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{industry.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
