import React, { RefObject, useContext, useEffect, useRef, useState } from "react";
import styles from "./DiceInfo.module.scss";
import { GameContext, useDataByPath } from "../../../Services/DataServices";
import { Icon, PrimaryButton, initializeIcons } from "@fluentui/react";
import ReactDice, { ReactDiceRef } from "react-dice-complete";
import { DieContainerRef } from "react-dice-complete/dist/DiceContainer";
interface GameStatus {
 hidden: boolean;
}

export function DiceInfo(props: GameStatus): any {
  const { game } = useContext(GameContext);
  const ref = useRef<ReactDiceRef>(null);
  const dice = game?.Dice;
  // const [dice, throwDice] = useDataByPath(`/games/${game.Id}/Dice`, [0, 0]);
  // console.log(props.hidden)

  useEffect(() => {
    // console.log(dice)
    if (dice?.length)
    ref.current?.rollAll(dice);
  }, [dice && !props.hidden]);

  return (
    <div className={styles.GameInfo} >
      <ReactDice
        numDice={2}
        ref={ref}
        rollDone={(totalNumber: any) => {
          console.log(totalNumber)
        }}
        faceColor={"#65211C"}
        dotColor={"#F2F2F2"}
        disableIndividual
        outline

      />
    </div>
  );
}
