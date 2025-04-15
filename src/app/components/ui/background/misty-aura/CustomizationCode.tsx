"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const MistyAuraCustomizationCode: React.FC = () => {
  return (
    <div className="prose prose-sm">
      <p>
        The Misty Aura background offers several customization options to create
        different fog and mist effects:
      </p>

      <h3 className="text-lg font-medium mt-4">Color Settings</h3>
      <p>
        Customize the colors of your misty background with these color props:
      </p>
      <CodeBlock
        code={`<MistyAura 
  highlightColor="#ffffff" // Brightest parts of the fog (default: white)
  midtoneColor="#00ffc3"   // Mid-brightness areas (default: teal)
  lowlightColor="#0f0f0f"  // Darker areas (default: near black)
  baseColor="#000000"      // Background color (default: black)
/>`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Fog Appearance</h3>
      <p>Control the density and appearance of the fog:</p>
      <CodeBlock
        code={`<MistyAura 
  blurFactor={1.5} // Controls fog density (default: 1.5)
  zoom={1.2}       // Camera zoom level (default: 1.2)
/>`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Animation Speed</h3>
      <p>Control the speed of the fog movement:</p>
      <CodeBlock
        code={`<MistyAura speed={1} /> // Default speed
<MistyAura speed={0.5} /> // Slower, more gentle movement
<MistyAura speed={2} /> // Faster, more turbulent fog`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Interaction Controls</h3>
      <p>Enable or disable mouse and touch interaction:</p>
      <CodeBlock
        code={`<MistyAura 
  mouseControls={true} // Enable mouse interaction (default)
  touchControls={true} // Enable touch interaction (default)
/>`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Height</h3>
      <p>Set the height of the component:</p>
      <CodeBlock
        code={`<MistyAura height="500px" /> // Taller
<MistyAura height="100vh" /> // Full viewport height`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Additional Styling</h3>
      <p>Add your own classes:</p>
      <CodeBlock
        code={`<MistyAura className="rounded-2xl shadow-lg" />`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Preset Color Themes</h3>

      <h4 className="text-md font-medium mt-3">Teal Mist (Default)</h4>
      <CodeBlock
        code={`<MistyAura 
  highlightColor="#ffffff"
  midtoneColor="#00ffc3"
  lowlightColor="#0f0f0f"
  baseColor="#000000"
  blurFactor={1.5}
  speed={1}
  zoom={1.2}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Ocean Depths</h4>
      <CodeBlock
        code={`<MistyAura 
  highlightColor="#ffffff"
  midtoneColor="#4169e1"
  lowlightColor="#191970"
  baseColor="#000033"
  blurFactor={1.8}
  zoom={1.5}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Electric Dreams</h4>
      <CodeBlock
        code={`<MistyAura 
  highlightColor="#ffffff"
  midtoneColor="#ff6b6b"
  lowlightColor="#8a2387"
  baseColor="#000000"
  blurFactor={2}
  speed={0.8}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Golden Aura</h4>
      <CodeBlock
        code={`<MistyAura 
  highlightColor="#ffffff"
  midtoneColor="#ffd700"
  lowlightColor="#614e1a"
  baseColor="#0a0a0a"
  blurFactor={1.2}
  speed={0.5}
  zoom={1.0}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Northern Lights</h4>
      <CodeBlock
        code={`<MistyAura 
  highlightColor="#ffffff"
  midtoneColor="#26d0ce"
  lowlightColor="#1a2980"
  baseColor="#000000"
  blurFactor={1.7}
  speed={0.7}
  zoom={1.3}
/>`}
        language="jsx"
      />

      <div className="bg-blue-50 p-4 rounded-lg mt-4">
        <h4 className="text-sm font-semibold text-blue-700">
          Performance Considerations
        </h4>
        <ul className="text-sm text-blue-600 mt-2 list-disc pl-4 space-y-1">
          <li>
            The Vanta.js fog effect uses Three.js and WebGL, which may be
            resource-intensive on lower-end devices.
          </li>
          <li>
            Consider using a lighter version or disabling the effect on mobile
            devices for better performance.
          </li>
          <li>
            The effect is automatically destroyed when the component unmounts to
            prevent memory leaks.
          </li>
          <li>
            Higher blur factors and faster speeds may require more processing
            power.
          </li>
        </ul>
      </div>

      <div className="bg-green-50 p-4 rounded-lg mt-4">
        <h4 className="text-sm font-semibold text-green-700">Design Tips</h4>
        <ul className="text-sm text-green-600 mt-2 list-disc pl-4 space-y-1">
          <li>
            Add{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded">
              backdrop-blur-md
            </code>{" "}
            to content containers for a frosted glass effect that complements
            the misty background.
          </li>
          <li>
            Use semi-transparent containers (
            <code className="bg-gray-100 px-1 py-0.5 rounded">
              bg-opacity-50
            </code>
            ) to blend with the fog effect.
          </li>
          <li>
            Adjust the colors to match your brand palette for a cohesive look.
          </li>
          <li>
            For text legibility, use a dark background with light text or apply
            text shadows.
          </li>
          <li>
            Slower speeds create a more serene, meditative atmosphere while
            faster speeds create more energy.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MistyAuraCustomizationCode;
