"use client";
import React from "react";

const AnimatedBorderButtonCustomizationCode: React.FC = () => {
  return (
    <div className="prose prose-sm">
      <p>You can customize this button component in several ways:</p>
      <ul className="list-disc pl-5 space-y-2 mt-2">
        <li>
          Change the{" "}
          <code className="bg-sky-300 px-1 py-0.5 rounded">primary</code> prop
          to switch between purple and blue color schemes.
        </li>
        <li>
          Customize the animation speed by modifying the{" "}
          <code className="bg-sky-300 px-1 py-0.5 rounded">duration-300</code>{" "}
          class.
        </li>
        <li>
          Adjust the skew angle by changing the{" "}
          <code className="bg-sky-300 px-1 py-0.5 rounded">-skew-x-6</code> and{" "}
          <code className="bg-sky-300 px-1 py-0.5 rounded">skew-x-6</code>{" "}
          values.
        </li>
        <li>
          Pass additional classes using the{" "}
          <code className="bg-sky-300 px-1 py-0.5 rounded">className</code> prop
          to override styles.
        </li>
        <li>
          Change the color scheme by modifying the color classes (e.g.,{" "}
          <code className="bg-sky-300 px-1 py-0.5 rounded">bg-purple-500</code>,{" "}
          <code className="bg-sky-300 px-1 py-0.5 rounded">bg-purple-700</code>
          ).
        </li>
      </ul>
      <p className="mt-4">
        For a completely different animation, you can modify the transform
        properties in the span elements.
      </p>
    </div>
  );
};

export default AnimatedBorderButtonCustomizationCode;
