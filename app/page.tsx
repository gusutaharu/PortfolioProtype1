'use client';

import { Canvas } from '@react-three/fiber';
export default function Home() {
  return (
    <div className="canvasContainer">
      <Canvas>
        <mesh>
          <sphereGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}
