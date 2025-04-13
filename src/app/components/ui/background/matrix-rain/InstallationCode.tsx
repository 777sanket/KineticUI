"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const MatrixRainInstallationCode: React.FC = () => {
  const code = `npm install react react-dom
# or
yarn add react react-dom

# No additional libraries required`;

  return <CodeBlock code={code} language="bash" />;
};

export default MatrixRainInstallationCode;
