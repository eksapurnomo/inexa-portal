import { Link } from 'react-router-dom';
import { 
  ChevronRight, CheckCircle2, 
  Shield, AlertTriangle
} from 'lucide-react';

const SidebarLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors">
    {children}
  </a>
);

export default function HexaGovernancePage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="py-4 flex items-center text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <Link to="/products" className="hover:text-slate-300 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-slate-300">Hexa Governance</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 pb-24 relative">
          
          {/* Sticky Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-1">
              <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Hexa Governance</h3>
              <SidebarLink href="#overview">Overview</SidebarLink>
              <SidebarLink href="#executive-summary">Executive Summary</SidebarLink>
              <SidebarLink href="#problems">Why Governance Exists</SidebarLink>
              <SidebarLink href="#risk-levels">Risk Levels & Rules</SidebarLink>
              <SidebarLink href="#capabilities">Core Capabilities</SidebarLink>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 max-w-4xl">
            
            {/* HERO */}
            <section id="overview" className="py-12 border-b border-slate-800/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/50 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-slate-300" />
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">
                  Hexa Governance
                </h1>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed max-w-3xl tracking-tight mb-8">
                The operational shield. Enforces DAG-level risk interception and Human-in-the-Loop workflows before high-risk execution.
              </p>
            </section>

            {/* EXECUTIVE SUMMARY */}
            <section id="executive-summary" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Executive Summary</h2>
              <div className="prose prose-invert max-w-none text-slate-400">
                <p className="mb-4 leading-relaxed">
                  Hexa Governance acts as the protective shield for the Hexa Platform operating system. It evaluates the risk of execution DAGs planned by Hexa Cognitive before they are dispatched to Hexa Runtime. By intercepting actions at the structural DAG level rather than performing text-based filtering, it ensures deterministic and rigorous security.
                </p>
                <p className="leading-relaxed">
                  The service features a Policy Engine that categorizes actions into 5 Risk Levels (0-4). Low-risk queries are auto-approved, while high-risk operational or financial tasks trigger a Human-in-the-Loop approval workflow, keeping humans firmly in control of critical AI actions.
                </p>
              </div>
            </section>

            {/* WHY GOVERNANCE EXISTS */}
            <section id="problems" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Why Governance Exists</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Allowing autonomous AI agents to execute actions unchecked poses severe operational and financial risks. Hexa Governance addresses these critical flaws:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Unintended Execution', desc: 'AI agents can accidentally perform destructive operations. Governance enforces strict manual approvals for critical actions.' },
                  { title: 'Bypass Attacks', desc: 'Text-based LLM guardrails are easily bypassed. DAG-level interception relies on hardcoded function signatures.' },
                  { title: 'Lack of Accountability', desc: 'Operations without audit trails obscure responsibility. Governance logs who approved what, and when.' },
                  { title: 'Unpredictable Failures', desc: 'When safety layers fail, systems must fail-close. Governance blocks all operations by default if policies are unreachable.' }
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

            {/* RISK LEVELS */}
            <section id="risk-levels" className="py-16 border-b border-slate-800/50">
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Risk Levels & Rules</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Hexa Governance evaluates all incoming DAGs against a rigorous risk matrix. Actions are classified into 5 levels, dictating the required approval workflow.
              </p>

              <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/20 mb-8">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-900/60 border-b border-slate-800">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-white w-1/3 border-r border-slate-800">Risk Level</th>
                      <th className="px-6 py-4 font-semibold text-white">Approval Workflow</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    <tr>
                      <td className="px-6 py-4 text-slate-300 font-medium border-r border-slate-800">Level 0: Information</td>
                      <td className="px-6 py-4 text-emerald-400 font-mono text-xs">Auto Approve</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-300 font-medium border-r border-slate-800">Level 1: Recommendation</td>
                      <td className="px-6 py-4 text-emerald-400 font-mono text-xs">Auto Approve</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-300 font-medium border-r border-slate-800">Level 2: Operational</td>
                      <td className="px-6 py-4 text-amber-400 font-mono text-xs">Approval Required</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-300 font-medium border-r border-slate-800">Level 3: Financial</td>
                      <td className="px-6 py-4 text-amber-500 font-mono text-xs">Manager Approval</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-300 font-medium border-r border-slate-800">Level 4: Strategic</td>
                      <td className="px-6 py-4 text-rose-400 font-mono text-xs">Multi-level Approval</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-5 border border-rose-900/50 rounded-xl bg-rose-950/20 flex gap-4 items-center">
                <AlertTriangle className="w-6 h-6 text-rose-500 flex-shrink-0" />
                <div>
                  <h3 className="text-white text-sm font-semibold mb-1">Default Fallback Rule</h3>
                  <p className="text-sm text-rose-200/70 font-mono">Unknown Action → BLOCK</p>
                </div>
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
                      <h4 className="text-slate-200 font-medium text-sm">Policy Engine (Risk 0-4)</h4>
                      <p className="text-slate-500 text-xs mt-1">Classifies intent dynamically. Risk 0 (Info) is auto-approved; Risk 2+ (Operational, Financial, Strategic) requires human validation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Human-in-the-Loop</h4>
                      <p className="text-slate-500 text-xs mt-1">Intercepts critical DAGs and sets them to a PENDING state until a human manager explicitly clicks APPROVE or REJECT.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">Fail-Safe Default</h4>
                      <p className="text-slate-500 text-xs mt-1">If an action is not recognized in the policy dictionary, it automatically defaults to Risk Level 2 (Requires Approval).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-slate-200 font-medium text-sm">DAG-Level Interception</h4>
                      <p className="text-slate-500 text-xs mt-1">Guarantees safety by checking the structured JSON execution payload rather than relying on unreliable text comprehension guardrails.</p>
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
