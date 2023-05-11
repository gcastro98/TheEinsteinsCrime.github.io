import { useContext } from "react";
import { GameContext } from "../../../../Services/DataServices";
import { Card } from "../Model/Card";
import "../Model/Card.css";

export function Show() {
    console.log("Show")
  const { game, setGame, userId } = useContext(GameContext);
  console.log(userId)
  return (
    <div className="cardList">{game.Cards.filter((card: any) => card.userId === userId).map((card: any) => Card(card))}</div>
  );
}
