"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const StellarShimmerComponentCode: React.FC = () => {
  const code = `"use client";
  
import React, { useRef, useEffect, ReactNode } from 'react';
import * as THREE from 'three';

interface StellarShimmerProps {
  children?: ReactNode;
  className?: string;
  backgroundColor?: string;
  particleCount?: number;
  particleColor?: string;
  glowColor?: string;
  glowOpacity?: number;
  rotationSpeed?: number;
  height?: string;
}

const StellarShimmer: React.FC<StellarShimmerProps> = ({
  children,
  className = "",
  backgroundColor = "#000000",
  particleCount = 10000,
  particleColor = "#ffffff",
  glowColor = "#ffffff",
  glowOpacity = 0.08,
  rotationSpeed = 1,
  height = "400px",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(backgroundColor ? new THREE.Color(backgroundColor) : 0x000000, 1);
    container.appendChild(renderer.domElement);

    // Particle geometry
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 10 * Math.random();
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.random() * Math.PI;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      sizes[i] = Math.random() * 0.01 + 0.03;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    // Convert hex color to RGB for shader
    const getColorVector = (hexColor: string) => {
      const color = new THREE.Color(hexColor);
      return \`vec3(\${color.r}, \${color.g}, \${color.b})\`;
    };

    // Particle material (white shimmer by default)
    const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: \`
        attribute float size;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      \`,
      fragmentShader: \`
        void main() {
          float r = distance(gl_PointCoord, vec2(0.5, 0.5));
          if (r > 0.5) discard;
          float alpha = 1.0 - smoothstep(0.3, 0.5, r);
          gl_FragColor = vec4(\${getColorVector(particleColor)}, alpha);
        }
      \`,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Light rays (volumetric glow)
    const glowGeometry = new THREE.SphereGeometry(2, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(glowColor),
      transparent: true,
      opacity: glowOpacity,
      side: THREE.BackSide,
    });
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glowMesh);

    // Animate
    const animate = () => {
      particles.rotation.y += 0.00025 * rotationSpeed;
      glowMesh.rotation.y += 0.0005 * rotationSpeed;
      glowMesh.rotation.x += 0.0002 * rotationSpeed;

      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Resize
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      container.removeChild(renderer.domElement);
    };
  }, [backgroundColor, particleCount, particleColor, glowColor, glowOpacity, rotationSpeed]);

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

export default StellarShimmer;`;

  return <CodeBlock code={code} language="typescript" />;
};

export default StellarShimmerComponentCode;
