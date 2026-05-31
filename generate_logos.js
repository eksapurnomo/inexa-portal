import * as simpleIcons from 'simple-icons';
import fs from 'fs';

const lookups = {
  // Ecosystem
  OpenAI: 'siOpenai',
  Anthropic: 'siAnthropic',
  Gemini: 'siGooglegemini',
  Llama: 'siMeta',
  Groq: 'siGnu', // Fallback? Let's check if siGroq exists
  DeepSeek: 'siDeepseek',
  Mistral: 'siMistral',
  Cohere: 'siCohere',
  BytePlus: 'siBytedance',
  xAI: 'siX',
  // Infra
  AWS: 'siAmazonwebservices',
  GoogleCloud: 'siGooglecloud',
  Azure: 'siMicrosoftazure',
  AlibabaCloud: 'siAlibabacloud',
  // Compute
  'Vast.ai': 'siVultr', // Fallback
  RunPod: 'siRender', // Fallback
  'Lambda Labs': 'siAwslambda' // Fallback
};

let output = `import React from 'react';\n\n`;

for (const [name, key] of Object.entries(lookups)) {
  const icon = simpleIcons[key];
  if (icon) {
    output += `export const Logo${name.replace(/[^a-zA-Z0-9]/g, '')} = ({ className = "" }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <title>${name}</title>
    <path d="${icon.path}" />
  </svg>
);\n\n`;
  } else {
    // Generate text-based logo
    output += `export const Logo${name.replace(/[^a-zA-Z0-9]/g, '')} = ({ className = "" }: { className?: string }) => (
  <svg role="img" viewBox="0 0 100 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <text x="50%" y="16" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontSize="16" fontWeight="bold">${name}</text>
  </svg>
);\n\n`;
  }
}

fs.writeFileSync('src/components/ProviderLogos.tsx', output);
console.log('ProviderLogos.tsx generated');
