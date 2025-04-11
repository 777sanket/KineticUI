"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const GradientBackgroundUsageCode: React.FC = () => {
  const code = `import AnimatedGradientBackground from './components/AnimatedGradientBackground';

function App() {
  return (
    <div className="container mx-auto p-4">
      <AnimatedGradientBackground>
        <h2 className="text-2xl font-bold">Animated Gradient Background</h2>
      </AnimatedGradientBackground>
    </div>
  );
}`;

  return <CodeBlock code={code} language="typescript" />;
};

export default GradientBackgroundUsageCode;
