import { Loader, useProgress } from "@react-three/drei";
import React, { Suspense, createContext, useEffect, useRef, useState } from "react";
import { BoardGame } from "./Dialog/ChildComponents/BoardGame/BoardGame";
import { DialogBoard } from "./Dialog/Dialog";
import NavMenu, { ButtonMode, ButtonType } from "./Menu/NavMenu";
import { GameScene } from "./SceneManagement/GameScene";
import { config } from "./Utils/Config";
import { getGameIdFromPath, switchComponentsByActiveButton } from "./Utils/Utils";
import { GameContext, checkGameReference } from "./Services/DataServices";
import { useDataByPath } from "./Services/DataServices";
import { IGame, IGameContext } from "./Services/DataModels";
import { WaitingRoom } from "./Dialog/ChildComponents/GameManagement/Components/WaitingRoom";
import { Notification } from "./Notification/Notification";
import { GameInfo } from "./GameInfo/GameInfo";


function App() {
  //Management game
  const gameId = getGameIdFromPath() || "initialData";
  const [game, updateGame] = useDataByPath<IGame>(`games/${gameId}`, {} as IGame);
  const IsWaitingRoom = gameId !== "initialData" && game && game?.OnProgress === false;
  const [userId, setUserId] = useState<number>(-2);
  console.log(game);

  //Management menu
  const [activeButton, setActive] = useState(ButtonType.None);
  const [mode, setMode] = useState(ButtonMode.StartScreen);
  // const { progress } = useProgress();
  const progress = 100;
  // console.log(progress)
  
  useEffect(() => {
    // const gameId = getGameIdFromPath();
    if (gameId !== "initialData") {
      setMode(ButtonMode.GameScreen);
      checkGameReference(gameId);
      const userIdSaved = sessionStorage.getItem(`${gameId}:userId`);
      if (userIdSaved !== null) {
        setUserId(parseInt(userIdSaved));
      }
      // setGameId(gameId);
      // console.log(game);
    }
  }, []);

  return (
    <>
    <GameContext.Provider  value={{game, setGame: updateGame, mode, userId, setUserId }}>
      <NavMenu
        logo={config.logoPath}
        buttons={config.buttons}
        loading={IsWaitingRoom ? 0 : progress }
        onClick={(type) => setActive(type)}
        activeButton={activeButton}
        mode={mode}
      />
      <DialogBoard
        component={IsWaitingRoom ? WaitingRoom : switchComponentsByActiveButton(activeButton)}
        hidden={activeButton === ButtonType.None && !IsWaitingRoom}
      />
      <Notification />
      <GameInfo active={gameId !== undefined && gameId !== "initialData" && !IsWaitingRoom} />
      <GameScene />
      </GameContext.Provider>
    </>
  );
}

export default App;
