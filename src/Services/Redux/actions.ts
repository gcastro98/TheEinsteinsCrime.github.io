import { ICard } from "../DataModels"

export enum ActionTypes {
    REQUEST_MY_CARDS = "REQUEST_MY_CARDS",
    REQUEST_MY_CARDS_SUCCESS = "REQUEST_MY_CARDS_SUCCESS",
    REQUEST_MY_CARDS_FAILED = "REQUEST_MY_CARDS_FAILED"
    
}

export interface IRequestUserCards {
    type: ActionTypes.REQUEST_MY_CARDS,
    payload: {
        gameId: string,
        userId: string
    }
}

export interface IRequestUserCardsSuccess {
    type: ActionTypes.REQUEST_MY_CARDS_SUCCESS,
    payload: {
        cards: ICard[]
    }
}

export interface IRequestUserCardsFailed {
    type: ActionTypes.REQUEST_MY_CARDS_FAILED,
    payload: {
        message: string
    }
}

export const requestMyCards = (gameId: string, userId: string): IRequestUserCards=> {return {
    type: ActionTypes.REQUEST_MY_CARDS,
    payload: {
        gameId,
        userId
    }
}}

export const requestMyCardsSuccess = (cards: ICard[]): IRequestUserCardsSuccess=> {return {
    type: ActionTypes.REQUEST_MY_CARDS_SUCCESS,
    payload: {
        cards
    }
}}

export const requestMyCardsFailed = (message: string): IRequestUserCardsFailed=> {return {
    type: ActionTypes.REQUEST_MY_CARDS_FAILED,
    payload: {
       message
    }
}}

export type IAction = IRequestUserCards | IRequestUserCardsSuccess | IRequestUserCardsFailed