import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-blue-600/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10 mix-blend-overlay" />

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
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-slate-700/50 bg-slate-800/30 text-slate-300 text-sm font-medium mb-10 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-500"></span>
            <span className="tracking-wide">INEXA Network is Live</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] font-semibold tracking-tighter text-white mb-8">
            The infrastructure layer for{' '}
            <span className="text-slate-300 block mt-2">autonomous intelligence.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed tracking-tight">
            INEXA provides the durable primitives and orchestration engines required to build, scale, and deploy enterprise-grade autonomous systems.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button className="group relative inline-flex items-center justify-center px-8 py-3.5 font-medium text-slate-950 transition-all duration-200 bg-slate-200 rounded-full hover:bg-white hover:scale-[1.02]">
              <span>Explore Architecture</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform" />
            </button>
            <button className="group inline-flex items-center justify-center px-8 py-3.5 font-medium text-slate-300 transition-all duration-200 hover:text-white bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-full">
              <BookOpen className="w-4 h-4 mr-2 text-slate-400" />
              <span>Read Research</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
