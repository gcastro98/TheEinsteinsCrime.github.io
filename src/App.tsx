import { Loader, useProgress } from "@react-three/drei";
import React, { Suspense, createContext, useEffect, useRef, useState } from "react";
import { BoardGame } from "./Dialog/ChildComponents/BoardGame/BoardGame";
import { DialogBoard } from "./Dialog/Dialog";
import NavMenu from "./Menu/NavMenu";
import { GameScene } from "./SceneManagement/GameScene";
import { ButtonMode, ButtonType, config } from "./Utils/Config";
import { getGameIdFromPath, switchComponentsByActiveButton } from "./Utils/Utils";
import { GameContext, checkGameReference, useDiceManagement } from "./Services/DataServices";
import { useDataByPath } from "./Services/DataServices";
import { IGame, IGameContext } from "./Services/DataModels";
import { WaitingRoom } from "./Dialog/ChildComponents/GameManagement/Components/WaitingRoom";
import { GameInfo } from "./GameInfo/GamInfo";
import { DiceInfo } from "./GameInfo/ChildComponents/DiceInfo/DiceInfo";


function App() {
  //Management game
  const gameId = getGameIdFromPath() || "initialData";
  const [game, updateGame] = useDataByPath<IGame>(`games/${gameId}`, {} as IGame);
  const [userId, setUserId] = useState<number>(-2);
  const diceManagement = useDiceManagement(gameId);
  const IsWaitingRoom = gameId !== "initialData" && game && game?.OnProgress === false;

  //Management menu
  const [activeButton, setActive] = useState<ButtonType>(ButtonType.None);
  const [mode, setMode] = useState(ButtonMode.StartScreen);
  // const { progress } = useProgress();
  const progress = 100;
  // console.log(progress )
  
  useEffect(() => {
    if (gameId !== "initialData") {
      setMode(ButtonMode.GameScreen);
      checkGameReference(gameId);
      const userIdSaved = sessionStorage.getItem(`${gameId}:userId`);
      if (userIdSaved !== null) {
        setUserId(parseInt(userIdSaved));
      }
    }
  }, []);

  return (
    <>
    <GameContext.Provider  value={{gameId, game, setGame: updateGame, mode, userId, setUserId, active: activeButton, setActive, diceManagement }}>
      <NavMenu
        loading={IsWaitingRoom ? 0 : progress }
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
