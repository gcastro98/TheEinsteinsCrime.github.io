import { useContext } from "react";
import { GameContext } from "../../../Interfaces/IGameContext";
import "../../../Common/Components/Carrousel/Model/Card.css";
import { Carrousel } from "../../../Common/Components/Carrousel/CarrouselCards";
import { DialogHeader } from "../../../Common/Components/DialogHeader/DialogHeader";

export function ShowMyCards() {
  const { myCards } = useContext(GameContext);
  
  const ids = myCards?.map((cards) => cards?.id);
  const label = "Mis Cartas";

  return (
    <div>
      <DialogHeader label={label} />
      <Carrousel indexArr={ids} />
    </div>
  );
}
