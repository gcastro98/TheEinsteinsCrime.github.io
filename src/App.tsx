import {
 
  Loader, useProgress,

} from "@react-three/drei";
import React, { Suspense, useRef, useState } from "react";
import { BoardGame } from "./Dialog/ChildComponents/BoardGame/BoardGame";
import { DialogBoard } from "./Dialog/Dialog";
import NavMenu, { ButtonMode, ButtonType } from "./Menu/NavMenu";
import { GameScene } from "./SceneManagement/GameScene";
import { config } from "./Utils/Config";
import { switchComponentsByActiveButton } from "./Utils/Utils";

function App() {
  const [activeButton, setActive] = useState(ButtonType.None);
  const [mode, setMode] = useState(ButtonMode.StartScreen)
  const {progress} = useProgress();
  console.log(mode)
  return (
    <>
      <NavMenu logo={config.logoPath} buttons={config.buttons} loading={ progress } onClick={(type) => setActive(type)} activeButton={activeButton} mode={mode} />
      <DialogBoard component={switchComponentsByActiveButton(activeButton)} hidden={activeButton === ButtonType.None}  />
      <GameScene />
    </>
  );
}

export default App;
