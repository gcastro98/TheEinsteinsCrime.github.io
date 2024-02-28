// import { Dialog } from "@fluentui/react";
import { useContext, useState } from "react";
import "./Dialog.scss";
import { GameContext } from "../Services/DataServices";
import { DialogComponent } from "../Common/Config";
import { CreateOrJoinRoom } from "./ChildComponents/GameManagement/Components/CreateOrJoin";
import { Join } from "./ChildComponents/GameManagement/Components/Join";
import { ShowMyCards } from "./ChildComponents/CardManagement/Components/Show";
import { Request } from "./ChildComponents/CardManagement/Components/Request";
import { BoardGame } from "./ChildComponents/BoardGame/BoardGame";
import { WaitingRoom } from "./ChildComponents/GameManagement/Components/WaitingRoom";
import { ReqSolution } from "./ChildComponents/CardManagement/Components/ReqSolution";
import { ShowCardsByUser } from "./ChildComponents/CardManagement/Components/ShowCardsByUser";
import { Landing } from "./ChildComponents/GameManagement/Components/Landing";





export function DialogBoard(props: any) {
  const {dialog: active, setDialog} = useContext(GameContext)
  const close = () => setDialog(DialogComponent.None)
  return (
    <div className="Dialog" hidden={props.hidden}>
      <span className="CloseButton" onClick={close}>X</span>
      <div hidden={active !== DialogComponent.Create}>{CreateOrJoinRoom()} </div>
      <div hidden={active !== DialogComponent.Join}> {Join()}</div>
      <div hidden={active !== DialogComponent.Cards}>{ShowMyCards()}</div>
      <div hidden={active !== DialogComponent.Board}> {BoardGame()}</div>
      <div hidden={active !== DialogComponent.Request}> {Request()}</div>
      <div hidden={active !== DialogComponent.Waiting}>{WaitingRoom()}</div>
      <div hidden={active !== DialogComponent.Solution}> {ReqSolution()}</div>
      <div hidden={active !== DialogComponent.CardsByUser}> {ShowCardsByUser()}</div>
      <div hidden={active !== DialogComponent.Landing}>{Landing()}</div>
    </div>
  );
}
