import React from 'react';
import { HexaRuntimeDiagram } from '../components/diagrams/HexaRuntimeDiagram';
import { HexaCognitiveDiagram } from '../components/diagrams/HexaCognitiveDiagram';
import { InexaStackDiagram } from '../components/diagrams/InexaStackDiagram';

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
    title: 'Introduction',
    slug: 'introduction',
    pages: [
      {
        title: 'Overview',
        slug: 'overview',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">INEXA Documentation Overview</h1>
            <p className="mb-4">Welcome to the INEXA Developer Documentation Hub. INEXA provides the foundational infrastructure layer for autonomous systems, separating higher-order cognitive planning from durable execution.</p>
            <h2 className="text-2xl font-semibold text-white mt-10 mb-4 border-b border-slate-800 pb-2">Core Concepts</h2>
            <p className="mb-4">INEXA is divided into two primary services:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Hexa Cognitive</strong>: The brain. Handles natural language intents, creates execution DAGs, manages autonomy sessions, and handles memory.</li>
              <li><strong>Hexa Runtime</strong>: The muscle. An asynchronous parallel executor that handles multi-agent DAGs with strict concurrency limits, circuit breakers, and state checkpointing.</li>
            </ul>
            <p className="mb-8">By abstracting these two layers, INEXA ensures that planning logic is completely decoupled from execution, providing deterministic, reliable workflows over heterogeneous AI providers.</p>

            <h2 className="text-2xl font-semibold text-white mt-10 mb-6 border-b border-slate-800 pb-2">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/docs/architecture/full-stack-overview" className="block p-5 border border-slate-800 rounded-xl bg-slate-900/30 hover:bg-slate-800/50 hover:border-slate-700 transition-all">
                <h3 className="text-white font-medium mb-2">Full Stack Architecture &rarr;</h3>
                <p className="text-sm text-slate-400">Understand the end-to-end integration of Cognitive and Runtime layers.</p>
              </a>
              <a href="/docs/runtime/dag-execution" className="block p-5 border border-slate-800 rounded-xl bg-slate-900/30 hover:bg-slate-800/50 hover:border-slate-700 transition-all">
                <h3 className="text-white font-medium mb-2">DAG Execution &rarr;</h3>
                <p className="text-sm text-slate-400">Explore the asynchronous graph execution engine and semaphores.</p>
              </a>
              <a href="/docs/cognitive/adaptive-replanning" className="block p-5 border border-slate-800 rounded-xl bg-slate-900/30 hover:bg-slate-800/50 hover:border-slate-700 transition-all">
                <h3 className="text-white font-medium mb-2">Adaptive Replanning &rarr;</h3>
                <p className="text-sm text-slate-400">Learn how the Cognitive layer patches failed graphs dynamically.</p>
              </a>
              <a href="/docs/deployment/self-hosted" className="block p-5 border border-slate-800 rounded-xl bg-slate-900/30 hover:bg-slate-800/50 hover:border-slate-700 transition-all">
                <h3 className="text-white font-medium mb-2">Deployment &rarr;</h3>
                <p className="text-sm text-slate-400">View planned deployment targets including Kubernetes and Multi-Cloud.</p>
              </a>
            </div>
          </div>
        )
      },
      {
        title: 'Vision',
        slug: 'vision',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Platform Vision</h1>
            <p className="mb-4">INEXA is building the foundational infrastructure layer for autonomous systems, enabling organizations to deploy reliable cognitive and execution architectures across real-world industries.</p>
            <p>Our mission is to provide vendor-agnostic infrastructure for planning, reasoning, orchestration, memory, and execution at enterprise scale.</p>
          </div>
        )
      },
      {
        title: 'Architecture Summary',
        slug: 'architecture-summary',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Architecture Summary</h1>
            <p className="mb-4">INEXA's architecture relies on a strict decoupling of cognition and execution.</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>FastAPI Gateway</strong>: Serves as the entry point for all API requests.</li>
              <li><strong>Hexa Cognitive</strong>: Integrates LLM planners, manages autonomy sessions, and handles memory lineage via PostgreSQL.</li>
              <li><strong>Hexa Runtime</strong>: Executes DAGs asynchronously using semaphores, interacts with LLM providers through an <code>aiobreaker</code> circuit breaker, and caches responses in Redis (exact) and Qdrant (semantic).</li>
              <li><strong>Observability</strong>: Built with OpenTelemetry for tracing and structured JSON logging via <code>structlog</code>. Sub-cent cost tracking is managed through Redis Dead-Letter Queues (DLQs).</li>
            </ul>
          </div>
        )
      }
    ]
  },
  {
    title: 'Products',
    slug: 'products',
    pages: [
      {
        title: 'Hexa Runtime',
        slug: 'hexa-runtime',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Hexa Runtime</h1>
            <p className="mb-4">Hexa Runtime v2 is a high-performance, asynchronous AI runtime engine designed for executing multi-agent workflows structured as Directed Acyclic Graphs (DAGs).</p>
            <p>It focuses on production durability, resilience, security, and strict token/cost efficiency. It uses dynamic node timeouts, structured DAG execution state checkpointing, and graceful shutdown handling.</p>
          </div>
        )
      },
      {
        title: 'Hexa Cognitive',
        slug: 'hexa-cognitive',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Hexa Cognitive</h1>
            <p className="mb-4">Hexa Cognitive is a dedicated microservice responsible for higher-order intelligence tasks: transforming natural language intents into executable DAGs, managing cognitive checkpoints, persisting semantic memory, and performing adaptive replanning upon execution failures.</p>
            <p>It acts as the brain that directs the Hexa Runtime muscles. Communication is handled via REST APIs (<code>/cognitive/dispatch</code>, <code>/cognitive/callback</code>).</p>
          </div>
        )
      },
      {
        title: 'Product Comparison',
        slug: 'product-comparison',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Product Comparison</h1>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="py-3 px-4 text-white font-semibold">Capability</th>
                    <th className="py-3 px-4 text-white font-semibold">Hexa Cognitive</th>
                    <th className="py-3 px-4 text-white font-semibold">Hexa Runtime</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-200">Primary Role</td>
                    <td className="py-3 px-4">Planning, Memory, Intent Routing</td>
                    <td className="py-3 px-4">Execution, Retries, Observability</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-200">State Storage</td>
                    <td className="py-3 px-4">PostgreSQL (Memory Lineage)</td>
                    <td className="py-3 px-4">Redis (Cache), Qdrant (Vectors)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-200">Failure Handling</td>
                    <td className="py-3 px-4">Adaptive Replanning (max 3 tries)</td>
                    <td className="py-3 px-4">Circuit Breakers (aiobreaker)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-200">Autonomy</td>
                    <td className="py-3 px-4">Session Management & Budgeting</td>
                    <td className="py-3 px-4">DAG Orchestration & Checkpointing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      }
    ]
  },
  {
    title: 'Architecture',
    slug: 'architecture',
    pages: [
      {
        title: 'Full Stack Overview',
        slug: 'full-stack-overview',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Full Stack Overview</h1>
            <div className="my-10 p-6 border border-slate-800 rounded-xl bg-slate-900/20">
              <InexaStackDiagram />
            </div>
            <p>The INEXA stack unifies multiple components into a cohesive architecture. Applications interface directly with Hexa Cognitive, which handles intent translation and memory. Hexa Cognitive then dispatches structured DAGs to Hexa Runtime, which safely executes nodes against various AI infrastructure providers.</p>
          </div>
        )
      },
      {
        title: 'Runtime Architecture',
        slug: 'runtime-architecture',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Runtime Architecture</h1>
            <div className="my-10 p-6 border border-slate-800 rounded-xl bg-slate-900/20">
              <HexaRuntimeDiagram />
            </div>
            <p>The Runtime architecture consists of an Async DAG Executor connected to a Semaphore Queue for concurrency control. Each execution node interacts with a Hybrid Cache (Redis/Qdrant) and routes through an LLM Gateway protected by circuit breakers before reaching external providers.</p>
          </div>
        )
      },
      {
        title: 'Cognitive Architecture',
        slug: 'cognitive-architecture',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Cognitive Architecture</h1>
            <div className="my-10 p-6 border border-slate-800 rounded-xl bg-slate-900/20">
              <HexaCognitiveDiagram />
            </div>
            <p>The Cognitive architecture manages the <code>/cognitive/dispatch</code> and <code>/cognitive/callback</code> cycles. Upon a failure callback, the system triggers Adaptive Replanning to patch the DAG. Upon success, it securely persists memory to PostgreSQL.</p>
          </div>
        )
      },
      {
        title: 'AI Provider Layer',
        slug: 'ai-provider-layer',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">AI Provider Layer</h1>
            <p>INEXA is vendor-agnostic and abstracts AI providers behind a unified gateway. It supports OpenAI, Anthropic, Gemini, Meta Llama, DeepSeek, Groq, Mistral, Cohere, BytePlus, and xAI.</p>
          </div>
        )
      },
      {
        title: 'Infrastructure Layer',
        slug: 'infrastructure-layer',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Infrastructure Layer</h1>
            <p>We decouple execution from cloud lock-in. INEXA can be deployed on AWS, Google Cloud, Azure, Alibaba Cloud, Vast.ai, RunPod, or Lambda Labs.</p>
          </div>
        )
      }
    ]
  },
  {
    title: 'Runtime',
    slug: 'runtime',
    pages: [
      {
        title: 'DAG Execution',
        slug: 'dag-execution',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">DAG Execution</h1>
            <p className="mb-4">The system coordinates complex agent actions and tool calls concurrently through an asynchronous DAG Execution engine.</p>
            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li><strong>Initialization</strong>: The workflow starts by acquiring a Redis lock.</li>
              <li><strong>Dependency Resolution</strong>: A reverse dependency map ensures nodes are only queued when all parent dependencies are recorded as completed.</li>
              <li><strong>Dispatch</strong>: Ready nodes are dispatched via a semaphore. The system monitors for <code>SIGTERM</code> for graceful shutdown.</li>
              <li><strong>Execution & Checkpointing</strong>: Nodes execute. The state of execution is serialized and written to the store after <em>every</em> single node completion for resilient resume capabilities.</li>
            </ol>
          </div>
        )
      },
      {
        title: 'Provider Routing',
        slug: 'provider-routing',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Provider Routing</h1>
            <p>The LLM Gateway wraps individual providers (<code>claude</code>, <code>qwen</code>, <code>local</code>) offering fail-safe routing to alternative fallback providers when primary systems fail.</p>
          </div>
        )
      },
      {
        title: 'Circuit Breakers',
        slug: 'circuit-breakers',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Circuit Breakers</h1>
            <p>Using <code>aiobreaker</code>, the system tracks consecutive 5xx errors or timeouts from providers. If the error threshold is met, the circuit trips open and traffic is instantly routed to a fallback provider (e.g., from OpenAI to Anthropic).</p>
          </div>
        )
      },
      {
        title: 'Hybrid Cache',
        slug: 'hybrid-cache',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Hybrid Cache</h1>
            <p>Fast exact key-value caching (Redis) paired with semantic cache matching (Qdrant). This drastically reduces token waste by matching semantically similar prompts.</p>
          </div>
        )
      },
      {
        title: 'Telemetry',
        slug: 'telemetry',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Telemetry</h1>
            <p>Durable sub-cent cost tracking is pushed to a Redis Dead-Letter Queue (DLQ). This ensures that observability failures never crash the main loop. Built with OpenTelemetry for tracing spans and structured JSON logging via <code>structlog</code>.</p>
          </div>
        )
      },
      {
        title: 'Replay & Recovery',
        slug: 'replay-recovery',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Replay & Recovery</h1>
            <p>Automated exponential retries with jitter and cumulative wall-clock caps per task node execution. Durable checkpointing process after every node completion allows for full replay capabilities.</p>
          </div>
        )
      }
    ]
  },
  {
    title: 'Cognitive',
    slug: 'cognitive',
    pages: [
      {
        title: 'Planning',
        slug: 'planning',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Planning</h1>
            <p>The LLM Planner generates execution DAGs from user intents. It uses a Replay Cache (deterministic hashes) to avoid redundant planning and logs replay events for consistency.</p>
          </div>
        )
      },
      {
        title: 'Reasoning',
        slug: 'reasoning',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Reasoning</h1>
            <p>Reasoning happens through multi-step logic translation, ensuring the intent is correctly broken down into a valid Directed Acyclic Graph structure before reaching the Runtime layer.</p>
          </div>
        )
      },
      {
        title: 'Reflection',
        slug: 'reflection',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Reflection</h1>
            <p>The Cognitive Checkpoint tracks the planner state, autonomy state, memory references, and plan versions throughout the workflow lifecycle.</p>
          </div>
        )
      },
      {
        title: 'Adaptive Replanning',
        slug: 'adaptive-replanning',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Adaptive Replanning</h1>
            <p>Dynamically patches failed DAG nodes using failure reasons, allowing workflows to self-correct up to 3 plan versions. When execution fails, Hexa Cognitive parses the runtime error and re-dispatches.</p>
          </div>
        )
      },
      {
        title: 'Memory Lineage',
        slug: 'memory-lineage',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Memory Lineage</h1>
            <p>Persists semantic memory in PostgreSQL (<code>asyncpg</code>), recording parent-child ancestry chains and tracking retrieval counts. It tracks up to 10 hops of parent-memory linkages to understand the evolution of knowledge over multiple sessions.</p>
          </div>
        )
      },
      {
        title: 'Verified Memory Persistence',
        slug: 'verified-memory-persistence',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Verified Memory Persistence</h1>
            <p>Strictly defers memory storage until after the runtime confirms successful completion to avoid corrupting semantic memory with hallucinations or errors.</p>
          </div>
        )
      }
    ]
  },
  {
    title: 'Planned Deployment Targets',
    slug: 'deployment',
    pages: [
      {
        title: 'Self Hosted',
        slug: 'self-hosted',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Self Hosted Deployment</h1>
            <p>INEXA can be completely self-hosted using open-source models, local Redis, and PostgreSQL, providing total data sovereignty.</p>
          </div>
        )
      },
      {
        title: 'Docker',
        slug: 'docker',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Docker Deployment</h1>
            <pre className="bg-slate-900 border border-slate-800 rounded-lg p-4 overflow-x-auto my-6 text-sm text-slate-300">
              <code>{`version: '3.8'
services:
  hexa-runtime:
    image: inexa/runtime:v2
    environment:
      - REDIS_URL=redis://redis:6379
      - QDRANT_URL=http://qdrant:6333
  hexa-cognitive:
    image: inexa/cognitive:v1
    environment:
      - PG_URL=postgres://user:pass@db:5432/hexa`}</code>
            </pre>
          </div>
        )
      },
      {
        title: 'Kubernetes',
        slug: 'kubernetes',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Kubernetes</h1>
            <p>Helm charts for INEXA will be available soon, supporting native auto-scaling based on semaphore queue depth and pod disruption budgets.</p>
          </div>
        )
      },
      {
        title: 'Multi Cloud',
        slug: 'multi-cloud',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Multi Cloud</h1>
            <p>Deploy across AWS, Azure, and Google Cloud with unified configuration files.</p>
          </div>
        )
      },
      {
        title: 'Provider Agnostic Architecture',
        slug: 'provider-agnostic-architecture',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Provider Agnostic Architecture</h1>
            <p>Completely uncoupled from specific cloud vendors or foundation models, allowing deployment across bare-metal, Vast.ai, AWS, or Azure.</p>
          </div>
        )
      }
    ]
  },
  {
    title: 'Research',
    slug: 'research',
    pages: [
      {
        title: 'Planning Systems',
        slug: 'planning-systems',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Planning Systems</h1>
            <p>Investigating dynamic context-aware autonomous planning architectures that can navigate complex multi-step reasoning goals.</p>
          </div>
        )
      },
      {
        title: 'Autonomous Execution',
        slug: 'autonomous-execution',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Autonomous Execution</h1>
            <p>Frameworks for livelock detection and programmatic budget exhaustion in unbounded autonomous agent loops.</p>
          </div>
        )
      },
      {
        title: 'Runtime Reliability',
        slug: 'runtime-reliability',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Runtime Reliability</h1>
            <p>System-level guarantees for observability, failure handling, and retry semantics within an autonomous loop.</p>
          </div>
        )
      },
      {
        title: 'Cognitive Memory',
        slug: 'cognitive-memory',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Cognitive Memory</h1>
            <p>Architecting semantic knowledge representations that persist across distinct sessions without state corruption.</p>
          </div>
        )
      },
      {
        title: 'Multi-Agent Systems',
        slug: 'multi-agent-systems',
        content: (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h1 className="text-3xl font-bold text-white mb-6">Multi-Agent Systems</h1>
            <p>Protocols for distributing cognitive load across specialized autonomous agents working in parallel.</p>
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
