"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const GradientBackgroundComponentCode: React.FC = () => {
  const code = `import React, { ReactNode } from 'react';

interface AnimatedGradientBackgroundProps {
  children: ReactNode;
  className?: string;
}

const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={\`relative overflow-hidden w-full h-64 rounded-lg \${className}\`}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x"></div>
      <div className="relative z-10 h-full flex items-center justify-center text-white">
        {children}
      </div>
    </div>
  );
};

export default AnimatedGradientBackground;`;

  return <CodeBlock code={code} language="typescript" />;
};

export default GradientBackgroundComponentCode;
