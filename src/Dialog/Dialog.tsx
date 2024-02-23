// import { Dialog } from "@fluentui/react";
import { useContext, useState } from "react";
import "./Dialog.scss";
import { GameContext } from "../Services/DataServices";
import { DialogComponent } from "../Utils/Config";
import { CreateOrJoinRoom } from "./ChildComponents/GameManagement/Components/CreateOrJoin";
import { Join } from "./ChildComponents/GameManagement/Components/Join";
import { ShowMyCards } from "./ChildComponents/CardManagement/Components/Show";
import { Request } from "./ChildComponents/CardManagement/Components/Request";
import { BoardGame } from "./ChildComponents/BoardGame/BoardGame";
import { WaitingRoom } from "./ChildComponents/GameManagement/Components/WaitingRoom";
import { ReqSolution } from "./ChildComponents/CardManagement/Components/ReqSolution";
import { ShowCardsByUser } from "./ChildComponents/CardManagement/Components/ShowCardsByUser";

interface IDialogBoard {
  component: () => JSX.Element;
  hidden: boolean;
}


export function DialogBoard(props: any) {
  const {dialog: active} = useContext(GameContext)

  return (
    <div className="Dialog" hidden={props.hidden}>
      <div hidden={active !== DialogComponent.Create}>{CreateOrJoinRoom()} </div>
      <div hidden={active !== DialogComponent.Join}> {Join()}</div>
      <div hidden={active !== DialogComponent.Cards}>{ShowMyCards()}</div>
      <div hidden={active !== DialogComponent.Board}> {BoardGame()}</div>
      <div hidden={active !== DialogComponent.Request}> {Request()}</div>
      <div hidden={active !== DialogComponent.Waiting}>{WaitingRoom()}</div>
      <div hidden={active !== DialogComponent.Solution}> {ReqSolution()}</div>
      <div hidden={active !== DialogComponent.CardsByUser}> {ShowCardsByUser()}</div>
    </div>
  );
}
