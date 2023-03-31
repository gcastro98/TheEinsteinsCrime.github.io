import { Loader, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import './App.css';
import { TeslaCharacter } from './Characters/TeslaCharacter';
import { ChessBoard } from './Rooms/ChessBoard';

function App() {
  return (
    <>
    <Canvas
        orthographic
        shadows
        camera={{
          position: [-674.32, 401.86, 878.18],
          near: -10000,
          far: 10000,
          zoom: 1.5 * 100,
        }}
        style={{
          opacity: 1,
          transition: "opacity 200ms ease-in-out",
        }}
      >
        <OrbitControls />
        <color args={["#2114db"]} attach="background" />

        <Suspense fallback={null}>
            {/* <RoomClass /> */}
            <ChessBoard  />
            <TeslaCharacter />
            {/* <RoomLibrary /> */}
            {/* <RoomWorkshop /> */}
        </Suspense>
        <gridHelper
          args={[200, 100, "#1100ff", "#1100ff"]}
          position={[0, -1.26, 0]}
        />
        <gridHelper
          args={[200, 1000, "#1100ff", "#1100ff"]}
          position={[0, -1.27, 0]}
        />
        
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
