import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Server, Workflow, Brain, UserCheck, Globe, Mail } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.2 5.2 0 0 0-1.5-3.8 4.3 4.3 0 0 0 0-3.8s-1.2-.4-4 1.5a13.2 13.2 0 0 0-7 0c-2.8-1.9-4-1.5-4-1.5a4.3 4.3 0 0 0 0 3.8A5.2 5.2 0 0 0 3 12c0 5.2 3 6.4 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
    <path d="M3 19s1 1 3 1 2-1 3-1" />
  </svg>
);
import {
  LogoOpenAI, LogoAnthropic, LogoGemini, LogoLlama, LogoGroq,
  LogoDeepSeek, LogoMistral, LogoCohere, LogoBytePlus, LogoxAI,
  LogoAWS, LogoGoogleCloud, LogoAzure, LogoAlibabaCloud,
  LogoVastai, LogoRunPod, LogoLambdaLabs
} from '../components/ProviderLogos';

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="py-4 flex items-center text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-slate-300">Company</span>
        </nav>

        <main className="max-w-4xl py-12 pb-24">
          
          {/* VISION & MISSION */}
          <section className="mb-20">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
              Infrastructure for Autonomous Intelligence
            </h1>
            <div className="prose prose-invert max-w-none text-slate-400">
              <p className="text-xl leading-relaxed tracking-tight mb-8">
                INEXA is building the foundational infrastructure layer for autonomous systems, enabling organizations to deploy reliable cognitive and execution architectures across real-world industries.
              </p>
              
              <div className="p-8 border border-slate-800 rounded-xl bg-slate-900/30">
                <h3 className="text-lg font-semibold text-white mb-3">Our Mission</h3>
                <p className="leading-relaxed m-0 text-slate-300">
                  Provide vendor-agnostic infrastructure for planning, reasoning, orchestration, memory, and execution at enterprise scale.
                </p>
              </div>
            </div>
          </section>

          {/* PRINCIPLES */}
          <section className="mb-24">
            <h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Core Principles</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Reliability First', icon: ShieldCheck, desc: 'Every system is built assuming upstream provider failure. Circuit breakers, DLQs, and replanning are fundamental, not afterthoughts.' },
                { title: 'Vendor Agnostic', icon: Globe, desc: 'We prevent infrastructure lock-in by providing a unified orchestration layer over heterogeneous AI and compute providers.' },
                { title: 'Durable Execution', icon: Workflow, desc: 'Execution must be deterministic. We mandate strict DAG structures, async resolution, and continuous checkpointing.' },
                { title: 'Cognitive Integrity', icon: Brain, desc: 'Memory must not be corrupted by failed attempts. Persistence is gated strictly by confirmed runtime success.' },
                { title: 'Human Oversight', icon: UserCheck, desc: 'Autonomous systems operate within explicit session bounds, budgets, and verifiable memory lineages.' },
                { title: 'Open Architecture', icon: Server, desc: 'Extensible by design, enabling custom model routing, private embeddings, and self-hosted deployments.' }
              ].map(principle => (
                <div key={principle.title} className="p-6 border border-slate-800/60 rounded-xl bg-slate-900/20 hover:bg-slate-900/40 hover:-translate-y-1 hover:shadow-[0_8px_24px_-8px_rgba(255,255,255,0.05)] hover:border-slate-700/80 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3 text-white">
                    <principle.icon className="w-5 h-5 text-slate-400" />
                    <h3 className="font-semibold text-sm">{principle.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{principle.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* OPEN ECOSYSTEM */}
          <section className="mb-24">
            <h2 className="text-2xl font-semibold text-white tracking-tight mb-4">Open Ecosystem</h2>
            <p className="text-slate-400 mb-10 leading-relaxed">
              INEXA is designed to operate across multiple AI providers and infrastructure vendors without vendor lock-in.
            </p>

            <div className="space-y-10">
              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">Supported AI Providers</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {[
                    { name: 'OpenAI', Logo: LogoOpenAI },
                    { name: 'Anthropic', Logo: LogoAnthropic },
                    { name: 'Gemini', Logo: LogoGemini },
                    { name: 'Meta Llama', Logo: LogoLlama },
                    { name: 'DeepSeek', Logo: LogoDeepSeek },
                    { name: 'Groq', Logo: LogoGroq },
                    { name: 'Mistral', Logo: LogoMistral },
                    { name: 'Cohere', Logo: LogoCohere },
                    { name: 'BytePlus', Logo: LogoBytePlus },
                    { name: 'xAI', Logo: LogoxAI }
                  ].map(provider => {
                    const Logo = provider.Logo;
                    return (
                      <div key={provider.name} className="flex flex-col items-center justify-center p-4 border border-slate-800/60 rounded-lg bg-slate-900/30 hover:bg-slate-800/50 text-slate-500 hover:text-slate-200 transition-colors cursor-default select-none group">
                        <Logo className="h-6 w-auto opacity-60 group-hover:opacity-100 transition-opacity mb-2" />
                        <span className="text-[10px] font-medium tracking-tight opacity-90 uppercase">{provider.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">Compatible Infrastructure</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    { name: 'AWS', Logo: LogoAWS },
                    { name: 'Google Cloud', Logo: LogoGoogleCloud },
                    { name: 'Azure', Logo: LogoAzure },
                    { name: 'Alibaba Cloud', Logo: LogoAlibabaCloud },
                    { name: 'Vast.ai', Logo: LogoVastai },
                    { name: 'RunPod', Logo: LogoRunPod },
                    { name: 'Lambda Labs', Logo: LogoLambdaLabs }
                  ].map(provider => {
                    const Logo = provider.Logo;
                    return (
                      <div key={provider.name} className="flex flex-col items-center justify-center p-4 border border-slate-800/60 rounded-lg bg-slate-900/30 hover:bg-slate-800/50 text-slate-500 hover:text-slate-200 transition-colors cursor-default select-none group">
                        <Logo className="h-6 w-auto opacity-60 group-hover:opacity-100 transition-opacity mb-2" />
                        <span className="text-[10px] font-medium tracking-tight opacity-90 uppercase">{provider.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* OPEN SOURCE */}
          <section className="mb-24">
            <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Open Source & Development</h2>
            <div className="p-8 border border-slate-800 rounded-xl bg-slate-900/30 flex flex-col items-start">
              <GithubIcon className="w-8 h-8 text-slate-400 mb-4" />
              <p className="text-slate-300 leading-relaxed mb-6">
                Public repositories, architecture experiments, runtime infrastructure, cognitive systems, and research initiatives.
              </p>
              <a 
                href="https://github.com/eksapurnomo/inexa-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </div>
          </section>

          {/* CONTACT */}
          <section>
            <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Contact</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <a href="mailto:eksa@inexa.space" className="flex items-center gap-4 p-5 border border-slate-800/60 rounded-xl bg-slate-900/20 hover:bg-slate-800/40 hover:border-slate-700 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                  <Mail className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium mb-0.5">Email</div>
                  <div className="text-sm text-slate-300 font-medium">eksa@inexa.space</div>
                </div>
              </a>

              <a href="https://github.com/eksapurnomo/inexa-ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 border border-slate-800/60 rounded-xl bg-slate-900/20 hover:bg-slate-800/40 hover:border-slate-700 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                  <GithubIcon className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium mb-0.5">GitHub</div>
                  <div className="text-sm text-slate-300 font-medium">inexa-ai</div>
                </div>
              </a>

              <a href="https://inexa.space" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 border border-slate-800/60 rounded-xl bg-slate-900/20 hover:bg-slate-800/40 hover:border-slate-700 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                  <Globe className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium mb-0.5">Website</div>
                  <div className="text-sm text-slate-300 font-medium">inexa.space</div>
                </div>
              </a>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
