"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const WaveBackground2UsageCode: React.FC = () => {
  const code = `import WaveBackground2 from './components/WaveBackground2';

// Basic usage as a hero section
function HeroSection() {
  return (
    <WaveBackground2 className="rounded-lg">
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-white p-8 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Discover React Joy</h1>
          <p className="text-xl mb-6">
            Learn how to build beautiful, responsive interfaces with React
            and modern JavaScript.
          </p>
          <button className="px-6 py-3 bg-purple-600 rounded-lg font-bold hover:bg-purple-700 transition-all">
            Enroll Now
          </button>
        </div>
      </div>
    </WaveBackground2>
  );
}

// Custom wave configuration
function CustomWaves() {
  return (
    <WaveBackground2 
      backgroundGradient={{
        from: "#0f172a", // dark blue
        to: "#1e3a8a"    // deep blue
      }}
      waveConfigs={[
        { color: 'rgba(59, 130, 246, 0.2)', shadow: '0 0 15px rgba(59, 130, 246, 0.4)', offset: 0 },
        { color: 'rgba(37, 99, 235, 0.25)', shadow: '0 0 12px rgba(37, 99, 235, 0.5)', offset: 20 },
        { color: 'rgba(96, 165, 250, 0.2)', shadow: '0 0 20px rgba(96, 165, 250, 0.3)', offset: 40 },
        { color: 'rgba(147, 197, 253, 0.15)', shadow: '0 0 10px rgba(147, 197, 253, 0.4)', offset: 60 },
      ]}
      height="300px"
      animationSpeed={0.8} // slower animations
      waveCount={4} // only use 4 waves
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-white">Ocean Waves Theme</h2>
      </div>
    </WaveBackground2>
  );
}

// Green theme with faster waves
function GreenThemeWaves() {
  return (
    <WaveBackground2 
      backgroundGradient={{
        from: "#064e3b", // dark green
        to: "#065f46"    // medium green
      }}
      waveConfigs={[
        { color: 'rgba(5, 150, 105, 0.2)', shadow: '0 0 15px rgba(5, 150, 105, 0.4)', offset: 0 },
        { color: 'rgba(16, 185, 129, 0.25)', shadow: '0 0 12px rgba(16, 185, 129, 0.5)', offset: 20 },
        { color: 'rgba(52, 211, 153, 0.2)', shadow: '0 0 20px rgba(52, 211, 153, 0.3)', offset: 40 },
        { color: 'rgba(110, 231, 183, 0.15)', shadow: '0 0 10px rgba(110, 231, 183, 0.4)', offset: 60 },
        { color: 'rgba(167, 243, 208, 0.18)', shadow: '0 0 18px rgba(167, 243, 208, 0.35)', offset: 80 },
      ]}
      animationSpeed={1.5} // faster animations
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-white">Forest Waves</h2>
      </div>
    </WaveBackground2>
  );
}

// Full-page background with content
function FullPageLayout() {
  return (
    <div className="min-h-screen">
      <WaveBackground2 className="fixed inset-0">
        <div className="container mx-auto py-20">
          <div className="bg-black bg-opacity-30 backdrop-blur-sm p-8 rounded-xl text-white max-w-xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Learn React</h1>
            <p className="mb-6">
              Master React with our comprehensive course. We'll take you from beginner
              to professional with step-by-step tutorials and real-world projects.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-purple-600 rounded-lg font-bold hover:bg-purple-700 transition-all">
                Get Started
              </button>
              <button className="px-6 py-3 bg-transparent border border-white rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </WaveBackground2>
    </div>
  );
}`;

  return <CodeBlock code={code} language="typescript" />;
};

export default WaveBackground2UsageCode;
