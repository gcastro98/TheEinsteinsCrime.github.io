import styles from "./DiceInfo.module.scss";
import { PrimaryButton } from "@fluentui/react";
import { useContext, useEffect, useRef } from "react";
import sylesButton from "../GameInfo/GameInfo.module.scss";
import { GameContext } from "../../Interfaces/IGameContext";
import ReactDice, { ReactDiceRef } from "react-dice-complete";
import { DialogComponent } from "../../Interfaces/IDialogComponent";

import { IStatusPlayer } from "../../Firebase/Models/IUser";
import { IStatusGame } from "../../Firebase/Models/IGame";

export function DiceInfo(): any {
  const { game, loaded } = useContext(GameContext);
  const ref = useRef<ReactDiceRef>(null);
  const prevStatusRef = useRef<boolean>(false);
  const dice = game?.Dice;
  const { setDialog, users } = useContext(GameContext);
  const throwDice =
    prevStatusRef.current && users?.findIndex((user) => user.Status === IStatusPlayer.Movement) >= 0;

  useEffect(() => {
    if (throwDice) {
      console.log("lanza", prevStatusRef.current, throwDice);
      ref.current?.rollAll(dice);
    }
  }, [dice, throwDice, prevStatusRef]);

  /* Check the user previou status to know when render animations */
  useEffect(() => {
    prevStatusRef.current = users?.findIndex((user) => user.Status === IStatusPlayer.ThrowingDice) >= 0;
  });
  console.log("hiddenDice", !(loaded && game?.OnProgress === IStatusGame.InProgress))
  return (
    <div className={styles.GameInfo} 
hidden={true}
    //  hidden={!(loaded && game?.OnProgress === IStatusGame.InProgress)}
    >
      <ReactDice
        numDice={2}
        ref={ref}
        rollDone={(totalNumber: any) => {
          prevStatusRef.current = false;
        }}
        faceColor={"#65211C"}
        dotColor={"#F2F2F2"}
        disableIndividual
        outline
      />
      <div className={sylesButton.footer}>
        <PrimaryButton
          text="Ver cartas"
          onClick={async () => {
            setDialog(DialogComponent.Cards);
          }}
        />
        <PrimaryButton
          text="Abrir tablero"
          onClick={async () => {
            setDialog(DialogComponent.Board);
          }}
        />
      </div>
    </div>
  );
}
