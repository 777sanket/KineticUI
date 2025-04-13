"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const MatrixRainComponentCode: React.FC = () => {
  const code = `"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";

interface MatrixRainProps {
  children?: ReactNode;
  className?: string;
  particleCount?: number;
  streakCount?: number;
  longStreakCount?: number;
  particleColor?: string;
  streakColor?: string;
  backgroundColor?: string;
  height?: string;
}

const MatrixRain: React.FC<MatrixRainProps> = ({
  children,
  className = "",
  particleCount = 100,
  streakCount = 60,
  longStreakCount = 20,
  particleColor = "rgba(120, 255, 180, {opacity})",
  streakColor = "rgba(150, 255, 200, {opacity})",
  backgroundColor = "rgba(0, 10, 5, 0.9)",
  height = "400px",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const setDimensions = useState({ width: 0, height: 0 })[1];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full size
    const updateSize = () => {
      const parentElement = canvas.parentElement;
      if (!parentElement) return;
      const { offsetWidth, offsetHeight } = parentElement;
      canvas.width = offsetWidth;
      canvas.height = offsetHeight;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // Matrix rain variables
    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = [];

    // Initialize drop positions
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -canvas.height;
    }

    // Add some particles for the floating effect
    type Particle = {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
    };

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    // Create a pattern of vertical streaks
    const streaks: {
      x: number;
      y: number;
      width: number;
      height: number;
      speed: number;
      opacity: number;
    }[] = [];
    for (let i = 0; i < streakCount; i++) {
      streaks.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        width: Math.random() * 2 + 0.5,
        height: (Math.random() * canvas.height) / 2 + canvas.height / 3,
        speed: Math.random() * 0.001 + 0.3,
        opacity: Math.random() * 0.7 + 0.3,
      });
    }

    // Add longer, more prominent streaks
    const longStreaks: {
      x: number;
      y: number;
      width: number;
      height: number;
      speed: number;
      opacity: number;
    }[] = [];
    for (let i = 0; i < longStreakCount; i++) {
      longStreaks.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        width: Math.random() * 3 + 1.5,
        height: Math.random() * canvas.height + canvas.height / 2,
        speed: Math.random() * 4 + 0.3,
        opacity: Math.random() * 0.8 + 0.4,
      });
    }

    // Helper to replace {opacity} in color strings
    const replaceOpacity = (colorStr: string, opacity: number) => {
      return colorStr.replace('{opacity}', opacity.toString());
    };

    // Animation loop
    const draw = () => {
      // Apply semi-transparent black to create trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dark green background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, backgroundColor);
      if (!ctx) return;
      ctx.fillStyle = gradient;
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw floating particles
      particles.forEach((particle) => {
        ctx.beginPath();
        const glow = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2
        );
        glow.addColorStop(0, replaceOpacity(particleColor, particle.opacity));
        glow.addColorStop(1, replaceOpacity(particleColor.replace(/\\d+, \\d+, \\d+/, '0, 0, 0'), 0));
        ctx.fillStyle = glow;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Update particle position
        particle.y += particle.speed * 0.0002;
        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }
      });

      // Draw the long streaks first (behind)
      longStreaks.forEach((streak) => {
        const streakGradient = ctx.createLinearGradient(
          0,
          streak.y,
          0,
          streak.y + streak.height
        );
        streakGradient.addColorStop(
          0,
          replaceOpacity(streakColor, streak.opacity)
        );
        streakGradient.addColorStop(
          0.5,
          replaceOpacity(streakColor.replace(/\\d+, \\d+, \\d+/, '100, 255, 150'), streak.opacity * 0.8)
        );
        streakGradient.addColorStop(
          1,
          replaceOpacity(streakColor.replace(/\\d+, \\d+, \\d+/, '50, 200, 100'), streak.opacity * 0.3)
        );

        ctx.fillStyle = streakGradient;
        ctx.fillRect(streak.x, streak.y, streak.width, streak.height);

        // Update streak position
        streak.y += streak.speed;
        if (streak.y > canvas.height) {
          streak.y = -streak.height;
          streak.x = Math.random() * canvas.width;
          streak.opacity = Math.random() * 0.8 + 0.4;
        }
      });

      // Draw regular streaks
      streaks.forEach((streak) => {
        const streakGradient = ctx.createLinearGradient(
          0,
          streak.y,
          0,
          streak.y + streak.height
        );
        streakGradient.addColorStop(
          0,
          replaceOpacity(streakColor.replace(/\\d+, \\d+, \\d+/, '180, 255, 220'), streak.opacity)
        );
        streakGradient.addColorStop(
          1,
          replaceOpacity(streakColor.replace(/\\d+, \\d+, \\d+/, '100, 200, 150'), streak.opacity * 0.2)
        );

        ctx.fillStyle = streakGradient;
        ctx.fillRect(streak.x, streak.y, streak.width, streak.height);

        // Update streak position
        streak.y += streak.speed;
        if (streak.y > canvas.height) {
          streak.y = -streak.height;
          streak.x = Math.random() * canvas.width;
          streak.opacity = Math.random() * 0.7 + 0.3;
        }
      });

      // Draw matrix-like vertical streams of light
      ctx.fillStyle = "#0f0";
      ctx.font = "15px monospace";
      for (let i = 0; i < drops.length; i++) {
        // Draw random character
        // const character = String.fromCharCode(0x30a0 + Math.random() * 96);

        // Varying the green for a more dynamic look
        const green = 150 + Math.floor(Math.random() * 105);
        ctx.fillStyle = \`rgba(120, \${green}, 170, \${
          Math.random() * 0.5 + 0.5
        })\`;

        // ctx.fillText(character, i * 20, drops[i]);

        // Increment y coordinate and reset
        if (drops[i] > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += Math.random() * 2 + 3;
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => window.removeEventListener("resize", updateSize);
  }, [particleCount, streakCount, longStreakCount, particleColor, streakColor, backgroundColor]);

  return (
    <div 
      className={\`relative overflow-hidden bg-black \${className}\`}
      style={{ height }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default MatrixRain;`;

  return <CodeBlock code={code} language="typescript" />;
};

export default MatrixRainComponentCode;
