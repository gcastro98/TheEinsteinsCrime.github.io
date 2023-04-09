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
import { Davinci } from "./Characters/Pieces/Davinci";
import NavMenu from "./Menu/NavMenu";

const buttons = [
  { name: "Inicio", onClick: () => console.log("clicked"), right: false },
  { name: "Ajustes", onClick: () => console.log("clicked"), right: false },
  { name: "Crear sala", onClick: () => console.log("clicked"), right: true },
  { name: "Unirse a sala", onClick: () => console.log("clicked"), right: true },
];

function App() {
  return (
    <>
      <NavMenu logo="TheEinsteinsCrime_logo_recortado.png" buttons={buttons} />
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
          <Arrows character={Tesla} initialPosition={{ x: 13, y: -13 }} />
          <Arrows character={Davinci} initialPosition={{ x: 10, y: -10 }} />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
