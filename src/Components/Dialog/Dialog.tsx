import "./Dialog.scss";
import { useContext } from "react";
import { BoardGame } from "./BoardGame/BoardGame";
import { Request } from "./CardManagement/Request";
import { Landing } from "./GameManagement/Landing";
import { ShowMyCards } from "./CardManagement/Show";
import { WaitingRoom } from "./GameManagement/WaitingRoom";
import { Solution } from "./CardManagement/Solution";
import { GameContext } from "../../Interfaces/IGameContext";
import { ShowCardsByUser } from "./CardManagement/ShowCardsByUser";
import { DialogComponent } from "../../Interfaces/IDialogComponent";

import { IStatusGame } from "../../Firebase/Models/IGame";
import { EndGame } from "./GameManagement/EndGame";

export function DialogBoard(props: any) {
  const { dialog, setDialog, loaded, game } = useContext(GameContext);
  const close = () => setDialog(DialogComponent.None);
  return (
    <div className="Dialog" hidden={!dialog || dialog === DialogComponent.None}>
      <span
        className="CloseButton"
        onClick={close}
        hidden={!(loaded && game?.OnProgress === IStatusGame.InProgress)}
      >
        X
      </span>
      <div hidden={dialog !== DialogComponent.Cards}>{ShowMyCards()}</div>
      <div hidden={dialog !== DialogComponent.Board}> {BoardGame()}</div>
      <div hidden={dialog !== DialogComponent.Request}> {Request()}</div>
      <div hidden={dialog !== DialogComponent.Waiting}>{WaitingRoom()}</div>
      <div hidden={dialog !== DialogComponent.Solution}> {Solution()}</div>
      <div hidden={dialog !== DialogComponent.CardsByUser}> {ShowCardsByUser()}</div>
      <div hidden={dialog !== DialogComponent.Landing}>{Landing()}</div>
      <div hidden={dialog !== DialogComponent.EndGame}> {EndGame()}</div>
    </div>
  );
}
