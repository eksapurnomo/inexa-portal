import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.2 5.2 0 0 0-1.5-3.8 4.3 4.3 0 0 0 0-3.8s-1.2-.4-4 1.5a13.2 13.2 0 0 0-7 0c-2.8-1.9-4-1.5-4-1.5a4.3 4.3 0 0 0 0 3.8A5.2 5.2 0 0 0 3 12c0 5.2 3 6.4 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
    <path d="M3 19s1 1 3 1 2-1 3-1" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="md:col-span-1">
            <img 
              src="/Contemporary Minimalist Logo for inexa.space - Teal-1@1.25x.svg" 
              alt="INEXA Logo" 
              className="h-8 w-auto object-contain mb-6" 
            />
            <p className="text-sm text-slate-400 mb-6">
              Building the infrastructure layer for autonomous intelligence and enterprise AI orchestration.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/eksapurnomo/inexa-ai" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="mailto:eksa@inexa.space" className="text-slate-500 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products/hexa-runtime" className="text-slate-400 hover:text-white transition-colors">Hexa Runtime</Link></li>
              <li><Link to="/products/hexa-cognitive" className="text-slate-400 hover:text-white transition-colors">Hexa Cognitive</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Ecosystem</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#ecosystem" className="text-slate-400 hover:text-white transition-colors">AI SaaS Platforms</a></li>
              <li><a href="#ecosystem" className="text-slate-400 hover:text-white transition-colors">Enterprise Automation</a></li>
              <li><a href="#ecosystem" className="text-slate-400 hover:text-white transition-colors">Finance Infrastructure</a></li>
              <li><a href="#ecosystem" className="text-slate-400 hover:text-white transition-colors">Logistics & Supply Chain</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><Link to="/research" className="text-slate-400 hover:text-white transition-colors">Research</Link></li>
              <li><a href="mailto:eksa@inexa.space" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800/80 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>&copy; {currentYear} Copyright INEXA. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="mailto:eksa@inexa.space" className="hover:text-white transition-colors">eksa@inexa.space</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
