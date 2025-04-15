"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const MistyAuraComponentCode: React.FC = () => {
  const code = `"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

interface MistyAuraProps {
  children?: ReactNode;
  className?: string;
  highlightColor?: string;
  midtoneColor?: string;
  lowlightColor?: string;
  baseColor?: string;
  blurFactor?: number;
  speed?: number;
  zoom?: number;
  mouseControls?: boolean;
  touchControls?: boolean;
  height?: string;
}

const MistyAura: React.FC<MistyAuraProps> = ({
  children,
  className = "",
  highlightColor = "#ffffff",
  midtoneColor = "#00ffc3",
  lowlightColor = "#0f0f0f",
  baseColor = "#000000",
  blurFactor = 1.5,
  speed = 1,
  zoom = 1.2,
  mouseControls = true,
  touchControls = true,
  height = "400px",
}) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  // Convert hex colors to numbers
  const hexToNumber = (hex: string) => {
    return parseInt(hex.replace(/^#/, ''), 16);
  };

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = FOG({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls,
        touchControls,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: hexToNumber(highlightColor),
        midtoneColor: hexToNumber(midtoneColor),
        lowlightColor: hexToNumber(lowlightColor),
        baseColor: hexToNumber(baseColor),
        blurFactor,
        speed,
        zoom,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [
    vantaEffect,
    highlightColor,
    midtoneColor,
    lowlightColor,
    baseColor,
    blurFactor,
    speed,
    zoom,
    mouseControls,
    touchControls,
  ]);

  return (
    <div 
      className={\`relative overflow-hidden \${className}\`}
      style={{ height }}
    >
      <div ref={vantaRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default MistyAura;`;

  return <CodeBlock code={code} language="typescript" />;
};

export default MistyAuraComponentCode;
