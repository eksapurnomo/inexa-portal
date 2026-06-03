import { Link } from 'react-router-dom';
import { 
  ChevronRight, CheckCircle2, 
  Globe, AlertTriangle
} from 'lucide-react';

const SidebarLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors">
    {children}
  </a>
);

export default function HexaKnowledgePage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="py-4 flex items-center text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <Link to="/products" className="hover:text-slate-300 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-slate-300">Hexa Knowledge</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 pb-24 relative">
          
          {/* Sticky Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-1">
              <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Hexa Knowledge</h3>
              <SidebarLink href="#overview">Overview</SidebarLink>
              <SidebarLink href="#executive-summary">Executive Summary</SidebarLink>
              <SidebarLink href="#problems">Why Knowledge Exists</SidebarLink>
              <SidebarLink href="#capabilities">Core Capabilities</SidebarLink>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 max-w-4xl">
            
            {/* HERO */}
            <section id="overview" className="py-12 border-b border-slate-800/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/50 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-slate-300" />
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">
                  Hexa Knowledge
                </h1>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed max-w-3xl tracking-tight mb-8">
                Zero-hallucination data fetcher. Bridges real-world data with unified connectors, encrypted credential vaults, and immutable audit trails.
              </p>
            </section>

            {/* EXECUTIVE SUMMARY */}
            <section id="executive-summary" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Executive Summary</h2>
              <div className="prose prose-invert max-w-none text-slate-400">
                <p className="mb-4 leading-relaxed">
                  Hexa Knowledge serves as the truth engine for Hexa Platform. It provides a Unified Connector Framework to fetch real-time data from external APIs, SQL databases, SharePoint, and SAP systems, ensuring AI responses are based on the latest facts rather than stale training data.
                </p>
                <p className="leading-relaxed">
                  To ensure enterprise-grade security, all external credentials are symmetrically encrypted using Fernet and decrypted only in RAM during execution. Every query is logged with a SHA-256 hash to provide an immutable audit trail without compromising data privacy.
                </p>
              </div>
            </section>

            {/* WHY KNOWLEDGE EXISTS */}
            <section id="problems" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Why Knowledge Exists</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Relying purely on LLM training weights leads to outdated information and hallucinations. Hexa Knowledge addresses these challenges:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Stale Data Hallucination', desc: 'LLMs cannot know real-time data. Hexa Knowledge fetches fresh data exactly when needed.' },
                  { title: 'Credential Leakage', desc: 'Putting API keys in prompts exposes them. Keys must be encrypted and managed by a secure vault.' },
                  { title: 'Audit Blindspots', desc: 'Organizations must track what their AI reads. Hexa Knowledge creates immutable, hashed audit trails.' },
                  { title: 'Connector Fragmentation', desc: 'Accessing SQL, REST, and SOAP APIs requires a unified, abstracted retrieval layer.' }
                ].map(problem => (
                  <div key={problem.title} className="p-5 border border-slate-800/60 rounded-xl bg-slate-900/20 flex gap-4">
                    <AlertTriangle className="w-5 h-5 text-slate-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-white text-sm font-semibold mb-1">{problem.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{problem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CORE CAPABILITIES */}
            <section id="capabilities" className="py-16">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Core Capabilities</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Unified Connectors</h4>
                      <p className="text-slate-500 text-xs mt-1">Abstracts integrations to REST API, SQL, SharePoint, and SAP into simple HTTP requests.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Encrypted Credential Vault</h4>
                      <p className="text-slate-500 text-xs mt-1">Stores passwords and API keys using Fernet symmetric encryption, decrypting only in-memory (RAM) when fetching.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Immutable Audit Trail</h4>
                      <p className="text-slate-500 text-xs mt-1">Logs all fetch requests using SHA-256 query hashes to preserve privacy while maintaining accountability.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Strict Validation</h4>
                      <p className="text-slate-500 text-xs mt-1">Uses Pydantic V2 to enforce strict schemas on incoming and outgoing payloads, preventing malformed requests.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
