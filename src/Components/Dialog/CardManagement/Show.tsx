import {  useContext } from "react";
import { GameContext } from "../../../Interfaces/IGameContext";
import { Card } from "./Model/Card";
import "./Model/Card.css";


export function ShowMyCards() {

  const { myCards} = useContext(GameContext);

  return (
    <div className="cardList">{myCards?.length > 0 && myCards?.map((card: any) => Card(card))}</div>
  );
}
