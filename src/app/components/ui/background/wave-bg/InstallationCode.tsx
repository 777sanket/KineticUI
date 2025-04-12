"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const WaveBackgroundInstallationCode: React.FC = () => {
  const code = `npm install react react-dom framer-motion tailwindcss
# or
yarn add react react-dom framer-motion tailwindcss`;

  return <CodeBlock code={code} language="bash" />;
};

export default WaveBackgroundInstallationCode;
