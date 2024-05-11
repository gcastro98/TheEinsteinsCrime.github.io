import { Icon,  Spinner, SpinnerSize, TextField } from "@fluentui/react";
import { IUser } from "../../../Firebase/Models/IUser";
import { useContext, useState } from "react";
import { GameContext } from "../../../Interfaces/IGameContext";
import styles from "./Styles/GameManagement.module.scss";
import * as BackendService from "../../../API/BackendServices";
import { CustomButton } from "../../../Common/Components/CustomButton/CustomButton";
import { DialogHeader } from "../../../Common/Components/DialogHeader/DialogHeader";

export function WaitingRoom() {
  const { game, users, userId, updateContext } = useContext(GameContext);

  const [state, setState] = useState({
    loading: false,
    copied: false,
    name: "",
  });
  const { loading, copied, name } = state;
  const updateState = (val: any) =>
    setState((prev) => {
      return { ...state, ...val };
    });

  const AddUser = async (user: string) => {
    try {
      updateState({ loading: true });
      const myUser = await BackendService.addUserToGame(game?.Id, user);
      updateContext({ userId: myUser.Id });
      sessionStorage.setItem(`${game.Id}:userId`, myUser.Id);
    } catch (ex) {
      console.error("Error to add the user. Exception", ex);
    } finally {
      updateState({ loading: false });
    }
  };

  const StartGame = async () => {
    try {
      updateState({ loading: true });
      await BackendService.startGame(game?.Id);
    } catch (ex) {
      console.error("Error to start the game. Exception: ", ex);
    } finally {
      updateState({ loading: false });
    }
  };

  const CopyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.host}/${window.location.search}`);
      updateState({ copied: true });
    } catch (ex) {
      console.error("Error to copy to clipboard. Exception: ", ex);
    }
  };
  console.log(userId)
  return (
    <div>
      <DialogHeader label="Sala de espera" />
      <div className={styles.clipboardsection}>
        <TextField
          readOnly
          className={styles.clipboardTextField}
          label={"Comparte este enlace con tus amigos para que se unan a la partida"}
          value={window.location.href}
          onRenderSuffix={() => (
            <Icon
              iconName={copied ? "ClipboardSolid" : "ClipboardList"}
              onClick={() => CopyToClipBoard()}
              style={{ cursor: "pointer" }}
            />
          )}
        />
      </div>
      {!userId && users?.length < 4 && (
        <div className={styles.inputNameSection}>
          <div className={styles.inputnameDiv}>
            <TextField
              label="Introduce tu nombre para unirte"
              className={styles.textfield}
              onChange={(event: any, newValue: any) => updateState({ name: newValue as string })}
              value={name}
              onRenderSuffix={() => (
                <CustomButton
                  disabled={name === "" || loading}
                  onClick={() => void AddUser(name)}
                  text="Unirse"
                />
              )}
            />
          </div>
        </div>
      )}
      <hr />
      <h3>Detectives en busca de pistas...</h3>
      <div className={styles.playerList}>
        {users?.length > 0 &&
          users?.map((user: IUser) => <span className={styles.userName}>{user.Name}</span>)}
       
      </div>
      <div className={styles.footer}>
          <Spinner
            label="Esperando a que entren todos los detectives..."
            style={{ marginBottom: "2em", color: "black", fontFamily: "Teletype" }}
            size={SpinnerSize.large}
            className={styles.spinner}
          />
          {users?.length >= 2 && (
            <CustomButton
              className={styles.buttonStartGame}
              onClick={() => void StartGame()}
              disabled={loading}
              text="Iniciar partida"
            />
          )}
        </div>
    </div>
  );
}
