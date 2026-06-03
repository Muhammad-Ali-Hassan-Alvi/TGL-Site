"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group } from "three";

/** Primary group — mouse-reactive slow rotation */
function FloatGroup() {
  const group = useRef<Group>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    // Gentle base rotation + mouse tilt
    group.current.rotation.y = t * 0.07 + mouse.x * 0.1;
    group.current.rotation.x = Math.sin(t * 0.35) * 0.06 + mouse.y * 0.06;
  });

  const icosPoints = useMemo(
    () =>
      [
        [2.5, 0.7, -2],
        [-2.8, -0.6, -1.5],
        [0, 1.1, -3.2],
        [0.6, -1.2, -2.3],
        [3.6, -1.5, -3.0],
        [-3.4, 1.8, -2.5],
        [1.8, 2.6, -3.5],
        [-1.3, -2.3, -2.8],
      ] as const,
    [],
  );

  const torusRings = useMemo(
    () =>
      [
        { pos: [-1.5, 0.5, -4.0] as [number, number, number], rx: Math.PI / 3, ry: Math.PI / 6 },
        { pos: [2.2, -0.9, -3.5] as [number, number, number], rx: Math.PI / 4, ry: Math.PI / 2 },
        { pos: [0.4, 2.1, -3.8] as [number, number, number], rx: 0, ry: Math.PI / 3 },
      ],
    [],
  );

  return (
    <group ref={group}>
      {/* Icosahedra — higher opacity now */}
      {icosPoints.map((p, i) => (
        <mesh key={`ico-${i}`} position={p as unknown as [number, number, number]}>
          <icosahedronGeometry args={[0.42, 1]} />
          <meshStandardMaterial color="#14b8a6" wireframe transparent opacity={0.22} />
        </mesh>
      ))}

      {/* Torus rings for added depth */}
      {torusRings.map((t, i) => (
        <mesh key={`tor-${i}`} position={t.pos} rotation={[t.rx, t.ry, 0]}>
          <torusGeometry args={[0.65, 0.04, 8, 36]} />
          <meshStandardMaterial color="#6366f1" wireframe transparent opacity={0.18} />
        </mesh>
      ))}
    </group>
  );
}

/** Secondary group — counter-rotates for parallax feel */
function SecondaryGroup() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = -t * 0.045;
    group.current.rotation.z = Math.sin(t * 0.22) * 0.04;
  });

  const shapes = useMemo(
    () =>
      [
        { pos: [4.2, 1.6, -5.0] as [number, number, number], size: 0.55 },
        { pos: [-4.1, -1.6, -4.5] as [number, number, number], size: 0.47 },
        { pos: [0.3, -2.7, -5.5] as [number, number, number], size: 0.50 },
        { pos: [-0.8, 3.0, -5.0] as [number, number, number], size: 0.38 },
      ],
    [],
  );

  return (
    <group ref={group}>
      {shapes.map((s, i) => (
        <mesh key={`sec-${i}`} position={s.pos}>
          <octahedronGeometry args={[s.size, 0]} />
          <meshStandardMaterial color="#14b8a6" wireframe transparent opacity={0.14} />
        </mesh>
      ))}
    </group>
  );
}

/** Slowly rotating ring cluster */
function RingCluster() {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.x = state.clock.elapsedTime * 0.03;
    group.current.rotation.z = state.clock.elapsedTime * 0.02;
  });

  return (
    <group ref={group}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[(i * Math.PI) / 3, (i * Math.PI) / 4, 0]}>
          <torusGeometry args={[2.8 - i * 0.3, 0.03, 6, 80]} />
          <meshStandardMaterial color="#5eead4" wireframe transparent opacity={0.08} />
        </mesh>
      ))}
    </group>
  );
}

export function GlobalThreeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-55">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[2, 2, 2]} intensity={0.55} color="#14b8a6" />
        <pointLight position={[-3, -1, 1]} intensity={0.3} color="#6366f1" />
        <FloatGroup />
        <SecondaryGroup />
        <RingCluster />
      </Canvas>
    </div>
  );
}
