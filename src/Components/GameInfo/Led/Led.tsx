import { getColorStyle, getPieceColorByIndex } from "../../../Common/Utils/Utils";
import { IUser } from "../../../Firebase/Models/IUser";
import styles from "./Led.module.scss";

export function Led({ isActivePlayer, user }: { isActivePlayer: boolean; user: IUser }): JSX.Element {
  const customStyles = getColorStyle(getPieceColorByIndex(user?.Ind));



  return (
    <div
      className={styles.ledBox}
    >
      <div className={isActivePlayer ? styles.ledOn : styles.ledOff}  style={
        customStyles as React.CSSProperties
      } />
    </div>
  );
}
