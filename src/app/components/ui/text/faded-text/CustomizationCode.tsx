"use client";
import React from "react";

const FadedTextCustomizationCode: React.FC = () => {
  return (
    <div className="prose prose-sm">
      <p>The FadedText component offers multiple customization options:</p>

      <h3 className="text-lg font-medium mt-4">Timing Customization</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <code className="bg-gray-100 px-1 py-0.5 rounded">
            fadeInDuration
          </code>
          : Controls how long the fade-in animation takes (in milliseconds).
          Default: 1000ms
        </li>
        <li>
          <code className="bg-gray-100 px-1 py-0.5 rounded">
            fadeOutDuration
          </code>
          : Controls how long the fade-out animation takes (in milliseconds).
          Default: 1000ms
        </li>
        <li>
          <code className="bg-gray-100 px-1 py-0.5 rounded">
            visibleDuration
          </code>
          : How long the text stays fully visible before fading out (in
          milliseconds). Default: 2000ms
        </li>
        <li>
          <code className="bg-gray-100 px-1 py-0.5 rounded">
            hiddenDuration
          </code>
          : How long the text stays hidden before the next fade-in (in
          milliseconds). Default: 500ms
        </li>
        <li>
          <code className="bg-gray-100 px-1 py-0.5 rounded">initialDelay</code>:
          Delay before the animation starts (in milliseconds). Default: 0ms
        </li>
        <li>
          <code className="bg-gray-100 px-1 py-0.5 rounded">repeat</code>:
          Whether the animation should repeat. Set to false for a one-time fade
          in/out. Default: true
        </li>
      </ul>

      <h3 className="text-lg font-medium mt-4">Styling Customization</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <code className="bg-gray-100 px-1 py-0.5 rounded">className</code>:
          Additional CSS classes to apply to the text. Use this to customize
          font size, color, weight, etc.
        </li>
      </ul>

      <h3 className="text-lg font-medium mt-4">Examples</h3>

      <p className="mt-2">For a slow, dramatic fade:</p>
      <pre className="bg-gray-100 p-2 rounded">
        {`<FadedText 
  text="Dramatic effect" 
  fadeInDuration={3000}
  fadeOutDuration={3000}
  visibleDuration={5000}
  className="text-4xl font-bold text-indigo-800"
/>`}
      </pre>

      <p className="mt-2">For a quick, attention-grabbing effect:</p>
      <pre className="bg-gray-100 p-2 rounded">
        {`<FadedText 
  text="Quick flash!" 
  fadeInDuration={300}
  fadeOutDuration={300}
  visibleDuration={1000}
  hiddenDuration={1000}
  className="text-3xl font-extrabold text-red-600"
/>`}
      </pre>

      <p className="mt-2">For text that fades in once and stays visible:</p>
      <pre className="bg-gray-100 p-2 rounded">
        {`<FadedText 
  text="I fade in and stay" 
  fadeOutDuration={0}
  repeat={false}
  className="text-2xl text-green-700"
/>`}
      </pre>
    </div>
  );
};

export default FadedTextCustomizationCode;
