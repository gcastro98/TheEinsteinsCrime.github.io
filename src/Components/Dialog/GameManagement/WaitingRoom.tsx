import { PrimaryButton, Spinner, SpinnerSize, TextField } from "@fluentui/react";
import { IUser } from "../../../Firebase/Models/IUser";
import { useContext, useState } from "react";
import { GameContext } from "../../../Interfaces/IGameContext";
import styles from "./Styles/GameManagement.module.scss";
import * as BackendService from "../../../API/BackendServices";
import { CustomButton } from "../../../Common/Utils/CustomButton/CustomButton";
export function WaitingRoom() {
  const { game, users, userId, updateContext } = useContext(GameContext);
  const [name, setName] = useState<string>("");

  const AddUser = async (user: string) => {
    const myUser = await BackendService.addUserToGame(game?.Id, user);
    updateContext({ userId: myUser.Id });
    sessionStorage.setItem(`${game.Id}:userId`, myUser.Id);
  };

  const StartGame = () => {
    void BackendService.startGame(game?.Id);
  };

  return (
    <div>
      {!userId && (
        <div className={styles.inputNameSection}>
          <span>Introduce tu nombre para unirte a la partida</span>
          <div className={styles.inputnameDiv}>
            <TextField
              className={styles.textfield}
              onChange={(event: any, newValue: any) => setName(newValue as string)}
            />
            <CustomButton disabled={name === ""} onClick={() => void AddUser(name)}>
              Unirse
            </CustomButton>
          </div>
          <hr />
        </div>
      )}
      <h3>Detectives en busca de pistas...</h3>
      <div className={styles.playerList}>
        {users?.length > 0 &&
          users?.map((user: IUser) => <span className={styles.userName}>{user.Name}</span>)}
        <div className={styles.footer}>
          <Spinner
            label="Esperando a que se entren todos los detectives..."
            style={{ marginBottom: "2em", color: "black", fontFamily: "Teletype" }}
            size={SpinnerSize.large}
            className={styles.spinner}
          />
          {users?.length >= 2 && (
            <CustomButton className={styles.buttonStartGame} onClick={() => void StartGame()}>
              Iniciar partida
            </CustomButton>
          )}
        </div>
      </div>
    </div>
  );
}
