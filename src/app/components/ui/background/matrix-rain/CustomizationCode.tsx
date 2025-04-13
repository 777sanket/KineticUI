"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const MatrixRainCustomizationCode: React.FC = () => {
  return (
    <div className="prose prose-sm">
      <p>
        The Matrix Rain background offers several customization options to
        create different digital effects:
      </p>

      <h3 className="text-lg font-medium mt-4">Background Color</h3>
      <p>
        Customize the background gradient base color using the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">backgroundColor</code>{" "}
        prop:
      </p>
      <CodeBlock
        code={`<MatrixRain backgroundColor="rgba(0, 10, 5, 0.9)" /> // Default dark green
<MatrixRain backgroundColor="rgba(0, 5, 15, 0.9)" /> // Dark blue
<MatrixRain backgroundColor="rgba(10, 0, 15, 0.9)" /> // Dark purple`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Particle and Streak Counts</h3>
      <p>Control the density of particles and streaks with the count props:</p>
      <CodeBlock
        code={`<MatrixRain 
  particleCount={100} // Default
  streakCount={60}    // Default
  longStreakCount={20} // Default
/>

<MatrixRain 
  particleCount={200} // More particles
  streakCount={120}   // More streaks
  longStreakCount={40} // More prominent streaks
/>`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Particle and Streak Colors</h3>
      <p>Change the colors of the particles and streaks:</p>
      <CodeBlock
        code={`<MatrixRain 
  particleColor="rgba(120, 255, 180, {opacity})" // Default green
  streakColor="rgba(150, 255, 200, {opacity})"   // Default green
/>

<MatrixRain 
  particleColor="rgba(100, 200, 255, {opacity})" // Blue
  streakColor="rgba(120, 210, 255, {opacity})"   // Blue
/>

<MatrixRain 
  particleColor="rgba(255, 100, 255, {opacity})" // Pink/Magenta
  streakColor="rgba(255, 80, 180, {opacity})"    // Pink/Magenta
/>`}
        language="jsx"
      />
      <p>
        Note: The{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">{"{opacity}"}</code>{" "}
        placeholder will be automatically replaced with appropriate opacity
        values during rendering.
      </p>

      <h3 className="text-lg font-medium mt-4">Height</h3>
      <p>
        Set the height of the component using the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">height</code> prop:
      </p>
      <CodeBlock
        code={`<MatrixRain height="500px" /> // Taller
<MatrixRain height="100vh" /> // Full viewport height`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Additional Styling</h3>
      <p>
        You can pass additional classes via the{" "}
        <code className="bg-gray-100 px-1 py-0.5 rounded">className</code> prop:
      </p>
      <CodeBlock
        code={`<MatrixRain className="rounded-2xl shadow-lg" />`}
        language="jsx"
      />

      <h3 className="text-lg font-medium mt-4">Preset Color Themes</h3>

      <h4 className="text-md font-medium mt-3">Classic Green (Default)</h4>
      <CodeBlock
        code={`<MatrixRain 
  backgroundColor="rgba(0, 10, 5, 0.9)"
  particleColor="rgba(120, 255, 180, {opacity})"
  streakColor="rgba(150, 255, 200, {opacity})"
  particleCount={100}
  streakCount={60}
  longStreakCount={20}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Digital Blue</h4>
      <CodeBlock
        code={`<MatrixRain 
  backgroundColor="rgba(0, 5, 15, 0.9)"
  particleColor="rgba(100, 200, 255, {opacity})"
  streakColor="rgba(120, 210, 255, {opacity})"
  particleCount={100}
  streakCount={60}
  longStreakCount={20}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Cyberpunk Magenta</h4>
      <CodeBlock
        code={`<MatrixRain 
  backgroundColor="rgba(10, 0, 15, 0.9)"
  particleColor="rgba(255, 100, 255, {opacity})"
  streakColor="rgba(255, 80, 180, {opacity})"
  particleCount={150}
  streakCount={80}
  longStreakCount={30}
/>`}
        language="jsx"
      />

      <h4 className="text-md font-medium mt-3">Golden Code</h4>
      <CodeBlock
        code={`<MatrixRain 
  backgroundColor="rgba(15, 10, 0, 0.9)"
  particleColor="rgba(255, 215, 0, {opacity})"
  streakColor="rgba(255, 180, 0, {opacity})"
  particleCount={120}
  streakCount={70}
  longStreakCount={25}
/>`}
        language="jsx"
      />

      <div className="bg-blue-50 p-4 rounded-lg mt-4">
        <h4 className="text-sm font-semibold text-blue-700">
          Performance Considerations
        </h4>
        <ul className="text-sm text-blue-600 mt-2 list-disc pl-4 space-y-1">
          <li>
            The animation uses canvas rendering and should perform well on most
            devices.
          </li>
          <li>
            For lower-powered devices, consider reducing particle and streak
            counts.
          </li>
          <li>
            The animation uses <code>requestAnimationFrame</code> which
            automatically pauses when the page is not visible, improving battery
            life.
          </li>
          <li>
            For large-scale implementations, consider implementing a performance
            check and dynamically adjust particle counts based on device
            capabilities.
          </li>
        </ul>
      </div>

      <div className="bg-green-50 p-4 rounded-lg mt-4">
        <h4 className="text-sm font-semibold text-green-700">Creative Uses</h4>
        <ul className="text-sm text-green-600 mt-2 list-disc pl-4 space-y-1">
          <li>
            Login/authentication pages for a cyberpunk or hacker aesthetic
          </li>
          <li>Tech company landing pages or product showcases</li>
          <li>Error or &quot;system breach&quot; pages</li>
          <li>Tech-themed portfolio backgrounds</li>
          <li>
            Combine with monospace fonts and terminal-like UI elements for a
            complete digital experience
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MatrixRainCustomizationCode;
