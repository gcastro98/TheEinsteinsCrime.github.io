import "./Styles/GameScene.scss";
import {  Canvas } from "@react-three/fiber";
import { Board } from "./Models/Board/Board";
import { Class } from "./Models/Rooms/Class";
import { Library } from "./Models/Rooms/Library";
import { Workshop } from "./Models/Rooms/Workshop";
import { Arrows } from "./Models/Characters/Arrows";
import { Laboratory } from "./Models/Rooms/Laboratory";
import * as BackendService from "../API/BackendServices";
import { GameContext } from "../Interfaces/IGameContext";
import { IStatusPlayer } from "../Firebase/Models/IUser";
import { Observatory } from "./Models/Rooms/Observatory";
import { Suspense, useContext } from "react";
import { TimeMachine } from "./Models/Rooms/TimeMachine";
import {
  BakeShadows,
  CameraControls,
  Environment,
  OrbitControls,
} from "@react-three/drei";

export function GameScene() {
  const { game, users, userId, cameraRef } = useContext(GameContext);
  const setMove = async (move: string | number) => {
    await BackendService.makeMovement(game?.Id, userId, move);
  };

  return (
    <div style={{position: "fixed", top: 0, width: "100%", height: "100%"}}>
      <Canvas
        camera={{ fov: 75, position: [13, 0, -13] }}
        style={{
          opacity: 1,
          transition: "opacity 200ms ease-in-out",
        }}
      >
        <color attach="background" args={["#202030"]} />
        <Environment files="assets/environment.hdr" background={true} blur={0.8} />
        {/* <CameraControls
          ref={cameraRef}
          minPolarAngle={-Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        /> */}
         <OrbitControls
          autoRotate
          target={[13, 0, -13]}

          // minAzimuthAngle={-Math.PI / 4}
          // maxAzimuthAngle={Math.PI / 4}
          // minPolarAngle={Math.PI / 6}
          // maxPolarAngle={Math.PI - Math.PI / 6}
        />
        <BakeShadows />
        <Suspense>
          <Class />
          <Board position={[0, 0, 0]} />
          <Library />
          <Laboratory />
          <Workshop />
          <TimeMachine />
          <Observatory />
          {users?.length > 0 &&
            users?.map((user) => {
              return {
                ...(
                  <Arrows
                    user={{ ...user }}
                    showArrows={user.Id === userId && user.Status === IStatusPlayer.Movement}
                    setMove={setMove}
                  />
                ),
              };
            })}
        </Suspense>
      </Canvas>
    </div>
  );
}
