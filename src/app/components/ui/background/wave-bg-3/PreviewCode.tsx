"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const WaveBackground3Preview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const animationSpeedFactor = 120;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      (containerRef.current?.clientWidth || 1) /
        (containerRef.current?.clientHeight || 1),
      0.1,
      1000
    );
    camera.position.z = 4;
    cameraRef.current = camera;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(
      containerRef.current?.clientWidth || 1,
      containerRef.current?.clientHeight || 1
    );
    renderer.setClearColor(0x000000, 1);
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }
    rendererRef.current = renderer;

    // Create particles
    const particleCount = 100000;
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

      // Color - purple and blue hues
      const hue = 0.68 + Math.random() * 0.05; // tighter range (softer blue/purple)
      const saturation = 0.4 + Math.random() * 0.3; // less vibrant
      const lightness = 0.5 + Math.random() * 0.3; // stays soft

      const color = new THREE.Color();
      color.setHSL(hue, saturation, lightness);

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Size
      sizes[i] = Math.random() * 0.005 + 0.04;

      // Animation parameters
      speeds[i] =
        (Math.random() * 0.00000001 + 0.0000003) * (8 / animationSpeedFactor);
      turbulences[i] = Math.random() * 4;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );
    particleGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    // Custom shader material for better looking particles
    const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          // Create circular particle with soft edge
          float r = distance(gl_PointCoord, vec2(0.5, 0.5));
          if (r > 0.5) discard;
          
          // Softer edge
          float alpha = 1.0 - smoothstep(0.3, 0.5, r);
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
      vertexColors: true,
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
      side: THREE.BackSide,
    });
    const lightMesh = new THREE.Mesh(lightGeometry, lightMaterial);
    scene.add(lightMesh);

    // Animation loop
    const animate = () => {
      const positions = particleGeometry.attributes.position
        .array as Float32Array;
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
        const angle =
          time *
          speeds[i] *
          (5 / (distance + 0.1)) *
          (1 / animationSpeedFactor);

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
      if (!containerRef.current || !rendererRef.current || !cameraRef.current)
        return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
        if (rendererRef.current && container) {
          container.removeChild(rendererRef.current.domElement);
        }
      }
      if (particlesRef.current) {
        particlesRef.current.geometry.dispose();
        (particlesRef.current.material as THREE.Material).dispose();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg bg-black">
      <div ref={containerRef} className="absolute inset-0"></div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <p className="text-white text-xl font-bold">Cosmic Dust</p>
      </div>
    </div>
  );
};

export default WaveBackground3Preview;
