"use client";
import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const FadedTextComponentCode: React.FC = () => {
  const code = `"use client";
import React, { useEffect, useState } from 'react';

interface FadedTextProps {
  text: string;
  className?: string;
  fadeInDuration?: number;  // Duration in ms
  fadeOutDuration?: number; // Duration in ms
  visibleDuration?: number; // Duration in ms
  hiddenDuration?: number;  // Duration in ms
  initialDelay?: number;    // Delay before animation starts in ms
  repeat?: boolean;         // Whether to repeat the animation
}

const FadedText: React.FC<FadedTextProps> = ({
  text,
  className = "text-2xl font-bold",
  fadeInDuration = 1000,
  fadeOutDuration = 1000,
  visibleDuration = 2000,
  hiddenDuration = 500,
  initialDelay = 0, 
  repeat = true
}) => {
  const [opacity, setOpacity] = useState(0);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // Initial delay
    const startAnimation = () => {
      // Fade in
      setVisible(true);
      const fadeInStep = 1 / (fadeInDuration / 50); // Calculate step size
      let currentOpacity = 0;
      
      const fadeIn = () => {
        if (currentOpacity < 1) {
          currentOpacity += fadeInStep;
          setOpacity(Math.min(currentOpacity, 1));
          timeout = setTimeout(fadeIn, 50);
        } else {
          // Keep visible for visibleDuration
          timeout = setTimeout(fadeOut, visibleDuration);
        }
      };
      
      // Fade out function
      const fadeOut = () => {
        const fadeOutStep = 1 / (fadeOutDuration / 50);
        let currentOpacity = 1;
        
        const performFadeOut = () => {
          if (currentOpacity > 0) {
            currentOpacity -= fadeOutStep;
            setOpacity(Math.max(currentOpacity, 0));
            timeout = setTimeout(performFadeOut, 50);
          } else {
            setVisible(false);
            
            // If repeat is enabled, wait hiddenDuration and restart
            if (repeat) {
              timeout = setTimeout(startAnimation, hiddenDuration);
            }
          }
        };
        
        performFadeOut();
      };
      
      // Start fade in
      fadeIn();
    };
    
    // Start the animation after initial delay
    timeout = setTimeout(startAnimation, initialDelay);
    
    // Cleanup
    return () => clearTimeout(timeout);
  }, [fadeInDuration, fadeOutDuration, visibleDuration, hiddenDuration, initialDelay, repeat]);
  
  // Apply combined classes
  const textClasses = \`transition-opacity \${className}\`;
  
  return (
    <div className={textClasses} style={{ opacity }}>
      {text}
    </div>
  );
};

export default FadedText;`;

  return <CodeBlock code={code} language="typescript" />;
};

export default FadedTextComponentCode;
