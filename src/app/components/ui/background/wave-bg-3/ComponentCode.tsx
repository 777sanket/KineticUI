"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const WaveBackground3ComponentCode: React.FC = () => {
  const code = `"use client";

import React, { useRef, useEffect, ReactNode } from 'react';
import * as THREE from 'three';

interface WaveBackground3Props {
  children?: ReactNode;
  className?: string;
  backgroundColor?: string;
  particleCount?: number;
  particleColors?: {
    hueRange: [number, number];
    saturation: [number, number];
    lightness: [number, number];
  };
  particleSize?: [number, number]; // [min, max]
  animationSpeedFactor?: number;
  height?: string;
}

const WaveBackground3: React.FC<WaveBackground3Props> = ({
  children,
  className = "",
  backgroundColor = "#000000",
  particleCount = 100000,
  particleColors = {
    hueRange: [0.68, 0.73], // Tighter range of purple to blue hues
    saturation: [0.4, 0.7],  // Less vibrant
    lightness: [0.5, 0.8]    // Soft brightness
  },
  particleSize = [0.04, 0.045],
  animationSpeedFactor = 120,
  height = "400px",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      (container.clientWidth || 1) / (container.clientHeight || 1),
      0.1,
      1000
    );
    camera.position.z = 4;
    cameraRef.current = camera;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(
      container.clientWidth || 1,
      container.clientHeight || 1
    );
    renderer.setClearColor(backgroundColor, 1);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particles
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);
    const turbulences = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // Position
      const radius = 30 * Math.random();
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta); // x
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
      positions[i * 3 + 2] = radius * Math.cos(phi); // z

      // Color
      const hue = particleColors.hueRange[0] + Math.random() * (particleColors.hueRange[1] - particleColors.hueRange[0]);
      const saturation = particleColors.saturation[0] + Math.random() * (particleColors.saturation[1] - particleColors.saturation[0]);
      const lightness = particleColors.lightness[0] + Math.random() * (particleColors.lightness[1] - particleColors.lightness[0]);
      
      const color = new THREE.Color();
      color.setHSL(hue, saturation, lightness);
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      // Size
      sizes[i] = particleSize[0] + Math.random() * (particleSize[1] - particleSize[0]);
      
      // Animation parameters
      speeds[i] = (Math.random() * 0.00000001 + 0.0000003) * (8 / animationSpeedFactor);
      turbulences[i] = Math.random() * 4;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Custom shader material for better looking particles
    const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: \`
        attribute float size;
        varying vec3 vColor;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      \`,
      fragmentShader: \`
        varying vec3 vColor;
        
        void main() {
          // Create circular particle with soft edge
          float r = distance(gl_PointCoord, vec2(0.5, 0.5));
          if (r > 0.5) discard;
          
          // Softer edge
          float alpha = 1.0 - smoothstep(0.3, 0.5, r);
          gl_FragColor = vec4(vColor, alpha);
        }
      \`,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
      vertexColors: true
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Add subtle volumetric light
    const lightGeometry = new THREE.SphereGeometry(2, 32, 32);
    const lightMaterial = new THREE.MeshBasicMaterial({
      color: 0x5c38cc,
      transparent: true,
      opacity: 0,
      side: THREE.BackSide
    });
    const lightMesh = new THREE.Mesh(lightGeometry, lightMaterial);
    scene.add(lightMesh);

    // Animation loop
    const animate = () => {
      const positions = particleGeometry.attributes.position.array as Float32Array;
      const time = Date.now() * 0.000001;
      
      // Update particle positions
      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;
        
        // Get current position
        const x = positions[ix];
        const y = positions[iy];
        const z = positions[iz];
        
        // Calculate distance from center
        const distance = Math.sqrt(x * x + y * y + z * z);
        
        // Angular speed based on distance
        const angle = time * speeds[i] * (5 / (distance + 0.1)) * (1 / animationSpeedFactor);
        
        // Rotate around y-axis
        const newX = x * Math.cos(angle) - z * Math.sin(angle);
        const newZ = x * Math.sin(angle) + z * Math.cos(angle);
        
        // Add some waviness with sine
        const waveAmplitude = 0.1;
        const waveFreq = turbulences[i];
        const waveY = Math.sin(time * 2 + waveFreq) * waveAmplitude;
        
        positions[ix] = newX;
        positions[iy] = y + waveY;
        positions[iz] = newZ;
      }
      
      particleGeometry.attributes.position.needsUpdate = true;
      
      // Rotate the entire particle system
      particles.rotation.y += 0.0003;
      lightMesh.rotation.y -= 0.0001;
      
      // Render
      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }
      if (rendererRef.current && container) {
        container.removeChild(rendererRef.current.domElement);
      }
      if (particlesRef.current) {
        particlesRef.current.geometry.dispose();
        (particlesRef.current.material as THREE.Material).dispose();
      }
    };
  }, [backgroundColor, particleCount, particleColors, particleSize, animationSpeedFactor]);

  return (
    <div 
      className={\`relative overflow-hidden \${className}\`}
      style={{ height }}
    >
      <div ref={containerRef} className="absolute inset-0"></div>
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default WaveBackground3;`;

  return <CodeBlock code={code} language="typescript" />;
};

export default WaveBackground3ComponentCode;
