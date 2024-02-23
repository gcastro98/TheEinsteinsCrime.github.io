import { createContext } from "react";
import { BoardGame } from "../Dialog/ChildComponents/BoardGame/BoardGame";
import { ShowMyCards } from "../Dialog/ChildComponents/CardManagement/Components/Show";
import { CreateOrJoinRoom } from "../Dialog/ChildComponents/GameManagement/Components/CreateOrJoin";
import { Join } from "../Dialog/ChildComponents/GameManagement/Components/Join";

import { Request } from "../Dialog/ChildComponents/CardManagement/Components/Request";
import { DialogComponent } from "./Config";

export function selectPath() {
  return `./models`;
}

export const REDUCE_SCALE_DOOR = 0.55;

export function switchComponentsByActiveButton(type: DialogComponent): () => JSX.Element {
  switch (type) {
    case DialogComponent.None:
      return () => <></>;
    case DialogComponent.Create:
      return CreateOrJoinRoom;
    case DialogComponent.Join:
      return Join;
    case DialogComponent.Cards:
      return ShowMyCards;
    case DialogComponent.Board:
      return BoardGame;
    case DialogComponent.Request:
      return Request;
    default:
      return () => <></>;
  }
}

export function getGameIdFromPath(): string {
  const path = window.location.pathname;
  if (path.includes("game")) {
    return path.split("game:")[1];
  } else {
    return "";
  }
}
