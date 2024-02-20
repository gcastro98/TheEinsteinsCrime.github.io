import { useCallback, useContext, useEffect } from "react";
import { GameContext } from "../../../../Services/DataServices";
import { Card } from "../Model/Card";
import "../Model/Card.css";
import * as BackendService from "../../../../Services/BackendServices"
import { ICard } from "../../../../Services/DataModels";

export function Show() {

  const { game, myCards, userId,  setMyCards} = useContext(GameContext);


  // const loadMyCards = useCallback(async () => {
  //   if((!myCards?.length || myCards?.length === 0) && game?.OnProgress === true && userId){
  //     const cards: ICard[] = await BackendService.getMyCards(game?.Id, userId.toString());
  //     setMyCards(cards);
  // }
  // }, [])

  // useEffect( () => { 
  //   loadMyCards()
  //    },[userId])

  return (
    <div className="cardList">{myCards.map((card: any) => Card(card))}</div>
  );
}
