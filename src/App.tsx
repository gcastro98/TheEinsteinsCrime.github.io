import { BakeShadows, Environment, Loader, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import "./App.css";
import { TeslaCharacter } from "./Characters/TeslaCharacter";
import { Board } from "./Board/Board";
import { Class } from "./Rooms/Class";
import { Library } from "./Rooms/Library";
import { Workshop } from "./Rooms/Workshop";
import { Laboratory } from "./Rooms/Laboratory";
import { Arrows } from "./Characters/Arrows";
import { Tesla } from "./Characters/Pieces/Tesla";



function App() {
  return (
    <>
      <Canvas
        // orthographic
        // shadows
        // camera={{
        //   position: [-674.32, 401.86, 878.18],
        //   near: -10000,
        //   far: 10000,
        //   zoom: 1.5 * 100,
        // }}
        style={{
          opacity: 1,
          transition: "opacity 200ms ease-in-out",
          
        }}
      >
         {/* <Environment files={'background.hdr'} background blur={0.15}  /> */}
         <color attach="background" args={['#202030']} />
      <fog attach="fog" args={['#202030', 1, 25]} />
        <OrbitControls target={[10, 10, 0]}/>
        {/* <color args={["#2114db"]} attach="background" /> */}
        <ambientLight intensity={0.15} />
        <BakeShadows />
        <Suspense fallback={null}>
          <Class />
          <Board />
          {/* <TeslaCharacter /> */}
          <Library />
          <Laboratory />
          <Workshop />
          <Arrows character={Tesla} />
        </Suspense>
        {/* <gridHelper
          args={[200, 100, "#1100ff", "#1100ff"]}
          position={[0, -1.26, 0]}
        /> */}
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
