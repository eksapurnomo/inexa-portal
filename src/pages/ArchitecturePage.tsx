import { Link } from 'react-router-dom';
import { 
  ChevronRight, ArrowDown, CheckCircle2, 
  Brain, Workflow
} from 'lucide-react';
import {
  LogoOpenAI, LogoAnthropic, LogoGemini, LogoLlama, LogoGroq,
  LogoDeepSeek, LogoMistral, LogoCohere, LogoBytePlus, LogoxAI,
  LogoAWS, LogoGoogleCloud, LogoAzure, LogoAlibabaCloud,
  LogoVastai, LogoRunPod, LogoLambdaLabs
} from '../components/ProviderLogos';

const SidebarLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors">
    {children}
  </a>
);

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="py-4 flex items-center text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-slate-300">Architecture</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 pb-24 relative">
          
          {/* Sticky Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-1">
              <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Architecture</h3>
              <SidebarLink href="#overview">Overview</SidebarLink>
              <SidebarLink href="#executive-summary">Executive Summary</SidebarLink>
              <SidebarLink href="#cognitive-vs-runtime">Cognitive vs Runtime</SidebarLink>
              <SidebarLink href="#provider-abstraction">Provider Abstraction</SidebarLink>
              <SidebarLink href="#ai-ecosystem">AI Provider Ecosystem</SidebarLink>
              <SidebarLink href="#infrastructure-portability">Infrastructure Portability</SidebarLink>
              <SidebarLink href="#principles">Principles</SidebarLink>
              <SidebarLink href="#evolution">Architecture Evolution</SidebarLink>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 max-w-4xl">
            
            {/* HERO */}
            <section id="overview" className="py-12 border-b border-slate-800/50">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                Architecture for Autonomous Intelligence
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed max-w-3xl tracking-tight mb-10">
                A layered infrastructure stack for planning, execution, orchestration, and operation of autonomous systems.
              </p>
              
              <div className="p-6 bg-slate-900/50 border border-slate-800/80 rounded-xl">
                <p className="text-lg text-slate-300 font-medium tracking-tight">
                  "Applications should not be tightly coupled to AI providers or infrastructure vendors. 
                  INEXA provides the orchestration and cognitive layers that enable portability across both."
                </p>
              </div>
            </section>

            {/* EXECUTIVE SUMMARY */}
            <section id="executive-summary" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Executive Summary</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                INEXA provides two foundational layers that, together, provide infrastructure for autonomous intelligence.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/30">
                  <div className="flex items-center gap-3 mb-4 text-white">
                    <Brain className="w-5 h-5 text-slate-400" />
                    <h3 className="font-semibold">Hexa Cognitive</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> planning</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> reasoning</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> reflection</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> memory</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> coordination</li>
                  </ul>
                </div>
                
                <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/30">
                  <div className="flex items-center gap-3 mb-4 text-white">
                    <Workflow className="w-5 h-5 text-slate-400" />
                    <h3 className="font-semibold">Hexa Runtime</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> orchestration</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> execution</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> replay</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> routing</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> observability</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* COGNITIVE VS RUNTIME */}
            <section id="cognitive-vs-runtime" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-4">Cognitive vs Runtime Layer</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Reasoning and execution are intentionally separated to ensure durability, security, and strict operational boundaries.
              </p>

              <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/20">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-900/60 border-b border-slate-800">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-white w-1/2 border-r border-slate-800">Hexa Cognitive</th>
                      <th className="px-6 py-4 font-semibold text-white w-1/2">Hexa Runtime</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    <tr>
                      <td className="px-6 py-4 text-slate-300 font-mono text-xs border-r border-slate-800">decides</td>
                      <td className="px-6 py-4 text-slate-300 font-mono text-xs">executes</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-300 font-mono text-xs border-r border-slate-800">plans</td>
                      <td className="px-6 py-4 text-slate-300 font-mono text-xs">schedules</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-300 font-mono text-xs border-r border-slate-800">reasons</td>
                      <td className="px-6 py-4 text-slate-300 font-mono text-xs">routes</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-300 font-mono text-xs border-r border-slate-800">remembers</td>
                      <td className="px-6 py-4 text-slate-300 font-mono text-xs">retries</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-300 font-mono text-xs border-r border-slate-800">reflects</td>
                      <td className="px-6 py-4 text-slate-300 font-mono text-xs">observes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* PROVIDER ABSTRACTION DIAGRAM */}
            <section id="provider-abstraction" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-4">Provider Abstraction Diagram</h2>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Applications integrate once, while the runtime manages provider diversity and infrastructure portability.
              </p>

              <div className="flex flex-col items-center justify-center p-12 border border-slate-800 rounded-xl bg-slate-900/20 font-mono text-sm">
                <div className="px-6 py-3 border border-slate-700 bg-slate-800 rounded-lg text-white mb-4 w-64 text-center">Applications</div>
                <ArrowDown className="w-5 h-5 text-slate-600 mb-4" />
                
                <div className="px-6 py-3 border border-slate-600 bg-slate-800/80 rounded-lg text-slate-200 mb-4 w-64 text-center">Hexa Cognitive</div>
                <ArrowDown className="w-5 h-5 text-slate-600 mb-4" />
                
                <div className="px-6 py-3 border border-slate-600 bg-slate-800/80 rounded-lg text-slate-200 mb-4 w-64 text-center">Hexa Runtime</div>
                <ArrowDown className="w-5 h-5 text-slate-600 mb-4" />
                
                <div className="flex flex-wrap justify-center items-center gap-3 mb-4 w-full max-w-2xl">
                  {[
                    { name: 'OpenAI', Logo: LogoOpenAI },
                    { name: 'Anthropic', Logo: LogoAnthropic },
                    { name: 'Gemini', Logo: LogoGemini },
                    { name: 'Llama', Logo: LogoLlama }
                  ].map(p => (
                    <div key={p.name} className="flex flex-col items-center justify-center p-3 border border-dashed border-slate-600 bg-slate-900/50 rounded-lg text-slate-400 w-24 md:w-32">
                      <p.Logo className="h-5 w-auto opacity-70 mb-2" />
                      <span className="text-[10px] uppercase tracking-wider font-semibold opacity-80">{p.name}</span>
                    </div>
                  ))}
                </div>
                <ArrowDown className="w-5 h-5 text-slate-600 mb-4" />

                <div className="flex flex-wrap justify-center items-center gap-3 mb-4 w-full max-w-2xl">
                  {[
                    { name: 'AWS', Logo: LogoAWS },
                    { name: 'GCP', Logo: LogoGoogleCloud },
                    { name: 'Azure', Logo: LogoAzure },
                    { name: 'Alibaba', Logo: LogoAlibabaCloud }
                  ].map(p => (
                    <div key={p.name} className="flex flex-col items-center justify-center p-3 border border-dashed border-slate-600 bg-slate-900/50 rounded-lg text-slate-400 w-24 md:w-32">
                      <p.Logo className="h-5 w-auto opacity-70 mb-2" />
                      <span className="text-[10px] uppercase tracking-wider font-semibold opacity-80">{p.name}</span>
                    </div>
                  ))}
                </div>
                <ArrowDown className="w-5 h-5 text-slate-600 mb-4" />
                
                <div className="px-6 py-3 border border-slate-700 bg-slate-950 rounded-lg text-slate-400 w-80 text-center">
                  Compute Infrastructure
                </div>
              </div>
            </section>

            {/* AI ECOSYSTEM */}
            <section id="ai-ecosystem" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-2">AI Provider Ecosystem</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Designed to orchestrate intelligence across modern AI systems. Hexa Runtime abstracts provider-specific APIs through a unified orchestration layer, enabling applications to route, switch, and coordinate across multiple AI systems without vendor lock-in.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { name: 'OpenAI', desc: 'Foundation Models', Logo: LogoOpenAI },
                  { name: 'Anthropic', desc: 'Safety-First AI', Logo: LogoAnthropic },
                  { name: 'Gemini', desc: 'Multimodal Intelligence', Logo: LogoGemini },
                  { name: 'Llama', desc: 'Open Model Ecosystem', Logo: LogoLlama },
                  { name: 'Groq', desc: 'Inference Acceleration', Logo: LogoGroq },
                  { name: 'DeepSeek', desc: 'Advanced Reasoning', Logo: LogoDeepSeek },
                  { name: 'Mistral', desc: 'Open Foundation Models', Logo: LogoMistral },
                  { name: 'Cohere', desc: 'Enterprise Language AI', Logo: LogoCohere },
                  { name: 'BytePlus', desc: 'AI Infrastructure', Logo: LogoBytePlus },
                  { name: 'xAI', desc: 'Frontier Intelligence', Logo: LogoxAI }
                ].map(provider => {
                  const Logo = provider.Logo;
                  return (
                    <div key={provider.name} className="flex flex-col items-center justify-center p-6 border border-slate-800/60 rounded-xl bg-slate-900/30 hover:bg-slate-800/30 text-slate-500 hover:text-slate-200 hover:border-slate-700 transition-all duration-300 cursor-default select-none group text-center">
                      <Logo className="h-9 md:h-10 w-auto opacity-60 group-hover:opacity-100 transition-opacity mb-4 drop-shadow-sm" />
                      <span className="text-xs font-medium tracking-tight opacity-90 group-hover:opacity-100 transition-opacity mb-1">{provider.name}</span>
                      <span className="text-[10px] opacity-50 font-medium tracking-wide uppercase transition-opacity">{provider.desc}</span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* INFRASTRUCTURE PORTABILITY */}
            <section id="infrastructure-portability" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Infrastructure Portability</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Portable execution across cloud, compute, and distributed infrastructure environments. Hexa Runtime separates orchestration from infrastructure dependencies, enabling deployment across heterogeneous environments while maintaining execution consistency.
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Cloud Providers</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { name: 'AWS', desc: 'Cloud Infrastructure', Logo: LogoAWS },
                      { name: 'Google Cloud', desc: 'Cloud Platform', Logo: LogoGoogleCloud },
                      { name: 'Microsoft Azure', desc: 'Enterprise Cloud', Logo: LogoAzure },
                      { name: 'Alibaba Cloud', desc: 'Global Cloud Services', Logo: LogoAlibabaCloud }
                    ].map(provider => {
                      const Logo = provider.Logo;
                      return (
                        <div key={provider.name} className="flex flex-col items-center justify-center p-6 border border-slate-800/60 rounded-xl bg-slate-900/30 hover:bg-slate-800/30 text-slate-500 hover:text-slate-200 hover:border-slate-700 transition-all duration-300 cursor-default select-none group text-center">
                          <Logo className="h-9 md:h-10 w-auto opacity-60 group-hover:opacity-100 transition-opacity mb-4 drop-shadow-sm" />
                          <span className="text-xs font-medium tracking-tight opacity-90 group-hover:opacity-100 transition-opacity mb-1">{provider.name}</span>
                          <span className="text-[10px] opacity-50 font-medium tracking-wide uppercase transition-opacity">{provider.desc}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Compute Providers</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { name: 'Vast.ai', desc: 'Distributed GPU Compute', Logo: LogoVastai },
                      { name: 'RunPod', desc: 'GPU Execution Platform', Logo: LogoRunPod },
                      { name: 'Lambda Labs', desc: 'AI Compute Infrastructure', Logo: LogoLambdaLabs }
                    ].map(provider => {
                      const Logo = provider.Logo;
                      return (
                        <div key={provider.name} className="flex flex-col items-center justify-center p-6 border border-slate-800/60 rounded-xl bg-slate-900/30 hover:bg-slate-800/30 text-slate-500 hover:text-slate-200 hover:border-slate-700 transition-all duration-300 cursor-default select-none group text-center">
                          <Logo className="h-9 md:h-10 w-auto opacity-60 group-hover:opacity-100 transition-opacity mb-4 drop-shadow-sm" />
                          <span className="text-xs font-medium tracking-tight opacity-90 group-hover:opacity-100 transition-opacity mb-1">{provider.name}</span>
                          <span className="text-[10px] opacity-50 font-medium tracking-wide uppercase transition-opacity">{provider.desc}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Infrastructure Categories</h4>
                  <div className="flex flex-wrap gap-4">
                    {['GPU Compute', 'Storage', 'Networking', 'Data Centers'].map(cat => (
                      <div key={cat} className="px-4 py-2 border border-slate-800/50 rounded-full bg-slate-900/50 text-slate-500 text-sm">
                        {cat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* PRINCIPLES */}
            <section id="principles" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Infrastructure Principles</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Durable by Default', desc: 'Workflows persist across failures and can resume from exact points of interruption.' },
                  { title: 'Autonomous by Design', desc: 'Systems are built to operate with minimal human intervention over long lifecycles.' },
                  { title: 'Observable Execution', desc: 'Every step, reasoning cycle, and API call is deterministically logged and visible.' },
                  { title: 'Provider Agnostic', desc: 'Built to prevent vendor lock-in across both foundation models and compute layers.' },
                  { title: 'Composable Systems', desc: 'Modularity allows tailored infrastructure deployment scaling from edge to enterprise.' },
                  { title: 'Enterprise Ready', desc: 'Adheres to strict security, role-based access, and predictable performance standards.' }
                ].map(principle => (
                  <div key={principle.title} className="p-6 border border-slate-800 rounded-xl bg-slate-900/20 hover:bg-slate-900/40 transition-colors">
                    <h3 className="text-white font-medium mb-2">{principle.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{principle.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* EVOLUTION */}
            <section id="evolution" className="py-16">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Architecture Evolution</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Multi-Agent Coordination',
                  'Cognitive Memory Fabric',
                  'Distributed Intelligence Mesh',
                  'Autonomous Operations Platform'
                ].map(item => (
                  <div key={item} className="p-5 border border-slate-800 border-l-2 border-l-slate-600 rounded-r-xl bg-slate-900/30 text-slate-300 font-medium text-sm tracking-tight">
                    {item}
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
