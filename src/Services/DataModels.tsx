import { ButtonMode } from "../Menu/NavMenu";

export interface IGame {
    Id: string;
    AuthorId: number;
    OnProgress: Boolean;
    Characters: ICharacter[];
    Users: IUser[];
    ActiveRequest: IRequest;
    ActiveResponse: IResponse;
    Requests: IRequest[];
    Cards: ICard[];
    ActivePlayer: number;
}

export interface IPosition {
    positionX: number;
    positionY: number;
    rotation?: number;
    roomId?: string; 
  }
  

export interface IUser {
    Name: string;
    Id: number;
    Connected: boolean;
}

export interface ICharacter {
    Name: string;
    id: number;
    userId: string;
    position: IPosition;
}

export interface ICard{
    name: string;
    type: "Suspect" | "Weapon" | "Room";
    id: number;
    userId: number | "Solution";
}

export interface IRequest {
    cards: ICard[];
    userId: string;
    active: boolean;
    response?: IResponse;
}

export interface IResponse {
    cardId: number;
    userId: number;
    readed: boolean;
}

export interface IGameContext {
    game: IGame;
    setGame: (game: IGame) => void;
    mode: ButtonMode;
    userId: number;
    setUserId: (userId: number) => void;
}

export interface IGameFunctions {

}