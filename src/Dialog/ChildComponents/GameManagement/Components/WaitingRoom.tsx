import { PrimaryButton, Spinner, TextField } from "@fluentui/react";
import { IGame } from "../../../../Services/DataModels";
import { useContext, useState } from "react";
import { AddUserToGame, GameContext } from "../../../../Services/DataServices";
import { generateRandomCards, generateRandomId, saveUserIdOnLocalStorage } from "../../Utils";

export function WaitingRoom(props: any) {
  const { game, setGame, userId, setUserId } = useContext(GameContext);
  // const [userId, setUserId] = useState<number>(-2);
  const [name, setName] = useState<string>("");

  const addUser = (name: string) => {
    debugger;
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
    setGame(auxGame);
  }

  return (
    <div>
      {userId < 0 && (
        <div>
          <span>Introduce tu nombre para unirte a la partida</span>
          <TextField
            onChange={(event: any, newValue: any) => setName(newValue as string)}
          />
          <PrimaryButton onClick={() => addUser(name)}>Unirse</PrimaryButton>
        </div>
      )}
      <div>
        {game?.Users?.map((user: any) => (
          <span>{user.Name}</span>
        ))}
        <Spinner label="Esperando a que el creador de la sala inicie la partida..." />
        {game?.Users?.length >= 2 && (
          <PrimaryButton onClick={() => startGame()}>Iniciar partida</PrimaryButton>
        )}
      </div>
    </div>
  );
}
