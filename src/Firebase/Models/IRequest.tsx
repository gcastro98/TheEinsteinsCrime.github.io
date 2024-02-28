
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

