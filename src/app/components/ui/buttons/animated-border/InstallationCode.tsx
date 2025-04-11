"use client";
import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const AnimatedBorderButtonInstallationCode: React.FC = () => {
  const code = `npm install react react-dom tailwindcss
npx tailwindcss init`;

  return <CodeBlock code={code} language="bash" />;
};

export default AnimatedBorderButtonInstallationCode;
