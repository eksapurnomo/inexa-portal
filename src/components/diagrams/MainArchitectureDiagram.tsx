export function MainArchitectureDiagram() {
  return (
    <div className="w-full overflow-x-auto overflow-y-hidden">
      <svg viewBox="0 0 1000 850" className="w-full h-auto min-w-[800px] font-sans">
        <defs>
          <linearGradient id="userGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          
          <linearGradient id="controlPlaneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          <linearGradient id="coreServiceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.5" />
          </linearGradient>
          
          <linearGradient id="governanceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.6" />
          </linearGradient>
          
          <linearGradient id="enterpriseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#064e3b" stopOpacity="0.5" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background Patterns */}
        <pattern id="dotGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#334155" opacity="0.4" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dotGrid)" />

        {/* --- LAYER 1: USER / APPLICATION --- */}
        <g transform="translate(300, 40)">
          <rect width="400" height="60" rx="8" fill="url(#userGrad)" stroke="#475569" strokeWidth="1.5" />
          <text x="200" y="35" textAnchor="middle" fill="#f8fafc" className="text-sm font-bold tracking-widest">USER / APPLICATION</text>
        </g>

        {/* Connection 1 */}
        <path d="M 500 100 L 500 140" fill="none" stroke="#475569" strokeWidth="2" />
        <polygon points="495,135 505,135 500,145" fill="#475569" />

        {/* --- LAYER 2: CONTROL PLANE --- */}
        <g transform="translate(250, 140)">
          <rect width="500" height="70" rx="12" fill="url(#controlPlaneGrad)" stroke="#2563EB" strokeWidth="1.5" />
          <text x="250" y="35" textAnchor="middle" fill="#bfdbfe" className="text-base font-bold tracking-wider">EXA SPACE CONTROL PLANE</text>
          <text x="250" y="55" textAnchor="middle" fill="#60a5fa" className="text-[10px] uppercase tracking-widest">Global Management & Routing</text>
        </g>

        {/* Connection 2 */}
        <path d="M 500 210 L 500 250" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" />
        <polygon points="495,245 505,245 500,255" fill="#2563EB" />

        {/* --- LAYER 3: API GATEWAY --- */}
        <g transform="translate(350, 250)">
          <rect width="300" height="40" rx="8" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
          <text x="150" y="25" textAnchor="middle" fill="#cbd5e1" className="text-xs font-bold tracking-widest">API GATEWAY</text>
        </g>

        {/* Connection 3 */}
        <path d="M 500 290 L 500 330" fill="none" stroke="#475569" strokeWidth="2" />
        <polygon points="495,325 505,325 500,335" fill="#475569" />

        {/* --- LAYER 4: CORE SERVICES (5 Pillars) --- */}
        <g transform="translate(50, 330)">
          <rect width="900" height="150" rx="16" fill="transparent" stroke="#2563EB" strokeWidth="1" strokeDasharray="6 6" />
          <text x="450" y="25" textAnchor="middle" fill="#60a5fa" className="text-[10px] font-bold uppercase tracking-widest">Hexa Services Layer</text>

          <g transform="translate(10, 40)">
            <rect width="160" height="90" rx="8" fill="url(#coreServiceGrad)" stroke="#2563EB" strokeWidth="1.5" filter="url(#glow)" />
            <text x="80" y="45" textAnchor="middle" fill="#eff6ff" className="text-sm font-bold tracking-wide">Cognitive</text>
            <text x="80" y="65" textAnchor="middle" fill="#bfdbfe" className="text-[10px]">Planning Engine</text>
          </g>

          <g transform="translate(190, 40)">
            <rect width="160" height="90" rx="8" fill="url(#coreServiceGrad)" stroke="#2563EB" strokeWidth="1.5" filter="url(#glow)" />
            <text x="80" y="45" textAnchor="middle" fill="#eff6ff" className="text-sm font-bold tracking-wide">Runtime</text>
            <text x="80" y="65" textAnchor="middle" fill="#bfdbfe" className="text-[10px]">Execution Engine</text>
          </g>

          <g transform="translate(370, 40)">
            <rect width="160" height="90" rx="8" fill="url(#coreServiceGrad)" stroke="#2563EB" strokeWidth="1.5" filter="url(#glow)" />
            <text x="80" y="45" textAnchor="middle" fill="#eff6ff" className="text-sm font-bold tracking-wide">Memory</text>
            <text x="80" y="65" textAnchor="middle" fill="#bfdbfe" className="text-[10px]">The Experience</text>
          </g>

          <g transform="translate(550, 40)">
            <rect width="160" height="90" rx="8" fill="url(#coreServiceGrad)" stroke="#2563EB" strokeWidth="1.5" filter="url(#glow)" />
            <text x="80" y="45" textAnchor="middle" fill="#eff6ff" className="text-sm font-bold tracking-wide">Knowledge</text>
            <text x="80" y="65" textAnchor="middle" fill="#bfdbfe" className="text-[10px]">The Truth</text>
          </g>
          
          <g transform="translate(730, 40)">
            <rect width="160" height="90" rx="8" fill="url(#coreServiceGrad)" stroke="#2563EB" strokeWidth="1.5" filter="url(#glow)" />
            <text x="80" y="45" textAnchor="middle" fill="#eff6ff" className="text-sm font-bold tracking-wide">Governance</text>
            <text x="80" y="65" textAnchor="middle" fill="#bfdbfe" className="text-[10px]">Risk Engine</text>
          </g>
        </g>

        {/* Connection 4 */}
        <path d="M 500 480 L 500 520" fill="none" stroke="#7C3AED" strokeWidth="2" strokeDasharray="4 4" />
        <polygon points="495,515 505,515 500,525" fill="#7C3AED" />

        {/* --- LAYER 5: GOVERNANCE --- */}
        <g transform="translate(300, 520)">
          <rect width="400" height="80" rx="12" fill="url(#governanceGrad)" stroke="#7C3AED" strokeWidth="2" filter="url(#glow)" />
          <text x="200" y="35" textAnchor="middle" fill="#f5f3ff" className="text-base font-bold tracking-wider">GOVERNANCE LAYER</text>
          <text x="200" y="55" textAnchor="middle" fill="#c4b5fd" className="text-[11px] uppercase tracking-widest">(Human Approval)</text>
        </g>

        {/* Connection 5 */}
        <path d="M 500 600 L 500 640" fill="none" stroke="#10B981" strokeWidth="2" />
        <polygon points="495,635 505,635 500,645" fill="#10B981" />

        {/* --- LAYER 6: ENTERPRISE SYSTEMS --- */}
        <g transform="translate(150, 640)">
          <rect width="700" height="120" rx="16" fill="url(#enterpriseGrad)" stroke="#10B981" strokeWidth="1.5" />
          <text x="350" y="30" textAnchor="middle" fill="#d1fae5" className="text-sm font-bold tracking-widest">ENTERPRISE SYSTEMS</text>
          
          <g transform="translate(50, 50)">
            <rect width="120" height="40" rx="4" fill="#064e3b" stroke="#059669" strokeWidth="1" />
            <text x="60" y="25" textAnchor="middle" fill="#a7f3d0" className="text-xs font-bold">SAP</text>
          </g>

          <g transform="translate(210, 50)">
            <rect width="120" height="40" rx="4" fill="#064e3b" stroke="#059669" strokeWidth="1" />
            <text x="60" y="25" textAnchor="middle" fill="#a7f3d0" className="text-xs font-bold">SharePoint</text>
          </g>

          <g transform="translate(370, 50)">
            <rect width="120" height="40" rx="4" fill="#064e3b" stroke="#059669" strokeWidth="1" />
            <text x="60" y="25" textAnchor="middle" fill="#a7f3d0" className="text-xs font-bold">SQL Database</text>
          </g>

          <g transform="translate(530, 50)">
            <rect width="120" height="40" rx="4" fill="#064e3b" stroke="#059669" strokeWidth="1" />
            <text x="60" y="25" textAnchor="middle" fill="#a7f3d0" className="text-xs font-bold">REST APIs</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
