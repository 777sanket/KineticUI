"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

const MistyAuraPreview: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = FOG({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0xffffff,
        midtoneColor: 0x00ffc3,
        lowlightColor: 0x0f0f0f,
        baseColor: 0x000000,
        blurFactor: 1.5,
        speed: 1,
        zoom: 1.2,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      <div ref={vantaRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 flex h-full items-center justify-center ">
        <h1 className="backdrop-blur-md bg-white/10 rounded-lg p-4 text-gray-400 text-4xl">
          Misty Aura
        </h1>
      </div>
    </div>
  );
};

export default MistyAuraPreview;
