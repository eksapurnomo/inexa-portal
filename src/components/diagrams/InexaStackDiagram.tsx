export function InexaStackDiagram() {
  return (
    <div className="w-full overflow-x-auto overflow-y-hidden">
      <svg viewBox="0 0 1000 650" className="w-full h-auto min-w-[800px] font-sans">
        <defs>
          <linearGradient id="appGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="cognitiveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#312e81" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.6"/>
          </linearGradient>
          <linearGradient id="runtimeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#064e3b" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#022c22" stopOpacity="0.6"/>
          </linearGradient>
          <linearGradient id="infraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <filter id="glowLight" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background Patterns */}
        <pattern id="dotGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#334155" opacity="0.4" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dotGrid)" />

        {/* --- LAYER 1: APPLICATIONS --- */}
        <g transform="translate(250, 40)">
          <rect width="500" height="70" rx="8" fill="url(#appGrad)" stroke="#475569" strokeWidth="1.5" />
          <text x="250" y="32" textAnchor="middle" fill="#f8fafc" className="text-lg font-bold tracking-widest">APPLICATIONS & AGENTS</text>
          <text x="250" y="52" textAnchor="middle" fill="#94a3b8" className="text-[11px] uppercase tracking-wider">User Intents • Workflows • Chat Interfaces</text>
        </g>

        {/* Connection 1 */}
        <path d="M 500 110 L 500 150" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="500" cy="130" r="4" fill="#64748b" />

        {/* --- LAYER 2: HEXA COGNITIVE --- */}
        <g transform="translate(150, 150)">
          <rect width="700" height="120" rx="16" fill="url(#cognitiveGrad)" stroke="#4f46e5" strokeWidth="1.5" filter="url(#glowLight)" />
          <text x="350" y="35" textAnchor="middle" fill="#c7d2fe" className="text-xl font-bold tracking-wider">HEXA COGNITIVE</text>
          <text x="350" y="55" textAnchor="middle" fill="#818cf8" className="text-xs uppercase tracking-widest">Reasoning & Intelligence Layer</text>

          {/* Cognitive Modules */}
          <rect x="50" y="70" width="130" height="30" rx="4" fill="#1e1b4b" stroke="#4338ca" strokeWidth="1" />
          <text x="115" y="89" textAnchor="middle" fill="#a5b4fc" className="text-[10px]">Planning Engine</text>

          <rect x="200" y="70" width="130" height="30" rx="4" fill="#1e1b4b" stroke="#4338ca" strokeWidth="1" />
          <text x="265" y="89" textAnchor="middle" fill="#a5b4fc" className="text-[10px]">Reflection</text>

          <rect x="350" y="70" width="130" height="30" rx="4" fill="#1e1b4b" stroke="#4338ca" strokeWidth="1" />
          <text x="415" y="89" textAnchor="middle" fill="#a5b4fc" className="text-[10px]">Adaptive Replanning</text>

          <rect x="500" y="70" width="150" height="30" rx="4" fill="#1e1b4b" stroke="#4338ca" strokeWidth="1" />
          <text x="575" y="89" textAnchor="middle" fill="#a5b4fc" className="text-[10px]">Memory Lineage (PG)</text>
        </g>

        {/* Connection 2 */}
        <path d="M 500 270 L 500 310" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="500" cy="290" r="4" fill="#64748b" />
        <text x="520" y="295" fill="#64748b" className="text-[10px]">Executable DAG</text>

        {/* --- LAYER 3: HEXA RUNTIME --- */}
        <g transform="translate(150, 310)">
          <rect width="700" height="120" rx="16" fill="url(#runtimeGrad)" stroke="#10b981" strokeWidth="1.5" filter="url(#glowLight)" />
          <text x="350" y="35" textAnchor="middle" fill="#a7f3d0" className="text-xl font-bold tracking-wider">HEXA RUNTIME</text>
          <text x="350" y="55" textAnchor="middle" fill="#34d399" className="text-xs uppercase tracking-widest">Durable Execution Layer</text>

          {/* Runtime Modules */}
          <rect x="50" y="70" width="130" height="30" rx="4" fill="#022c22" stroke="#059669" strokeWidth="1" />
          <text x="115" y="89" textAnchor="middle" fill="#6ee7b7" className="text-[10px]">DAG Executor</text>

          <rect x="200" y="70" width="130" height="30" rx="4" fill="#022c22" stroke="#059669" strokeWidth="1" />
          <text x="265" y="89" textAnchor="middle" fill="#6ee7b7" className="text-[10px]">Circuit Breakers</text>

          <rect x="350" y="70" width="130" height="30" rx="4" fill="#022c22" stroke="#059669" strokeWidth="1" />
          <text x="415" y="89" textAnchor="middle" fill="#6ee7b7" className="text-[10px]">Hybrid Cache</text>

          <rect x="500" y="70" width="150" height="30" rx="4" fill="#022c22" stroke="#059669" strokeWidth="1" />
          <text x="575" y="89" textAnchor="middle" fill="#6ee7b7" className="text-[10px]">Telemetry DLQ (Redis)</text>
        </g>

        {/* Connection 3 */}
        <path d="M 500 430 L 500 470" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="500" cy="450" r="4" fill="#64748b" />
        <text x="520" y="455" fill="#64748b" className="text-[10px]">Network Requests</text>

        {/* --- LAYER 4: AI & COMPUTE ECOSYSTEM --- */}
        <g transform="translate(150, 470)">
          <rect width="700" height="130" rx="16" fill="url(#infraGrad)" stroke="#334155" strokeWidth="1.5" />
          
          <rect x="30" y="20" width="310" height="90" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
          <text x="185" y="45" textAnchor="middle" fill="#cbd5e1" className="text-sm font-bold tracking-wide">AI Provider Ecosystem</text>
          <text x="185" y="65" textAnchor="middle" fill="#64748b" className="text-[10px]">OpenAI • Anthropic • Gemini • Llama</text>
          <text x="185" y="85" textAnchor="middle" fill="#64748b" className="text-[10px]">DeepSeek • Mistral • Cohere • Groq</text>

          <rect x="360" y="20" width="310" height="90" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
          <text x="515" y="45" textAnchor="middle" fill="#cbd5e1" className="text-sm font-bold tracking-wide">Compute Infrastructure</text>
          <text x="515" y="65" textAnchor="middle" fill="#64748b" className="text-[10px]">AWS • Google Cloud • Azure</text>
          <text x="515" y="85" textAnchor="middle" fill="#64748b" className="text-[10px]">Vast.ai • RunPod • Lambda Labs</text>
        </g>

      </svg>
    </div>
  );
}
