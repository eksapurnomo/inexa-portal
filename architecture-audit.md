# Hexa Runtime

## Executive Summary
Hexa Runtime v2 is a high-performance, asynchronous AI runtime engine designed for executing multi-agent workflows structured as Directed Acyclic Graphs (DAGs). It separates orchestration and execution from intelligence, focusing on production durability, resilience, security, and strict token/cost efficiency.

## Architecture Overview
The system coordinates complex agent actions and tool calls concurrently through an asynchronous DAG Execution engine. Requests flow from a FastAPI Gateway through the DAG Executor into Agent/Tool Nodes. Nodes interact with an LLM Gateway (protected by circuit breakers) which interfaces with external LLM Providers and a caching layer.

## Core Components
* **DAG Executor**: Asynchronous parallel executor with semaphores to limit task execution concurrency. It uses dynamic node timeouts, structured DAG execution state checkpointing, and graceful shutdown handling.
* **State Store & Memory**: Utilizes Redis for exact caching and telemetry, Qdrant for vector-based semantic memory, and optionally MySQL for a persistent state store.
* **LLM Gateway**: Wraps individual providers (`claude`, `qwen`, `local`) in circuit breakers (using `aiobreaker`), offering fail-safe routing to alternative fallback providers when primary systems fail.
* **Observability Stack**: Built with OpenTelemetry for tracing spans, structured JSON logging via `structlog`, and durable sub-cent cost tracking.

## Execution Flow
1. **Initialization**: The workflow starts by acquiring a Redis lock.
2. **Dependency Resolution**: A reverse dependency map ensures nodes are only queued when all parent dependencies are recorded as completed.
3. **Dispatch**: Ready nodes are dispatched via a semaphore. The system monitors for `SIGTERM` for graceful shutdown.
4. **Execution & Checkpointing**: Nodes execute. The LLM Gateway handles requests with circuit breakers and fallback. The state of execution is serialized and written to the store after *every* single node completion for resilient resume capabilities.
5. **Completion**: Once all nodes complete, the workflow status is marked as completed.

## Technical Capabilities
* **Resilient Retry Framework**: Automated exponential retries with jitter and cumulative wall-clock caps per task node execution.
* **Hybrid Response Caching**: Fast exact key-value caching (Redis) paired with semantic cache matching (Qdrant).
* **Durable Telemetry**: Dead-letter queues (`telemetry:dlq`) buffer write errors to prevent logging failures from crashing the orchestration loop.
* **API Guardrails**: Programmatic prompt injection guards, slowapi rate limiting, and JWT token authorization.

## Missing Website Content
* The website completely omits the **Resilient Retry Framework**, **Circuit Breakers (aiobreaker)**, **Hybrid Response Caching (Exact + Semantic)**, and **Durable Telemetry with DLQs**.
* The execution model details (Semaphore concurrency limiting, Livelock/Deadlock Detection) are not mentioned.
* The specific technologies powering the architecture (Redis, Qdrant, OpenTelemetry, FastAPI) are absent.

## Recommended Website Improvements
* Introduce a section detailing the **Fail-Safe LLM Gateway** and fallback routing mechanisms.
* Add details about **Hybrid Caching** and its impact on token/cost efficiency.
* Explain the **Durable Checkpointing** process after every node completion.
* Update diagrams to reflect the actual DAG execution flow and state machine (Pending -> Running -> Completed/Failed/Cancelled).

---

# Hexa Cognitive

## Executive Summary
Hexa Cognitive is a dedicated microservice responsible for higher-order intelligence tasks: transforming natural language intents into executable DAGs, managing cognitive checkpoints, persisting semantic memory, and performing adaptive replanning upon execution failures. It completely delegates execution logic to Hexa Runtime.

## Architecture Overview
The system operates as a FastAPI-based microservice integrating LLM planners with a robust coordination and autonomy session management system. It acts as the brain that directs the Hexa Runtime muscles. Communication is handled via REST APIs (`/cognitive/dispatch`, `/cognitive/callback`).

## Core Components
* **LLM Planner**: Generates execution DAGs from user intents.
* **Replay Cache & Consistency**: Checks for previously generated plans (using deterministic hashes) to avoid redundant planning. Logs replay events for consistency.
* **Cognitive Checkpoint**: Tracks the planner state, autonomy state, memory references, and plan versions throughout the workflow lifecycle.
* **Autonomy Session Manager**: Manages long-running workflows with explicit limits (`max_iterations`, `max_runtime_seconds`). Supports pausing, resuming, and terminating autonomy sessions.
* **Memory Lineage System**: Persists semantic memory in PostgreSQL (`asyncpg`), recording parent-child ancestry chains and tracking retrieval counts.

## Cognitive Flow
1. **Dispatch (`/cognitive/dispatch`)**: Receives an intent, checks the replay cache, generates a DAG (if no cache), persists a replay event, saves a pre-dispatch cognitive checkpoint, initializes an autonomy session, and dispatches the DAG to Hexa Runtime.
2. **Callback (`/cognitive/callback`)**: Hexa Runtime triggers this upon node/workflow completion or failure.
3. **Success Path**: On workflow completion, the autonomy session is marked complete, and semantic memory is saved (preventing memory poisoning by only saving successful outcomes).
4. **Failure Path**: On failure, the system triggers **Adaptive Replanning**. It patches the original DAG considering completed and failed nodes (up to a version limit), updates the checkpoint, and re-dispatches.

## Technical Capabilities
* **Adaptive Replanning**: Dynamically patches failed DAG nodes using failure reasons, allowing workflows to self-correct up to 3 plan versions.
* **Safe Memory Persistence**: Strictly defers memory storage until after the runtime confirms successful completion to avoid corrupting semantic memory with hallucinations or errors.
* **Autonomy Budgeting**: Sessions consume "budget cost" on every tick/callback, enforcing maximum iterations and runtime limits.
* **Memory Ancestry**: Tracks up to 10 hops of parent-memory linkages to understand the evolution of knowledge over multiple sessions.

## Missing Website Content
* The website fails to mention **Adaptive Replanning** and self-correction.
* The concept of **Autonomy Sessions**, budgeting, pausing, and resuming is completely missing.
* The protective measure of **Safe Memory Persistence** (only on success) is not documented.
* Replay events, deterministic hashing, and memory lineage (ancestry tracking) are not featured.

## Recommended Website Improvements
* Highlight **Adaptive Replanning** as a core capability of the Cognitive layer.
* Detail the **Autonomy Session Management** (budgeting, pause/resume).
* Explain the **Memory Lineage** and safe persistence strategies.
* Update diagrams to show the clear decoupling: Cognitive plans and replans, Runtime executes and calls back.
