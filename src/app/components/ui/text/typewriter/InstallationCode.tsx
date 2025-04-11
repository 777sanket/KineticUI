"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const TypewriterInstallationCode: React.FC = () => {
  const code = `npm install react react-dom typescript @types/react @types/react-dom`;

  return <CodeBlock code={code} language="bash" />;
};

export default TypewriterInstallationCode;
