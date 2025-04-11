"use client";

import React, { useState, useEffect } from "react";

const TypewriterTextPreview: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = "Welcome to our Component Library";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
    if (index === fullText.length) {
      const timeout = setTimeout(() => {
        setText("");
        setIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <h1 className="text-4xl font-bold text-blue-500">
      {text}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

export default TypewriterTextPreview;
