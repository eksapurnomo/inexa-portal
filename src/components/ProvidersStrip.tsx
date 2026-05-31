import { motion } from 'framer-motion';
import {
  LogoOpenAI, LogoAnthropic, LogoGemini, LogoLlama, LogoGroq,
  LogoDeepSeek, LogoMistral, LogoCohere, LogoBytePlus, LogoxAI
} from './ProviderLogos';

const providers = [
  { name: 'OpenAI', desc: 'Foundation Models', Logo: LogoOpenAI },
  { name: 'Anthropic', desc: 'Safety-First AI', Logo: LogoAnthropic },
  { name: 'Gemini', desc: 'Multimodal Intelligence', Logo: LogoGemini },
  { name: 'Llama', desc: 'Open Model Ecosystem', Logo: LogoLlama },
  { name: 'Groq', desc: 'Inference Acceleration', Logo: LogoGroq },
  { name: 'DeepSeek', desc: 'Advanced Reasoning', Logo: LogoDeepSeek },
  { name: 'Mistral', desc: 'Open Foundation Models', Logo: LogoMistral },
  { name: 'Cohere', desc: 'Enterprise Language AI', Logo: LogoCohere },
  { name: 'BytePlus', desc: 'AI Infrastructure', Logo: LogoBytePlus },
  { name: 'xAI', desc: 'Frontier Intelligence', Logo: LogoxAI }
];

export default function ProvidersStrip() {
  return (
    <section className="border-y border-slate-800/50 bg-slate-950/80 py-16 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-2"
          >
            AI Ecosystem Compatibility
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm tracking-tight"
          >
            Designed to orchestrate intelligence across modern AI systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {providers.map((provider, index) => {
            const Logo = provider.Logo;
            return (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="flex flex-col items-center justify-center p-6 border border-slate-800/60 rounded-xl bg-slate-900/30 hover:bg-slate-800/30 text-slate-500 hover:text-slate-200 hover:border-slate-700 transition-all duration-300 cursor-default select-none group text-center"
              >
                <Logo className="h-9 md:h-10 w-auto opacity-60 group-hover:opacity-100 transition-opacity mb-4 drop-shadow-sm" />
                <span className="text-xs font-medium tracking-tight opacity-90 group-hover:opacity-100 transition-opacity mb-1">{provider.name}</span>
                <span className="text-[10px] opacity-50 font-medium tracking-wide uppercase transition-opacity">{provider.desc}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
