"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const MistyAuraInstallationCode: React.FC = () => {
  const code = `npm install three vanta
# or
yarn add three vanta`;

  const typeDef = `// Additionally, create this file:
// src/types/vanta.d.ts
declare module "vanta/dist/vanta.fog.min" {
  const FOG: (options: Record<string, unknown>) => unknown;
  export default FOG;
}`;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">1. Install dependencies</h3>
        <CodeBlock code={code} language="bash" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">
          2. Add TypeScript declaration
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          Create the following TypeScript declaration file to ensure proper type
          checking:
        </p>
        <CodeBlock code={typeDef} language="typescript" />
      </div>
    </div>
  );
};

export default MistyAuraInstallationCode;
