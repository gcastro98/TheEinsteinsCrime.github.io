import { DialogComponent } from "./IDialogComponent";
import { IGame } from "../Firebase/Models/IGame";
import { ICard } from "../Firebase/Models/ICard";
import { IUser } from "../Firebase/Models/IUser";
import { createContext } from "react";


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
}

export const GameContext = createContext<IGameContext>({} as IGameContext);