"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const CosmicVoyageComponentCode: React.FC = () => {
  const code = `"use client";

import React, { Suspense, useRef, ReactNode } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls, Sparkles, Float, shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

interface CosmicVoyageProps {
  children?: ReactNode;
  className?: string;
  height?: string;
  starsCount?: number;
  sparklesCount?: number;
  autoRotateSpeed?: number;
  showPlanets?: boolean;
  enableControls?: boolean;
  backgroundColor?: string;
}

// Create custom shader material for Jupiter-like planet
const JupiterShaderMaterial = shaderMaterial(
  {
    uTime: 0,
  },
  // Vertex shader
  \`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); 
    }
  \`,
  // Fragment shader
  \`
    varying vec2 vUv;
    uniform float uTime;
    void main() {
      float bands = sin((vUv.y + uTime * 0.02) * 30.0) * 0.5 + 0.5;
      vec3 color = mix(vec3(0.9, 0.5, 0.2), vec3(1.0, 0.8, 0.5), bands);
      gl_FragColor = vec4(color, 1.0);
    }
  \`
);

// Register the custom material
extend({ JupiterShaderMaterial });

// Create Jupiter planet with custom shader
function JupiterPlanet() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<{ uTime: number }>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.elapsedTime;
    }
  });

  return (
    <Float speed={0.6} rotationIntensity={1.2} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[4, -1, -3]}>
        <sphereGeometry args={[0.7, 64, 64]} />
        <jupiterShaderMaterial ref={materialRef} />
      </mesh>
    </Float>
  );
}

// Create Saturn with rings
function RealisticSaturn() {
  return (
    <Float speed={0.8} rotationIntensity={1.5} floatIntensity={1.5}>
      <group position={[-4, 2, -2]}>
        <mesh>
          <sphereGeometry args={[0.6, 20, 20]} />
          <meshStandardMaterial
            color="#c2b280"
            metalness={0.6}
            roughness={0.3}
            emissive="#b8a77d"
            emissiveIntensity={0.2}
          />
        </mesh>
        <mesh rotation={[1.5, 0, 0]}>
          <ringGeometry args={[0.9, 1.4, 40]} />
          <meshStandardMaterial
            color="#ddd7c0"
            metalness={0.4}
            roughness={0.3}
            transparent
            opacity={0.8}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Create an ice planet
function IcePlanet() {
  return (
    <Float speed={1} rotationIntensity={2} floatIntensity={2}>
      <mesh position={[4, 0, 5]}>
        <sphereGeometry args={[0.5, 20, 20]} />
        <meshStandardMaterial
          emissive="#3af6ff"
          emissiveIntensity={1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

const CosmicVoyage: React.FC<CosmicVoyageProps> = ({
  children,
  className = "",
  height = "400px",
  starsCount = 12000,
  sparklesCount = 500,
  autoRotateSpeed = 0.5,
  showPlanets = true,
  enableControls = true,
  backgroundColor = "radial-gradient(circle at center, #000011 0%, #000000 100%)",
}) => {
  return (
    <div 
      className={\`relative overflow-hidden \${className}\`}
      style={{ height }}
    >
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: backgroundColor }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <Stars
              radius={50}
              depth={120}
              count={starsCount}
              factor={5}
              saturation={0}
              fade
              speed={1}
            />

            <Sparkles
              count={sparklesCount}
              speed={0.4}
              size={20}
              color="#ffffff"
              scale={[190, 50, 50]}
            />

            {showPlanets && (
              <>
                <IcePlanet />
                <RealisticSaturn />
                <JupiterPlanet />
              </>
            )}

            {enableControls && (
              <OrbitControls 
                enableZoom={false} 
                autoRotate={true} 
                autoRotateSpeed={autoRotateSpeed} 
              />
            )}
          </Suspense>
        </Canvas>
      </div>
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default CosmicVoyage;

// TypeScript declaration
declare module "@react-three/fiber" {
  interface ThreeElements {
    jupiterShaderMaterial: {
      uTime?: number;
      ref?: React.Ref<{ uTime: number }>;
    };
  }
}`;

  return <CodeBlock code={code} language="typescript" />;
};

export default CosmicVoyageComponentCode;
