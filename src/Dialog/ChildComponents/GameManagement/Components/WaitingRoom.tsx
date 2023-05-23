import { PrimaryButton, Spinner, TextField } from "@fluentui/react";
import { IGame } from "../../../../Services/DataModels";
import { useContext, useState } from "react";
import { AddUserToGame, GameContext } from "../../../../Services/DataServices";
import { generateRandomCards, generateRandomId, saveUserIdOnLocalStorage } from "../../Utils";
import styles from "../GameManagement.module.scss";

export function WaitingRoom(props: any) {
  const { game, setGame, userId, setUserId } = useContext(GameContext);
  // const [userId, setUserId] = useState<number>(-2);
  const [name, setName] = useState<string>("");

  const addUser = (name: string) => {
    const userId = AddUserToGame(name, game, setGame);
    console.log(userId);
    if (userId >= 0) {
      setUserId(userId);
      saveUserIdOnLocalStorage(userId.toString());
    }
  };

  const startGame = () => {
    const auxGame = {...game}
    const cards = generateRandomCards(auxGame.Cards, auxGame.Users);
    auxGame.Cards = cards;
    auxGame.OnProgress = true;
    auxGame.ActivePlayer = 0;
    auxGame.Users.map((user, i) => auxGame.Characters[i].userId = user.Id)
    setGame(auxGame);
  }

  return (
    <div>
       {userId < 0 && (
        <div className={styles.inputNameSection}>
          <span>Introduce tu nombre para unirte a la partida</span>
          <TextField className={styles.textfield}
            onChange={(event: any, newValue: any) => setName(newValue as string)}
          />
          <PrimaryButton className={styles.button} onClick={() => addUser(name)}>Unirse</PrimaryButton>
          <hr/>
        </div>
      )}
      <h3>Detectives en busca de pistas...</h3>
      <div className={styles.playerList}>
        {game?.Users?.map((user: any) => (
          <span className={styles.userName}>{user.Name}</span>
        ))}
       
        <Spinner label="Esperando a que el creador de la sala inicie la partida..." />
        {game?.Users?.length >= 2 && (
          <PrimaryButton className={styles.buttonStartGame} onClick={() => startGame()}>Iniciar partida</PrimaryButton>
        )}
      </div>
    </div>
  );
}
