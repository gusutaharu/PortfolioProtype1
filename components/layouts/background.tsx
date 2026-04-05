'use client';

import { Canvas } from '@react-three/fiber';

export const Background = () => {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        onCreated={({ gl }) => {
          gl.setClearColor('#01579b');
        }}
      ></Canvas>
    </div>
  );
};
