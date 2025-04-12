"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const WaveBackgroundCustomizationCode: React.FC = () => {
  return (
    <div className="prose prose-sm">
      <p>
        The Wave Background component is highly customizable. Here are the key
        ways to customize it:
      </p>

      <h3 className="text-lg font-medium mt-4">Wave Colors</h3>
      <p>
        You can customize the colors of each wave using the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">waveColors</code>{" "}
        prop. Pass an array of colors (using rgba for transparency):
      </p>
      <CodeBlock
        code={`<WaveBackground 
  waveColors={[
    "rgba(239, 68, 68, 0.3)",  // red
    "rgba(249, 115, 22, 0.4)",  // orange
    "rgba(245, 158, 11, 0.5)",  // amber
    "rgba(234, 179, 8, 0.6)",   // yellow
  ]}
/>`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Background Color</h3>
      <p>
        Change the base background color using the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">backgroundColor</code>{" "}
        prop:
      </p>
      <CodeBlock
        code={`<WaveBackground backgroundColor="rgb(31, 41, 55)" />`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Height</h3>
      <p>
        Control the height of the component using the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">height</code> prop:
      </p>
      <CodeBlock code={`<WaveBackground height="500px" />`} language="jsx" />

      <h3 className="text-lg font-medium mt-4">Animation Speed</h3>
      <p>
        Adjust the animation speed with the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">speed</code> prop
        (values greater than 1 make it faster, less than 1 make it slower):
      </p>
      <CodeBlock
        code={`<WaveBackground speed={0.5} /> {/* Slower */}
<WaveBackground speed={2} /> {/* Faster */}`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Additional Styling</h3>
      <p>
        You can pass additional classes via the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">className</code> prop:
      </p>
      <CodeBlock
        code={`<WaveBackground className="rounded-2xl shadow-lg" />`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Advanced Customization</h3>
      <p>
        For more advanced customization, you can modify the component code to:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Add more waves by extending the waves array</li>
        <li>
          Change the wave shapes by modifying the borderRadius or using SVG
          paths
        </li>
        <li>
          Add more complex animations by modifying the animate and transition
          properties
        </li>
        <li>
          Create responsive behavior by adjusting the wave positions based on
          screen size
        </li>
      </ul>

      <div className="bg-blue-50 p-4 rounded-lg mt-4">
        <h4 className="text-sm font-semibold text-blue-700">Tip</h4>
        <p className="text-sm text-blue-600">
          For the best visual effect, use semi-transparent colors (rgba) for the
          waves. This creates a layered effect as the waves overlap.
        </p>
      </div>
    </div>
  );
};

export default WaveBackgroundCustomizationCode;
