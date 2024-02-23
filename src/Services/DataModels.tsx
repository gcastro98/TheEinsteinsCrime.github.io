import { DieContainerRef } from "react-dice-complete/dist/DiceContainer";
import { ButtonMode, DialogComponent } from "../Utils/Config";
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
  Users?: IUser[];
  AllCards?: ICard[];
  ActivePlayer?: number;
  ActiveRequest?: IRequest;
  Dice?: number[];
  Private?: IPrivateGame;
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
}


export enum IStatusPlayer {
  WaitingTurn,
  ThrowingDice,
  Movement,
  PreparingRequest,
  ShowingRequest,
  NothingToResponse,
  WaitingResponse,
  MarkingAsReaded,
  ShowingCard,
  Disabled,
  Winner
}


export interface ICard {
  name: string;
  type: "Suspect" | "Weapon" | "Room";
  id: number;
  userId: number | string;
}

export interface IRequest {
  roomId?: number;
  suspectId?: number;
  weaponId?: number;
  userId?: string;
  response?: IResponse;
  readed?: boolean;
}

export interface IResponse {
  cardId?: number;
  userId?: string;
}

export interface IGameContext {
  game: IGame;
  mode: ButtonMode;
  userId: string;
  myCards: ICard[];
  dialog: DialogComponent;
  users: IUser[];
  loaded: boolean;
  setUserId: (id: string) => void;
  setMyCards: (cards: ICard[]) => void;
  setDialog: (dialog: DialogComponent, props?: any) => void;
  isYourTurn: boolean;
  props?: any;  
}


