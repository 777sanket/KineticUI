"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const MysticHighlandsPreview: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup with twilight color scheme
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x280030, 0.0015); // Purple fog
    scene.background = new THREE.Color(0x280030); // Purple background

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
      alpha: true, // Enable transparency
    });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    renderer.setClearColor(0x280030, 0.9); // Purple background with slight transparency
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.7; // Slightly darker for background use
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

    // Light setup with twilight colors
    const ambientLight = new THREE.AmbientLight(0x331133, 0.8); // Purple ambient light
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xff8866, 0.9); // Peachy orange light
    directionalLight1.position.set(30, 60, 50);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xff3377, 1.2); // Pink accent light
    directionalLight2.position.set(-1, 0.5, -1);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0xff9966, 1.5, 50);
    pointLight.position.set(-15, 5, 10);
    scene.add(pointLight);

    // Create terrain
    const terrainGeometry = new THREE.PlaneGeometry(200, 200, 80, 80); // Reduced geometry complexity
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

    // Create a more subtle material for the terrain with purple color
    const terrainMaterial = new THREE.MeshStandardMaterial({
      color: 0x331a33, // Purple-brown terrain
      metalness: 0.1,
      roughness: 0.9,
      fog: true,
      transparent: true,
      opacity: 0.8, // Make terrain slightly transparent
    });

    const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
    scene.add(terrain);

    // Add realistic fog planes with more subtlety
    const fogPlanes: { mesh: THREE.Mesh; speed: number }[] = [];

    for (let i = 0; i < 6; i++) {
      // Reduced number of fog planes
      const fogMat = new THREE.MeshLambertMaterial({
        color: 0x280030, // Purple fog color
        transparent: true,
        opacity: 0.15 + Math.random() * 0.08, // Lower opacity
        depthWrite: false,
        fog: true,
        blending: THREE.AdditiveBlending, // Softer blending
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
        speed: 0.01 + Math.random() * 0.01, // Slower movement
      });
    }

    // Animation with performance optimizations
    let frame = 0;
    let animationFrameId: number;

    const animate = () => {
      frame++;

      // Move camera slightly to create a more subtle floating effect
      camera.position.y = 10 + Math.sin(frame * 0.014) * 1.5; // Reduced movement
      camera.position.x = Math.sin(frame * 0.006) * 3; // Reduced movement
      camera.lookAt(0, 0, 0);

      fogPlanes.forEach((fog) => {
        fog.mesh.position.x += fog.speed;
        if (fog.mesh.position.x > 60) fog.mesh.position.x = -60;
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
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
  }, []);

  return (
    <div className="relative w-full h-150 overflow-hidden rounded-lg">
      <div
        ref={mountRef}
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #280030, #3a0a40)", // Updated gradient with purple colors
        }}
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <p className="text-white text-xl font-bold drop-shadow-lg">
          Mystic Highlands
        </p>
      </div>
    </div>
  );
};

export default MysticHighlandsPreview;
