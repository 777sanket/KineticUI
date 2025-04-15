"use client";

import { Canvas, extend } from "@react-three/fiber";
import { Stars, OrbitControls, Sparkles, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const JupiterShaderMaterial = shaderMaterial(
  {
    uTime: 0,
  },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); 
    }
  `,
  `
    varying vec2 vUv;
    uniform float uTime;
    void main() {
      float bands = sin((vUv.y + uTime * 0.02) * 30.0) * 0.5 + 0.5;
      vec3 color = mix(vec3(0.9, 0.5, 0.2), vec3(1.0, 0.8, 0.5), bands);
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

extend({ JupiterShaderMaterial });

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
          {" "}
          {/* tilted ring */}
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

function CosmicVoyagePreview() {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{
            background:
              "radial-gradient(circle at center, #000011 0%, #000000 100%)",
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <Stars
              radius={50} // outer sphere radius
              depth={120} // how far deep stars go
              count={12000} // number of stars
              factor={5} // star size factor
              saturation={0} // white stars
              fade // makes stars fade at edges
              speed={1} // star animation speed
            />

            <Sparkles
              count={500}
              speed={0.4}
              size={20}
              color="#ffffff"
              scale={[190, 50, 50]}
            />

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

            {/* Realistic Saturn */}
            <RealisticSaturn />

            {/* Multicolored Jupiter-like planet */}
            <JupiterPlanet />

            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <p className="text-white text-xl font-bold drop-shadow-lg">
          Cosmic Voyage
        </p>
      </div>
    </div>
  );
}

export default CosmicVoyagePreview;

declare module "@react-three/fiber" {
  interface ThreeElements {
    jupiterShaderMaterial: {
      uTime?: number;
      ref?: React.Ref<{ uTime: number }>;
    };
  }
}
