"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const WaveBackground2ComponentCode: React.FC = () => {
  const code = `"use client";

import React, { ReactNode } from 'react';
import { motion } from "motion/react";

interface WaveConfig {
  color: string;
  shadow: string;
  offset: number;
}

interface WaveBackground2Props {
  children?: ReactNode;
  className?: string;
  backgroundGradient?: {
    from: string;
    to: string;
  };
  waveConfigs?: WaveConfig[];
  height?: string;
  animationSpeed?: number;
  waveCount?: number;
}

const WaveBackground2: React.FC<WaveBackground2Props> = ({
  children,
  className = "",
  backgroundGradient = {
    from: "#1a1025", // dark purple
    to: "#2d1b47",   // medium purple
  },
  waveConfigs,
  height = "400px",
  animationSpeed = 1, // multiplier for animation speed
  waveCount = 5, // Number of waves to render
}) => {
  // Default wave configurations if not provided
  const defaultWaveConfigs: WaveConfig[] = [
    { color: 'rgba(138, 43, 226, 0.2)', shadow: '0 0 15px rgba(138, 43, 226, 0.4)', offset: 0 },
    { color: 'rgba(123, 31, 162, 0.25)', shadow: '0 0 12px rgba(123, 31, 162, 0.5)', offset: 20 },
    { color: 'rgba(147, 51, 234, 0.2)', shadow: '0 0 20px rgba(147, 51, 234, 0.3)', offset: 40 },
    { color: 'rgba(168, 85, 247, 0.15)', shadow: '0 0 10px rgba(168, 85, 247, 0.4)', offset: 60 },
    { color: 'rgba(139, 92, 246, 0.18)', shadow: '0 0 18px rgba(139, 92, 246, 0.35)', offset: 80 },
  ];

  // Use provided wave configs or defaults, limited to waveCount
  const waves = (waveConfigs || defaultWaveConfigs).slice(0, waveCount);

  return (
    <div 
      className={\`relative overflow-hidden \${className}\`}
      style={{ 
        background: \`linear-gradient(135deg, \${backgroundGradient.from} 0%, \${backgroundGradient.to} 100%)\`,
        height 
      }}
    >
      {/* Sine wave lines with shadowy glow */}
      {waves.map((wave, index) => (
        <motion.div
          key={index}
          className="absolute h-[2px] w-[200%] left-[-50%]"
          style={{
            backgroundColor: wave.color,
            boxShadow: wave.shadow,
            bottom: \`\${15 + (index * 12)}%\`,
            filter: 'blur(0.5px)',
          }}
          animate={{
            d: [
              "M0,40 Q250,10 500,40 T1000,40",
              "M0,20 Q250,60 500,20 T1000,20",
              "M0,40 Q250,10 500,40 T1000,40",
            ],
            x: [\`\${wave.offset}%\`, \`\${wave.offset - 100}%\`, \`\${wave.offset}%\`],
          }}
          transition={{
            duration: (15 + index * 2) / animationSpeed,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      ))}

      {/* Additional dusty glow effect */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{ 
          background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2), transparent 70%)',
          filter: 'blur(30px)'
        }}
      />

      {/* Overlay to enhance the waves */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: 'linear-gradient(0deg, rgba(26, 16, 37, 0.1) 0%, rgba(45, 27, 71, 0) 50%, rgba(26, 16, 37, 0.2) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default WaveBackground2;`;

  return <CodeBlock code={code} language="typescript" />;
};

export default WaveBackground2ComponentCode;
