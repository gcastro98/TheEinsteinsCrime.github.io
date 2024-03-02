import { ICard } from "../../../Firebase/Models/ICard";
import * as BackendService from "../../../API/BackendServices";
import { GameContext } from "../../../Interfaces/IGameContext";
import { DialogComponent } from "../../../Interfaces/IDialogComponent";
import { Carrousel } from "../../../Common/Components/Carrousel/CarrouselCards";

import { useCallback, useContext, useEffect, useState } from "react";

import { DialogHeader } from "../../../Common/Components/DialogHeader/DialogHeader";

export function ShowCardsByUser() {
  const { game, props, dialog, loaded } = useContext(GameContext);
  const [cardState, setCardsStates] = useState({
    cardsIds: [],
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
        const cardsIds = cards?.map((card) => card?.id);
        updateCardsStates({ cardsIds, cardsPrepared: true });
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
    <div>
      <DialogHeader label={"Cartas de Prueba"} />
      <Carrousel indexArr={cardState?.cardsIds} />
    </div>
  );
}
