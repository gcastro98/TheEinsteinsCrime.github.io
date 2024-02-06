import React, { RefObject, useContext, useEffect, useRef, useState } from "react";
import styles from "./DiceInfo.module.scss";
import { GameContext } from "../../../Services/DataServices";
import { Icon, PrimaryButton, initializeIcons } from "@fluentui/react";
import ReactDice, { ReactDiceRef } from "react-dice-complete";
import { DieContainerRef } from "react-dice-complete/dist/DiceContainer";
interface GameStatus {
  // active: boolean;
  // throwedDice: boolean;
  // setThrowedDice: (value: boolean) => void;
  // // throwDice?: (dice: number[]) => void;
  dice?: number[];
}

export function DiceInfo(props: GameStatus): any {
  const {  game, userId, active, setActive } = useContext(GameContext);
//   const [activePlayer] = useActivePlayer(gameId);
//   // const { dice, throwDice, ref } = useDiceManagement(gameId);
// const dice = useDice(gameId)[0];
  const ref = useRef<ReactDiceRef>(null);
  const [auxActivePlayer, setAuxActivePlayer] = useState<number>(0);
  const [auxDice, setAuxDice] = useState<number[]>([0, 0]);
  useEffect(() => {
    ref.current?.rollAll(props.dice);
  }, [props.dice]);

  return (
    <div className={styles.GameInfo} >
      <ReactDice
        numDice={2}
        ref={ref}
        rollDone={(totalNumber: any) => {
          // props.setThrowedDice(false);
        }}
        faceColor={"#65211C"}
        dotColor={"#F2F2F2"}
        disableIndividual
        outline
        // disableRandom
      />
    </div>
  );
}
