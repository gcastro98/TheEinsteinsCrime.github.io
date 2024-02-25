import { createContext } from "react";
import { BoardGame } from "../Dialog/ChildComponents/BoardGame/BoardGame";
import { ShowMyCards } from "../Dialog/ChildComponents/CardManagement/Components/Show";
import { CreateOrJoinRoom } from "../Dialog/ChildComponents/GameManagement/Components/CreateOrJoin";
import { Join } from "../Dialog/ChildComponents/GameManagement/Components/Join";

import { Request } from "../Dialog/ChildComponents/CardManagement/Components/Request";
import { DialogComponent } from "./Config";
import { IStatusGame } from "../Services/DataModels";

export function selectPath() {
  return `./models`;
}




export function getGameIdFromPath(): string {
  const path = window.location.search?.toLocaleLowerCase();
  const params = new URLSearchParams(path);
  if (params.has("game")) {
    return params.get("game") || '';
  } else {
    return "";
  }
}

export function nullOrEmpty(str: string | number | any[]| IStatusGame): boolean {
  if (str === null || str === undefined) {
    return true;
  }

  if (typeof str === 'string') {
    if (str.trim().length <= 0) return true;
    else return false;
  }

  if (typeof str === 'number') {
    if (str < 0) return true;
    else return false;
  }

  if (str?.length === 0) {
    return true;
  }

  // if (typeof str === IStatusGame && str === IStatusGame.NotStarted){
  //   return true;
  // }

  return false;
}

