'use client';

import { Canvas } from '@react-three/fiber';

import { FluidMesh } from './fluidmesh';

export const Background = () => {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        onCreated={({ gl }) => {
          gl.setClearColor('#e0f7fa');
        }}
      >
        <FluidMesh />
      </Canvas>
    </div>
  );
};
