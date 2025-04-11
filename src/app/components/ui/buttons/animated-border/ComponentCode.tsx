"use client";
import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const AnimatedBorderButtonComponentCode: React.FC = () => {
  const code = `import React from 'react';

interface AnimatedBorderButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  primary?: boolean;
}

const AnimatedBorderButton: React.FC<AnimatedBorderButtonProps> = ({ 
  children, 
  className = '',
  onClick,
  primary = true
}) => {
  const baseClasses = "relative px-6 py-3 font-bold text-white rounded-lg group";
  const combinedClasses = \`\${baseClasses} \${className}\`;
  
  // Colors are customizable based on primary prop
  const primaryColor = primary ? 'bg-purple-500 group-hover:bg-purple-700' : 'bg-blue-500 group-hover:bg-blue-700';
  const secondaryColor = primary ? 'bg-purple-700 group-hover:bg-purple-500' : 'bg-blue-700 group-hover:bg-blue-500';
  
  return (
    <button 
      className={combinedClasses}
      onClick={onClick}
    >
      <span className={\`absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-0 -skew-x-6 \${primaryColor} group-hover:skew-x-0\`}></span>
      <span className={\`absolute inset-0 w-full h-full transition duration-300 ease-out transform skew-x-6 \${secondaryColor} group-hover:skew-x-0\`}></span>
      <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition duration-300 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
      <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition duration-300 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
      <span className="relative">{children}</span>
    </button>
  );
};

export default AnimatedBorderButton;`;

  return <CodeBlock code={code} language="typescript" />;
};

export default AnimatedBorderButtonComponentCode;
