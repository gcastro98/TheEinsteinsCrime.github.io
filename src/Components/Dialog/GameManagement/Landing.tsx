import styles from "./Styles/GameManagement.module.scss";
// import stylesButton from "../../../../GameInfo/GameInfo.module.scss";
import { generateRandomId } from "../../../Common/Utils/Utils";
import { GameContext } from "../../../Interfaces/IGameContext";
import { useContext, useState } from "react";
import { Dropdown, PrimaryButton } from "@fluentui/react";
import { CustomButton } from "../../../Common/Components/CustomButton/CustomButton";
import { DialogHeader } from "../../../Common/Components/DialogHeader/DialogHeader";

export const Landing = (): JSX.Element => {
  const { startManually } = useContext(GameContext);
  const [gameGUID, setGUID] = useState<string>();
  const createGame = (gameId?: string) => {
    if (!gameId) {
      gameId = generateRandomId();
    }
    let searchParams = new URLSearchParams();
    searchParams.set("game", gameId);
    let url =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?" +
      searchParams.toString();
    window.history.pushState({ path: url }, "", url);
    startManually(gameId);
  };
  return (
    <div>
<DialogHeader label="Bienvenido" />

    <div className={styles.letter}>
      <span className={styles.leeterDateAndSign}>
        <i>Viernes, 13 de Marzo de 1942</i>
        <br />
        <br />
      </span>
      <p>
        No se si alguien leera estas palabras... pero lo hice. Después de años de trabajo e investigacion
        consegui encontrar la clave. Tildado de genio y de loco, la mente del siglo y el cientifico
        excentrico, pero yo lo encontré, un metodo seguro. Bueno, "seguro".
        <br /> <br />
        Este descubrimiento sera mas trascendente que cualquier otro realizado por el hombre, mas incluso que
        la bomba en la que estan trabajando estos americanos. Este será el descubrimiento del premio nobel.
        ¡De todos ellos! El descubrimiento que cambiará el curso de la historia. Quizas un descubrimiento
        demasiado extraordinario para ser gestionado por el hombre, demasiado peligroso...
        <br />
        <br />
        Lo he meditado y no es una decision que pueda tomar solo. He decidido hacer uso de este invento y
        reunir a algunas de las mentes mas importantes, aun con los riesgos que eso conlleva, en una cena en
        la que conjuntamente decidamos que hacer con esta proeza.
        <br />
        <br />
        Al fin y al cabo, no todos los dias uno inventa una maquina del tiempo...
      </p>
      <br />
      <span>Att: Albert Einstein</span>
      <div
        // className={`${stylesButton.footer} ${styles.letterFooter}`}
        style={{ justifyContent: "center", padding: "10px" }}
      >
        <CustomButton text="Crear partida" onClick={() => createGame()} />
      </div>
    </div>
    </div>
  );
};
