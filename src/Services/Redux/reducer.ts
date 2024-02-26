import { Reducer } from "redux";
import { ICard } from "../DataModels";
import { ActionTypes, IAction } from "./actions";


export interface ICardsState {
    cards: ICard[];
    message: string;
    userId: string;
    gameId: string;
}
export const initialCardState: ICardsState = {
    cards: [],
    message: '',
    userId: "",
    gameId: ""
}

export const reducer: Reducer<ICardsState> = (state: ICardsState = initialCardState, action: IAction) => {
    switch(action.type){
        case ActionTypes.REQUEST_MY_CARDS:
        case ActionTypes.REQUEST_MY_CARDS_SUCCESS:
        case ActionTypes.REQUEST_MY_CARDS_FAILED:
            return {...state, ...action.payload}
        default:
            return state;
    }
}