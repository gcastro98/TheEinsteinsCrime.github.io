import { useContext } from "react";
import styles from "./Styles/CardManagement.module.scss";
import { GameContext } from "../../../Interfaces/IGameContext";
import { IStatusPlayer } from "../../../Firebase/Models/IUser";
import { CustomButton } from "../../../Common/Components/CustomButton/CustomButton";
import { DialogHeader } from "../../../Common/Components/DialogHeader/DialogHeader";

import { Carrousel } from "../../../Common/Components/Carrousel/CarrouselCards";

export function EndGame() {
  const { game, userId, users } = useContext(GameContext);
  let winner = users?.find((user) => user.Status === IStatusPlayer.Winner);
  let youAreTheWinner = winner?.Id === userId;

  const cardsIndex =
    (game?.ActiveRequest && [
      game?.ActiveRequest?.suspectId as number,
      game?.ActiveRequest?.weaponId as number,
      game?.ActiveRequest?.roomId as number,
    ]) ||
    [];

  return (
    <div>
      <DialogHeader
        label={youAreTheWinner ? "Enhorabuena, ¡Has ganado!" : "Lastima, la siguiente vez ira mejor"}
      />
      <Carrousel indexArr={cardsIndex} />
      <div className={styles.footer}>
        <CustomButton text="Jugar de nuevo" />
        <CustomButton text="Salir" />
      </div>
    </div>
  );
}
