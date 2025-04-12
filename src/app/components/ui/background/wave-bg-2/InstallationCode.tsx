"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const WaveBackground2InstallationCode: React.FC = () => {
  const code = `npm install motion
# or
yarn add motion`;

  return <CodeBlock code={code} language="bash" />;
};

export default WaveBackground2InstallationCode;
