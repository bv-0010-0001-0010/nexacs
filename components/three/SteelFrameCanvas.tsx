"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { buildSteelFrame } from "./beamGeometry";
import { Beam, type ProgressRef } from "./Beam";

function Scene({ progressRef }: { progressRef: ProgressRef }) {
  const beams = useMemo(() => buildSteelFrame(), []);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = progressRef.current.value;
    groupRef.current.rotation.y =
      THREE.MathUtils.lerp(-0.4, 0.18, t) + Math.sin(state.clock.elapsedTime * 0.06) * 0.02;
  });

  return (
    <>
      <fog attach="fog" args={["#0a0b0d", 9, 23]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 8, 5]} intensity={1.15} color="#f7f6f3" />
      <directionalLight position={[-6, 3, -4]} intensity={0.45} color="#e8871e" />
      <group ref={groupRef} position={[0, -1.6, 0]}>
        {beams.map((def, i) => (
          <Beam key={i} def={def} progressRef={progressRef} />
        ))}
        <gridHelper args={[22, 22, "#3a3e46", "#1a1c21"]} />
      </group>
      <Sparkles
        count={70}
        scale={[9, 6, 9]}
        size={2.2}
        speed={0.15}
        color="#f2a545"
        opacity={0.3}
        position={[0, 0.5, 0]}
      />
    </>
  );
}

export default function SteelFrameCanvas({ progressRef }: { progressRef: ProgressRef }) {
  return (
    <Canvas
      camera={{ position: [6.2, 3.6, 7.2], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: false }}
    >
      <color attach="background" args={["#0a0b0d"]} />
      <Scene progressRef={progressRef} />
    </Canvas>
  );
}
