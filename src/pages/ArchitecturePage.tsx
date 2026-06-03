import { Link } from 'react-router-dom';
import { 
  ChevronRight, CheckCircle2, 
  Brain, Workflow
} from 'lucide-react';
import { MainArchitectureDiagram } from '../components/diagrams/MainArchitectureDiagram';
import { RequestLifecycleDiagram } from '../components/diagrams/RequestLifecycleDiagram';
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
              <SidebarLink href="#enterprise-architecture">Enterprise Architecture</SidebarLink>
              <SidebarLink href="#request-lifecycle">Request Lifecycle</SidebarLink>
              <SidebarLink href="#deployment-architecture">Deployment Architecture</SidebarLink>
              <SidebarLink href="#enterprise-principles">Enterprise Principles</SidebarLink>
              <SidebarLink href="#ai-ecosystem">AI Provider Ecosystem</SidebarLink>
              <SidebarLink href="#infrastructure-portability">Infrastructure Portability</SidebarLink>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 max-w-4xl">
            
            {/* HERO */}
            <section id="overview" className="py-12 border-b border-slate-800/50">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                Hexa Platform Architecture Overview
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed max-w-3xl tracking-tight mb-10">
                EXA Space uses a cloud-native microservices architecture designed for enterprise-grade AI workloads.
              </p>
              
              <div className="p-6 bg-slate-900/50 border border-slate-800/80 rounded-xl">
                <p className="text-lg text-slate-300 font-medium tracking-tight">
                  "Applications should not be tightly coupled to AI providers or fragile execution contexts. 
                  INEXA provides the orchestration and cognitive boundaries that enable scale, reliability, and portability."
                </p>
              </div>
            </section>

            {/* EXECUTIVE SUMMARY */}
            <section id="executive-summary" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Executive Summary</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Hexa Platform provides 5 foundational microservices that operate together as the Human-Governed AI Workforce Operating System.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/30">
                  <div className="flex items-center gap-3 mb-4 text-white">
                    <Brain className="w-5 h-5 text-slate-400" />
                    <h3 className="font-semibold">Hexa Cognitive (The Brain)</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> DAG Generation & Planning</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> Context Injection</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> Replanning Logic</li>
                  </ul>
                </div>
                
                <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/30">
                  <div className="flex items-center gap-3 mb-4 text-white">
                    <Workflow className="w-5 h-5 text-slate-400" />
                    <h3 className="font-semibold">Hexa Runtime (The Muscle)</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> Stateless execution engine</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> Multi-provider failover</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> Circuit breaker & Telemetry</li>
                  </ul>
                </div>

                <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/30">
                  <div className="flex items-center gap-3 mb-4 text-white">
                    <h3 className="font-semibold">Hexa Memory (The Experience)</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> Long-Term Vector Store</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> Contextual Lineage</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Stored ONLY after success</li>
                  </ul>
                </div>

                <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/30">
                  <div className="flex items-center gap-3 mb-4 text-white">
                    <h3 className="font-semibold">Hexa Knowledge (The Truth)</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> Real-time enterprise data gateway</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> Connects to SAP & SharePoint</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> Connects to SQL & REST APIs</li>
                  </ul>
                </div>

                <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/30 sm:col-span-2">
                  <div className="flex items-center gap-3 mb-4 text-white">
                    <h3 className="font-semibold">Hexa Governance (The Shield)</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-400 grid sm:grid-cols-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> Human-in-the-loop control system</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> Policy enforcement & Risk scoring</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-600" /> Multi-level approval workflow</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ENTERPRISE ARCHITECTURE */}
            <section id="enterprise-architecture" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-4">Enterprise Architecture</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                The Control Plane routes intents through the Gateway to the 4 core execution/planning microservices. Every action must pass the Governance shield before touching Enterprise Systems.
              </p>

              <div className="p-8 border border-slate-800 rounded-xl bg-slate-900/20 mx-auto">
                <MainArchitectureDiagram />
              </div>
            </section>

            {/* REQUEST LIFECYCLE */}
            <section id="request-lifecycle" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-4">Request Lifecycle</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                A deterministic, safe, and verifiable flow from User Intent to Memory Persistence.
              </p>

              <div className="p-8 border border-slate-800 rounded-xl bg-slate-900/20 mx-auto">
                <RequestLifecycleDiagram />
              </div>
            </section>

            {/* ENTERPRISE DEPLOYMENT ARCHITECTURE */}
            <section id="deployment-architecture" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-4">Enterprise Deployment Architecture</h2>
              <p className="text-slate-400 mb-10 leading-relaxed">
                EXA Space is designed for cloud-native enterprise environments.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 border border-slate-800/80 rounded-xl bg-slate-900/30">
                  <h3 className="text-white font-medium mb-4 flex items-center"><span className="text-indigo-400 mr-2">1.</span> Compute Layer</h3>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Docker</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Kubernetes</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Service Mesh (Istio / Linkerd)</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Helm</li>
                  </ul>
                </div>
                
                <div className="p-6 border border-slate-800/80 rounded-xl bg-slate-900/30">
                  <h3 className="text-white font-medium mb-4 flex items-center"><span className="text-indigo-400 mr-2">2.</span> Data Layer</h3>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> PostgreSQL + pgvector</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Redis Cluster</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> S3 / MinIO</li>
                  </ul>
                </div>

                <div className="p-6 border border-slate-800/80 rounded-xl bg-slate-900/30">
                  <h3 className="text-white font-medium mb-4 flex items-center"><span className="text-indigo-400 mr-2">3.</span> Networking Layer</h3>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> API Gateway (Kong / Traefik)</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> NGINX Ingress</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Identity Provider (Keycloak / Auth0)</li>
                  </ul>
                </div>

                <div className="p-6 border border-slate-800/80 rounded-xl bg-slate-900/30">
                  <h3 className="text-white font-medium mb-4 flex items-center"><span className="text-indigo-400 mr-2">4.</span> Observability Layer</h3>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> OpenTelemetry</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Prometheus</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Grafana</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Loki / ELK</li>
                  </ul>
                </div>

                <div className="p-6 border border-slate-800/80 rounded-xl bg-slate-900/30">
                  <h3 className="text-white font-medium mb-4 flex items-center"><span className="text-indigo-400 mr-2">5.</span> Security Layer</h3>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> HashiCorp Vault</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> OPA (Policy Engine)</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> mTLS Service Communication</li>
                  </ul>
                </div>

                <div className="p-6 border border-slate-800/80 rounded-xl bg-slate-900/30">
                  <h3 className="text-white font-medium mb-4 flex items-center"><span className="text-indigo-400 mr-2">6.</span> CI/CD Layer</h3>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> GitHub Actions</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> ArgoCD</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Terraform</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* KEY ENTERPRISE PRINCIPLES */}
            <section id="enterprise-principles" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Key Enterprise Principles</h2>

              <div className="space-y-6">
                <div className="p-6 border border-slate-800/80 rounded-xl bg-slate-900/20">
                  <h3 className="text-lg font-semibold text-white mb-2">1. Stateless Compute, Stateful Data</h3>
                  <p className="text-sm text-slate-400">Cognitive & Runtime services are entirely stateless, while Memory & Knowledge services provide isolated, persistent data layers.</p>
                </div>
                
                <div className="p-6 border border-slate-800/80 rounded-xl bg-slate-900/20">
                  <h3 className="text-lg font-semibold text-white mb-2">2. Zero Trust Architecture</h3>
                  <p className="text-sm text-slate-400">There is no implicit trust between internal services. All internal service-to-service communication is encrypted.</p>
                </div>

                <div className="p-6 border border-slate-800/80 rounded-xl bg-slate-900/20">
                  <h3 className="text-lg font-semibold text-white mb-2">3. Human-Governed System</h3>
                  <p className="text-sm text-slate-400">AI does not execute critical actions without human approval. All operational workflows are intercepted by the Governance Layer.</p>
                </div>

                <div className="p-6 border border-slate-800/80 rounded-xl bg-slate-900/20">
                  <h3 className="text-lg font-semibold text-white mb-2">4. Runtime-Confirmed Memory</h3>
                  <p className="text-sm text-slate-400">Only successful executions are stored. Failed actions or hallucinations are strictly discarded to prevent knowledge base poisoning.</p>
                </div>

                <div className="p-6 border border-slate-800/80 rounded-xl bg-slate-900/20">
                  <h3 className="text-lg font-semibold text-white mb-2">5. Vendor-Agnostic Design</h3>
                  <p className="text-sm text-slate-400">Supports AWS (EKS), GCP (GKE), Azure (AKS), and secure On-premise deployments.</p>
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
              </div>
            </section>



          </main>
        </div>
      </div>
    </div>
  );
}
