"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const TypewriterComponentCode: React.FC = () => {
  const code = `import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  speed = 100, 
  delay = 2000,
  className = "text-4xl font-bold text-blue-500"
}) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
    if (index === text.length) {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setIndex(0);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, delay]);

  return (
    <h1 className={className}>
      {displayText}<span className="animate-pulse">|</span>
    </h1>
  );
};

export default TypewriterText;`;

  return <CodeBlock code={code} language="typescript" />;
};

export default TypewriterComponentCode;
