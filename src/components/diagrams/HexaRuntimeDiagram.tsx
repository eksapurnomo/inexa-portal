export function HexaRuntimeDiagram() {
  return (
    <div className="w-full overflow-x-auto overflow-y-hidden">
      <svg viewBox="0 0 1000 600" className="w-full h-auto min-w-[800px] font-sans">
        <defs>
          <linearGradient id="runtimeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#312e81" stopOpacity="0.2"/>
          </linearGradient>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#475569" />
          </marker>
          <marker id="arrowheadActive" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1" />
          </marker>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background Grid */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.5"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Main Orchestrator Box */}
        <rect x="250" y="150" width="500" height="280" rx="16" fill="url(#runtimeGrad)" stroke="#334155" strokeWidth="2" />
        <text x="500" y="180" textAnchor="middle" fill="#94a3b8" className="text-sm font-semibold tracking-widest uppercase">Async DAG Executor</text>

        {/* Incoming Request */}
        <rect x="420" y="40" width="160" height="50" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="1" />
        <text x="500" y="70" textAnchor="middle" fill="#f8fafc" className="text-sm font-medium">Hexa Cognitive DAG</text>
        
        <path d="M 500 90 L 500 150" fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Semaphore Queue */}
        <rect x="300" y="210" width="180" height="50" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1" strokeDasharray="4 2" />
        <text x="390" y="235" textAnchor="middle" fill="#94a3b8" className="text-xs">Semaphore Queue</text>
        <text x="390" y="250" textAnchor="middle" fill="#64748b" className="text-[10px]">(Concurrency Limits)</text>

        {/* Node Execution Loop */}
        <rect x="300" y="290" width="180" height="60" rx="6" fill="url(#activeGrad)" stroke="#6366f1" strokeWidth="1" filter="url(#glow)" />
        <text x="390" y="318" textAnchor="middle" fill="#c7d2fe" className="text-sm font-medium">Node Execution</text>
        <text x="390" y="338" textAnchor="middle" fill="#818cf8" className="text-[10px]">Checkpointing</text>

        <path d="M 390 260 L 390 290" fill="none" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowheadActive)" />
        <path d="M 480 320 C 510 320, 510 235, 480 235" fill="none" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrowhead)" strokeDasharray="3 3"/>
        <text x="550" y="280" textAnchor="middle" fill="#64748b" className="text-[10px]">Dependency Resolution</text>

        {/* Hybrid Cache */}
        <rect x="580" y="210" width="140" height="140" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" />
        <text x="650" y="235" textAnchor="middle" fill="#e2e8f0" className="text-sm font-medium">Hybrid Cache</text>
        
        <rect x="595" y="250" width="110" height="35" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="1" />
        <text x="650" y="272" textAnchor="middle" fill="#94a3b8" className="text-[11px]">Exact (Redis)</text>
        
        <rect x="595" y="295" width="110" height="35" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="1" />
        <text x="650" y="317" textAnchor="middle" fill="#94a3b8" className="text-[11px]">Semantic (Qdrant)</text>

        <path d="M 480 280 L 580 280" fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <path d="M 580 290 L 480 290" fill="none" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arrowheadActive)" strokeDasharray="4 2"/>
        <text x="530" y="275" textAnchor="middle" fill="#94a3b8" className="text-[10px]">Check</text>
        <text x="530" y="305" textAnchor="middle" fill="#818cf8" className="text-[10px]">Hit</text>

        {/* LLM Gateway / Circuit Breaker */}
        <rect x="250" y="470" width="500" height="90" rx="12" fill="#1e293b" stroke="#334155" strokeWidth="2" />
        <text x="500" y="495" textAnchor="middle" fill="#e2e8f0" className="text-sm font-semibold tracking-wide">LLM Gateway (Circuit Breaker)</text>

        <rect x="280" y="510" width="180" height="35" rx="4" fill="#064e3b" stroke="#059669" strokeWidth="1" />
        <text x="370" y="532" textAnchor="middle" fill="#a7f3d0" className="text-xs font-medium">Primary: OpenAI</text>

        <rect x="540" y="510" width="180" height="35" rx="4" fill="#451a03" stroke="#d97706" strokeWidth="1" strokeDasharray="3 3"/>
        <text x="630" y="532" textAnchor="middle" fill="#fde68a" className="text-xs font-medium">Fallback: Anthropic</text>

        <path d="M 370 350 L 370 470" fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <text x="330" y="415" textAnchor="middle" fill="#94a3b8" className="text-[10px]">Miss → Route</text>

        {/* Circuit Breaker Failover Path */}
        <path d="M 460 527 C 500 527, 500 527, 540 527" fill="none" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrowhead)" strokeDasharray="3 2" />
        <text x="500" y="520" textAnchor="middle" fill="#fca5a5" className="text-[9px]">5xx/Timeout</text>
        <text x="500" y="540" textAnchor="middle" fill="#fca5a5" className="text-[9px]">Trip Open</text>

        {/* Telemetry DLQ */}
        <rect x="790" y="150" width="160" height="90" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" />
        <text x="870" y="175" textAnchor="middle" fill="#e2e8f0" className="text-sm font-medium">Telemetry</text>
        <rect x="810" y="195" width="120" height="30" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="1" />
        <text x="870" y="215" textAnchor="middle" fill="#94a3b8" className="text-xs">Redis DLQ</text>
        
        <path d="M 750 195 L 790 195" fill="none" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrowhead)" strokeDasharray="2 2" />
        <text x="770" y="185" textAnchor="middle" fill="#64748b" className="text-[10px]">Logs</text>

      </svg>
    </div>
  );
}
