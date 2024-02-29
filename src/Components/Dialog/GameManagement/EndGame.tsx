import { useContext, useEffect } from "react";
import { GameContext } from "../../../Interfaces/IGameContext";
import { IStatusPlayer } from "../../../Firebase/Models/IUser";
import { Dialog, PrimaryButton } from "@fluentui/react";
import { DialogComponent } from "../../../Interfaces/IDialogComponent";
import { ALL_CARDS } from "../../../Common/StaticData/cards";
import { Card } from "../CardManagement/Model/Card";
import { CustomButton } from "../../../Common/Utils/CustomButton/CustomButton";
import styles from "./Styles/GameManagement.module.scss"
export function EndGame() {
  const { game, userId, users } = useContext(GameContext);
    let winner = users?.find((user) => user.Status === IStatusPlayer.Winner);
    let youAreTheWinner =  winner?.Id === userId;
  console.log(users)
  console.log(winner)
//   useEffect(() => {
//     winner = users?.find((user) => user.Status === IStatusPlayer.Winner);
//     if (dialog !== DialogComponent.ReqSolution && winner !== undefined) {
//         setDialog(DialogComponent.ReqSolution);
//         youAreTheWinner = winner?.Id === userId;
//       }
//   }, [users])
 
  
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
      <div className={styles.cardList}>
        {cardsIndex?.length > 0 && cardsIndex.map((index: any) => Card(ALL_CARDS[index]))}
      </div>
      <div className={styles.footer}>
      <CustomButton text="Jugar de nuevo" />
      <CustomButton text="Salir" />
      </div>
    </div>
  );
}
