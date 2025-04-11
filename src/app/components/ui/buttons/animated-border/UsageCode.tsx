"use client";
import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const AnimatedBorderButtonUsageCode: React.FC = () => {
  const code = `import AnimatedBorderButton from './components/AnimatedBorderButton';

function App() {
  return (
    <div className="flex flex-col gap-4 p-8">
      {/* Default purple button */}
      <AnimatedBorderButton>
        Click Me
      </AnimatedBorderButton>
      
      {/* Blue variant */}
      <AnimatedBorderButton primary={false}>
        Blue Button
      </AnimatedBorderButton>
      
      {/* With onClick handler */}
      <AnimatedBorderButton onClick={() => alert('Button clicked!')}>
        Show Alert
      </AnimatedBorderButton>
    </div>
  );
}`;

  return <CodeBlock code={code} language="typescript" />;
};

export default AnimatedBorderButtonUsageCode;
