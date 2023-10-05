import { DieContainerRef } from "react-dice-complete/dist/DiceContainer";
import { ButtonMode, ButtonType } from "../Utils/Config";
import { RefObject } from "react";


export interface IGame {
    Id: string;
    AuthorId: number;
    OnProgress: Boolean;
    Users: IUser[];
    ActiveRequest?: IRequest;
    Requests: IRequest[];
    Cards: ICard[];
    ActivePlayer: number;
    ResponseTurn?: number;
    Dice: number[];
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
    throwedDice: boolean;
}

export interface IUser {
    name: string;
    userId: number;
    connected: boolean;
    status: IStatusPlayer;
    position: IPosition;
}

export enum IStatusPlayer {
    WaitingTurn = 0,
    ThrowingDice = 1,
    Movement = 2,
    Asking = 3,
    WaitingResponse = 4,
    MarkingAsReaded = 5,

}

export interface ICharacter {
    Name: string;
    id: number;
    userId: number;
    Position: IPosition;
}

export interface ICard{
    name: string;
    type: "Suspect" | "Weapon" | "Room";
    id: number;
    userId: number | "Solution";
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
    gameId: string;
    game: IGame;
    setGame: (game: IGame) => void;
    mode: ButtonMode;
    userId: number;
    setUserId: (userId: number) => void;
    active: ButtonType;
    setActive: React.Dispatch<React.SetStateAction<ButtonType>>;
    diceManagement: IDiceManagement;
    
}

export interface IDiceManagement {
    ref: RefObject<DieContainerRef>;
    result: number;
    setResult: (value: number) => void;
    dice: number[];
    throwDice:(dice:number[]) => void;
    getRandomValue: () => void;
    resetValues: () => void;
  }
  


