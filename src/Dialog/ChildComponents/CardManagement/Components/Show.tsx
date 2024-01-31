import { useContext } from "react";
import { GameContext } from "../../../../Services/DataServices";
import { Card } from "../Model/Card";
import "../Model/Card.css";

export function Show() {

  const {  myCards } = useContext(GameContext);
 
  return (
    <div className="cardList">{myCards.map((card: any) => Card(card))}</div>
  );
}
