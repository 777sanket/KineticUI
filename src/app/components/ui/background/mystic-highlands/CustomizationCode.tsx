"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const MysticHighlandsCustomizationCode: React.FC = () => {
  return (
    <div className="prose prose-sm">
      <p>
        The Mystic Highlands background offers numerous customization options to
        create different atmospheric scenes:
      </p>

      <h3 className="text-lg font-medium mt-4">Fog and Terrain Settings</h3>
      <p>Customize the fog color and density along with the terrain color:</p>
      <CodeBlock
        code={`<MysticHighlands 
  fogColor="#050520"    // Base color for the fog and scene background (default: dark blue)
  fogDensity={0.0015}   // Density of the fog effect (higher values = thicker fog)
  terrainColor="#1e2b2f" // Color of the terrain/mountains
/>`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Lighting Customization</h3>
      <p>Control the lighting atmosphere with these properties:</p>
      <CodeBlock
        code={`<MysticHighlands 
  ambientLightColor="#222244"    // Color of the ambient light
  ambientLightIntensity={0.8}    // Intensity of the ambient light
  directionalLightColor="#ffffff" // Color of the main directional light
  directionalLightIntensity={0.9} // Intensity of the main directional light
  accentLightColor="#6688ff"      // Color of the accent directional light
  accentLightIntensity={1.2}      // Intensity of the accent directional light
/>`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Animation Speed</h3>
      <p>Control the speed of camera movement and fog animation:</p>
      <CodeBlock
        code={`<MysticHighlands cameraMovementSpeed={1} /> // Default speed
<MysticHighlands cameraMovementSpeed={0.5} /> // Slower, more subtle movement
<MysticHighlands cameraMovementSpeed={1.5} /> // Faster movement`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Height</h3>
      <p>Set the height of the component:</p>
      <CodeBlock
        code={`<MysticHighlands height="500px" /> // Taller
<MysticHighlands height="100vh" /> // Full viewport height`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Additional Styling</h3>
      <p>Add your own classes:</p>
      <CodeBlock
        code={`<MysticHighlands className="rounded-2xl shadow-lg" />`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Preset Theme Examples</h3>

      <h4 className="text-md font-medium mt-3">Midnight Highlands (Default)</h4>
      <CodeBlock
        code={`<MysticHighlands 
  fogColor="#050520"
  terrainColor="#1e2b2f"
  ambientLightColor="#222244"
  directionalLightColor="#ffffff"
  accentLightColor="#6688ff"
  cameraMovementSpeed={1}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Frozen Peaks</h4>
      <CodeBlock
        code={`<MysticHighlands 
  fogColor="#051530"
  terrainColor="#1a2a3a"
  ambientLightColor="#112244"
  directionalLightColor="#aaccff"
  accentLightColor="#3a80ff"
  cameraMovementSpeed={0.8}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Twilight Valley</h4>
      <CodeBlock
        code={`<MysticHighlands 
  fogColor="#280030"
  terrainColor="#331a33"
  ambientLightColor="#331133"
  directionalLightColor="#ff8866"
  accentLightColor="#ff3377"
  cameraMovementSpeed={1.2}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Enchanted Forest</h4>
      <CodeBlock
        code={`<MysticHighlands 
  fogColor="#051a10"
  terrainColor="#0c2d1a"
  ambientLightColor="#0a1a10"
  directionalLightColor="#aaffcc"
  accentLightColor="#33aa66"
  cameraMovementSpeed={0.7}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Desert Dunes</h4>
      <CodeBlock
        code={`<MysticHighlands 
  fogColor="#201505"
  terrainColor="#3a2a1a"
  ambientLightColor="#331a05"
  directionalLightColor="#ffcc88"
  accentLightColor="#ffaa44"
  cameraMovementSpeed={0.6}
  fogDensity={0.001}
/>`}
        language="jsx"
      />

      <div className="bg-blue-50 p-4 rounded-lg mt-4">
        <h4 className="text-sm font-semibold text-blue-700">
          Performance Considerations
        </h4>
        <ul className="text-sm text-blue-600 mt-2 list-disc pl-4 space-y-1">
          <li>
            The 3D terrain and lighting effects are rendered using WebGL, which
            may impact performance on older or less powerful devices.
          </li>
          <li>
            The component implements several optimizations including reduced
            geometry complexity and limited pixel ratio.
          </li>
          <li>
            For better performance on mobile devices, you might want to reduce
            the quality by using a simpler terrain (reduced plane geometry).
          </li>
          <li>
            The component properly disposes of all Three.js resources when
            unmounted to prevent memory leaks.
          </li>
        </ul>
      </div>

      <div className="bg-green-50 p-4 rounded-lg mt-4">
        <h4 className="text-sm font-semibold text-green-700">Content Tips</h4>
        <ul className="text-sm text-green-600 mt-2 list-disc pl-4 space-y-1">
          <li>
            Add text-shadow to your content (e.g.,{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded">
              drop-shadow-lg
            </code>
            ) to improve visibility against the 3D background.
          </li>
          <li>
            Use semi-transparent dark containers with{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded">
              backdrop-blur-sm
            </code>{" "}
            for UI elements to enhance readability.
          </li>
          <li>
            This background works well for fantasy, adventure, or nature-themed
            applications.
          </li>
          <li>
            Consider using complementary colors for buttons and UI elements that
            match your chosen theme.
          </li>
          <li>
            The terrain has depth, so content placed at the bottom of the
            container will appear to be &quot;in front&quot; of the mountains.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MysticHighlandsCustomizationCode;
