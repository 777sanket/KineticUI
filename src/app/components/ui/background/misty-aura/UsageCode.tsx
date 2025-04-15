"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const MistyAuraUsageCode: React.FC = () => {
  const code = `import MistyAura from './components/MistyAura';

// Basic usage as a hero section
function HeroSection() {
  return (
    <MistyAura className="rounded-lg">
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-white p-8 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Ethereal Experience</h1>
          <p className="text-xl mb-6">
            Immerse yourself in a world of mystical fog and vibrant colors.
          </p>
          <button className="px-6 py-3 bg-teal-500 rounded-lg font-bold hover:bg-teal-600 transition-all">
            Explore
          </button>
        </div>
      </div>
    </MistyAura>
  );
}

// Blue-purple theme
function CalmOcean() {
  return (
    <MistyAura 
      highlightColor="#ffffff"
      midtoneColor="#4169e1"
      lowlightColor="#191970"
      baseColor="#000033"
      blurFactor={1.6}
      zoom={1.5}
      height="300px"
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-white">Ocean Depths</h2>
      </div>
    </MistyAura>
  );
}

// Vibrant pink-orange sunset theme
function VibrantSunset() {
  return (
    <MistyAura 
      highlightColor="#ffffff"
      midtoneColor="#ff6b6b"
      lowlightColor="#8a2387"
      baseColor="#000000"
      blurFactor={1.5}
      speed={0.8}
      height="300px"
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-white">Electric Dreams</h2>
      </div>
    </MistyAura>
  );
}

// Golden luxury theme with slower motion
function GoldenLuxury() {
  return (
    <MistyAura 
      highlightColor="#ffffff"
      midtoneColor="#ffd700"
      lowlightColor="#614e1a"
      baseColor="#0a0a0a"
      blurFactor={1.2}
      speed={0.5}
      zoom={1.0}
      height="300px"
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-white">Golden Aura</h2>
      </div>
    </MistyAura>
  );
}

// Full-page background with content
function MistyLayout() {
  return (
    <div className="min-h-screen">
      <MistyAura className="fixed inset-0">
        <div className="container mx-auto py-20">
          <div className="bg-black bg-opacity-30 backdrop-blur-md p-8 rounded-xl text-white max-w-xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Foggy Realms</h1>
            <p className="mb-6">
              Venture into the unknown with our immersive experiences designed to 
              transport you to another dimension. The mist conceals wonders beyond imagination.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-teal-500 rounded-lg font-bold hover:bg-teal-600 transition-all">
                Begin Journey
              </button>
              <button className="px-6 py-3 bg-transparent border border-white rounded-lg font-bold hover:bg-white hover:text-black transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </MistyAura>
    </div>
  );
}

// Login form with misty background
function LoginPage() {
  return (
    <MistyAura 
      className="min-h-screen"
      midtoneColor="#6a11cb"
      lowlightColor="#2575fc"
    >
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="bg-black bg-opacity-50 backdrop-blur-md p-8 rounded-xl text-white max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 bg-gray-900 bg-opacity-50 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <input 
                type="password" 
                id="password" 
                className="w-full px-4 py-2 bg-gray-900 bg-opacity-50 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Remember me</span>
              </label>
              <a href="#" className="text-sm text-teal-300 hover:text-teal-200">Forgot password?</a>
            </div>
            
            <button 
              type="submit"
              className="w-full py-3 bg-teal-600 rounded-lg font-medium hover:bg-teal-700 transition-colors"
            >
              Sign in
            </button>
          </form>
          
          <p className="mt-6 text-center text-sm text-gray-400">
            Don't have an account? <a href="#" className="text-teal-300 hover:text-teal-200">Sign up</a>
          </p>
        </div>
      </div>
    </MistyAura>
  );
}`;

  return <CodeBlock code={code} language="typescript" />;
};

export default MistyAuraUsageCode;
