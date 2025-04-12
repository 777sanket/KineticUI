"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const WaveBackgroundComponentCode: React.FC = () => {
  const code = `"use client";
import React, { ReactNode } from 'react';
import { motion } from "framer-motion";

interface WaveBackgroundProps {
  children?: ReactNode;
  className?: string;
  waveColors?: string[];
  backgroundColor?: string;
  height?: string;
  speed?: number;
}

const WaveBackground: React.FC<WaveBackgroundProps> = ({
  children,
  className = "",
  waveColors = [
    "rgba(59, 130, 246, 0.3)",  // blue
    "rgba(99, 102, 241, 0.4)",  // indigo
    "rgba(139, 92, 246, 0.5)",  // violet
    "rgba(168, 85, 247, 0.6)",  // purple
  ],
  backgroundColor = "rgb(17, 24, 39)", // gray-900
  height = "400px",
  speed = 1, // multiplier for animation speed
}) => {
  // Ensure we have at least one wave color
  const safeWaveColors = waveColors.length ? waveColors : ["rgba(59, 130, 246, 0.5)"];
  
  // Create wave configurations
  const waves = [
    {
      height: "40%",
      bottom: "-10px",
      left: "-50%",
      color: safeWaveColors[0] || "rgba(59, 130, 246, 0.3)",
      animate: { y: [10, -5, 10] },
      duration: 5 / speed,
    },
    {
      height: "32%",
      bottom: "-5px",
      left: "-30%",
      color: safeWaveColors[1] || "rgba(99, 102, 241, 0.4)",
      animate: { y: [5, -10, 5], x: [0, 20, 0] },
      duration: 7 / speed,
    },
    {
      height: "24%",
      bottom: "0",
      left: "-20%",
      color: safeWaveColors[2] || "rgba(139, 92, 246, 0.5)",
      animate: { y: [0, -8, 0], x: [0, -30, 0] },
      duration: 6 / speed,
    },
    {
      height: "16%",
      bottom: "5px",
      left: "-40%",
      color: safeWaveColors[3] || "rgba(168, 85, 247, 0.6)",
      animate: { y: [-5, 5, -5], x: [0, -10, 0] },
      duration: 4 / speed,
    },
  ];

  return (
    <div 
      className={\`relative overflow-hidden \${className}\`}
      style={{ 
        backgroundColor, 
        height 
      }}
    >
      {/* Render waves */}
      {waves.map((wave, index) => (
        <motion.div 
          key={index}
          className="absolute w-[200%]"
          style={{
            height: wave.height,
            bottom: wave.bottom,
            left: wave.left,
            background: wave.color,
            borderRadius: "100% 100% 0 0",
          }}
          animate={wave.animate}
          transition={{
            duration: wave.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Content */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default WaveBackground;`;

  return <CodeBlock code={code} language="typescript" />;
};

export default WaveBackgroundComponentCode;
