import { useCallback, useContext, useEffect } from "react";
import { GameContext } from "../../../../Services/DataServices";
import { Card } from "../Model/Card";
import "../Model/Card.css";
import * as BackendService from "../../../../Services/BackendServices"
import { ICard } from "../../../../Services/DataModels";

export function ShowMyCards() {

  const { myCards} = useContext(GameContext);

  return (
    <div className="cardList">{myCards?.length > 0 && myCards?.map((card: any) => Card(card))}</div>
  );
}
