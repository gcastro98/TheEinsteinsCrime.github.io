import "./Dialog.scss";
import { useContext } from "react";
import { BoardGame } from "./BoardGame/BoardGame";
import { Request } from "./CardManagement/Request";
import { ShowMyCards } from "./CardManagement/Show";
import { WaitingRoom } from "./GameManagement/WaitingRoom";
import { ReqSolution } from "./CardManagement/ReqSolution";
import { GameContext } from "../../Interfaces/IGameContext";
import { ShowCardsByUser } from "./CardManagement/ShowCardsByUser";
import { DialogComponent } from "../../Interfaces/IDialogComponent";
import { Landing } from "./GameManagement/Landing";

export function DialogBoard(props: any) {
  const { dialog, setDialog } = useContext(GameContext);
  const close = () => setDialog(DialogComponent.None);
  return (
    <div className="Dialog" hidden={props.hidden}>
      <span className="CloseButton" onClick={close}>
        X
      </span>
      <div hidden={dialog !== DialogComponent.Cards}>{ShowMyCards()}</div>
      <div hidden={dialog !== DialogComponent.Board}> {BoardGame()}</div>
      <div hidden={dialog !== DialogComponent.Request}> {Request()}</div>
      <div hidden={dialog !== DialogComponent.Waiting}>{WaitingRoom()}</div>
      <div hidden={dialog !== DialogComponent.Solution}> {ReqSolution()}</div>
      <div hidden={dialog !== DialogComponent.CardsByUser}> {ShowCardsByUser()}</div>
      <div hidden={dialog !== DialogComponent.Landing}>{Landing()}</div>
    </div>
  );
}
