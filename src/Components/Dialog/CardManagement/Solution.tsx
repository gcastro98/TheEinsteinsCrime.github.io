import { useContext } from "react";
import { GameContext } from "../../../Interfaces/IGameContext";
import { IStatusPlayer } from "../../../Firebase/Models/IUser";
import { Dialog, PrimaryButton } from "@fluentui/react";
import { DialogComponent } from "../../../Interfaces/IDialogComponent";
import { ALL_CARDS } from "../../../Common/StaticData/cards";
import { Card } from "./Model/Card";
import { CustomButton } from "../../../Common/Utils/CustomButton/CustomButton";

export function Solution() {
  const { game, userId, setDialog, users, dialog } = useContext(GameContext);
  const winner = users?.find((user) => user.Status === IStatusPlayer.Winner);
  if (dialog !== DialogComponent.Solution && winner !== undefined) {
    setDialog(DialogComponent.Solution);
  }
  const youAreTheWinner = winner?.Id === userId;
  const cardsIndex =
    (game?.ActiveRequest && [
      game?.ActiveRequest?.suspectId,
      game?.ActiveRequest.weaponId,
      game?.ActiveRequest.roomId,
    ]) ||
    [];

  return (
    <div>
      <h2>{youAreTheWinner ? "Enhorabuena, ¡Has ganado!" : "Lastima, la siguiente vez ira mejor"}</h2>
      <div className="cardList">
        {cardsIndex?.length > 0 && cardsIndex.map((index: any) => Card(ALL_CARDS[index]))}
      </div>

      <CustomButton text="Jugar de nuevo" />
      <CustomButton text="Salir" />
    </div>
  );
}
