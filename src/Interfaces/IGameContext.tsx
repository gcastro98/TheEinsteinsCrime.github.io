import { DialogComponent } from "./IDialogComponent";
import { IGame } from "../Firebase/Models/IGame";
import { ICard } from "../Firebase/Models/ICard";
import { IPosition, IUser } from "../Firebase/Models/IUser";
import {  RefObject, createContext } from "react";
import { CameraControls } from "@react-three/drei";


export interface IGameContext {
  game: IGame;
  userId: string;
  myCards: ICard[];
  dialog: DialogComponent;
  users: IUser[];
  loaded: boolean;
  updateContext: (val: any) => void;
  setDialog: (dialog: DialogComponent, props?: any) => void;
  startManually: (gameId: string) => void;
  isYourTurn: boolean;
  props?: any;
  cameraRef: RefObject<CameraControls>;
  setLookAt: (position: IPosition) => void;
}

export const GameContext = createContext<IGameContext>({} as IGameContext);