import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10 mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-10">
            <img 
              src="/Contemporary Minimalist Logo for inexa.space - Teal-1@1.25x.svg" 
              alt="INEXA" 
              className="h-16 md:h-20 lg:h-24 w-auto max-w-[240px] md:max-w-[320px] object-contain drop-shadow-lg"
            />
          </div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>INEXA Network is Live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8">
            Building the Future of{' '}
            <span className="text-gradient block mt-2">Decentralized Intelligence Ecosystem</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Unifying Web3 infrastructure with advanced Artificial Intelligence. 
            A seamless, tokenized platform empowering the next generation of 
            autonomous and scalable AI applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-slate-900 border border-slate-700 rounded-full hover:bg-slate-800 glow hover:glow-strong">
              <span className="text-gradient">Explore Ecosystem</span>
              <ArrowRight className="w-5 h-5 ml-2 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group inline-flex items-center justify-center px-8 py-4 font-semibold text-slate-300 transition-all duration-200 hover:text-white">
              <BookOpen className="w-5 h-5 mr-2" />
              <span>Read Research</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
