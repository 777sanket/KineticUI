"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const GradientBackgroundCustomizationCode: React.FC = () => {
  const tailwindConfig = `// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}`;

  return (
    <div className="prose prose-sm">
      <p>You can customize this component by:</p>
      <ul className="list-disc pl-5 space-y-2 mt-2">
        <li>
          Changing the gradient colors in the{" "}
          <code className="bg-sky-300 px-1 py-0.5 rounded">
            from-purple-500 via-pink-500 to-red-500
          </code>{" "}
          classes.
        </li>
        <li>
          Adjusting the animation duration by modifying the{" "}
          <code className="bg-sky-300 px-1 py-0.5 rounded">15s</code> value in
          the tailwind.config.js file.
        </li>
        <li>
          Changing the{" "}
          <code className="bg-sky-300 px-1 py-0.5 rounded">h-64</code> class to
          adjust the height of the background container.
        </li>
        <li>
          Adding additional transformations or effects to the gradient animation
          in the keyframes configuration.
        </li>
      </ul>
      <p className="mt-4">Here&apos;s the required tailwind.config.js setup:</p>
      <div className="mt-2">
        <CodeBlock code={tailwindConfig} language="javascript" />
      </div>
    </div>
  );
};

export default GradientBackgroundCustomizationCode;
