import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Generates an abstract mesh network resembling Megaport/enterprise infra
export default function NetworkTopology() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Static positions to avoid hydration mismatch and maintain consistent layout
  const nodes = [
    { x: 15, y: 25 }, { x: 35, y: 15 }, { x: 55, y: 30 }, { x: 75, y: 20 }, { x: 90, y: 40 },
    { x: 20, y: 55 }, { x: 45, y: 50 }, { x: 65, y: 65 }, { x: 85, y: 70 },
    { x: 10, y: 75 }, { x: 30, y: 85 }, { x: 50, y: 90 }, { x: 75, y: 95 }
  ];

  // Connections between nodes
  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [0, 5], [1, 6], [2, 7], [4, 8],
    [5, 6], [6, 7], [7, 8],
    [5, 9], [6, 10], [7, 11], [8, 12],
    [9, 10], [10, 11], [11, 12],
    [2, 6], [3, 7], [6, 11] // cross links
  ];

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-slate-950 to-slate-950" />
      
      <svg className="absolute w-full h-full opacity-[0.15]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#cbd5e1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
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
            strokeWidth="0.15"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ 
              duration: 2.5, 
              delay: i * 0.05, 
              ease: "easeInOut" 
            }}
          />
        ))}

        {/* Moving data packets (subtle dots moving along lines) */}
        {connections.slice(0, 8).map(([startIdx, endIdx], i) => (
          <motion.circle
            key={`packet-${i}`}
            r="0.25"
            fill="#e2e8f0"
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
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={`node-${i}`}>
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="0.4"
              fill="#94a3b8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
            {/* Pulsing ring for some nodes to show 'active' routing */}
            {i % 4 === 0 && (
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="1.2"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="0.1"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 2.5, opacity: [0, 0.5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
              />
            )}
          </g>
        ))}
      </svg>
      
      {/* Subtle overlay gradient to blend edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/90" />
    </div>
  );
}
