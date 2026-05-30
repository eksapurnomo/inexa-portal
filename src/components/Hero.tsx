import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import NetworkTopology from './NetworkTopology';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Infrastructure Background */}
      <NetworkTopology />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-10">
            <img 
              src="/Contemporary Minimalist Logo for inexa.space - Teal-1@1.25x.svg" 
              alt="INEXA" 
              className="h-16 md:h-20 lg:h-24 w-auto max-w-[240px] md:max-w-[320px] object-contain drop-shadow-xl opacity-90"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-slate-700/50 bg-slate-900/80 text-slate-300 text-sm font-medium mb-10 shadow-sm backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-slate-400"></span>
            <span className="tracking-wide">Global Intelligence Orchestration</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] font-semibold tracking-tighter text-white mb-8">
            Infrastructure for{' '}
            <span className="text-slate-300 block mt-2">Autonomous Intelligence.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed tracking-tight">
            Build, orchestrate, and operate cognitive systems across providers, environments, and industries.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/architecture" className="group relative inline-flex items-center justify-center px-8 py-3.5 font-medium text-slate-950 transition-all duration-200 bg-slate-200 rounded-full hover:bg-white hover:scale-[1.02]">
              <span>Explore Architecture</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform" />
            </Link>
            <button className="group inline-flex items-center justify-center px-8 py-3.5 font-medium text-slate-300 transition-all duration-200 hover:text-white bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-full backdrop-blur-sm">
              <BookOpen className="w-4 h-4 mr-2 text-slate-400" />
              <span>Documentation</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
