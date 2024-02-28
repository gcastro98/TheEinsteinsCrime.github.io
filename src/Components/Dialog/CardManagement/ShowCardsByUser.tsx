import { Card } from "./Model/Card";
import { ICard } from "../../../Firebase/Models/ICard";
import * as BackendService from "../../../API/BackendServices";
import { GameContext } from "../../../Interfaces/IGameContext";
import { useCallback, useContext, useEffect, useState } from "react";

import { DialogComponent } from "../../../Interfaces/IDialogComponent";

export function ShowCardsByUser() {
  const { game, props, dialog, loaded } = useContext(GameContext);
  const [cardState, setCardsStates] = useState({
    cards: [],
    cardsPrepared: false,
  });
  const updateCardsStates = (val: any) =>
    setCardsStates((prev) => {
      return { ...prev, ...val };
    });
  const loadMyCards = useCallback(async () => {
    if (loaded) {
      if (dialog === DialogComponent.CardsByUser && props?.userId !== "" && cardState.cardsPrepared) {
        const cards: ICard[] = await BackendService.getMyCards(game?.Id, props?.userId.toString());
        updateCardsStates({ cards, cardsPrepared: true });
      }
    }
  }, []);

  useEffect(() => {
    dialog === DialogComponent.None && updateCardsStates({ cardsPrepared: false });
  }, [dialog]);

  useEffect(() => {
    loadMyCards();
  }, [props]);

  return (
    <div className="cardList">
      {cardState?.cards && cardState?.cards?.length > 0 && cardState?.cards?.map((card: any) => Card(card))}
    </div>
  );
}
