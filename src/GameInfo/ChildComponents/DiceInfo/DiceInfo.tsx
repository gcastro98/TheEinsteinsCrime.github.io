import React, { RefObject, useContext, useEffect, useRef, useState } from "react";
import styles from "./DiceInfo.module.scss";
import sylesButton from "../../GameInfo.module.scss" 
import { GameContext, useDataByPath } from "../../../Services/DataServices";
import { Icon, PrimaryButton, initializeIcons } from "@fluentui/react";
import ReactDice, { ReactDiceRef } from "react-dice-complete";
import { DieContainerRef } from "react-dice-complete/dist/DiceContainer";
import { DialogComponent } from "../../../Common/Config";
import { IStatusPlayer } from "../../../Services/DataModels";
interface GameStatus {
 hidden: boolean;
}

export function DiceInfo(props: GameStatus): any {
  const { game } = useContext(GameContext);
  const ref = useRef<ReactDiceRef>(null);
  const prevStatusRef = useRef<boolean>(false);
  const dice = game?.Dice;
  const {setDialog, users} = useContext(GameContext)
  const throwDice =prevStatusRef.current && users?.findIndex(user => user.Status === IStatusPlayer.Movement) >= 0
  // const [dice, throwDice] = useDataByPath(`/games/${game.Id}/Dice`, [0, 0]);
  // console.log(props.hidden)

  
  console.log(prevStatusRef.current, throwDice)
  useEffect(() => {
    if (throwDice){
      console.log("lanza", prevStatusRef.current, throwDice)
      ref.current?.rollAll(dice);
    }
  }, [dice, throwDice, prevStatusRef]);
  
  /* Check the user previou status to know when render animations */
  useEffect(() => {
    prevStatusRef.current = users?.findIndex(user => user.Status === IStatusPlayer.ThrowingDice) >= 0;
  })

  return (
    <div className={styles.GameInfo} >
      <ReactDice
        numDice={2}
        ref={ref}
        rollDone={(totalNumber: any) => {
          prevStatusRef.current = false
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
