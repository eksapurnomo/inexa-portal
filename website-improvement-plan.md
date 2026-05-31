# Website Improvement Plan

Based on the actual architecture audit of Hexa Runtime v2 and Hexa Cognitive, the current website documentation relies heavily on conceptual AI platform assumptions rather than the real technical implementation. 

The following improvements should be implemented to align the website with the actual system architecture, removing marketing fluff and focusing on engineering reality.

## 1. Hexa Runtime Page (`/products/hexa-runtime`)

### Current Gaps
* The page focuses on generic concepts ("Workflow Orchestration") but misses the specific mechanisms (Semaphore concurrency, `SIGTERM` handling, DAG reverse dependency mapping).
* It misses the entire Fail-Safe LLM Gateway capability and Circuit Breaker logic.
* Telemetry and Caching implementations are inaccurately represented or too vague.

### Recommended Changes
* **Add a "Fail-Safe LLM Gateway" Section**: Detail the use of `aiobreaker` for circuit breaking and automatic failover routing to fallback providers (e.g., `local` if `claude` fails).
* **Detail the Hybrid Caching System**: Explicitly mention the dual-layer approach: Exact Hash Caching (Redis) + Semantic Cache Matching (Qdrant) to minimize token consumption.
* **Refine the Execution Model**: Highlight the Async Parallel DAG Executor, semaphore-based concurrency limiting, and Livelock/Deadlock Detection.
* **Update the Telemetry Architecture**: Describe the Durable Telemetry system (Redis cost tracking) and the use of Dead-Letter Queues (`telemetry:dlq`) to prevent observability failures from crashing the orchestration loop.

## 2. Hexa Cognitive Page (`/products/hexa-cognitive`)

### Current Gaps
* Missing the crucial "Adaptive Replanning" mechanism that occurs when the Runtime triggers a failure callback.
* Does not explain "Safe Memory Persistence" (saving memory only after runtime success).
* Missing "Autonomy Session Management" and strict execution budgeting.
* Memory lineage tracking (ancestry) is not featured.

### Recommended Changes
* **Introduce "Adaptive Replanning"**: Add a dedicated section explaining how Hexa Cognitive patches failed DAG nodes using runtime error context, supporting up to 3 self-correction iterations.
* **Add "Autonomy Sessions" Capability**: Explain the session manager that tracks execution budgets, limits (`max_iterations`, `max_runtime_seconds`), and provides endpoints to pause, resume, or terminate long-running autonomous workflows.
* **Clarify Memory Persistence Guidelines**: Detail the rule: Memory is only saved *after* Hexa Runtime confirms completion (`/cognitive/callback` success) to prevent hallucination poisoning. Mention Memory Lineage (parent-child ancestry tracking up to 10 hops in PostgreSQL).
* **Highlight Replay Events**: Discuss deterministic hashing and the replay cache that prevents redundant planning.

## 3. Architecture Page (`/architecture`)

### Current Gaps
* The integration flow between Cognitive and Runtime is simplified.
* Technologies actually used in the stack (Redis, Qdrant, PostgreSQL, FastAPI, OpenTelemetry) are not explicitly called out in a technical context.

### Recommended Changes
* **Revise the Cognitive-to-Runtime Flow Diagram**: 
  - Show the REST API boundary.
  - Show `/cognitive/dispatch` sending the DAG to Runtime.
  - Show `/cognitive/callback` returning status.
  - Show the branching logic on Callback: Success -> Save Memory; Failure -> Adaptive Replan.
* **Update the Tech Stack Indicators**: Reflect the real infrastructure dependencies (Redis for locks/caching, Qdrant for vectors, PostgreSQL/asyncpg for lineage, structlog/OpenTelemetry for observability).

## 4. Research Page (`/research`)

### Current Gaps
* Research topics are somewhat generic ("Durable Execution").

### Recommended Changes
* **Align Roadmap with Real Code Gaps**: Update the "Planned" research cards to match actual roadmap items from the Hexa Runtime README:
  * *Dynamic DAG Generation* (AI-driven workflow generation)
  * *Durable Step Execution Persistence* (Moving to strict event sourcing)
  * *Dense/Sparse Hybrid Vector Search* (Optimizing Qdrant integrations)
  * *Dashboard Visualization UI* (Next.js telemetry dashboard)

## 5. Technical Diagrams

* **Execution Flow Diagram**: Create a CSS/Mermaid visualization of the DAG state machine: Pending -> Running -> Completed/Failed/Cancelled.
* **Circuit Breaker Flow**: Visualize the Closed -> Open -> Half-Open state transitions for the LLM Gateway.
* **Memory Lineage**: Show a visual tree of how cognitive memories link to parent memories over time.

## Execution Strategy

1. **Review and Align**: Confirm these findings with the engineering team.
2. **Update Components**: Incrementally update the React components (`HexaRuntimePage.tsx`, `HexaCognitivePage.tsx`, `ArchitecturePage.tsx`) to replace generic text with these concrete technical specifics.
3. **Refactor Diagrams**: Update the CSS-based flexbox diagrams to reflect the actual `dispatch` -> `execute` -> `callback` -> `replan/save` loop.
