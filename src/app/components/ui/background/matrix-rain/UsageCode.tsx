"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const MatrixRainUsageCode: React.FC = () => {
  const code = `import MatrixRain from './components/MatrixRain';

// Basic usage as a hero section
function HeroSection() {
  return (
    <MatrixRain className="rounded-lg">
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-green-400 p-8 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4 glow-text">Enter The Matrix</h1>
          <p className="text-xl mb-6">
            A digital realm of endless possibilities awaits.
          </p>
          <button className="px-6 py-3 bg-green-600 text-black rounded-lg font-bold hover:bg-green-400 transition-all">
            Take The Red Pill
          </button>
        </div>
      </div>
    </MatrixRain>
  );
}

// More intense effect with more streaks
function IntenseMatrix() {
  return (
    <MatrixRain 
      streakCount={120}
      longStreakCount={40}
      particleCount={150}
      height="300px"
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-green-400">System Breach</h2>
      </div>
    </MatrixRain>
  );
}

// Blue variant
function BlueMatrix() {
  return (
    <MatrixRain 
      particleColor="rgba(100, 200, 255, {opacity})"
      streakColor="rgba(120, 210, 255, {opacity})"
      backgroundColor="rgba(0, 5, 15, 0.9)"
      height="300px"
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-blue-300">Cyberspace</h2>
      </div>
    </MatrixRain>
  );
}

// Cyberpunk style with magenta color scheme
function CyberpunkMatrix() {
  return (
    <MatrixRain 
      particleColor="rgba(255, 100, 255, {opacity})"
      streakColor="rgba(255, 80, 180, {opacity})"
      backgroundColor="rgba(10, 0, 15, 0.9)"
      height="300px"
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-pink-300">Cyberpunk 2077</h2>
      </div>
    </MatrixRain>
  );
}

// Full-page background with content
function MatrixLayout() {
  return (
    <div className="min-h-screen">
      <MatrixRain className="fixed inset-0">
        <div className="container mx-auto py-20">
          <div className="bg-black bg-opacity-60 backdrop-blur-sm p-8 rounded-xl text-green-400 max-w-xl mx-auto border border-green-900">
            <h1 className="text-4xl font-bold mb-4">System Access</h1>
            <p className="mb-6">
              Enter your credentials to access the mainframe. All unauthorized access attempts will be logged and reported.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Username</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 bg-black bg-opacity-70 border border-green-900 text-green-400 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input 
                  type="password" 
                  className="w-full px-4 py-2 bg-black bg-opacity-70 border border-green-900 text-green-400 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <button className="w-full py-2 bg-green-800 hover:bg-green-700 text-green-300 rounded font-medium">
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </MatrixRain>
    </div>
  );
}`;

  return <CodeBlock code={code} language="typescript" />;
};

export default MatrixRainUsageCode;
