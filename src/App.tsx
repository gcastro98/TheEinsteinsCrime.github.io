import { Loader, useProgress } from "@react-three/drei";
import React, { Suspense, createContext, useCallback, useEffect, useRef, useState } from "react";
import { BoardGame } from "./Dialog/ChildComponents/BoardGame/BoardGame";
import { DialogBoard } from "./Dialog/Dialog";
import NavMenu from "./Menu/NavMenu";
import { GameScene } from "./SceneManagement/GameScene";
import { ButtonMode, ButtonType, config } from "./Utils/Config";
import { getGameIdFromPath, switchComponentsByActiveButton } from "./Utils/Utils";
import { GameContext } from "./Services/DataServices";
import { useDataByPath } from "./Services/DataServices";
import { ICard, IGame, IGameContext, IUser } from "./Services/DataModels";
import { WaitingRoom } from "./Dialog/ChildComponents/GameManagement/Components/WaitingRoom";
import { GameInfo } from "./GameInfo/GameInfo";
import { DiceInfo } from "./GameInfo/ChildComponents/DiceInfo/DiceInfo";
import * as BackendService from "./Services/BackendServices";

function App() {
  //Management game
  const gameId = getGameIdFromPath() || "initialData";
  const [game, checkGame] = useDataByPath<IGame>(
    `games/${gameId}`,
    {} as IGame,
    void BackendService.checkGameReference(gameId)
  );

  const [users, setUsers] = useDataByPath<IUser[]>(
    `games/${gameId}/Users`,
    []
  )

  const [userId, setUserId] = useState<number>(-2);
 
  const [myCards, setMyCards] = useState<ICard[]>([]);
  const IsWaitingRoom = gameId !== "initialData" && game && game?.OnProgress === false;
  const prevStarted = useRef<boolean>(game?.OnProgress);
  const justStarted = !prevStarted && game?.OnProgress === true;
  //Management menu
  const [activeButton, setActive] = useState<ButtonType>(ButtonType.None);
  const [mode, setMode] = useState(ButtonMode.StartScreen);
  // const { progress } = useProgress();
  const progress = 100;
  // console.log(progress )
  const initMyData = useCallback(async () => {
    try {
      const userIdSaved = sessionStorage.getItem(`${gameId}:userId`);
      if (userIdSaved !== null) {
        setUserId(parseInt(userIdSaved));
        const cards: ICard[] = await BackendService.getMyCards(gameId, userId.toString());
        setMyCards(cards);
        prevStarted.current = true;
      }
    } catch (ex) {
      console.error(ex);
    }
  }, []);

  useEffect(() => {
    if (gameId !== "initialData") {
      setMode(ButtonMode.GameScreen);
      checkGame(gameId);
      const userIdSaved = sessionStorage.getItem(`${gameId}:userId`);
      if (userIdSaved !== null) {
        setUserId(parseInt(userIdSaved));
      }
    }
  }, []);

  useEffect(() => {
    initMyData();
  }, [justStarted]);

  return (
    <>
      <GameContext.Provider value={{ game, mode, userId, active: activeButton, setActive, myCards, users }}>
        <NavMenu
          loading={IsWaitingRoom ? 0 : progress}
          onClick={(type) => setActive(type)}
          activeButton={activeButton}
          mode={mode}
        />
        <DialogBoard
          component={IsWaitingRoom ? WaitingRoom : switchComponentsByActiveButton(activeButton)}
          hidden={activeButton === ButtonType.None && !IsWaitingRoom}
        />
        <GameInfo />
        {/* <GameStatus active={gameId !== undefined && gameId !== "initialData" && !IsWaitingRoom} /> */}

        {/* <GameScene /> */}
      </GameContext.Provider>
    </>
  );
}

export default App;
