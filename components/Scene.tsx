import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

const ParticleMesh = ({ count = 40, color = "#C5A059" }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  // Generate random positions and scales for particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = (Math.random() - 0.5) * 15;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 10;
      const s = 0.2 + Math.random() * 0.5; // size
      temp.push({ t, factor, speed, x, y, z, s, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  const dummy = new THREE.Object3D();

  useFrame((state) => {
    if (!mesh.current) return;

    particles.forEach((particle, i) => {
      let { t, factor, speed, x, y, z, s } = particle;
      
      // Update time
      t = particle.t += speed / 2;
      
      // Calculate oscillation
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      
      // Move slightly based on mouse (parallax)
      const mouseX = (state.pointer.x * window.innerWidth) / 5000;
      const mouseY = (state.pointer.y * window.innerHeight) / 5000;

      dummy.position.set(
        x + mouseX + Math.cos(t / 2) * 1, // Add gentle drift
        y + mouseY + Math.sin(t / 2) * 1,
        z + (Math.sin(t / 3) * 2) 
      );
      
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <pointLight ref={lightRef} distance={40} intensity={2} color={color} />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
            color={color} 
            roughness={0.1} 
            metalness={0.1} 
            transparent 
            opacity={0.6}
            emissive={color}
            emissiveIntensity={0.2}
        />
      </instancedMesh>
    </>
  );
};

export const Scene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none w-full h-full opacity-60">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
           {/* Primary Gold Particles */}
           <ParticleMesh count={25} color="#C5A059" /> 
           {/* Secondary Cream Particles */}
           <ParticleMesh count={15} color="#FDFBF7" />
        </Float>
        <fog attach="fog" args={['#FDFBF7', 5, 25]} />
      </Canvas>
    </div>
  );
};