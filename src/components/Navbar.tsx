import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.2 5.2 0 0 0-1.5-3.8 4.3 4.3 0 0 0 0-3.8s-1.2-.4-4 1.5a13.2 13.2 0 0 0-7 0c-2.8-1.9-4-1.5-4-1.5a4.3 4.3 0 0 0 0 3.8A5.2 5.2 0 0 0 3 12c0 5.2 3 6.4 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
    <path d="M3 19s1 1 3 1 2-1 3-1" />
  </svg>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 glass border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer mr-8 py-2" onClick={() => window.scrollTo(0,0)}>
            <img 
              src="/Contemporary Minimalist Logo for inexa.space - Teal-1@1.25x.svg" 
              alt="INEXA Logo" 
              className="h-8 md:h-10 lg:h-12 w-auto max-w-[160px] md:max-w-[220px] object-contain transform transition-transform hover:scale-105" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className={`text-sm font-medium transition-colors ${location.pathname.startsWith('/products') ? 'text-white' : 'text-slate-300 hover:text-white'}`}>Products</Link>
            <Link to="/architecture" className={`text-sm font-medium transition-colors ${location.pathname === '/architecture' ? 'text-white' : 'text-slate-300 hover:text-white'}`}>Architecture</Link>
            <a href={location.pathname === '/' ? '#ecosystem' : '/#ecosystem'} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Ecosystem</a>
            <Link to="/research" className={`text-sm font-medium transition-colors ${location.pathname === '/research' ? 'text-white' : 'text-slate-300 hover:text-white'}`}>Research</Link>
            <Link to="/company" className={`text-sm font-medium transition-colors ${location.pathname === '/company' ? 'text-white' : 'text-slate-300 hover:text-white'}`}>Company</Link>
            <a href="/company#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Contact</a>
            <a href="https://github.com/eksapurnomo/inexa-ai" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
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
            <div className="px-4 pt-4 pb-6 flex flex-col space-y-4">
              <Link 
                to="/products" 
                className={`px-3 py-2 rounded-md transition-colors ${location.pathname.startsWith('/products') ? 'text-white bg-slate-800/50' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/architecture" 
                className={`px-3 py-2 rounded-md transition-colors ${location.pathname === '/architecture' ? 'text-white bg-slate-800/50' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Architecture
              </Link>
              <a 
                href={location.pathname === '/' ? '#ecosystem' : '/#ecosystem'} 
                className="px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ecosystem
              </a>
              <Link 
                to="/research" 
                className={`px-3 py-2 rounded-md transition-colors ${location.pathname === '/research' ? 'text-white bg-slate-800/50' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Research
              </Link>
              <Link 
                to="/company" 
                className={`px-3 py-2 rounded-md transition-colors ${location.pathname === '/company' ? 'text-white bg-slate-800/50' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Company
              </Link>
              <a 
                href="/company#contact" 
                className="px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="https://github.com/eksapurnomo/inexa-ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-2 text-slate-300 hover:text-white flex items-center space-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <GithubIcon className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
