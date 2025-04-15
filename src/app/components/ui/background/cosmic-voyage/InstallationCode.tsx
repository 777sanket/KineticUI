"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const CosmicVoyageInstallationCode: React.FC = () => {
  const code = `npm install three @react-three/fiber @react-three/drei
# or
yarn add three @react-three/fiber @react-three/drei`;

  const typeDef = `// Add this to your declarations (e.g., in a custom.d.ts file):
declare module "@react-three/fiber" {
  interface ThreeElements {
    jupiterShaderMaterial: {
      uTime?: number;
      ref?: React.Ref<{ uTime: number }>;
    };
  }
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
          Add this TypeScript declaration to ensure proper type checking for the
          custom shader material:
        </p>
        <CodeBlock code={typeDef} language="typescript" />
      </div>
    </div>
  );
};

export default CosmicVoyageInstallationCode;
