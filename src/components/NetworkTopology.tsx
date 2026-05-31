import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Generates an abstract Intelligence Constellation
export default function NetworkTopology() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 3-Layer Architecture: AI Providers (Top), Hexa Runtime (Middle), Applications (Bottom)
  const nodes = [
    // Top Layer: AI Providers (y: 15-25)
    { id: 0, x: 20, y: 20, layer: 'provider' },
    { id: 1, x: 40, y: 15, layer: 'provider' },
    { id: 2, x: 60, y: 25, layer: 'provider' },
    { id: 3, x: 80, y: 18, layer: 'provider' },

    // Middle Layer: Hexa Runtime (y: 45-55) - dense orchestration
    { id: 4, x: 30, y: 50, layer: 'runtime' },
    { id: 5, x: 50, y: 48, layer: 'runtime' },
    { id: 6, x: 70, y: 52, layer: 'runtime' },

    // Bottom Layer: Applications (y: 75-85)
    { id: 7, x: 15, y: 80, layer: 'app' },
    { id: 8, x: 35, y: 85, layer: 'app' },
    { id: 9, x: 55, y: 78, layer: 'app' },
    { id: 10, x: 75, y: 82, layer: 'app' },
    { id: 11, x: 90, y: 75, layer: 'app' }
  ];

  // Connections (Top to Middle, Middle to Bottom, Middle cross-links)
  const connections = [
    // Providers to Runtime
    [0, 4], [1, 4], [1, 5], [2, 5], [2, 6], [3, 6],
    // Runtime cross-links (orchestration)
    [4, 5], [5, 6],
    // Runtime to Applications
    [4, 7], [4, 8], [5, 8], [5, 9], [6, 9], [6, 10], [6, 11]
  ];

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-slate-950">
      {/* Deep elegant dark space atmosphere without stars */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-slate-950 to-slate-950" />
      
      {/* Subtle layer labels to suggest structure */}
      <div className="absolute inset-0 flex flex-col justify-between py-24 opacity-[0.03] select-none">
        <div className="text-center font-mono text-4xl tracking-widest text-slate-100 uppercase">AI Providers</div>
        <div className="text-center font-mono text-4xl tracking-widest text-slate-100 uppercase">Hexa Runtime</div>
        <div className="text-center font-mono text-4xl tracking-widest text-slate-100 uppercase">Applications</div>
      </div>

      <svg className="absolute w-full h-full opacity-[0.12]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Lines */}
        {connections.map(([startIdx, endIdx], i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${nodes[startIdx].x}%`}
            y1={`${nodes[startIdx].y}%`}
            x2={`${nodes[endIdx].x}%`}
            y2={`${nodes[endIdx].y}%`}
            stroke="url(#line-gradient)"
            strokeWidth="0.1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ 
              duration: 3, 
              delay: i * 0.1, 
              ease: "easeInOut" 
            }}
          />
        ))}

        {/* Data Pathways (Top to bottom flow) */}
        {connections.map(([startIdx, endIdx], i) => {
          // Determine flow direction based on layer
          const isTopToMiddle = nodes[startIdx].layer === 'provider' && nodes[endIdx].layer === 'runtime';
          const isMiddleToBottom = nodes[startIdx].layer === 'runtime' && nodes[endIdx].layer === 'app';
          
          if (!isTopToMiddle && !isMiddleToBottom) return null;

          return (
            <motion.circle
              key={`packet-${i}`}
              r="0.2"
              fill="#f8fafc"
              filter="url(#glow)"
              initial={{ 
                cx: `${nodes[startIdx].x}%`, 
                cy: `${nodes[startIdx].y}%`,
                opacity: 0
              }}
              animate={{ 
                cx: [`${nodes[startIdx].x}%`, `${nodes[endIdx].x}%`],
                cy: [`${nodes[startIdx].y}%`, `${nodes[endIdx].y}%`],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={`node-${i}`}>
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.layer === 'runtime' ? "0.6" : "0.3"}
              fill="#94a3b8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
            {/* Orchestration pulsing on Runtime layer */}
            {node.layer === 'runtime' && (
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="1.5"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="0.1"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 2.5, opacity: [0, 0.4, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut"
                }}
              />
            )}
          </g>
        ))}
      </svg>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/90" />
    </div>
  );
}
