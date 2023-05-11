import { ButtonMode, ButtonType } from "../Menu/NavMenu";

export interface IGame {
    Id: string;
    AuthorId: number;
    OnProgress: Boolean;
    Characters: ICharacter[];
    Users: IUser[];
    ActiveRequest?: IRequest;
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
    userId: number;
    position: IPosition;
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
    game: IGame;
    setGame: (game: IGame) => void;
    mode: ButtonMode;
    userId: number;
    setUserId: (userId: number) => void;
    active: ButtonType;
    setActive: React.Dispatch<React.SetStateAction<ButtonType>>;
}

export interface IGameManagement {
    
}

