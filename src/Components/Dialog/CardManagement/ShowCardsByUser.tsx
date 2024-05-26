import { ICard } from "../../../Firebase/Models/ICard";
import * as BackendService from "../../../API/BackendServices";
import { GameContext } from "../../../Interfaces/IGameContext";
import { DialogComponent } from "../../../Interfaces/IDialogComponent";
import { Carrousel } from "../../../Common/Components/Carrousel/CarrouselCards";
import styles from "./Styles/CardManagement.module.scss";
import {  useContext, useEffect, useState } from "react";

import { DialogHeader } from "../../../Common/Components/DialogHeader/DialogHeader";
import { Spinner, SpinnerSize } from "@fluentui/react";

export function ShowCardsByUser() {
  const { game, props, dialog, loaded, users } = useContext(GameContext);
  const [cardState, setCardsStates] = useState({
    cardsIds: [],
    cardsPrepared: false,
    loading: false,
    userName: ''
  });
  const updateCardsStates = (val: any) =>
    setCardsStates((prev) => {
      return { ...prev, ...val };
    });
  const loadMyCards = async () => {
    if (
      loaded &&
      dialog === DialogComponent.CardsByUser &&
      props?.userId !== "" &&
      !cardState.cardsPrepared
    ) {
      const userName = users.filter((user) => user.Id === props?.userId)?.pop()?.Name;
      const cards: ICard[] = await BackendService.getMyCards(game?.Id, props?.userId.toString());
      const cardsIds = cards?.map((card) => card?.id);
      updateCardsStates({ cardsIds,userName, cardsPrepared: true });
    }
  };

  useEffect(() => {
    dialog === DialogComponent.None && updateCardsStates({ cardsPrepared: false });
  }, [dialog]);

  useEffect(() => {
    void loadMyCards();
  }, [props]);

  return (
    <div>
      <DialogHeader label={`Cartas de ${cardState?.userName}`} />
      {cardState?.cardsPrepared ? <Carrousel indexArr={cardState?.cardsIds} /> : <Spinner
            label="Esperando a que entren todos los detectives..."
            style={{ marginBottom: "2em", color: "black", fontFamily: "Teletype" }}
            size={SpinnerSize.large}
            className={styles.spinner}
          />}
    </div>
  );
}
