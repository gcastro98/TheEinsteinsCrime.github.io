import { useCallback, useContext, useEffect, useState } from "react";
import { GameContext } from "../../../../Services/DataServices";
import { ICard } from "../../../../Services/DataModels";
import { Card } from "../Model/Card";
import * as BackendService from "../../../../Services/BackendServices"

export function ShowCardsByUser() {

    const { game, myCards, userId,  setMyCards, props} = useContext(GameContext);
    const [cards, setCards] = useState<ICard[]>([])

  
  
    const loadMyCards = useCallback(async () => {
      if((!cards?.length || cards?.length === 0 || (cards?.length > 0 && cards[0].userId !== props?.userId))){
        const cards: ICard[] = await BackendService.getMyCards(game?.Id, props?.userId.toString());
        setMyCards(cards);
    }
    }, [])
  
    useEffect( () => { 
      loadMyCards()
       },[props])
  
    return (
      <div className="cardList">{myCards.map((card: any) => Card(card))}</div>
    );
  }