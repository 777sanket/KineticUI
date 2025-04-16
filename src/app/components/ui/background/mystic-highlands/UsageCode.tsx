"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const MysticHighlandsUsageCode: React.FC = () => {
  const code = `import MysticHighlands from './components/MysticHighlands';

// Basic usage as a hero section
function HeroSection() {
  return (
    <MysticHighlands className="rounded-lg">
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-white p-8 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Journey to the Highlands</h1>
          <p className="text-xl mb-6 drop-shadow-md">
            Explore the mystical world beyond the fog, where adventure awaits.
          </p>
          <button className="px-6 py-3 bg-indigo-700 rounded-lg font-bold hover:bg-indigo-600 transition-all">
            Begin Adventure
          </button>
        </div>
      </div>
    </MysticHighlands>
  );
}

// Blue-toned variant
function FrozenHighlands() {
  return (
    <MysticHighlands 
      fogColor="#051530"
      terrainColor="#1a2a3a"
      accentLightColor="#3a80ff"
      height="300px"
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-white drop-shadow-lg">Frozen Peaks</h2>
      </div>
    </MysticHighlands>
  );
}

// Sunset/twilight variant
function TwilightValley() {
  return (
    <MysticHighlands 
      fogColor="#280030"
      terrainColor="#331a33"
      ambientLightColor="#331133"
      directionalLightColor="#ff8866"
      accentLightColor="#ff3377"
      height="300px"
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-white drop-shadow-lg">Twilight Valley</h2>
      </div>
    </MysticHighlands>
  );
}

// Green forest variant with slower movement
function EnchantedForest() {
  return (
    <MysticHighlands 
      fogColor="#051a10"
      terrainColor="#0c2d1a"
      ambientLightColor="#0a1a10"
      accentLightColor="#33aa66"
      cameraMovementSpeed={0.7}
      height="300px"
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-white drop-shadow-lg">Enchanted Forest</h2>
      </div>
    </MysticHighlands>
  );
}

// Full-page background with content
function AdventurePortal() {
  return (
    <div className="min-h-screen">
      <MysticHighlands className="fixed inset-0">
        <div className="container mx-auto py-20">
          <div className="bg-black bg-opacity-40 backdrop-blur-sm p-8 rounded-xl text-white max-w-xl mx-auto border border-gray-700">
            <h1 className="text-4xl font-bold mb-4">Adventure Awaits</h1>
            <p className="mb-6">
              Beyond the misty highlands lie realms of untold wonder and danger. 
              Choose your path wisely, traveler, for each decision shapes your destiny.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-indigo-700 hover:bg-indigo-600 rounded-lg font-bold transition-all">
                The Mountain Path
              </button>
              <button className="p-4 bg-purple-800 hover:bg-purple-700 rounded-lg font-bold transition-all">
                The Hidden Valley
              </button>
              <button className="p-4 bg-blue-800 hover:bg-blue-700 rounded-lg font-bold transition-all">
                The Ancient Forest
              </button>
              <button className="p-4 bg-teal-800 hover:bg-teal-700 rounded-lg font-bold transition-all">
                The Crystal Caves
              </button>
            </div>
          </div>
        </div>
      </MysticHighlands>
    </div>
  );
}

// Game interface example
function GameInterface() {
  return (
    <MysticHighlands className="min-h-screen">
      <div className="container mx-auto p-4 h-full flex flex-col">
        {/* Game HUD header */}
        <div className="flex justify-between items-center mb-4">
          <div className="bg-black bg-opacity-50 p-3 rounded-lg">
            <h2 className="text-white font-bold">Highland Explorer</h2>
          </div>
          <div className="flex gap-4">
            <div className="bg-black bg-opacity-50 p-3 rounded-lg">
              <p className="text-yellow-400 font-bold">⭐ 145 pts</p>
            </div>
            <div className="bg-black bg-opacity-50 p-3 rounded-lg">
              <p className="text-green-400 font-bold">❤️ 85/100</p>
            </div>
          </div>
        </div>
        
        {/* Game content - takes most of the space */}
        <div className="flex-1"></div>
        
        {/* Game controls footer */}
        <div className="mt-auto">
          <div className="bg-black bg-opacity-60 backdrop-blur-sm p-4 rounded-t-xl border-t border-gray-700">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white text-3xl">
                👤
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold">Mountain Guide</h3>
                <p className="text-gray-300">
                  The path ahead is treacherous. We must be careful of the mist - many have lost their way in these mountains.
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-3">
              <button className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-lg">Ask about path</button>
              <button className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-lg">Continue journey</button>
            </div>
          </div>
        </div>
      </div>
    </MysticHighlands>
  );
}`;

  return <CodeBlock code={code} language="typescript" />;
};

export default MysticHighlandsUsageCode;
