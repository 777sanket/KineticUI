"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const MysticHighlandsInstallationCode: React.FC = () => {
  const code = `npm install three
# or
yarn add three`;

  return <CodeBlock code={code} language="bash" />;
};

export default MysticHighlandsInstallationCode;
