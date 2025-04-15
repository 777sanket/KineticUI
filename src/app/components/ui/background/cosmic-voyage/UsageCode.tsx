"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const CosmicVoyageUsageCode: React.FC = () => {
  const code = `import CosmicVoyage from './components/CosmicVoyage';

// Basic usage as a hero section
function HeroSection() {
  return (
    <CosmicVoyage className="rounded-lg">
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-white p-8 max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">Explore The Universe</h1>
          <p className="text-xl mb-6">
            Journey through stars and planets in this immersive cosmic experience.
          </p>
          <button className="px-6 py-3 bg-indigo-600 rounded-lg font-bold hover:bg-indigo-700 transition-all">
            Begin Exploration
          </button>
        </div>
      </div>
    </CosmicVoyage>
  );
}

// More stars, faster rotation
function IntenseSpace() {
  return (
    <CosmicVoyage 
      starsCount={20000}
      sparklesCount={1000}
      autoRotateSpeed={1.5}
      height="300px"
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-white">Deep Space</h2>
      </div>
    </CosmicVoyage>
  );
}

// Blue-tinted space
function BlueSpace() {
  return (
    <CosmicVoyage 
      backgroundColor="radial-gradient(circle at center, #000033 0%, #000011 100%)"
      height="300px"
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-white">Frozen Cosmos</h2>
      </div>
    </CosmicVoyage>
  );
}

// Just stars, no planets
function MinimalistSpace() {
  return (
    <CosmicVoyage 
      showPlanets={false}
      starsCount={5000}
      sparklesCount={200}
      height="300px"
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-white">Distant Stars</h2>
      </div>
    </CosmicVoyage>
  );
}

// Full-page background with content
function SpaceLayout() {
  return (
    <div className="min-h-screen">
      <CosmicVoyage className="fixed inset-0">
        <div className="container mx-auto py-20">
          <div className="bg-black bg-opacity-40 backdrop-blur-md p-8 rounded-xl text-white max-w-xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Space Explorer</h1>
            <p className="mb-6">
              Venture into the unknown depths of our interactive universe simulator.
              Discover planets, stars, and the mysteries of cosmic phenomena.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-indigo-600 rounded-lg font-bold hover:bg-indigo-700 transition-all">
                Launch Mission
              </button>
              <button className="px-6 py-3 bg-transparent border border-white rounded-lg font-bold hover:bg-white hover:text-black transition-all">
                View Star Map
              </button>
            </div>
          </div>
        </div>
      </CosmicVoyage>
    </div>
  );
}

// Space-themed login form
function SpaceLoginPage() {
  return (
    <CosmicVoyage className="min-h-screen" starsCount={8000}>
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="bg-black bg-opacity-50 backdrop-blur-md p-8 rounded-xl text-white max-w-md w-full border border-indigo-900">
          <h2 className="text-2xl font-bold mb-6 text-center">Interstellar Login</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Space Traveler ID</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 bg-gray-900 bg-opacity-70 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">Access Code</label>
              <input 
                type="password" 
                id="password" 
                className="w-full px-4 py-2 bg-gray-900 bg-opacity-70 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Remember me</span>
              </label>
              <a href="#" className="text-sm text-indigo-300 hover:text-indigo-200">Forgot password?</a>
            </div>
            
            <button 
              type="submit"
              className="w-full py-3 bg-indigo-600 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Enter Space Station
            </button>
          </form>
          
          <p className="mt-6 text-center text-sm text-gray-400">
            Don't have an account? <a href="#" className="text-indigo-300 hover:text-indigo-200">Register</a>
          </p>
        </div>
      </div>
    </CosmicVoyage>
  );
}`;

  return <CodeBlock code={code} language="typescript" />;
};

export default CosmicVoyageUsageCode;
