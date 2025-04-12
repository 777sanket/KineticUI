"use client";

import React from "react";
import { motion } from "framer-motion";

const WaveBackgroundPreview: React.FC = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden bg-gray-900 rounded-lg">
      {/* First wave */}
      <motion.div
        className="absolute w-[200%] h-40 bottom-[-10px] left-[-50%]"
        style={{
          background: "rgba(59, 130, 246, 0.3)",
          borderRadius: "100% 100% 0 0",
        }}
        animate={{
          y: [10, -5, 10],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Second wave */}
      <motion.div
        className="absolute w-[200%] h-32 bottom-[-5px] left-[-30%]"
        style={{
          background: "rgba(99, 102, 241, 0.4)",
          borderRadius: "100% 100% 0 0",
        }}
        animate={{
          y: [5, -10, 5],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Third wave */}
      <motion.div
        className="absolute w-[200%] h-24 bottom-0 left-[-20%]"
        style={{
          background: "rgba(139, 92, 246, 0.5)",
          borderRadius: "100% 100% 0 0",
        }}
        animate={{
          y: [0, -8, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Fourth wave */}
      <motion.div
        className="absolute w-[200%] h-16 bottom-[5px] left-[-40%]"
        style={{
          background: "rgba(168, 85, 247, 0.6)",
          borderRadius: "100% 100% 0 0",
        }}
        animate={{
          y: [-5, 5, -5],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <p className="text-white text-xl font-bold">Wave Background</p>
      </div>
    </div>
  );
};

export default WaveBackgroundPreview;
