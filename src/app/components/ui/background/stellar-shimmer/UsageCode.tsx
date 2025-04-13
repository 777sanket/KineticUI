"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const StellarShimmerUsageCode: React.FC = () => {
  const code = `import StellarShimmer from './components/StellarShimmer';

// Basic usage as a hero section
function HeroSection() {
  return (
    <StellarShimmer className="rounded-lg">
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-white p-8 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Discover the Universe</h1>
          <p className="text-xl mb-6">
            Explore the wonders of space with our interactive astronomy platform.
          </p>
          <button className="px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-opacity-90 transition-all">
            Begin Exploration
          </button>
        </div>
      </div>
    </StellarShimmer>
  );
}

// Blue tinted stars
function BlueStars() {
  return (
    <StellarShimmer
      particleColor="#a3c5ff"
      glowColor="#4287f5"
      particleCount={15000}
      height="300px"
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-white">Blue Nebula</h2>
      </div>
    </StellarShimmer>
  );
}

// Golden shimmer with more particles
function GoldenStars() {
  return (
    <StellarShimmer
      particleColor="#ffe78a"
      glowColor="#ffc107"
      glowOpacity={0.12}
      particleCount={20000}
      rotationSpeed={0.7}
      height="300px"
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-white">Golden Dust</h2>
      </div>
    </StellarShimmer>
  );
}

// Subtle background for dark-themed UI
function MinimalBackground() {
  return (
    <StellarShimmer
      particleCount={5000}
      glowOpacity={0.05}
      rotationSpeed={0.5}
      className="fixed inset-0 -z-10"
    >
      {/* This creates a subtle background for your entire application */}
      {null}
    </StellarShimmer>
  );
}

// Full-page background with login form
function LoginPage() {
  return (
    <StellarShimmer className="min-h-screen">
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="bg-black bg-opacity-50 backdrop-blur-md p-8 rounded-xl text-white max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 bg-black bg-opacity-50 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <input 
                type="password" 
                id="password" 
                className="w-full px-4 py-2 bg-black bg-opacity-50 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-300 hover:text-blue-200">Forgot password?</a>
            </div>
            
            <button 
              type="submit"
              className="w-full py-3 bg-white text-black rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Sign in
            </button>
          </form>
          
          <p className="mt-6 text-center text-sm text-gray-400">
            Don't have an account? <a href="#" className="text-blue-300 hover:text-blue-200">Sign up</a>
          </p>
        </div>
      </div>
    </StellarShimmer>
  );
}`;

  return <CodeBlock code={code} language="typescript" />;
};

export default StellarShimmerUsageCode;
