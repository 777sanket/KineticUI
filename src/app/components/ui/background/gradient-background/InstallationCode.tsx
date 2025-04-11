"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const GradientBackgroundInstallationCode: React.FC = () => {
  const code = `npm install react react-dom typescript @types/react @types/react-dom tailwindcss
npx tailwindcss init`;

  return <CodeBlock code={code} language="bash" />;
};

export default GradientBackgroundInstallationCode;
