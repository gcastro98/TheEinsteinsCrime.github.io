import { Pivot, PivotItem, PrimaryButton, TextField } from "@fluentui/react";
import { useContext, useState } from "react";
import { generateRandomId } from "../../Utils";
import styles from "../GameManagement.module.scss";
import { GameContext } from "../../../../Services/DataServices";

export function CreateOrJoinRoom(): JSX.Element {
  const { startManually} = useContext(GameContext)
  const [gameGUID, setGUID] = useState<string>()
  const createGame = (gameId?: string)  =>{
    if (!gameId) {
      gameId = generateRandomId();
    }
    let searchParams = new URLSearchParams();
    searchParams.set("game", gameId);
    let url = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
    window.history.pushState({path: url}, '', url);
    startManually(gameId)
    
  }
  return (
    <div>
      
      <span className={styles.label}>¡Introduce un codigo de sala para unirte a una partida!</span>
      <TextField
        className={styles.textfield}
        value={gameGUID}
        placeholder="Codigo de sala"
        required
        onChange={(ev, gameId) => setGUID(gameGUID as string)}
      />
      <PrimaryButton className={styles.button} onClick={() => createGame(gameGUID)}>Unirse a partida</PrimaryButton>
      <hr />
      <span className={styles.label}>¡O crea una partida y comparte el codigo con tus amigos!</span>
      <PrimaryButton className={styles.button} onClick={() => createGame()}>Crear partida</PrimaryButton>
    </div>
  );
}




