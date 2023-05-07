import { useContext } from "react";
import { GameContext } from "../../../../Services/DataServices";

export function Show() {
    console.log("Show")
  const { game, setGame, userId } = useContext(GameContext);
  console.log(userId)
  debugger;
  return (
    <div>{game.Cards.filter((card: any) => card.userId === userId).map((card: any) => card.name)}</div>
  );
}
