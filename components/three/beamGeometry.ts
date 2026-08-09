import * as THREE from "three";

export type BeamDef = {
  assembledPos: THREE.Vector3;
  assembledRot: THREE.Euler;
  scatterPos: THREE.Vector3;
  scatterRot: THREE.Euler;
  size: [number, number, number];
};

const rand = (min: number, max: number) => min + Math.random() * (max - min);

export function buildSteelFrame(): BeamDef[] {
  const beams: BeamDef[] = [];
  const half = 2.2;
  const corners: [number, number][] = [
    [-half, -half],
    [half, -half],
    [half, half],
    [-half, half],
  ];
  const topY = 4.6;

  const addBeam = (
    assembledPos: [number, number, number],
    size: [number, number, number],
    rotY = 0,
  ) => {
    beams.push({
      assembledPos: new THREE.Vector3(...assembledPos),
      assembledRot: new THREE.Euler(0, rotY, 0),
      scatterPos: new THREE.Vector3(
        assembledPos[0] + rand(-5.5, 5.5),
        rand(0.5, 8.5),
        assembledPos[2] + rand(-5.5, 5.5),
      ),
      scatterRot: new THREE.Euler(rand(0, Math.PI), rand(0, Math.PI), rand(0, Math.PI)),
      size,
    });
  };

  corners.forEach(([x, z]) => {
    addBeam([x, topY / 2, z], [0.14, topY, 0.14]);
  });

  [topY * 0.34, topY * 0.67, topY].forEach((y) => {
    for (let i = 0; i < 4; i++) {
      const [x1, z1] = corners[i];
      const [x2, z2] = corners[(i + 1) % 4];
      const midX = (x1 + x2) / 2;
      const midZ = (z1 + z2) / 2;
      const length = Math.hypot(x2 - x1, z2 - z1);
      const angle = Math.atan2(z2 - z1, x2 - x1);
      addBeam([midX, y, midZ], [length, 0.1, 0.1], -angle);
    }
  });

  return beams;
}

export function buildCompactFrame(): BeamDef[] {
  const beams: BeamDef[] = [];
  const half = 1.3;
  const corners: [number, number][] = [
    [-half, -half],
    [half, -half],
    [half, half],
    [-half, half],
  ];
  const topY = 2.6;

  const addBeam = (
    assembledPos: [number, number, number],
    size: [number, number, number],
    rotY = 0,
  ) => {
    beams.push({
      assembledPos: new THREE.Vector3(...assembledPos),
      assembledRot: new THREE.Euler(0, rotY, 0),
      scatterPos: new THREE.Vector3(...assembledPos),
      scatterRot: new THREE.Euler(0, rotY, 0),
      size,
    });
  };

  corners.forEach(([x, z]) => addBeam([x, topY / 2, z], [0.09, topY, 0.09]));
  [topY, topY * 0.5].forEach((y) => {
    for (let i = 0; i < 4; i++) {
      const [x1, z1] = corners[i];
      const [x2, z2] = corners[(i + 1) % 4];
      const midX = (x1 + x2) / 2;
      const midZ = (z1 + z2) / 2;
      const length = Math.hypot(x2 - x1, z2 - z1);
      const angle = Math.atan2(z2 - z1, x2 - x1);
      addBeam([midX, y, midZ], [length, 0.07, 0.07], -angle);
    }
  });

  return beams;
}
