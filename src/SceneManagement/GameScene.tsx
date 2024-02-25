import {
  BakeShadows,
  CycleRaycast,
  Environment,
  Loader,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useCallback, useContext, useRef, useState } from "react";
import { Board } from "./Models/Board/Board";
import { Arrows } from "./Models/Characters/Arrows";
import { Piece } from "./Models/Characters/Pieces/Piece";
import { Class } from "./Models/Rooms/Class";
import { Laboratory } from "./Models/Rooms/Laboratory";
import { Library } from "./Models/Rooms/Library";
import { Workshop } from "./Models/Rooms/Workshop";
import "./GameScene.scss";
import { GameContext } from "../Services/DataServices";
import { IPosition, IStatusPlayer } from "../Services/DataModels";
import * as BackendService from "../Services/BackendServices"
import { Raycaster } from "three";
import { Observatory } from "./Models/Rooms/Observatory";
import { TimeMachine } from "./Models/Rooms/TimeMachine";

export function GameScene(props: any) {
  const { game, users, userId } = useContext(GameContext);
  const setMove = async (move: string | number) => {
    await BackendService.makeMovement(game?.Id, userId, move)
  }
  const [hits, setHits] = useState<any[]>([])
  console.log("hits", hits)
  // let hovered;
  // const rayc = new Raycaster();
  // const loadTooltips = useCallback(() => const intersects = rayc.intersectObjects())

  // const prueba: (cycle: any, hits: any) => void = (cycle: any, hits: any) => {
  //   console.log(cycle, hits)
  // }

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

          <TimeMachine />
          <Observatory />
          {users?.length > 0 && users?.map((user) => {
            return {...<Arrows user={{...user}} showArrows={user.Id === userId && user.Status === IStatusPlayer.Movement} setMove={setMove}/>};
          })}
        </Suspense>
        {/* <CycleRaycast onChanged={(hits, cycle) => { setHits(hits); return null}}/> */}
      </Canvas>
      <Loader />
    </>
  );
}
