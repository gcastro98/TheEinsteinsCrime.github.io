import styles from "./DiceInfo.module.scss";
import { PrimaryButton } from "@fluentui/react";
import { useContext, useEffect, useRef } from "react";
import sylesButton from "../GameInfo/GameInfo.module.scss";
import { GameContext } from "../../Interfaces/IGameContext";
import ReactDice, { ReactDiceRef } from "react-dice-complete";
import { DialogComponent } from "../../Interfaces/IDialogComponent";

import { IStatusPlayer } from "../../Firebase/Models/IUser";
import { IStatusGame } from "../../Firebase/Models/IGame";
import { CustomButton } from "../../Common/Components/CustomButton/CustomButton";

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
      ref.current?.rollAll(dice);
    }
  }, [dice, throwDice, prevStatusRef]);

  /* Check the user previou status to know when render animations */
  useEffect(() => {
    prevStatusRef.current = users?.findIndex((user) => user.Status === IStatusPlayer.ThrowingDice) >= 0;
  });
  const hidden = !(loaded && game?.OnProgress === IStatusGame.InProgress) ? {display: "none"} : {}
  return (
    <div className={styles.GameInfo} 
    style={hidden}
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
        <CustomButton
          text="Ver cartas"
          onClick={async () => {
            setDialog(DialogComponent.Cards);
          }}
        />
        <CustomButton
          text="Abrir tablero"
          onClick={async () => {
            setDialog(DialogComponent.Board);
          }}
        />
      </div>
    </div>
  );
}
