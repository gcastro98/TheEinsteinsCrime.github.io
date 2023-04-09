import {
  BakeShadows,
  Environment,
  Loader,
  OrbitControls,
} from "@react-three/drei";
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
        style={{
          opacity: 1,
          transition: "opacity 200ms ease-in-out",
        }}
      >
        <color attach="background" args={["#202030"]} />
        <fog attach="fog" args={["#202030", 1, 45]} />
        <OrbitControls target={[10, 10, 0]} />
        <ambientLight intensity={0.15} />
        <BakeShadows />
        <Suspense fallback={null}>
          <Class />
          <Board />
          <Library />
          <Laboratory />
          <Workshop />
          <Arrows character={Tesla} />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
