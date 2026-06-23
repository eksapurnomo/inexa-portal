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
              <SidebarLink href="#workflow-automation">Workflow Automation</SidebarLink>
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

            {/* WORKFLOW AUTOMATION */}
            <section id="workflow-automation" className="py-16 border-b border-slate-800/50">
              {/* SECTION 1 — INTRODUCTION */}
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-4">Workflow Automation</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Traditional automation executes predefined workflows.
              </p>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Hexa extends automation with retrieval, reasoning, memory, governance, and observability—transforming workflows into governed autonomous systems.
              </p>
              <p className="text-slate-400 mb-12 leading-relaxed">
                Unlike conventional workflow engines, Hexa can understand context, retrieve institutional knowledge, evaluate risk, and execute actions under policy control.
              </p>

              {/* SECTION 2 — COGNITIVE WORKFLOW LIFECYCLE */}
              <div className="mb-16">
                <h3 className="text-xl font-semibold text-white tracking-tight mb-4">Cognitive Workflow Lifecycle</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Every workflow executed by Hexa passes through retrieval, reasoning, governance validation, approval controls, execution, and memory consolidation.
                </p>
                <div className="p-2 border border-slate-800/80 rounded-xl bg-slate-900/30 overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]">
                  <img src="/RAG-and-Trace.svg" alt="Visual Cortex" className="w-full h-auto rounded-lg" />
                </div>
                <p className="text-sm text-slate-500 mt-4 text-center italic">
                  Visual Cortex provides complete visibility into how autonomous decisions are formed, evaluated, approved, and executed.
                </p>
              </div>

              {/* SECTION 3 — CORE COMPONENTS */}
              <div className="mb-16">
                <h3 className="text-xl font-semibold text-white tracking-tight mb-6">Core Components</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 border border-slate-800/80 rounded-xl bg-slate-900/30">
                    <h4 className="text-white font-medium mb-2">Agentic RAG Orchestrator</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Retrieves SOPs, documentation, and enterprise knowledge before any decision is made.
                    </p>
                  </div>
                  <div className="p-6 border border-slate-800/80 rounded-xl bg-slate-900/30">
                    <h4 className="text-white font-medium mb-2">Temporal & Domain Memory</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Maintains historical context, approvals, policy evolution, and organizational intent across time.
                    </p>
                  </div>
                  <div className="p-6 border border-slate-800/80 rounded-xl bg-slate-900/30">
                    <h4 className="text-white font-medium mb-2">Governance Shield</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Evaluates actions against enterprise policies, risk thresholds, and approval requirements.
                    </p>
                  </div>
                  <div className="p-6 border border-slate-800/80 rounded-xl bg-slate-900/30">
                    <h4 className="text-white font-medium mb-2">Visual Cortex</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Provides complete auditability of reasoning, governance decisions, and workflow execution.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 4 — ENTERPRISE SKILLS ECOSYSTEM */}
              <div className="mb-16">
                <h3 className="text-xl font-semibold text-white tracking-tight mb-4">Enterprise Skills Ecosystem</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Skills are deployable intelligence modules that extend the Cognitive Operating System without rebuilding workflows.
                </p>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  They encapsulate domain expertise, integrations, analytics, retrieval, and decision-making capabilities into reusable components.
                </p>

                <div className="mb-4 p-2 border border-indigo-900/30 rounded-xl bg-slate-900/30 overflow-hidden shadow-[0_0_15px_rgba(79,70,229,0.1)] transition-transform duration-500 hover:scale-[1.02]">
                  <img src="/skills-hub.svg" alt="Enterprise Skills Hub" className="w-full h-auto rounded-lg" />
                </div>
                <p className="text-sm text-slate-500 mt-2 text-center italic mb-10">
                  Enterprise Skills Hub enables organizations to deploy domain-specific intelligence modules across finance, operations, market research, compliance, and strategic analysis.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-300 uppercase tracking-widest mb-3">Financial Intelligence</h5>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Company Valuation</li>
                      <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> SaaS Valuation Compression</li>
                      <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Stock Correlation</li>
                      <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Stock Liquidity</li>
                      <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Funda Data</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-300 uppercase tracking-widest mb-3">Market Intelligence</h5>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Finance Sentiment</li>
                      <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> TradingView Reader</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-300 uppercase tracking-widest mb-3">Communication Intelligence</h5>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Twitter Reader</li>
                      <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Telegram Reader</li>
                      <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Discord Reader</li>
                      <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> LinkedIn Reader</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-300 uppercase tracking-widest mb-3">Research & Strategy</h5>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Startup Analysis</li>
                      <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> VC Reader</li>
                      <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> SEPA Strategy</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-300 uppercase tracking-widest mb-3">Geopolitical Monitoring</h5>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Hormuz Strait Monitoring</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 border border-slate-800/80 rounded-xl bg-slate-900/30">
                  <p className="text-sm font-medium text-white mb-3">Architecture Note</p>
                  <p className="text-sm text-slate-400 mb-3">Skills are first-class components inside Hexa. Every Skill can leverage:</p>
                  <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-slate-300 mb-3">
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Agentic RAG</li>
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Temporal Memory</li>
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Governance Shield</li>
                    <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Visual Cortex</li>
                  </ul>
                  <p className="text-sm text-slate-400">
                    ensuring all autonomous actions remain observable, auditable, and policy compliant.
                  </p>
                </div>
              </div>

              {/* SECTION 5 — ENTERPRISE APPLICATIONS */}
              <div className="mb-16">
                <h3 className="text-xl font-semibold text-white tracking-tight mb-6">Enterprise Applications</h3>
                <div className="space-y-6">
                  <div className="p-6 border border-slate-800/80 rounded-xl bg-slate-900/30">
                    <h4 className="text-white font-medium mb-2">IT Operations & SRE</h4>
                    <p className="text-sm text-slate-400 mb-4">Governed infrastructure automation and incident remediation aligned with enterprise policies.</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 font-semibold">Examples:</p>
                    <ul className="space-y-1 text-sm text-slate-400 list-disc list-inside mb-4">
                      <li>Scale infrastructure</li>
                      <li>Restart services</li>
                      <li>Execute remediation playbooks</li>
                    </ul>
                    <p className="text-sm text-slate-400 italic">while respecting approval workflows.</p>
                  </div>
                  
                  <div className="p-6 border border-slate-800/80 rounded-xl bg-slate-900/30">
                    <h4 className="text-white font-medium mb-2">Customer Support & VIP Routing</h4>
                    <p className="text-sm text-slate-400">Memory-aware routing, escalation, and refund decisions based on historical interactions and organizational policies.</p>
                  </div>

                  <div className="p-6 border border-slate-800/80 rounded-xl bg-slate-900/30">
                    <h4 className="text-white font-medium mb-2">FinOps & Compliance</h4>
                    <p className="text-sm text-slate-400">Policy-driven autonomous execution with full audit trails, approval controls, and governance enforcement.</p>
                  </div>
                </div>
              </div>

              {/* SECTION 6 — CONCLUSION */}
              <div>
                <h3 className="text-xl font-semibold text-white tracking-tight mb-4">From Workflow Automation to Cognitive Operations</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  Hexa combines retrieval, reasoning, governance, execution, and memory into a unified operational architecture for enterprise AI systems.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  This enables organizations to move beyond deterministic automation toward governed autonomy while preserving transparency, accountability, and operational control.
                </p>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
