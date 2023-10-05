import { PrimaryButton, Spinner, TextField } from "@fluentui/react";
import { IGame, IUser } from "../../../../Services/DataModels";
import { useContext, useState } from "react";
import {  GameContext, useAuthor, useUsers } from "../../../../Services/DataServices";
import { generateRandomCards, generateRandomId, saveUserIdOnLocalStorage } from "../../Utils";
import styles from "../GameManagement.module.scss";

export function WaitingRoom(props: any) {
  const {gameId, game, setGame, userId, setUserId } = useContext(GameContext);
  const [name, setName] = useState<string>("");
  const [users, setUsers] = useUsers(gameId);
  const [author, setAuthor] = useAuthor(gameId);

  const AddUserToGame = ( userName: string) => {
    debugger;
    const userId = users.length;
    const user: IUser = {
      userId: userId,
      name: userName,
      connected: true,
      position: {positionX: 0, positionY: 0},
      status: 0,
    }
  
    const auxUsers = [...users]
    auxUsers.push(user);
    if(author === -1){
      setAuthor(userId);
    }
    setUsers(auxUsers);
    return userId;
  
  }

  const AddUser = (name: string) => {
    const userId = AddUserToGame(name);
    console.log(userId);
    if (userId >= 0) {
      setUserId(userId);
      saveUserIdOnLocalStorage(userId.toString());
    }
  };

  const StartGame = () => {
    const auxGame = { ...game };
    const cards = generateRandomCards(auxGame.Cards, auxGame.Users);
    auxGame.Cards = cards;
    auxGame.OnProgress = true;
    auxGame.ActivePlayer = 0;
    setGame(auxGame);
  };
  debugger;

  console.log(users);
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
