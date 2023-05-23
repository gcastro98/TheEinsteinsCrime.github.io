import { Loader, useProgress } from "@react-three/drei";
import React, { Suspense, createContext, useEffect, useRef, useState } from "react";
import { BoardGame } from "./Dialog/ChildComponents/BoardGame/BoardGame";
import { DialogBoard } from "./Dialog/Dialog";
import NavMenu from "./Menu/NavMenu";
import { GameScene } from "./SceneManagement/GameScene";
import { ButtonMode, ButtonType, config } from "./Utils/Config";
import { getGameIdFromPath, switchComponentsByActiveButton } from "./Utils/Utils";
import { GameContext, checkGameReference } from "./Services/DataServices";
import { useDataByPath } from "./Services/DataServices";
import { IGame, IGameContext } from "./Services/DataModels";
import { WaitingRoom } from "./Dialog/ChildComponents/GameManagement/Components/WaitingRoom";
import { GameInfo } from "./GameInfo/GamInfo";
import { GameStatus } from "./GameStatus/GameStatus";


function App() {
  //Management game
  const gameId = getGameIdFromPath() || "initialData";
  const [game, updateGame] = useDataByPath<IGame>(`games/${gameId}`, {} as IGame);
  const [userId, setUserId] = useState<number>(-2);
  const [diceValue, setDiceValue] = useState<number>(-1);
  const [throwDice, setThrowDice] = useState<boolean>(false);
  const IsWaitingRoom = gameId !== "initialData" && game && game?.OnProgress === false;

  //Management menu
  const [activeButton, setActive] = useState<ButtonType>(ButtonType.None);
  const [mode, setMode] = useState(ButtonMode.StartScreen);
  const { progress } = useProgress();
  // const progress = 10;
  console.log(progress )
  
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
    <GameContext.Provider  value={{game, setGame: updateGame, mode, userId, setUserId, active: activeButton, setActive, diceContext: { diceValue, setDiceValue, throwDice, setThrowDice } }}>
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
      <GameStatus active={true} />
      <GameScene />
      </GameContext.Provider>
    </>
  );
}

export default App;
