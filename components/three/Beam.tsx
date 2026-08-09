"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import * as THREE from "three";
import type { BeamDef } from "./beamGeometry";

export type ProgressRef = React.MutableRefObject<{ value: number }>;

export function Beam({ def, progressRef }: { def: BeamDef; progressRef: ProgressRef }) {
  const ref = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(() => {
    if (!ref.current) return;
    const t = THREE.MathUtils.smoothstep(progressRef.current.value, 0, 1);
    ref.current.position.lerpVectors(def.scatterPos, def.assembledPos, t);
    ref.current.rotation.set(
      THREE.MathUtils.lerp(def.scatterRot.x, def.assembledRot.x, t),
      THREE.MathUtils.lerp(def.scatterRot.y, def.assembledRot.y, t),
      THREE.MathUtils.lerp(def.scatterRot.z, def.assembledRot.z, t),
    );
    if (materialRef.current) {
      materialRef.current.opacity = THREE.MathUtils.lerp(0.12, 0.92, t);
    }
  });

  return (
    <mesh ref={ref} position={def.scatterPos} rotation={def.scatterRot}>
      <boxGeometry args={def.size} />
      <meshStandardMaterial
        ref={materialRef}
        color="#8a909b"
        metalness={0.75}
        roughness={0.35}
        transparent
        opacity={0.12}
      />
      <Edges color="#e8871e" />
    </mesh>
  );
}
