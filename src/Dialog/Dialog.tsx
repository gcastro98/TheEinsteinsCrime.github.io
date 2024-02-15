// import { Dialog } from "@fluentui/react";
import { useContext, useState } from "react";
import "./Dialog.scss";
import { GameContext } from "../Services/DataServices";
import { ButtonType } from "../Utils/Config";
import { CreateOrJoinRoom } from "./ChildComponents/GameManagement/Components/CreateOrJoin";
import { Join } from "./ChildComponents/GameManagement/Components/Join";
import { Show } from "./ChildComponents/CardManagement/Components/Show";
import { Request } from "./ChildComponents/CardManagement/Components/Request";
import { BoardGame } from "./ChildComponents/BoardGame/BoardGame";
import { WaitingRoom } from "./ChildComponents/GameManagement/Components/WaitingRoom";
import { ReqSolution } from "./ChildComponents/CardManagement/Components/ReqSolution";

interface IDialogBoard {
  component: () => JSX.Element;
  hidden: boolean;
}


export function DialogBoard(props: any) {
  const {active} = useContext(GameContext)

  return (
    <div className="Dialog" hidden={props.hidden}>
      <div hidden={active !== ButtonType.Create}>{CreateOrJoinRoom()} </div>
      <div hidden={active !== ButtonType.Join}> {Join()}</div>
      <div hidden={active !== ButtonType.Cards}>{Show()}</div>
      <div hidden={active !== ButtonType.Board}> {BoardGame()}</div>
      <div hidden={active !== ButtonType.Request}> {Request()}</div>
      <div hidden={active !== ButtonType.Waiting}>{WaitingRoom()}</div>
      <div hidden={active !== ButtonType.Solution}> {ReqSolution()}</div>
      {/* {props.component()} */}
    </div>
  );
}
