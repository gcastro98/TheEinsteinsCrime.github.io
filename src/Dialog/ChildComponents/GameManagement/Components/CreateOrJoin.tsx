import { Pivot, PivotItem, PrimaryButton, TextField } from "@fluentui/react";
import { useState } from "react";
import { generateRandomId } from "../../Utils";

export function CreateOrJoinRoom(): JSX.Element {
  const [gameId, setGameId] = useState<string>("");
  return (
    <div>
      <span>¡Introduce un codigo de sala para unirte a una partida!</span>
      <TextField
        value={gameId}
        placeholder="Codigo de sala"
        required
        onChange={(ev, gameId) => setGameId(gameId as string)}
      />
      <PrimaryButton onClick={() => createGame(gameId)}>Unirse a partida</PrimaryButton>
      <hr />
      <span>¡O crea una partida y comparte el codigo con tus amigos!</span>
      <PrimaryButton onClick={() => createGame()}>Crear partida</PrimaryButton>
    </div>
  );
}

function createGame(gameId?: string) {
  if (!gameId) {
    gameId = generateRandomId();
  }
  window.location.assign(`${window.location.href}game:${gameId}`);
}


