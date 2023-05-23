import React, { useContext, useEffect, useRef } from "react";
import styles from "./GameStatus.module.scss";
import { GameContext, useActivePlayer } from "../Services/DataServices";
import { Icon, PrimaryButton, initializeIcons } from "@fluentui/react";
import ReactDice, { ReactDiceRef } from "react-dice-complete";
interface GameStatus {
  active: boolean;
}

export function GameStatus(props: GameStatus): any {
  const { game, setGame, userId, diceContext } = useContext(GameContext);
  const { diceValue, setDiceValue, throwDice, setThrowDice } = diceContext;
  const [activePlayer, setActivePlayer] = useActivePlayer();
  const [timer, setTimer] = React.useState(60);
  const reactDice = useRef<ReactDiceRef>(null);
  console.log(game?.ActivePlayer)
  useEffect(() => {
    setThrowDice(false);
    reactDice.current?.rollAll();
  }, [game?.ActivePlayer === userId && throwDice]);

  // useEffect(() => {
  //   reactDice.current?.rollAll([diceValue]);
  // }, [diceValue > 0 && game?.ActivePlayer !== userId]);
  return (
    props.active && (
      <div className={styles.GameInfo}>
        <ReactDice
          numDice={2}
          ref={reactDice}
          rollDone={(totalNumber: any) => game?.ActivePlayer === userId && setDiceValue(totalNumber)}
          faceColor={"#65211C"}
          dotColor={"#F2F2F2"}
          disableIndividual
          outline
        />
      
        {/* <div className={styles.section}>
          <div className={styles.leftColumn}>
            <Icon iconName="Contact" />
            {userId >= 0 && game?.Users?.length > 0 && game?.Users[userId].Name}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.leftColumn}>
            <Icon iconName="Timer" /> {timer}s
          </div>
        </div> */}
      </div>
    )
  );
}
