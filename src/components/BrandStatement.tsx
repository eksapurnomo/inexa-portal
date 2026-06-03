import { motion } from 'framer-motion';

export default function BrandStatement() {
  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tighter leading-tight">
            The Human-Governed AI <br className="hidden md:block" />
            <span className="text-slate-400">Workforce Operating System.</span>
          </h2>
          
          <div className="w-16 h-px bg-slate-700 mx-auto my-12" />
          
          <p className="text-lg md:text-2xl text-slate-400 leading-relaxed max-w-4xl mx-auto tracking-tight font-light">
            EXA Space is an enterprise AI infrastructure company delivering the Hexa Platform—a complete operating system providing Planning, Execution, Memory, Knowledge, and Governance to deploy secure AI workforces at scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
