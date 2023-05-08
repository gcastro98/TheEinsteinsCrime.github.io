import React, { useContext } from "react";
import styles from "./GameInfo.module.scss";
import { GameContext } from "../Services/DataServices";
import { Icon, initializeIcons } from "@fluentui/react";
interface IGameInfo {
  active: boolean;
}

export function GameInfo(props: IGameInfo): any {
  const { game, setGame, userId } = useContext(GameContext);
  const [timer, setTimer] = React.useState(60);

  // const decrement = () => {
  //   while (timer > 0) {
  //     setInterval(function () {
  //       setTimer((prev) => prev - 1);
  //     }, 1000);
  //   }
  // };
  // decrement()
  return (
    props.active && (
      <div className={styles.GameInfo}>
        <div className={styles.section}>
          <div className={styles.leftColumn}>
            <Icon iconName="Contact" />
            {userId >= 0 && game?.Users[userId].Name}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.leftColumn}>
            <Icon iconName="Timer" /> {timer}s
          </div>
        </div>
      </div>
    )
  );
}
