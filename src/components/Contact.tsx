import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 rounded-3xl text-center relative group overflow-hidden border border-slate-800 hover:border-slate-700 transition-colors"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Ready to orchestrate your enterprise AI infrastructure? Reach out to our team to discuss partnerships, integrations, or deployment solutions.
            </p>
            
            <a 
              href="mailto:eksa@inexa.space"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-slate-900 border border-slate-700 rounded-full hover:bg-slate-800 transition-all group/btn shadow-lg"
            >
              <Mail className="w-5 h-5 text-cyan-400 group-hover/btn:scale-110 transition-transform" />
              <span className="text-white font-medium text-lg">eksa@inexa.space</span>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
