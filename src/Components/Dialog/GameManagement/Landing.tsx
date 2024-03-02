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
          A quien le interese,
          <br /> <br />
          En la penumbra de mi estudio, estas palabras se deslizan de mi pluma con la pesadez del destino.
          ¿Quién podrá ser el destinatario de este testimonio tardío? ¿Acaso alguien lo leerá alguna vez? He
          traspasado los límites de lo imaginable, he desentrañado el misterio del tiempo. Durante años, entre
          el velo de la cordura y la locura, entre el genio y la oscuridad, he labrado mi camino hacia lo
          desconocido.
          <br /> <br />
          El mundo desconoce aún el peso de mi hallazgo. Mi mente, etiquetada de genialidad y de demencia por
          igual, ha encontrado la llave que abre las puertas del pasado y del futuro. ¿Qué importan los
          halagos y las condenas de la sociedad cuando uno se encuentra en el umbral de la eternidad? Este
          logro, este descubrimiento, eclipsará cualquier otro acto de la humanidad. Incluso más que la
          inminente creación de la bomba, esa arma de destrucción que los americanos forjan en sus
          laboratorios secretos.
          <br />
          <br />
          El Premio Nobel palidecerá ante la magnitud de mi obra. Este será el tesoro que cambiará el curso de
          la historia, que desdibujará las líneas del tiempo. Sin embargo, en mi soledad reflexiva, he llegado
          a comprender la amenaza latente que yace en este poder. Un poder que podría desequilibrar los
          pilares mismos de nuestra existencia.
          <br />
          <br />
          No soy quien para tomar esta decisión en solitario. He decidido convocar a aquellos cuyas mentes
          brillan con la misma intensidad que la mía. A pesar de los riesgos, a pesar de las sombras que
          acechan en la oscuridad del tiempo, los invitaré a una cena. Una cena donde, entre el murmullo de
          las conspiraciones y el tintineo de las copas, decidiremos el destino de esta hazaña sin
          precedentes. Después de todo, ¿qué es una noche entre visionarios cuando uno ha creado una máquina
          del tiempo?
        </p>
        <br />
        <span>Albert Einstein</span>
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
