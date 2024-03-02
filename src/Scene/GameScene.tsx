import "./Styles/GameScene.scss";
import { Canvas } from "@react-three/fiber";
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
import { BakeShadows, Environment, Loader, OrbitControls, useEnvironment } from "@react-three/drei";

export function GameScene() {
  const { game, users, userId } = useContext(GameContext);
  const setMove = async (move: string | number) => {
    await BackendService.makeMovement(game?.Id, userId, move);
  };

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
        {/* <fog attach="fog" args={["#202030", 1, 45]} /> */}
        <Environment
          files="assets/environment.hdr"
          background={true}
          blur={0.8}
        />
        <OrbitControls
          target={[13, 0, -13]}
          // autoRotate
          // minAzimuthAngle={-Math.PI / 4}
          // maxAzimuthAngle={Math.PI / 4}
          // minPolarAngle={Math.PI / 6}
          // maxPolarAngle={Math.PI - Math.PI / 6}
        />
        {/* <ambientLight intensity={0.25} /> */}
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
    </>
  );
}
