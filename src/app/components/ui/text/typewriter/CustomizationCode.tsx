"use client";

import React from "react";

const TypewriterCustomizationCode: React.FC = () => {
  return (
    <div className="prose prose-sm">
      <p>You can customize this component by:</p>
      <ul className="list-disc pl-5 space-y-2 mt-2">
        <li>
          Adjusting the{" "}
          <code className="bg-sky-300 px-1 py-0.5 rounded">speed</code> prop to
          change how fast the text types out.
        </li>
        <li>
          Modifying the{" "}
          <code className="bg-sky-300 px-1 py-0.5 rounded">delay</code> prop to
          change how long the text remains on screen before resetting.
        </li>
        <li>
          Customizing the{" "}
          <code className="bg-sky-300 px-1 py-0.5 rounded">className</code> prop
          to change text style, color, size, etc.
        </li>
        <li>
          Changing the cursor animation by modifying the{" "}
          <code className="bg-sky-300 px-1 py-0.5 rounded">animate-pulse</code>{" "}
          class.
        </li>
      </ul>
    </div>
  );
};

export default TypewriterCustomizationCode;
