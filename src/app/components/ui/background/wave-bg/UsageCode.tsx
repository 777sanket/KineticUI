"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const WaveBackgroundUsageCode: React.FC = () => {
  const code = `import WaveBackground from './components/WaveBackground';

function Hero() {
  return (
    <WaveBackground className="rounded-lg">
      <div className="text-center text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-xl mb-6">Discover amazing features and content</p>
        <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-bold hover:bg-opacity-90 transition-all">
          Get Started
        </button>
      </div>
    </WaveBackground>
  );
}

// Custom color example
function CustomWaves() {
  return (
    <WaveBackground 
      waveColors={[
        "rgba(239, 68, 68, 0.3)",  // red
        "rgba(249, 115, 22, 0.4)",  // orange
        "rgba(245, 158, 11, 0.5)",  // amber
        "rgba(234, 179, 8, 0.6)",   // yellow
      ]}
      backgroundColor="rgb(31, 41, 55)" // gray-800
      height="300px"
      speed={1.5} // faster animations
    >
      <h2 className="text-3xl font-bold text-white">Custom Warm Waves</h2>
    </WaveBackground>
  );
}

// Full-page background
function FullPageLayout() {
  return (
    <div className="min-h-screen">
      <WaveBackground className="h-screen fixed inset-0">
        <div className="container mx-auto">
          {/* Your page content here */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl text-white max-w-xl">
            <h1 className="text-4xl font-bold mb-4">Immersive Experience</h1>
            <p className="mb-6">The wave animation creates a dynamic and engaging background for your entire website.</p>
            <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-bold">Learn More</button>
          </div>
        </div>
      </WaveBackground>
    </div>
  );
}`;

  return <CodeBlock code={code} language="typescript" />;
};

export default WaveBackgroundUsageCode;
