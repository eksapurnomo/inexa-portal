import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Hexagon, ShoppingCart, Coins, Truck } from 'lucide-react';

const ecosystemItems = [
  { name: 'Hexa Runtime', icon: Hexagon, desc: 'Decentralized AI execution layer' },
  { name: 'Marketplace', icon: ShoppingCart, desc: 'Trade AI models and datasets' },
  { name: 'Finance', icon: Coins, desc: 'DeFi primitives for intelligence' },
  { name: 'Logistic & Supply Chain', icon: Truck, desc: 'Smart logistics network' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer mr-8 py-2" onClick={() => window.scrollTo(0,0)}>
            <img 
              src="/Contemporary Minimalist Logo for inexa.space - Teal-1@1.25x.svg" 
              alt="INEXA Logo" 
              className="h-8 md:h-10 lg:h-12 w-auto max-w-[160px] md:max-w-[220px] object-contain transform transition-transform hover:scale-105" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="relative"
              onMouseEnter={() => setIsEcosystemOpen(true)}
              onMouseLeave={() => setIsEcosystemOpen(false)}
            >
              <button className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors py-2">
                <span>Ecosystem</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isEcosystemOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isEcosystemOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-72 glass-card rounded-xl overflow-hidden shadow-xl"
                  >
                    <div className="p-2">
                      {ecosystemItems.map((item) => (
                        <a 
                          key={item.name} 
                          href="#ecosystem" 
                          className="flex items-start p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                        >
                          <div className="p-2 bg-slate-800 rounded-md group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                            <item.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-white">{item.name}</p>
                            <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#research" className="text-slate-300 hover:text-white transition-colors">Research</a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
            
            <button className="px-5 py-2 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-200 transition-colors">
              Launch App
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass border-t border-slate-800/50 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Ecosystem</div>
                {ecosystemItems.map((item) => (
                  <a
                    key={item.name}
                    href="#ecosystem"
                    className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-slate-800/50 text-slate-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
              <div className="border-t border-slate-800/50 pt-4 flex flex-col space-y-4">
                <a 
                  href="#research" 
                  className="px-3 text-slate-300 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Research
                </a>
                <a 
                  href="#about" 
                  className="px-3 text-slate-300 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <button className="mx-3 px-5 py-2 rounded-full bg-white text-slate-900 font-medium mt-2">
                  Launch App
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
