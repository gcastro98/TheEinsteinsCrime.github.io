import {
  BakeShadows,
  Environment,
  Loader,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { Board } from "./Models/Board/Board";
import { Arrows } from "./Models/Characters/Arrows";
import { Davinci } from "./Models/Characters/Pieces/Davinci";
import { Tesla } from "./Models/Characters/Pieces/Tesla";
import { Class } from "./Models/Rooms/Class";
import { Laboratory } from "./Models/Rooms/Laboratory";
import { Library } from "./Models/Rooms/Library";
import { Workshop } from "./Models/Rooms/Workshop";
import './GameScene.scss';

export function GameScene(props: any) {
  return (
    <>
      <Canvas
        camera={{ fov: 75, position: [30, 10, -30] }}
        style={{
          opacity: 1,
          transition: "opacity 200ms ease-in-out",
        }}
      >
        <color attach="background" args={["#202030"]} />
        <fog attach="fog" args={["#202030", 1, 45]} />

        <OrbitControls
          target={[13, 0, -13]}
          // autoRotate
          // minAzimuthAngle={-Math.PI / 4}
          // maxAzimuthAngle={Math.PI / 4}
          // minPolarAngle={Math.PI / 6}
          // maxPolarAngle={Math.PI - Math.PI / 6}
        />
        <ambientLight intensity={0.15} />
        <BakeShadows />
        <Suspense>
          <Class />
          <Board position={[0, 0, 0]} />
          <Library />
          <Laboratory />
          <Workshop />
          <Arrows character={Tesla} initialPosition={{ x: 2, y: -13 }} />
          <Arrows character={Davinci} initialPosition={{ x: 10, y: -10 }} />
          </Suspense>
      </Canvas>
      <Loader/>
    </>
  );
}
