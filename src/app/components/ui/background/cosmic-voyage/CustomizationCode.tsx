"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const CosmicVoyageCustomizationCode: React.FC = () => {
  return (
    <div className="prose prose-sm">
      <p>
        The Cosmic Voyage background offers several customization options to
        create different space experiences:
      </p>

      <h3 className="text-lg font-medium mt-4">Stars and Particles</h3>
      <p>Control the number of stars and sparkles in the scene:</p>
      <CodeBlock
        code={`<CosmicVoyage 
  starsCount={12000} // Default number of stars
  sparklesCount={500} // Default number of sparkle particles
/>

<CosmicVoyage 
  starsCount={20000} // More stars for a denser field
  sparklesCount={1000} // More sparkles for additional effect
/>

<CosmicVoyage 
  starsCount={5000} // Fewer stars for better performance
  sparklesCount={200} // Fewer sparkles
/>`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Planet Visibility</h3>
      <p>Show or hide the planets in the scene:</p>
      <CodeBlock
        code={`<CosmicVoyage showPlanets={true} /> // Show planets (default)
<CosmicVoyage showPlanets={false} /> // Hide planets, show only stars`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Background Color</h3>
      <p>Customize the background gradient:</p>
      <CodeBlock
        code={`<CosmicVoyage 
  backgroundColor="radial-gradient(circle at center, #000011 0%, #000000 100%)" // Default
/>

<CosmicVoyage 
  backgroundColor="radial-gradient(circle at center, #000033 0%, #000011 100%)" // Blue space
/>

<CosmicVoyage 
  backgroundColor="radial-gradient(circle at center, #110000 0%, #000000 100%)" // Red tint
/>`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Camera Controls</h3>
      <p>Adjust the auto-rotation speed and enable/disable controls:</p>
      <CodeBlock
        code={`<CosmicVoyage 
  autoRotateSpeed={0.5} // Default rotation speed
  enableControls={true} // Enable orbit controls (default)
/>

<CosmicVoyage 
  autoRotateSpeed={1.5} // Faster rotation
  enableControls={false} // Disable orbit controls for fixed view
/>`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Height</h3>
      <p>Set the height of the component:</p>
      <CodeBlock
        code={`<CosmicVoyage height="500px" /> // Taller
<CosmicVoyage height="100vh" /> // Full viewport height`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Additional Styling</h3>
      <p>Add your own classes:</p>
      <CodeBlock
        code={`<CosmicVoyage className="rounded-2xl shadow-lg" />`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Preset Configurations</h3>

      <h4 className="text-md font-medium mt-3">Classic Space (Default)</h4>
      <CodeBlock
        code={`<CosmicVoyage 
  starsCount={12000}
  sparklesCount={500}
  autoRotateSpeed={0.5}
  showPlanets={true}
  enableControls={true}
  backgroundColor="radial-gradient(circle at center, #000011 0%, #000000 100%)"
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Dense Star Field</h4>
      <CodeBlock
        code={`<CosmicVoyage 
  starsCount={20000}
  sparklesCount={1000}
  autoRotateSpeed={1.5}
  showPlanets={true}
  backgroundColor="radial-gradient(circle at center, #000011 0%, #000000 100%)"
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Minimalist Stars</h4>
      <CodeBlock
        code={`<CosmicVoyage 
  starsCount={5000}
  sparklesCount={200}
  showPlanets={false}
  autoRotateSpeed={0.3}
  backgroundColor="radial-gradient(circle at center, #000022 0%, #000000 100%)"
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Nebula Space</h4>
      <CodeBlock
        code={`<CosmicVoyage 
  starsCount={15000}
  sparklesCount={800}
  showPlanets={true}
  backgroundColor="radial-gradient(circle at center, #100025 0%, #000010 100%)"
  autoRotateSpeed={0.7}
/>`}
        language="jsx"
      />

      <div className="bg-blue-50 p-4 rounded-lg mt-4">
        <h4 className="text-sm font-semibold text-blue-700">
          Performance Considerations
        </h4>
        <ul className="text-sm text-blue-600 mt-2 list-disc pl-4 space-y-1">
          <li>
            The 3D scene uses WebGL through Three.js and React Three Fiber,
            which requires decent GPU capabilities.
          </li>
          <li>
            For better performance on mobile or lower-end devices, consider
            reducing the star and sparkle counts.
          </li>
          <li>
            Setting{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded">
              showPlanets={false}
            </code>{" "}
            will also improve performance as it reduces the number of objects to
            render.
          </li>
          <li>
            The component uses suspense for asynchronous loading of 3D elements,
            ensuring the rest of your page remains responsive.
          </li>
        </ul>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg mt-4">
        <h4 className="text-sm font-semibold text-purple-700">
          Creative Design Tips
        </h4>
        <ul className="text-sm text-purple-600 mt-2 list-disc pl-4 space-y-1">
          <li>
            Add{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded">
              backdrop-blur-md
            </code>{" "}
            to content containers over the space background for a modern,
            frosted glass effect.
          </li>
          <li>
            Use{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded">text-shadow</code>{" "}
            on text elements to make them stand out against the detailed
            background.
          </li>
          <li>
            Consider using space-themed fonts like "Space Mono" or "Nova Square"
            for text overlay.
          </li>
          <li>
            For landing pages, use the full viewport height (
            <code className="bg-gray-100 px-1 py-0.5 rounded">
              height="100vh"
            </code>
            ) to create an immersive first impression.
          </li>
          <li>
            Combine with parallax scrolling for content sections to enhance the
            feeling of moving through space as users scroll.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CosmicVoyageCustomizationCode;
