import React from 'react';
import { MainArchitectureDiagram } from '../components/diagrams/MainArchitectureDiagram';
import { RequestLifecycleDiagram } from '../components/diagrams/RequestLifecycleDiagram';

export type DocPage = {
  title: string;
  slug: string;
  content: React.ReactNode;
};

export type DocSection = {
  title: string;
  slug: string;
  pages: DocPage[];
};

export const docsNavigation: DocSection[] = [
  {
    title: 'Architecture Overview',
    slug: 'architecture',
    pages: [
      {
        title: 'Full Stack Overview',
        slug: 'full-stack-overview',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Full Stack Overview</h1>
            <div className="my-10 p-6 border border-slate-800 rounded-xl bg-slate-900/20">
              <MainArchitectureDiagram />
            </div>
            <p>The Hexa Platform is the Human-Governed AI Workforce Operating System. It consists of 5 core microservices that route intents through the API Gateway, perform cognitive planning, execute DAGs statelessly, manage memory, fetch real-time knowledge, and pass everything through a strict governance shield before interacting with enterprise systems.</p>
          </div>
        )
      },
      {
        title: 'Request Lifecycle',
        slug: 'request-lifecycle',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Request Lifecycle</h1>
            <div className="my-10 p-6 border border-slate-800 rounded-xl bg-slate-900/20">
              <RequestLifecycleDiagram />
            </div>
            <p>The request lifecycle ensures safe, deterministic execution. A User Request triggers Context Gathering (Memory + Knowledge). Hexa Cognitive generates a DAG plan, which is evaluated by Hexa Governance. Only upon approval does Hexa Runtime execute the graph. Finally, Memory Persistence occurs <strong>only</strong> after successful execution.</p>
          </div>
        )
      }
    ]
  },
  {
    title: 'Core Services',
    slug: 'core-services',
    pages: [
      {
        title: 'Cognitive Service',
        slug: 'cognitive-service',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Hexa Cognitive</h1>
            <p className="mb-4"><strong>The AI Orchestration & Planning Engine.</strong></p>
            <p>Hexa Cognitive transforms natural language intents into executable DAGs. It handles context injection, replanning logic, and autonomous session management. By operating as the "brain," it ensures that complex reasoning is completed before any action is taken.</p>
            <ul>
              <li>DAG generation</li>
              <li>Context injection</li>
              <li>Replanning logic (up to 3 retries)</li>
            </ul>
          </div>
        )
      },
      {
        title: 'Runtime Service',
        slug: 'runtime-service',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Hexa Runtime</h1>
            <p className="mb-4"><strong>The Stateless Execution Engine for AI Workloads.</strong></p>
            <p>Hexa Runtime is a high-performance engine that executes the DAGs provided by Hexa Cognitive. It is 100% stateless, meaning nodes can fail and be retried safely. It abstracts AI provider interactions with circuit breakers and fallback mechanisms.</p>
            <ul>
              <li>Multi-provider failover</li>
              <li>Circuit breaker (<code>aiobreaker</code>)</li>
              <li>Token telemetry and DLQ</li>
            </ul>
          </div>
        )
      },
      {
        title: 'Memory Service',
        slug: 'memory-service',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Hexa Memory</h1>
            <p className="mb-4"><strong>The Experience Layer.</strong></p>
            <p>Hexa Memory persists semantic knowledge and execution history. Crucially, <strong>memory is only stored after successful execution</strong>. This prevents hallucinations or failed execution paths from corrupting the enterprise knowledge base.</p>
            <ul>
              <li>PostgreSQL + pgvector</li>
              <li>Runtime-confirmed memory</li>
              <li>Semantic caching</li>
            </ul>
          </div>
        )
      },
      {
        title: 'Knowledge Service',
        slug: 'knowledge-service',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Hexa Knowledge</h1>
            <p className="mb-4"><strong>The Real-Time Enterprise Data Gateway.</strong></p>
            <p>Hexa Knowledge connects the AI workforce to enterprise ground truth. It prevents data hallucination by fetching live context from connected systems via an encrypted credential vault.</p>
            <ul>
              <li>Connects to SAP, SharePoint, SQL, REST APIs</li>
              <li>Encrypted Fernet Credential Vault</li>
              <li>Zero-hallucination data delivery</li>
            </ul>
          </div>
        )
      },
      {
        title: 'Governance Service',
        slug: 'governance-service',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Hexa Governance</h1>
            <p className="mb-4"><strong>The Human-in-the-Loop Control System.</strong></p>
            <p>Hexa Governance acts as the operational shield. It evaluates every DAG against a strict Policy Engine. Risk Level 0-1 are auto-approved, while Risk Level 2-4 require Human, Manager, or Multi-Level approvals. Unknown actions are blocked by default.</p>
            <ul>
              <li>Policy enforcement & Risk scoring</li>
              <li>Approval workflow</li>
              <li>DAG-level interception</li>
            </ul>
          </div>
        )
      }
    ]
  },
  {
    title: 'Security',
    slug: 'security',
    pages: [
      {
        title: 'Security Model',
        slug: 'security-model',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Security Model</h1>
            <p>The Hexa Platform is built on a <strong>Zero Trust Architecture</strong>. Every service authenticates requests via JWT, and no internal service implicitly trusts another.</p>
            <h3 className="text-white font-semibold">Audit Trail</h3>
            <p>Every DAG execution, memory retrieval, knowledge fetch, and governance approval is logged immutably to a central PostgreSQL audit trail.</p>
            <h3 className="text-white font-semibold">Encrypted Credentials</h3>
            <p>Hexa Knowledge uses Fernet symmetric encryption to store credentials for enterprise systems (SAP, SQL). Keys are rotated periodically and injected at runtime.</p>
            <h3 className="text-white font-semibold">Runtime-Confirmed Memory</h3>
            <p>Memory poisoning is prevented by strictly deferring memory writes until Hexa Runtime emits a success callback event.</p>
          </div>
        )
      },
      {
        title: 'Multi-Tenant Architecture',
        slug: 'multi-tenant',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Multi-Tenant Architecture</h1>
            <p>Hexa Platform provides strict data isolation for B2B deployments using <strong>Row-Level Security (RLS)</strong> in PostgreSQL.</p>
            <h3 className="text-white font-semibold">Tenant Isolation</h3>
            <p>Every vector stored in Hexa Memory and every credential stored in Hexa Knowledge is tagged with a <code>tenant_id</code>. Database queries automatically inject the active tenant context, ensuring data cannot leak across organizational boundaries.</p>
          </div>
        )
      }
    ]
  },
  {
    title: 'Deployment Architecture',
    slug: 'deployment',
    pages: [
      {
        title: 'Docker Compose',
        slug: 'docker',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Local Microservices (Docker Compose)</h1>
            <p>For development and testing, all 5 core services can be deployed locally using Docker Compose.</p>
            <pre className="bg-slate-900 border border-slate-800 rounded-lg p-4 overflow-x-auto my-6 text-sm text-slate-300">
              <code>{`version: '3.8'
services:
  hexa-runtime:
    image: exa-space/runtime:v2
    environment:
      - REDIS_URL=redis://redis:6379
      - QDRANT_URL=http://qdrant:6333
  hexa-cognitive:
    image: exa-space/cognitive:v2
    environment:
      - PG_URL=postgres://user:pass@db:5432/hexa
  hexa-memory:
    image: exa-space/memory:v2
  hexa-knowledge:
    image: exa-space/knowledge:v2
  hexa-governance:
    image: exa-space/governance:v2`}</code>
            </pre>
          </div>
        )
      },
      {
        title: 'Kubernetes',
        slug: 'kubernetes',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Production Kubernetes</h1>
            <p>In production, Hexa Platform is deployed via Kubernetes, offering horizontal scaling and self-healing mechanisms.</p>
            <h3 className="text-white font-semibold">Horizontal Scaling</h3>
            <p>The stateless execution engine (Hexa Runtime) uses Kubernetes HPA (Horizontal Pod Autoscaler) to scale dynamically based on Semaphore Queue depth in Redis.</p>
            <h3 className="text-white font-semibold">Stateless Runtime Layer</h3>
            <p>Because Hexa Runtime is completely stateless, pods can be terminated or spawned aggressively to manage burst workloads without risking data corruption.</p>
          </div>
        )
      }
    ]
  }
];

export function getDocPage(sectionSlug: string, pageSlug: string): DocPage | null {
  const section = docsNavigation.find(s => s.slug === sectionSlug);
  if (!section) return null;
  return section.pages.find(p => p.slug === pageSlug) || null;
}
