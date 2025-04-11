"use client";
import React from "react";

const AnimatedBorderButtonPreview: React.FC = () => {
  return (
    <button className="relative px-6 py-3 font-bold text-white rounded-lg group">
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-0 -skew-x-6 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-0"></span>
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform skew-x-6 bg-purple-700 group-hover:bg-purple-500 group-hover:skew-x-0"></span>
      <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition duration-300 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
      <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition duration-300 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
      <span className="relative">Hover Me</span>
    </button>
  );
};

export default AnimatedBorderButtonPreview;
