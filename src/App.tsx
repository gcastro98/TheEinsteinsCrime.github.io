import { ICard } from "./Firebase/Models/ICard";
import Header from "./Components/Header/Header";
import { CameraControls, Loader, useProgress } from "@react-three/drei";
import { useDataByPath } from "./Firebase/DataServices";
import * as BackendService from "./API/BackendServices";
import { GameContext } from "./Interfaces/IGameContext";
import { DialogBoard } from "./Components/Dialog/Dialog";
import { getGameIdFromPath } from "./Common/Utils/Utils";
import { GameInfo } from "./Components/GameInfo/GameInfo";
import {  RefObject, Suspense, useEffect, useRef, useState } from "react";
import { PlayerInfo } from "./Components/PlayerInfo/PlayerInfo";
import { IStatusGame, mockGame } from "./Firebase/Models/IGame";
import { DialogComponent } from "./Interfaces/IDialogComponent";

import { GameScene } from "./Scene/GameScene";
import { IPosition } from "./Firebase/Models/IUser";
import { Vector3 } from "three";

function App() {

  /** Init Hooks */

  const [state, setState] = useState({
    gameId: getGameIdFromPath() || "initialData",
    userId: "",
    myCards: [],
    loaded: false,
    dialogOptions: {
      type:DialogComponent.None,
      props: undefined,
    },
    
  });
  const { gameId, userId, myCards, loaded, dialogOptions } = state;
  const [game, checkGame] = useDataByPath(`/games/${gameId}`, mockGame, (gameId) =>
    BackendService.checkGameReference(gameId)
  );
  const { progress } = useProgress();
  const cameraRef = useRef<CameraControls>();

  /** Declare consts */

  // const progress = 100;
  const IsWaitingRoom = gameId !== "initialData" && game && game?.OnProgress === IStatusGame.NotStarted;
  const loading = IsWaitingRoom || progress < 100;
  const Users = game?.Users || [];
  const ActivePlayer = game?.ActivePlayer;
  const isYourTurn = ActivePlayer ? Users?.[ActivePlayer]?.Id === userId : false;

  /** Methods used in the context */

  const setLookAt = ({positionX, positionY}: IPosition): void => {
    cameraRef.current?.setLookAt(positionX,15,positionY, positionX, 0, positionY, true);
  }

  const updateContext = (val: any) => {
    setState((prev) => {
      return { ...prev, ...val };
    });
  };

  const setDialog = (type: DialogComponent, props?: any) => {
    updateContext({ dialogOptions: { type, props } });
  };

  const StartManually = (gameId: string) => {
    try {
      checkGame(gameId);
      updateContext({ gameId, dialogOptions: { type: DialogComponent.Waiting } });
    } catch (ex) {
      console.error("Error to start manually the game. Exception: ", ex);
    }
  };

  /** Callbacks */

  const loadMyData = async () => {
    if (gameId && gameId !== "initialData" && game?.OnProgress === IStatusGame.InProgress && !loaded) {
      try {
        const userIdSaved = sessionStorage.getItem(`${gameId}:userId`);
        if (userIdSaved && userIdSaved !== "") {
          const myCards: ICard[] = await BackendService.getMyCards(gameId, userIdSaved.toString());
          updateContext({
            userId: userIdSaved,
            myCards,
            dialogOptions: { type: DialogComponent.None },
          });

          if (myCards?.length > 0 && userId !== "") {
            updateContext({ loaded: true });
          }
        }
      } catch (ex) {
        console.error("Error to load user information: Exception", ex);
      }
    }
  };

  const initData = () => {
    if (gameId && gameId !== "initialData" && !loaded) {
      checkGame(gameId);
      if (IsWaitingRoom) {
        setDialog(DialogComponent.Waiting);
      }
    }
  };

  /** Effects */
console.log("cameras" , cameraRef.current?.camera)
  useEffect(()=> {
    console.log("algo")
      if (progress === 100)
         cameraRef.current?.setLookAt(14, 23, -14,14, 0, -14, true);
  }, [progress])

  useEffect(() => {
    void loadMyData();
  }, [game?.OnProgress, loaded, gameId]);

  useEffect(() => {
    void initData();
  }, [gameId, loaded]);

  useEffect(() => {
    if (game?.OnProgress === IStatusGame.Finished && dialogOptions.type !== DialogComponent.EndGame){
      setDialog(DialogComponent.EndGame)
    }
  }, [game?.OnProgress])

  useEffect(() => {
    if (game?.OnProgress === IStatusGame.NotStarted && gameId === "initialData"){
      setDialog(DialogComponent.Landing)
    }
  }, [game?.OnProgress, gameId])

  /**Pruebas  */


  /** Render */

  return (
    <div style={{position: "fixed", top: 0, width: "100%", height: "100%"}}>
      <GameContext.Provider
        value={{
          game,
          userId,
          dialog: dialogOptions?.type,
          props: dialogOptions?.props,
          setDialog,
          myCards,
          updateContext,
          users: Users,
          loaded: !loading,
          isYourTurn,
          startManually: (gameId: string) => StartManually(gameId),
          cameraRef: cameraRef as RefObject<CameraControls>,
          setLookAt
        }}
      >
        <Suspense>
        <Header />
        <DialogBoard />
        <GameInfo />
        <PlayerInfo />
        <GameScene />
        </Suspense>
        <Loader />
      </GameContext.Provider>
    </div>
  );
}

export default App;
