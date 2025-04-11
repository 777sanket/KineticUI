"use client";
import React, { useEffect, useState } from "react";

const FadedTextPreview: React.FC = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Create a fade in/out animation
    const fadeInterval = setInterval(() => {
      setOpacity((prev) => {
        // Oscillate opacity between 0 and 1
        return prev >= 1 ? 0 : prev + 0.1;
      });
    }, 150);

    return () => clearInterval(fadeInterval);
  }, []);

  return (
    <div className="p-4 text-center">
      <h1
        className="text-4xl font-bold text-blue-600 transition-opacity duration-500"
        style={{ opacity }}
      >
        Faded Text Example
      </h1>
    </div>
  );
};

export default FadedTextPreview;
