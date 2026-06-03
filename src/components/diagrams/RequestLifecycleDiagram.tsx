export function RequestLifecycleDiagram() {
  return (
    <div className="w-full overflow-x-auto overflow-y-hidden py-4">
      <svg viewBox="0 0 1000 850" className="w-full h-auto min-w-[800px] font-sans">
        <defs>
          <linearGradient id="userBlock" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="cogBlock" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="dataBlock" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#020617" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="govBlock" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="runtimeBlock" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#064e3b" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glowLight" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <pattern id="dotGridLarge" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#334155" opacity="0.3" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dotGridLarge)" />

        {/* 1. USER INTENT */}
        <g transform="translate(300, 30)">
          <rect width="400" height="70" rx="8" fill="url(#userBlock)" stroke="#475569" strokeWidth="1.5" />
          <text x="200" y="35" textAnchor="middle" fill="#f8fafc" className="text-base font-bold tracking-widest">1. USER INTENT</text>
          <text x="200" y="55" textAnchor="middle" fill="#94a3b8" className="text-xs tracking-wide">(Request Masuk)</text>
        </g>

        <path d="M 500 100 L 500 150" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="4 4" />
        <polygon points="495,145 505,145 500,155" fill="#475569" />

        {/* 2. HEXA COGNITIVE */}
        <g transform="translate(250, 150)">
          <rect width="500" height="80" rx="12" fill="url(#cogBlock)" stroke="#2563EB" strokeWidth="2" filter="url(#glowLight)" />
          <text x="250" y="35" textAnchor="middle" fill="#eff6ff" className="text-base font-bold tracking-wider">2. HEXA COGNITIVE</text>
          <text x="250" y="55" textAnchor="middle" fill="#bfdbfe" className="text-xs tracking-wide">(Membaca Konteks dari Hexa Knowledge &amp; Hexa Memory)</text>
        </g>

        <path d="M 500 230 L 500 300" fill="none" stroke="#2563EB" strokeWidth="2" />
        <polygon points="495,295 505,295 500,305" fill="#2563EB" />

        {/* 3. GOVERNANCE REVIEW */}
        <g transform="translate(250, 300)">
          <rect width="500" height="80" rx="12" fill="url(#govBlock)" stroke="#7C3AED" strokeWidth="2" filter="url(#glowLight)" />
          <text x="250" y="35" textAnchor="middle" fill="#f5f3ff" className="text-base font-bold tracking-wider">3. GOVERNANCE REVIEW</text>
          <text x="250" y="55" textAnchor="middle" fill="#c4b5fd" className="text-xs tracking-wide">(Human-in-the-Loop)</text>
        </g>

        <path d="M 500 380 L 500 450" fill="none" stroke="#7C3AED" strokeWidth="2" strokeDasharray="4 4" />
        <polygon points="495,445 505,445 500,455" fill="#7C3AED" />

        {/* 4. HEXA RUNTIME */}
        <g transform="translate(250, 450)">
          <rect width="500" height="80" rx="12" fill="url(#runtimeBlock)" stroke="#10B981" strokeWidth="2" filter="url(#glowLight)" />
          <text x="250" y="35" textAnchor="middle" fill="#ecfdf5" className="text-base font-bold tracking-wider">4. HEXA RUNTIME</text>
          <text x="250" y="55" textAnchor="middle" fill="#a7f3d0" className="text-xs tracking-wide">(Eksekusi 100% Stateless)</text>
        </g>

        <path d="M 500 530 L 500 600" fill="none" stroke="#10B981" strokeWidth="2" />
        <polygon points="495,595 505,595 500,605" fill="#10B981" />

        {/* 5. HEXA MEMORY */}
        <g transform="translate(250, 600)">
          <rect width="500" height="80" rx="12" fill="url(#dataBlock)" stroke="#0ea5e9" strokeWidth="1.5" filter="url(#glowLight)" />
          <text x="250" y="35" textAnchor="middle" fill="#f0f9ff" className="text-base font-bold tracking-wider">5. HEXA MEMORY</text>
          <text x="250" y="55" textAnchor="middle" fill="#7dd3fc" className="text-xs tracking-wide">(Penyimpanan memori HANYA jika eksekusi sukses)</text>
        </g>

        <path d="M 500 680 L 500 750" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 4" />
        <polygon points="495,745 505,745 500,755" fill="#0ea5e9" />

        {/* RESPONSE */}
        <g transform="translate(350, 750)">
          <rect width="300" height="60" rx="30" fill="url(#userBlock)" stroke="#0ea5e9" strokeWidth="2" />
          <text x="150" y="35" textAnchor="middle" fill="#f8fafc" className="text-sm font-bold tracking-widest">RESPONSE</text>
        </g>

      </svg>
    </div>
  );
}
