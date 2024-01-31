import { PrimaryButton, Spinner, TextField } from "@fluentui/react";
import { IGame, IUser } from "../../../../Services/DataModels";
import { useContext, useState } from "react";
import {  GameContext } from "../../../../Services/DataServices";
import { generateRandomCards, generateRandomId, saveUserIdOnLocalStorage } from "../../Utils";
import styles from "../GameManagement.module.scss";

export function WaitingRoom(props: any) {
  const {game,users, userId } = useContext(GameContext);
  const [name, setName] = useState<string>("");

  const AddUser = (user: string)=> {

  }

  const StartGame = () => {}

  return (
    <div>
      {userId < 0 && (
        <div className={styles.inputNameSection}>
          <span>Introduce tu nombre para unirte a la partida</span>
          <TextField
            className={styles.textfield}
            onChange={(event: any, newValue: any) => setName(newValue as string)}
          />
          <PrimaryButton className={styles.button} onClick={() => AddUser(name)}>
            Unirse
          </PrimaryButton>
          <hr />
        </div>
      )}
      <h3>Detectives en busca de pistas...</h3>
      <div className={styles.playerList}>
        {users?.length && users?.map((user: any) => (
          <span className={styles.userName}>{user.name}</span>
        ))}

        <Spinner label="Esperando a que el creador de la sala inicie la partida..." />
        {users?.length >= 2 && (
          <PrimaryButton className={styles.buttonStartGame} onClick={() => StartGame()}>
            Iniciar partida
          </PrimaryButton>
        )}
      </div>
    </div>
  );
}
