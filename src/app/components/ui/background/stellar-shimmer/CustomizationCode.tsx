"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const StellarShimmerCustomizationCode: React.FC = () => {
  return (
    <div className="prose prose-sm">
      <p>
        The Stellar Shimmer background offers several customization options to
        create various space-themed effects:
      </p>

      <h3 className="text-lg font-medium mt-4">Background Color</h3>
      <p>
        Customize the background color using the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">backgroundColor</code>{" "}
        prop:
      </p>
      <CodeBlock
        code={`<StellarShimmer backgroundColor="#050718" /> // Dark blue background
<StellarShimmer backgroundColor="#000000" /> // Pure black (default)`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Particle Count</h3>
      <p>
        Control the number of stars with the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">particleCount</code>{" "}
        prop:
      </p>
      <CodeBlock
        code={`<StellarShimmer particleCount={5000} /> // Fewer stars (better performance)
<StellarShimmer particleCount={20000} /> // More stars, denser effect`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Particle Color</h3>
      <p>
        Change the color of the stars using the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">particleColor</code>{" "}
        prop:
      </p>
      <CodeBlock
        code={`<StellarShimmer particleColor="#ffffff" /> // White (default)
<StellarShimmer particleColor="#a3c5ff" /> // Light blue
<StellarShimmer particleColor="#ffe78a" /> // Gold`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Glow Effects</h3>
      <p>
        Customize the central glow effect with{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">glowColor</code> and{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">glowOpacity</code>{" "}
        props:
      </p>
      <CodeBlock
        code={`<StellarShimmer 
  glowColor="#4287f5" // Blue glow
  glowOpacity={0.08} // Default opacity
/>

<StellarShimmer 
  glowColor="#ffffff" // White glow (default)
  glowOpacity={0.15} // Stronger glow
/>

<StellarShimmer 
  glowColor="#ffffff"
  glowOpacity={0} // No glow
/>`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Rotation Speed</h3>
      <p>
        Control how fast the stars rotate with the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">rotationSpeed</code>{" "}
        prop:
      </p>
      <CodeBlock
        code={`<StellarShimmer rotationSpeed={0.5} /> // Slower rotation
<StellarShimmer rotationSpeed={1} /> // Default speed
<StellarShimmer rotationSpeed={2} /> // Faster rotation`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Height</h3>
      <p>
        Set the height of the component using the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">height</code> prop:
      </p>
      <CodeBlock
        code={`<StellarShimmer height="500px" /> // Taller
<StellarShimmer height="100vh" /> // Full viewport height`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Additional Styling</h3>
      <p>
        You can pass additional classes via the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">className</code> prop:
      </p>
      <CodeBlock
        code={`<StellarShimmer className="rounded-2xl shadow-lg" />`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Preset Theme Examples</h3>

      <h4 className="text-md font-medium mt-3">
        Classic White Stars (Default)
      </h4>
      <CodeBlock
        code={`<StellarShimmer 
  backgroundColor="#000000"
  particleColor="#ffffff"
  glowColor="#ffffff"
  glowOpacity={0.08}
  particleCount={10000}
  rotationSpeed={1}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Blue Nebula</h4>
      <CodeBlock
        code={`<StellarShimmer 
  backgroundColor="#070b1a"
  particleColor="#a3c5ff"
  glowColor="#4287f5"
  glowOpacity={0.1}
  particleCount={15000}
  rotationSpeed={0.8}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Golden Galaxy</h4>
      <CodeBlock
        code={`<StellarShimmer 
  backgroundColor="#0a0806"
  particleColor="#ffe78a"
  glowColor="#ffc107"
  glowOpacity={0.12}
  particleCount={12000}
  rotationSpeed={0.7}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Ethereal Pink</h4>
      <CodeBlock
        code={`<StellarShimmer 
  backgroundColor="#0a0408"
  particleColor="#ffcce6"
  glowColor="#ff66b2"
  glowOpacity={0.08}
  particleCount={12000}
  rotationSpeed={0.9}
/>`}
        language="jsx"
      />

      <div className="bg-blue-50 p-4 rounded-lg mt-4">
        <h4 className="text-sm font-semibold text-blue-700">
          Performance Tips
        </h4>
        <ul className="text-sm text-blue-600 mt-2 list-disc pl-4 space-y-1">
          <li>
            For better performance, especially on mobile devices, reduce the
            particle count to 5,000-8,000.
          </li>
          <li>
            The default 10,000 particles offers a good balance between visual
            density and performance.
          </li>
          <li>
            If you need even more stars, consider increasing to 15,000-20,000,
            but be aware of potential performance impact.
          </li>
          <li>
            This component uses additive blending, which creates a natural bloom
            effect when particles overlap.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StellarShimmerCustomizationCode;
