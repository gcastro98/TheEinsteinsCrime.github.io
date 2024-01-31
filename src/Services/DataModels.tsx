import { DieContainerRef } from "react-dice-complete/dist/DiceContainer";
import { ButtonMode, ButtonType } from "../Utils/Config";
import { RefObject } from "react";

export interface IUser {
  Id: string;
  Name: string;
  Position: IPosition;
  Status: IStatusPlayer;
}
export interface IMyUserInfo extends IUser {
  Cards: ICard[];
}
export interface IGame {
  Id: string;
  OnProgress: boolean;
  Users: IUser[];
  AllCards: ICard[];
  ActivePlayer: number;
  ActiveRequest: IRequest;
  Dice: number[];
  Private: IPrivateGame;
}
export interface IPrivateGame {
  Cards: ICard[];
}

export interface IPosition {
  positionX: number;
  positionY: number;
  rotation?: number;
  roomId?: string;
}

export interface IActivePlayer {
  userId: number;
  dice: number[];
  // throwedDice: boolean;
}


export enum IStatusPlayer {
  WaitingTurn = 0,
  ThrowingDice = 1,
  Movement = 2,
  Asking = 3,
  WaitingResponse = 4,
  MarkingAsReaded = 5,
}


export interface ICard {
  name: string;
  type: "Suspect" | "Weapon" | "Room";
  id: number;
  userId: number | string;
}

export interface IRequest {
  roomId: number;
  suspectId: number;
  weaponId: number;
  userId: number;
  response?: IResponse;
  readed?: boolean;
}

export interface IResponse {
  cardId: number;
  userId: number;
  readed: boolean;
}

export interface IGameContext {
  game: IGame;
  mode: ButtonMode;
  userId: number;
  myCards: ICard[];
  active: ButtonType;
  users: IUser[];
  setActive: React.Dispatch<React.SetStateAction<ButtonType>>;
}


