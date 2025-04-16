"use client";

import React from "react";
import CodeBlock from "../../../shared/CodeBlock";

const MysticHighlandsComponentCode: React.FC = () => {
  const code = `"use client";

import React, { useRef, useEffect, ReactNode } from "react";
import * as THREE from "three";

interface MysticHighlandsProps {
  children?: ReactNode;
  className?: string;
  fogColor?: string;
  fogDensity?: number;
  terrainColor?: string;
  ambientLightColor?: string;
  ambientLightIntensity?: number;
  directionalLightColor?: string;
  directionalLightIntensity?: number;
  accentLightColor?: string;
  accentLightIntensity?: number;
  height?: string;
  cameraMovementSpeed?: number;
}

const MysticHighlands: React.FC<MysticHighlandsProps> = ({
  children,
  className = "",
  fogColor = "#050520",
  fogDensity = 0.0015,
  terrainColor = "#1e2b2f",
  ambientLightColor = "#222244",
  ambientLightIntensity = 0.8,
  directionalLightColor = "#ffffff",
  directionalLightIntensity = 0.9,
  accentLightColor = "#6688ff",
  accentLightIntensity = 1.2,
  height = "400px",
  cameraMovementSpeed = 1,
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Convert hex colors to THREE.Color objects
    const fogColorObj = new THREE.Color(fogColor);
    const terrainColorObj = new THREE.Color(terrainColor);
    const ambientLightColorObj = new THREE.Color(ambientLightColor);
    const directionalLightColorObj = new THREE.Color(directionalLightColor);
    const accentLightColorObj = new THREE.Color(accentLightColor);

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(fogColorObj, fogDensity);
    scene.background = fogColorObj;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 10, 30);
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(fogColorObj, 0.9);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.7;
    mountRef.current.appendChild(renderer.domElement);

    // Resize handler
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Light setup
    const ambientLight = new THREE.AmbientLight(
      ambientLightColorObj,
      ambientLightIntensity
    );
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(
      directionalLightColorObj,
      directionalLightIntensity
    );
    directionalLight1.position.set(30, 60, 50);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(
      accentLightColorObj,
      accentLightIntensity
    );
    directionalLight2.position.set(-1, 0.5, -1);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0xff9966, 1.5, 50);
    pointLight.position.set(-15, 5, 10);
    scene.add(pointLight);

    // Create terrain
    const terrainGeometry = new THREE.PlaneGeometry(200, 200, 80, 80);
    terrainGeometry.rotateX(-Math.PI / 2);

    // Add height to create mountains
    const vertices = terrainGeometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i];
      const z = vertices[i + 2];

      // Create some gentle hills with Perlin-like noise
      const distance = Math.sqrt(x * x + z * z);
      vertices[i + 1] =
        Math.sin(x * 0.1) * Math.cos(z * 0.1) * 5 +
        Math.sin(x * 0.05 + 0.2) * Math.cos(z * 0.05) * 7 +
        Math.sin(distance * 0.03) * 3;
    }

    terrainGeometry.computeVertexNormals();

    // Create a more subtle material for the terrain
    const terrainMaterial = new THREE.MeshStandardMaterial({
      color: terrainColorObj,
      metalness: 0.1,
      roughness: 0.9,
      fog: true,
      transparent: true,
      opacity: 0.8,
    });

    const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
    scene.add(terrain);

    // Add realistic fog planes
    const fogPlanes: { mesh: THREE.Mesh; speed: number }[] = [];

    for (let i = 0; i < 6; i++) {
      const fogMat = new THREE.MeshLambertMaterial({
        color: fogColorObj,
        transparent: true,
        opacity: 0.15 + Math.random() * 0.08,
        depthWrite: false,
        fog: true,
        blending: THREE.AdditiveBlending,
      });

      const fogGeo = new THREE.PlaneGeometry(120, 120);
      const fogMesh = new THREE.Mesh(fogGeo, fogMat);
      fogMesh.rotation.x = -Math.PI / 2;
      fogMesh.position.y = 12 + Math.random() * 8;
      fogMesh.position.z = (Math.random() - 0.5) * 100;
      fogMesh.position.x = (Math.random() - 0.5) * 100;

      scene.add(fogMesh);
      fogPlanes.push({
        mesh: fogMesh,
        speed: (0.01 + Math.random() * 0.01) * cameraMovementSpeed,
      });
    }

    // Animation with performance optimizations
    let frame = 0;
    let animationFrameId: number;

    const animate = () => {
      frame++;

      // Move camera slightly to create a more subtle floating effect
      camera.position.y = 10 + Math.sin(frame * 0.007 * cameraMovementSpeed) * 1.5;
      camera.position.x = Math.sin(frame * 0.003 * cameraMovementSpeed) * 3;
      camera.lookAt(0, 0, 0);

      fogPlanes.forEach((fog) => {
        fog.mesh.position.x += fog.speed;
        if (fog.mesh.position.x > 60) fog.mesh.position.x = -60;
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      terrainGeometry.dispose();
      terrainMaterial.dispose();
      fogPlanes.forEach((fog) => {
        fog.mesh.geometry.dispose();
        if (Array.isArray(fog.mesh.material)) {
          fog.mesh.material.forEach((material) => material.dispose());
        } else {
          fog.mesh.material.dispose();
        }
      });
    };
  }, [
    fogColor,
    fogDensity,
    terrainColor,
    ambientLightColor,
    ambientLightIntensity,
    directionalLightColor,
    directionalLightIntensity,
    accentLightColor,
    accentLightIntensity,
    cameraMovementSpeed,
  ]);

  return (
    <div 
      className={\`relative overflow-hidden \${className}\`}
      style={{ height }}
    >
      <div
        ref={mountRef}
        className="absolute inset-0"
        style={{
          background: \`linear-gradient(to bottom, \${fogColor}, \${lightenDarkenColor(fogColor, 20)})\`,
        }}
      />
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

// Helper function to lighten or darken a hex color
function lightenDarkenColor(hex: string, amount: number): string {
  const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
  if (!result) return hex;
  
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  
  const r2 = Math.max(0, Math.min(255, r + amount));
  const g2 = Math.max(0, Math.min(255, g + amount));
  const b2 = Math.max(0, Math.min(255, b + amount));
  
  return \`#\${((1 << 24) + (r2 << 16) + (g2 << 8) + b2).toString(16).slice(1)}\`;
}

export default MysticHighlands;`;

  return <CodeBlock code={code} language="typescript" />;
};

export default MysticHighlandsComponentCode;
