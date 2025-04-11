"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const TypewriterUsageCode: React.FC = () => {
  const code = `import TypewriterText from './components/TypewriterText';

function App() {
  return (
    <div className="container mx-auto p-4">
      <TypewriterText 
        text="Welcome to our Component Library" 
        speed={100} 
        delay={2000} 
      />
    </div>
  );
}`;

  return <CodeBlock code={code} language="typescript" />;
};

export default TypewriterUsageCode;
