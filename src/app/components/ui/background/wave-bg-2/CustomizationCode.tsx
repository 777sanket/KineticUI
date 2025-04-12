"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const WaveBackground2CustomizationCode: React.FC = () => {
  return (
    <div className="prose prose-sm">
      <p>
        The Sine Wave Background component offers several customization options
        to match your design needs:
      </p>

      <h3 className="text-lg font-medium mt-4">Background Gradient</h3>
      <p>
        Customize the main background gradient using the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">
          backgroundGradient
        </code>{" "}
        prop:
      </p>
      <CodeBlock
        code={`<WaveBackground2 
  backgroundGradient={{
    from: "#0f172a", // dark blue
    to: "#1e3a8a"    // deep blue
  }}
/>`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Wave Configuration</h3>
      <p>
        Customize each wave's appearance with the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">waveConfigs</code>{" "}
        prop. Each wave has a color, shadow, and animation offset:
      </p>
      <CodeBlock
        code={`<WaveBackground2 
  waveConfigs={[
    { color: 'rgba(59, 130, 246, 0.2)', shadow: '0 0 15px rgba(59, 130, 246, 0.4)', offset: 0 },
    { color: 'rgba(37, 99, 235, 0.25)', shadow: '0 0 12px rgba(37, 99, 235, 0.5)', offset: 20 },
    { color: 'rgba(96, 165, 250, 0.2)', shadow: '0 0 20px rgba(96, 165, 250, 0.3)', offset: 40 },
    { color: 'rgba(147, 197, 253, 0.15)', shadow: '0 0 10px rgba(147, 197, 253, 0.4)', offset: 60 },
  ]}
/>`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Number of Waves</h3>
      <p>
        Control how many waves are displayed with the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">waveCount</code> prop:
      </p>
      <CodeBlock
        code={`<WaveBackground2 waveCount={3} /> // Only show 3 waves`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Height</h3>
      <p>
        Control the height of the component using the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">height</code> prop:
      </p>
      <CodeBlock code={`<WaveBackground2 height="500px" />`} language="jsx" />

      <h3 className="text-lg font-medium mt-4">Animation Speed</h3>
      <p>
        Adjust the animation speed with the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">animationSpeed</code>{" "}
        prop:
      </p>
      <CodeBlock
        code={`<WaveBackground2 animationSpeed={0.5} /> {/* Slower */}
<WaveBackground2 animationSpeed={2} /> {/* Faster */}`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Additional Styling</h3>
      <p>
        You can pass additional classes via the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">className</code> prop:
      </p>
      <CodeBlock
        code={`<WaveBackground2 className="rounded-2xl shadow-lg" />`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Color Theme Examples</h3>

      <h4 className="text-md font-medium mt-3">Purple Theme (Default)</h4>
      <CodeBlock
        code={`const purpleWaves = [
  { color: 'rgba(138, 43, 226, 0.2)', shadow: '0 0 15px rgba(138, 43, 226, 0.4)', offset: 0 },
  { color: 'rgba(123, 31, 162, 0.25)', shadow: '0 0 12px rgba(123, 31, 162, 0.5)', offset: 20 },
  { color: 'rgba(147, 51, 234, 0.2)', shadow: '0 0 20px rgba(147, 51, 234, 0.3)', offset: 40 },
  { color: 'rgba(168, 85, 247, 0.15)', shadow: '0 0 10px rgba(168, 85, 247, 0.4)', offset: 60 },
  { color: 'rgba(139, 92, 246, 0.18)', shadow: '0 0 18px rgba(139, 92, 246, 0.35)', offset: 80 },
];

<WaveBackground2 
  backgroundGradient={{
    from: "#1a1025", // dark purple
    to: "#2d1b47"    // medium purple
  }}
  waveConfigs={purpleWaves}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Blue Ocean Theme</h4>
      <CodeBlock
        code={`const blueWaves = [
  { color: 'rgba(59, 130, 246, 0.2)', shadow: '0 0 15px rgba(59, 130, 246, 0.4)', offset: 0 },
  { color: 'rgba(37, 99, 235, 0.25)', shadow: '0 0 12px rgba(37, 99, 235, 0.5)', offset: 20 },
  { color: 'rgba(96, 165, 250, 0.2)', shadow: '0 0 20px rgba(96, 165, 250, 0.3)', offset: 40 },
  { color: 'rgba(147, 197, 253, 0.15)', shadow: '0 0 10px rgba(147, 197, 253, 0.4)', offset: 60 },
];

<WaveBackground2 
  backgroundGradient={{
    from: "#0f172a", // dark blue
    to: "#1e3a8a"    // deep blue
  }}
  waveConfigs={blueWaves}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Neon Theme</h4>
      <CodeBlock
        code={`const neonWaves = [
  { color: 'rgba(236, 72, 153, 0.2)', shadow: '0 0 15px rgba(236, 72, 153, 0.6)', offset: 0 },
  { color: 'rgba(34, 211, 238, 0.2)', shadow: '0 0 15px rgba(34, 211, 238, 0.6)', offset: 20 },
  { color: 'rgba(250, 204, 21, 0.2)', shadow: '0 0 15px rgba(250, 204, 21, 0.6)', offset: 40 },
  { color: 'rgba(74, 222, 128, 0.2)', shadow: '0 0 15px rgba(74, 222, 128, 0.6)', offset: 60 },
  { color: 'rgba(167, 139, 250, 0.2)', shadow: '0 0 15px rgba(167, 139, 250, 0.6)', offset: 80 },
];

<WaveBackground2 
  backgroundGradient={{
    from: "#18181b", // zinc-900
    to: "#27272a"    // zinc-800
  }}
  waveConfigs={neonWaves}
  animationSpeed={1.2}
/>`}
        language="jsx"
      />

      <div className="bg-blue-50 p-4 rounded-lg mt-4">
        <h4 className="text-sm font-semibold text-blue-700">
          Tips for Best Results
        </h4>
        <ul className="text-sm text-blue-600 mt-2 list-disc pl-4 space-y-1">
          <li>
            Use semi-transparent colors (low opacity in rgba) for the wave
            lines.
          </li>
          <li>
            Create a subtle glow with box-shadow values that match the line
            color but with higher opacity.
          </li>
          <li>
            Vary the offset values to create a more natural, non-uniform wave
            movement.
          </li>
          <li>
            For a more intense effect, increase the opacity in both the color
            and shadow values.
          </li>
          <li>
            For more subtle waves, decrease the shadow blur radius values (e.g.,
            '0 0 5px' instead of '0 0 15px').
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WaveBackground2CustomizationCode;
