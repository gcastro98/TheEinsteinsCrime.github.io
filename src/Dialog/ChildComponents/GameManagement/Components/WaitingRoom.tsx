import { PrimaryButton, Spinner, TextField } from "@fluentui/react";
import { IUser } from "../../../../Services/DataModels";
import { useContext, useState } from "react";
import {  GameContext } from "../../../../Services/DataServices";
import styles from "../GameManagement.module.scss";
import * as BackendService from "./../../../../Services/BackendServices";
export function WaitingRoom() {
  const {game, users, userId, updateContext } = useContext(GameContext);
  const [name, setName] = useState<string>("");


  const AddUser = async (user: string)=> {
    const myUser = await BackendService.addUserToGame(game?.Id, user);
    updateContext({userId: myUser.Id})
    sessionStorage.setItem(`${game.Id}:userId`, myUser.Id);
  }

  const StartGame = () => {
    void BackendService.startGame(game?.Id)
  }
 
  return (
    <div>
      {!userId && (
        <div className={styles.inputNameSection}>
          <span>Introduce tu nombre para unirte a la partida</span>
          <TextField
            className={styles.textfield}
            onChange={(event: any, newValue: any) => setName(newValue as string)}
          />
          <PrimaryButton className={styles.button} onClick={() => void AddUser(name)}>
            Unirse
          </PrimaryButton>
          <hr />
        </div>
      )}
      <h3>Detectives en busca de pistas...</h3>
      <div className={styles.playerList}>
        {users?.length > 0 && users?.map((user: IUser) => (
          <span className={styles.userName}>{user.Name}</span>
          
        ))}

        <Spinner label="Esperando a que el creador de la sala inicie la partida..." />
        {users?.length >= 2 && (
          <PrimaryButton className={styles.buttonStartGame} onClick={() => void StartGame()}>
            Iniciar partida
          </PrimaryButton>
        )}
      </div>
    </div>
  );
}
