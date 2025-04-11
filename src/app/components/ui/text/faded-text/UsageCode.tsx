"use client";
import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const FadedTextUsageCode: React.FC = () => {
  const code = `import FadedText from './components/FadedText';

function App() {
  return (
    <div className="p-8 space-y-8">
      {/* Basic usage */}
      <FadedText 
        text="Hello, World!" 
      />
      
      {/* Customized timing */}
      <FadedText 
        text="Slow fade in, fast fade out" 
        fadeInDuration={2000}
        fadeOutDuration={500}
        className="text-3xl font-bold text-purple-600"
      />
      
      {/* One-time animation */}
      <FadedText 
        text="I only fade in once" 
        repeat={false}
        className="text-xl text-green-500"
      />
      
      {/* With longer visible duration */}
      <FadedText 
        text="I stay visible longer" 
        visibleDuration={5000}
        className="text-2xl font-semibold text-red-500"
      />
    </div>
  );
}`;

  return <CodeBlock code={code} language="typescript" />;
};

export default FadedTextUsageCode;
