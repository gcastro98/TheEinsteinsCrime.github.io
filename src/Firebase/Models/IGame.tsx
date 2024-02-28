import { IUser } from "./IUser";
import { IRequest } from "./IRequest";
import { ICard } from "./ICard";

export enum IStatusGame {
  NotStarted = "Not started",
  InProgress = "In progress",
  Finished = "Finished",
}

export interface IPrivateGame {
  Cards: ICard[];
}

export interface IGame {
  Id: string;
  OnProgress: IStatusGame;
  Users?: IUser[];
  AllCards?: ICard[];
  ActivePlayer?: number;
  ActiveRequest?: IRequest;
  Dice?: number[];
  Private?: IPrivateGame;
}

export const mockGame: IGame = {
  Id: "initialData",
  OnProgress: IStatusGame.NotStarted,
  AllCards: [],
  ActivePlayer: -1,
  Private: undefined,
  ActiveRequest: undefined,
  Dice: [0, 0],
};
