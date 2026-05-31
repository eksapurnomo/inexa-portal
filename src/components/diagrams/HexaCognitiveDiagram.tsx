export function HexaCognitiveDiagram() {
  return (
    <div className="w-full overflow-x-auto overflow-y-hidden">
      <svg viewBox="0 0 1000 600" className="w-full h-auto min-w-[800px] font-sans">
        <defs>
          <linearGradient id="cognitiveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="runtimeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#312e81" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.3"/>
          </linearGradient>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#475569" />
          </marker>
          <marker id="arrowheadSuccess" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
          </marker>
          <marker id="arrowheadFail" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
          </marker>
        </defs>

        {/* Background Grid */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.5"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Cognitive Box */}
        <rect x="250" y="40" width="500" height="180" rx="16" fill="url(#cognitiveGrad)" stroke="#334155" strokeWidth="2" />
        <text x="500" y="70" textAnchor="middle" fill="#94a3b8" className="text-sm font-semibold tracking-widest uppercase">Hexa Cognitive</text>

        {/* Intent -> DAG */}
        <rect x="400" y="100" width="200" height="60" rx="8" fill="#0f172a" stroke="#6366f1" strokeWidth="1.5" />
        <text x="500" y="125" textAnchor="middle" fill="#c7d2fe" className="text-sm font-medium">/cognitive/dispatch</text>
        <text x="500" y="145" textAnchor="middle" fill="#818cf8" className="text-xs">Intent → DAG</text>

        {/* Hand-off to Runtime */}
        <path d="M 500 160 L 500 240" fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Runtime Box */}
        <rect x="300" y="240" width="400" height="80" rx="12" fill="url(#runtimeGrad)" stroke="#4338ca" strokeWidth="1" strokeDasharray="6 4" />
        <text x="500" y="285" textAnchor="middle" fill="#a5b4fc" className="text-lg font-medium tracking-wide">Hexa Runtime Execution</text>

        {/* Return to Callback */}
        <path d="M 500 320 L 500 380" fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Cognitive Callback Box */}
        <rect x="200" y="380" width="600" height="200" rx="16" fill="url(#cognitiveGrad)" stroke="#334155" strokeWidth="2" />
        
        {/* Callback Evaluation */}
        <rect x="400" y="410" width="200" height="50" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
        <text x="500" y="432" textAnchor="middle" fill="#e2e8f0" className="text-sm font-medium">/cognitive/callback</text>
        <text x="500" y="450" textAnchor="middle" fill="#94a3b8" className="text-[10px]">Evaluate Status</text>

        {/* Branch Lines */}
        <path d="M 400 435 L 300 435 L 300 470" fill="none" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowheadSuccess)" />
        <path d="M 600 435 L 700 435 L 700 470" fill="none" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowheadFail)" />

        {/* Success Node */}
        <rect x="200" y="470" width="200" height="60" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
        <text x="300" y="495" textAnchor="middle" fill="#a7f3d0" className="text-sm font-medium">Success</text>
        <text x="300" y="515" textAnchor="middle" fill="#6ee7b7" className="text-xs">Save Memory Lineage</text>

        {/* Failure Node */}
        <rect x="600" y="470" width="200" height="60" rx="8" fill="#451a03" stroke="#f59e0b" strokeWidth="1" />
        <text x="700" y="495" textAnchor="middle" fill="#fde68a" className="text-sm font-medium">Failure</text>
        <text x="700" y="515" textAnchor="middle" fill="#fcd34d" className="text-xs">Adaptive Replanning (Patch DAG)</text>

        {/* Replan Loop */}
        <path d="M 800 500 C 880 500, 880 130, 600 130" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrowheadFail)" />
        <text x="850" y="320" textAnchor="middle" fill="#fbbf24" className="text-xs" transform="rotate(-90 850,320)">Max 3 Iterations</text>

      </svg>
    </div>
  );
}
