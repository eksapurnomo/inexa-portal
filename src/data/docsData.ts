export type DocPage = {
  title: string;
  slug: string;
  content: string;
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
        content: `
# INEXA Documentation Overview

Welcome to the INEXA Developer Documentation Hub. INEXA provides the foundational infrastructure layer for autonomous systems, separating higher-order cognitive planning from durable execution.

## Core Concepts

INEXA is divided into two primary services:
1. **Hexa Cognitive**: The brain. Handles natural language intents, creates execution DAGs, manages autonomy sessions, and handles memory.
2. **Hexa Runtime**: The muscle. An asynchronous parallel executor that handles multi-agent DAGs with strict concurrency limits, circuit breakers, and state checkpointing.

By abstracting these two layers, INEXA ensures that planning logic is completely decoupled from execution, providing deterministic, reliable workflows over heterogeneous AI providers.
        `
      },
      {
        title: 'Vision',
        slug: 'vision',
        content: `
# Platform Vision

INEXA is building the foundational infrastructure layer for autonomous systems, enabling organizations to deploy reliable cognitive and execution architectures across real-world industries.

Our mission is to provide vendor-agnostic infrastructure for planning, reasoning, orchestration, memory, and execution at enterprise scale.
        `
      },
      {
        title: 'Architecture Summary',
        slug: 'architecture-summary',
        content: `
# Architecture Summary

INEXA's architecture relies on a strict decoupling of cognition and execution.

- **FastAPI Gateway**: Serves as the entry point for all API requests.
- **Hexa Cognitive**: Integrates LLM planners, manages autonomy sessions, and handles memory lineage via PostgreSQL.
- **Hexa Runtime**: Executes DAGs asynchronously using semaphores, interacts with LLM providers through an \`aiobreaker\` circuit breaker, and caches responses in Redis (exact) and Qdrant (semantic).
- **Observability**: Built with OpenTelemetry for tracing and structured JSON logging via \`structlog\`. Sub-cent cost tracking is managed through Redis Dead-Letter Queues (DLQs).
        `
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
        content: `
# Hexa Runtime

Hexa Runtime v2 is a high-performance, asynchronous AI runtime engine designed for executing multi-agent workflows structured as Directed Acyclic Graphs (DAGs).

It focuses on production durability, resilience, security, and strict token/cost efficiency. It uses dynamic node timeouts, structured DAG execution state checkpointing, and graceful shutdown handling.
        `
      },
      {
        title: 'Hexa Cognitive',
        slug: 'hexa-cognitive',
        content: `
# Hexa Cognitive

Hexa Cognitive is a dedicated microservice responsible for higher-order intelligence tasks: transforming natural language intents into executable DAGs, managing cognitive checkpoints, persisting semantic memory, and performing adaptive replanning upon execution failures.

It acts as the brain that directs the Hexa Runtime muscles. Communication is handled via REST APIs (\`/cognitive/dispatch\`, \`/cognitive/callback\`).
        `
      },
      {
        title: 'Product Comparison',
        slug: 'product-comparison',
        content: `
# Product Comparison

| Capability | Hexa Cognitive | Hexa Runtime |
| --- | --- | --- |
| **Primary Role** | Planning, Memory, Intent Routing | Execution, Retries, Observability |
| **State Storage** | PostgreSQL (Memory Lineage) | Redis (Cache), Qdrant (Vectors) |
| **Failure Handling** | Adaptive Replanning (max 3 tries) | Circuit Breakers (aiobreaker) |
| **Autonomy** | Session Management & Budgeting | DAG Orchestration & Checkpointing |
        `
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
        content: `
# Full Stack Overview

<InexaStackDiagram />

The INEXA stack unifies multiple components into a cohesive architecture. Applications interface directly with Hexa Cognitive, which handles intent translation and memory. Hexa Cognitive then dispatches structured DAGs to Hexa Runtime, which safely executes nodes against various AI infrastructure providers.
        `
      },
      {
        title: 'Runtime Architecture',
        slug: 'runtime-architecture',
        content: `
# Runtime Architecture

<HexaRuntimeDiagram />

The Runtime architecture consists of an Async DAG Executor connected to a Semaphore Queue for concurrency control. Each execution node interacts with a Hybrid Cache (Redis/Qdrant) and routes through an LLM Gateway protected by circuit breakers before reaching external providers.
        `
      },
      {
        title: 'Cognitive Architecture',
        slug: 'cognitive-architecture',
        content: `
# Cognitive Architecture

<HexaCognitiveDiagram />

The Cognitive architecture manages the \`/cognitive/dispatch\` and \`/cognitive/callback\` cycles. Upon a failure callback, the system triggers Adaptive Replanning to patch the DAG. Upon success, it securely persists memory to PostgreSQL.
        `
      },
      {
        title: 'AI Provider Layer',
        slug: 'ai-provider-layer',
        content: `
# AI Provider Layer

INEXA is vendor-agnostic and abstracts AI providers behind a unified gateway. It supports OpenAI, Anthropic, Gemini, Meta Llama, DeepSeek, Groq, Mistral, Cohere, BytePlus, and xAI.
        `
      },
      {
        title: 'Infrastructure Layer',
        slug: 'infrastructure-layer',
        content: `
# Infrastructure Layer

We decouple execution from cloud lock-in. INEXA can be deployed on AWS, Google Cloud, Azure, Alibaba Cloud, Vast.ai, RunPod, or Lambda Labs.
        `
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
        content: `
# DAG Execution

The system coordinates complex agent actions and tool calls concurrently through an asynchronous DAG Execution engine.

1. **Initialization**: The workflow starts by acquiring a Redis lock.
2. **Dependency Resolution**: A reverse dependency map ensures nodes are only queued when all parent dependencies are recorded as completed.
3. **Dispatch**: Ready nodes are dispatched via a semaphore. The system monitors for \`SIGTERM\` for graceful shutdown.
4. **Execution & Checkpointing**: Nodes execute. The state of execution is serialized and written to the store after *every* single node completion for resilient resume capabilities.
        `
      },
      {
        title: 'Provider Routing',
        slug: 'provider-routing',
        content: `
# Provider Routing

The LLM Gateway wraps individual providers (\`claude\`, \`qwen\`, \`local\`) offering fail-safe routing to alternative fallback providers when primary systems fail.
        `
      },
      {
        title: 'Circuit Breakers',
        slug: 'circuit-breakers',
        content: `
# Circuit Breakers

Using \`aiobreaker\`, the system tracks consecutive 5xx errors or timeouts from providers. If the error threshold is met, the circuit trips open and traffic is instantly routed to a fallback provider (e.g., from OpenAI to Anthropic).
        `
      },
      {
        title: 'Hybrid Cache',
        slug: 'hybrid-cache',
        content: `
# Hybrid Cache

Fast exact key-value caching (Redis) paired with semantic cache matching (Qdrant). This drastically reduces token waste by matching semantically similar prompts.
        `
      },
      {
        title: 'Telemetry',
        slug: 'telemetry',
        content: `
# Telemetry

Durable sub-cent cost tracking is pushed to a Redis Dead-Letter Queue (DLQ). This ensures that observability failures never crash the main loop. Built with OpenTelemetry for tracing spans and structured JSON logging via \`structlog\`.
        `
      },
      {
        title: 'Replay & Recovery',
        slug: 'replay-recovery',
        content: `
# Replay & Recovery

Automated exponential retries with jitter and cumulative wall-clock caps per task node execution. Durable checkpointing process after every node completion allows for full replay capabilities.
        `
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
        content: `
# Planning

The LLM Planner generates execution DAGs from user intents. It uses a Replay Cache (deterministic hashes) to avoid redundant planning and logs replay events for consistency.
        `
      },
      {
        title: 'Reasoning',
        slug: 'reasoning',
        content: `
# Reasoning

Reasoning happens through multi-step logic translation, ensuring the intent is correctly broken down into a valid Directed Acyclic Graph structure before reaching the Runtime layer.
        `
      },
      {
        title: 'Reflection',
        slug: 'reflection',
        content: `
# Reflection

The Cognitive Checkpoint tracks the planner state, autonomy state, memory references, and plan versions throughout the workflow lifecycle.
        `
      },
      {
        title: 'Adaptive Replanning',
        slug: 'adaptive-replanning',
        content: `
# Adaptive Replanning

Dynamically patches failed DAG nodes using failure reasons, allowing workflows to self-correct up to 3 plan versions. When execution fails, Hexa Cognitive parses the runtime error and re-dispatches.
        `
      },
      {
        title: 'Memory Lineage',
        slug: 'memory-lineage',
        content: `
# Memory Lineage

Persists semantic memory in PostgreSQL (\`asyncpg\`), recording parent-child ancestry chains and tracking retrieval counts. It tracks up to 10 hops of parent-memory linkages to understand the evolution of knowledge over multiple sessions.
        `
      },
      {
        title: 'Verified Memory Persistence',
        slug: 'verified-memory-persistence',
        content: `
# Verified Memory Persistence

Strictly defers memory storage until after the runtime confirms successful completion to avoid corrupting semantic memory with hallucinations or errors.
        `
      }
    ]
  },
  {
    title: 'Deployment',
    slug: 'deployment',
    pages: [
      {
        title: 'Self Hosted',
        slug: 'self-hosted',
        content: `
# Self Hosted Deployment

INEXA can be completely self-hosted using open-source models, local Redis, and PostgreSQL, providing total data sovereignty.
        `
      },
      {
        title: 'Docker',
        slug: 'docker',
        content: `
# Docker Deployment

\`\`\`yaml
version: '3.8'
services:
  hexa-runtime:
    image: inexa/runtime:v2
    environment:
      - REDIS_URL=redis://redis:6379
      - QDRANT_URL=http://qdrant:6333
  hexa-cognitive:
    image: inexa/cognitive:v1
    environment:
      - PG_URL=postgres://user:pass@db:5432/hexa
\`\`\`
        `
      },
      {
        title: 'Kubernetes',
        slug: 'kubernetes',
        content: `
# Kubernetes

Helm charts for INEXA will be available soon, supporting native auto-scaling based on semaphore queue depth and pod disruption budgets.
        `
      },
      {
        title: 'Multi Cloud',
        slug: 'multi-cloud',
        content: `
# Multi Cloud

Deploy across AWS, Azure, and Google Cloud with unified configuration files.
        `
      },
      {
        title: 'Provider Agnostic Architecture',
        slug: 'provider-agnostic-architecture',
        content: `
# Provider Agnostic Architecture

Completely uncoupled from specific cloud vendors or foundation models, allowing deployment across bare-metal, Vast.ai, AWS, or Azure.
        `
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
        content: `
# Planning Systems

Investigating dynamic context-aware autonomous planning architectures that can navigate complex multi-step reasoning goals.
        `
      },
      {
        title: 'Autonomous Execution',
        slug: 'autonomous-execution',
        content: `
# Autonomous Execution

Frameworks for livelock detection and programmatic budget exhaustion in unbounded autonomous agent loops.
        `
      },
      {
        title: 'Runtime Reliability',
        slug: 'runtime-reliability',
        content: `
# Runtime Reliability

System-level guarantees for observability, failure handling, and retry semantics within an autonomous loop.
        `
      },
      {
        title: 'Cognitive Memory',
        slug: 'cognitive-memory',
        content: `
# Cognitive Memory

Architecting semantic knowledge representations that persist across distinct sessions without state corruption.
        `
      },
      {
        title: 'Multi-Agent Systems',
        slug: 'multi-agent-systems',
        content: `
# Multi-Agent Systems

Protocols for distributing cognitive load across specialized autonomous agents working in parallel.
        `
      }
    ]
  }
];

export function getDocPage(sectionSlug: string, pageSlug: string): DocPage | null {
  const section = docsNavigation.find(s => s.slug === sectionSlug);
  if (!section) return null;
  return section.pages.find(p => p.slug === pageSlug) || null;
}
