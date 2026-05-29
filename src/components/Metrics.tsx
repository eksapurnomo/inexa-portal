import { motion } from 'framer-motion';

const metrics = [
  {
    label: 'Autonomous Workflows',
    value: '10M+',
    subtext: 'Executed Daily'
  },
  {
    label: 'Multi-Provider Execution',
    value: '15+',
    subtext: 'LLM Integrations'
  },
  {
    label: 'Cognitive Memory',
    value: 'Vector',
    subtext: 'Persistent State'
  },
  {
    label: 'Enterprise Observability',
    value: '99.99%',
    subtext: 'Uptime SLA'
  }
];

export default function Metrics() {
  return (
    <section className="py-16 border-y border-slate-800/30 bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-800/50">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col items-center justify-center text-center ${index > 0 ? 'pt-8 md:pt-0' : ''}`}
            >
              <div className="text-3xl md:text-4xl font-semibold text-slate-200 tracking-tighter mb-2 font-mono">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-slate-400 tracking-wide mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">
                {metric.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
