import { createContext } from "react";
import { BoardGame } from "../Dialog/ChildComponents/BoardGame/BoardGame";
import { Show } from "../Dialog/ChildComponents/CardManagement/Components/Show";
import { CreateOrJoinRoom } from "../Dialog/ChildComponents/GameManagement/Components/CreateOrJoin";
import { Join } from "../Dialog/ChildComponents/GameManagement/Components/Join";
import { ButtonType } from "../Menu/NavMenu";

export function selectPath() {
  return `./models`;
}

export const REDUCE_SCALE_DOOR = 0.55;

export function switchComponentsByActiveButton(type: ButtonType): () => JSX.Element {
  switch (type) {
    case ButtonType.None:
      return () => <></>;
    case ButtonType.Create:
      return CreateOrJoinRoom;
    case ButtonType.Join:
      return Join;
    case ButtonType.Cards:
      return Show;
    case ButtonType.Board:
      return BoardGame;
    default:
      return () => <></>;
  }
}

export function getGameIdFromPath(): string {
  const path = window.location.pathname;
  if (path.includes("game")) {
    return path.split("game:")[1];
}else {
  return "";
}
}



