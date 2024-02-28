
export interface IAvailableMovements {
  U: string | number;
  R: string | number;
  D: string | number;
  L: string | number;
}

export interface IUser {
  Id: string;
  Ind: number;
  Name: string;
  Position: IPosition;
  Status: IStatusPlayer;
  PendingMovements: number;
}



export interface IPosition {
  positionX: number;
  positionY: number;
  rotation?: number;
  roomId?: number;
  availableMovements?: IAvailableMovements;
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

