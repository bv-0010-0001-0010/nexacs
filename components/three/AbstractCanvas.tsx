"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { buildCompactFrame } from "./beamGeometry";
import { Beam, type ProgressRef } from "./Beam";

function IdleScene() {
  const beams = useMemo(() => buildCompactFrame(), []);
  const groupRef = useRef<THREE.Group>(null);
  const staticProgress = useRef<{ value: number }>({ value: 1 }) as ProgressRef;

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.12;
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1} color="#f7f6f3" />
      <directionalLight position={[-4, 2, -3]} intensity={0.4} color="#e8871e" />
      <group ref={groupRef}>
        {beams.map((def, i) => (
          <Beam key={i} def={def} progressRef={staticProgress} />
        ))}
      </group>
      <Sparkles count={30} scale={[4, 3, 4]} size={1.8} speed={0.12} color="#f2a545" opacity={0.25} />
    </>
  );
}

export default function AbstractCanvas() {
  return (
    <Canvas camera={{ position: [3.4, 2.2, 3.8], fov: 40 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <IdleScene />
    </Canvas>
  );
}
