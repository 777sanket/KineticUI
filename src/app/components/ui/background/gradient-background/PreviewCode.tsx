"use client";

import React from "react";

const AnimatedGradientBackgroundPreview: React.FC = () => {
  return (
    <div className="relative overflow-hidden w-full h-64 rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x"></div>
      <div className="relative z-10 h-full flex items-center justify-center text-white">
        <h2 className="text-2xl font-bold">Animated Gradient Background</h2>
      </div>
    </div>
  );
};

export default AnimatedGradientBackgroundPreview;
