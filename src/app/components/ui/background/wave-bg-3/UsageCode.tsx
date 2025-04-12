"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const WaveBackground3UsageCode: React.FC = () => {
  const code = `import WaveBackground3 from './components/WaveBackground3';

// Basic usage as a hero section
function HeroSection() {
  return (
    <WaveBackground3 className="rounded-lg">
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-white p-8 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Explore the Cosmos</h1>
          <p className="text-xl mb-6">
            Discover the wonders of the universe with our interactive astronomy courses.
          </p>
          <button className="px-6 py-3 bg-indigo-600 rounded-lg font-bold hover:bg-indigo-700 transition-all">
            Start Journey
          </button>
        </div>
      </div>
    </WaveBackground3>
  );
}

// Reduced particle count for better performance on mobile
function MobileOptimized() {
  return (
    <WaveBackground3 
      particleCount={40000}
      height="300px"
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-white">Mobile-Friendly Stars</h2>
      </div>
    </WaveBackground3>
  );
}

// Red cosmic dust theme
function RedCosmic() {
  return (
    <WaveBackground3 
      backgroundColor="#0a0505"
      particleColors={{
        hueRange: [0.98, 0.02],  // Red hues
        saturation: [0.5, 0.8],
        lightness: [0.5, 0.7]
      }}
      animationSpeedFactor={100}
      height="300px"
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-white">Red Cosmic Dust</h2>
      </div>
    </WaveBackground3>
  );
}

// Slightly faster animation with different color
function FastGreenStars() {
  return (
    <WaveBackground3 
      backgroundColor="#050a05"
      particleColors={{
        hueRange: [0.3, 0.4],  // Green hues
        saturation: [0.4, 0.7],
        lightness: [0.5, 0.8]
      }}
      animationSpeedFactor={80}
      height="300px"
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-white">Emerald Galaxy</h2>
      </div>
    </WaveBackground3>
  );
}

// Full-page background with content
function SpaceThemeLayout() {
  return (
    <div className="min-h-screen">
      <WaveBackground3 className="fixed inset-0">
        <div className="container mx-auto py-20">
          <div className="bg-black bg-opacity-50 backdrop-blur-md p-8 rounded-xl text-white max-w-xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Space Academy</h1>
            <p className="mb-6">
              Join our immersive learning experience and explore the cosmos like never before.
              Our cutting-edge curriculum takes you on a journey through the stars.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-indigo-600 rounded-lg font-bold hover:bg-indigo-700 transition-all">
                Apply Now
              </button>
              <button className="px-6 py-3 bg-transparent border border-white rounded-lg font-bold hover:bg-white hover:text-indigo-900 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </WaveBackground3>
    </div>
  );
}

// Responsive particle count based on screen size
function ResponsiveCosmicDust() {
  return (
    <>
      {/* This is just an example - you would implement the actual logic with useEffect and window.innerWidth */}
      <div className="block md:hidden">
        {/* Mobile version with fewer particles */}
        <WaveBackground3 
          particleCount={30000}
          height="400px"
        >
          <div className="flex items-center justify-center h-full">
            <h2 className="text-2xl font-bold text-white">Mobile Cosmos</h2>
          </div>
        </WaveBackground3>
      </div>
      
      <div className="hidden md:block">
        {/* Desktop version with full particle count */}
        <WaveBackground3 
          particleCount={100000}
          height="400px"
        >
          <div className="flex items-center justify-center h-full">
            <h2 className="text-3xl font-bold text-white">Full Cosmic Experience</h2>
          </div>
        </WaveBackground3>
      </div>
    </>
  );
}`;

  return <CodeBlock code={code} language="typescript" />;
};

export default WaveBackground3UsageCode;
