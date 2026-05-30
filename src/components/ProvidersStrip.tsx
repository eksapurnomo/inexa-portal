import { motion } from 'framer-motion';

const providers = [
  'OpenAI',
  'Anthropic',
  'Gemini',
  'Llama',
  'Groq',
  'DeepSeek',
  'Mistral',
  'Cohere',
  'BytePlus',
  'xAI'
];

export default function ProvidersStrip() {
  return (
    <section className="border-y border-slate-800/50 bg-slate-950/80 py-12 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-2"
          >
            Built For The Modern AI Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm tracking-tight"
          >
            Orchestrate intelligence across the world's leading AI systems.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {providers.map((provider, index) => (
            <motion.div
              key={provider}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="text-slate-500 hover:text-slate-200 transition-colors duration-300 cursor-default select-none flex items-center justify-center"
            >
              <span className="text-xl md:text-2xl font-bold tracking-tighter" style={{ fontFamily: 'Inter, sans-serif' }}>
                {provider}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
