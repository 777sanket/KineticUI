"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const WaveBackground3CustomizationCode: React.FC = () => {
  return (
    <div className="prose prose-sm">
      <p>
        The Cosmic Dust Background (wave-bg-3) offers several customization
        options to create different space-themed effects:
      </p>

      <h3 className="text-lg font-medium mt-4">Background Color</h3>
      <p>
        Customize the background color using the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">backgroundColor</code>{" "}
        prop:
      </p>
      <CodeBlock
        code={`<WaveBackground3 backgroundColor="#0a0a1a" /> // Dark blue background
<WaveBackground3 backgroundColor="#080808" /> // Near black`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Particle Count</h3>
      <p>
        Control the number of dust particles with the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">particleCount</code>{" "}
        prop:
      </p>
      <CodeBlock
        code={`<WaveBackground3 particleCount={50000} /> // Fewer particles 
<WaveBackground3 particleCount={200000} /> // More particles, denser effect (heavier performance impact)`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Particle Colors</h3>
      <p>
        Customize the colors of the particles using the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">particleColors</code>{" "}
        prop:
      </p>
      <CodeBlock
        code={`<WaveBackground3 
  particleColors={{
    hueRange: [0.68, 0.73],  // Tighter range of blue/purple hues (default)
    saturation: [0.4, 0.7],  // Less vibrant saturation
    lightness: [0.5, 0.8]    // Soft brightness
  }}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">HSL Color Reference</h4>
      <ul className="list-disc pl-5 space-y-1 text-sm">
        <li>
          Hue: 0.0-0.1 (red), 0.15 (yellow), 0.3 (green), 0.5 (cyan), 0.65
          (blue), 0.8 (purple), 0.9 (pink)
        </li>
        <li>Saturation: 0.0 (gray) to 1.0 (full color)</li>
        <li>Lightness: 0.0 (black) to 0.5 (full color) to 1.0 (white)</li>
      </ul>

      <h3 className="text-lg font-medium mt-4">Particle Size</h3>
      <p>
        Adjust the minimum and maximum size of the particles with the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">particleSize</code>{" "}
        prop (smaller values for a more subtle, distant star effect):
      </p>
      <CodeBlock
        code={`<WaveBackground3 particleSize={[0.04, 0.045]} /> // Default, very small particles
<WaveBackground3 particleSize={[0.08, 0.12]} /> // Larger particles
<WaveBackground3 particleSize={[0.02, 0.03]} /> // Smaller, more distant-looking particles`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Animation Speed Factor</h3>
      <p>
        Control the overall animation speed with the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">
          animationSpeedFactor
        </code>{" "}
        prop. Higher values make the animation slower, lower values make it
        faster:
      </p>
      <CodeBlock
        code={`<WaveBackground3 animationSpeedFactor={120} /> // Default speed
<WaveBackground3 animationSpeedFactor={240} /> // Half speed
<WaveBackground3 animationSpeedFactor={60} /> // Double speed`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Height</h3>
      <p>
        Set the height of the component using the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">height</code> prop:
      </p>
      <CodeBlock code={`<WaveBackground3 height="500px" />`} language="jsx" />

      <h3 className="text-lg font-medium mt-4">Additional Styling</h3>
      <p>
        You can pass additional classes via the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">className</code> prop:
      </p>
      <CodeBlock
        code={`<WaveBackground3 className="rounded-2xl shadow-lg" />`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Preset Color Themes</h3>

      <h4 className="text-md font-medium mt-3">Deep Space (Default)</h4>
      <CodeBlock
        code={`<WaveBackground3 
  backgroundColor="#000000"
  particleColors={{
    hueRange: [0.68, 0.73],  // Blue-purple hues
    saturation: [0.4, 0.7],
    lightness: [0.5, 0.8]
  }}
  particleCount={100000}
  particleSize={[0.04, 0.045]}
  animationSpeedFactor={120}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Cosmic Red</h4>
      <CodeBlock
        code={`<WaveBackground3 
  backgroundColor="#0a0505"
  particleColors={{
    hueRange: [0.98, 0.02],  // Red hues
    saturation: [0.5, 0.8],
    lightness: [0.5, 0.7]
  }}
  particleCount={100000}
  particleSize={[0.04, 0.045]}
  animationSpeedFactor={100}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Ethereal Green</h4>
      <CodeBlock
        code={`<WaveBackground3 
  backgroundColor="#050a05"
  particleColors={{
    hueRange: [0.3, 0.4],  // Green hues
    saturation: [0.4, 0.7],
    lightness: [0.5, 0.8]
  }}
  particleCount={100000}
  particleSize={[0.04, 0.045]}
  animationSpeedFactor={120}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Gold Dust</h4>
      <CodeBlock
        code={`<WaveBackground3 
  backgroundColor="#0a0806"
  particleColors={{
    hueRange: [0.10, 0.15],  // Gold/yellow hues
    saturation: [0.6, 0.9],
    lightness: [0.5, 0.8]
  }}
  particleCount={100000}
  particleSize={[0.04, 0.045]}
  animationSpeedFactor={130}
/>`}
        language="jsx"
      />

      <div className="bg-blue-50 p-4 rounded-lg mt-4">
        <h4 className="text-sm font-semibold text-blue-700">
          Performance Tips
        </h4>
        <ul className="text-sm text-blue-600 mt-2 list-disc pl-4 space-y-1">
          <li>
            This component uses a high particle count (100,000 by default) which
            creates a beautiful effect but can be demanding on less powerful
            devices.
          </li>
          <li>
            For better performance on mobile devices, consider reducing the
            particle count to 50,000 or less.
          </li>
          <li>
            You can conditionally render different particle counts based on
            device capabilities using a combination of window size detection and
            device performance metrics.
          </li>
          <li>
            The component is optimized with efficient shaders, but the high
            particle count remains the biggest performance factor.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WaveBackground3CustomizationCode;
