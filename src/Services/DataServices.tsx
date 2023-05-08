import { DatabaseReference, get, off, onValue, ref, set } from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";
import DataBase from "./DataBase";
import { IGame, IGameContext, IPosition, IRequest } from "./DataModels";

//#region GameReference General Functions

export function useDataByPath<T>(path: string, initialData: T): [T, (data: T) => void] {
  const [state, setState] = useState<T>(initialData);
  // console.log('useDataByPath', path)
  useEffect(() => {
    const reference = ref(DataBase, path);

    const callback = (snapshot: any) => {
      setState(snapshot.val());
    };

    onValue(reference, callback, (error) => {
      console.error(error);
    });

    return () => {
      off(reference, callback as any);
    };
  }, []);

  function setDataState(data: T) {
    set(ref(DataBase, path), data);
  }

  return [state, setDataState];
}

export function createDataByPath<T>(path: string, data: T) {
  set(ref(DataBase, path), data);
}

export function checkGameReference(gameId: string) {
  (async () => {
    // Check if the field `games/${gameId}` exists in the database
    const gameRef = ref(DataBase, `games/${gameId}`);
    const snapshot = await get(gameRef);
    if (!snapshot.exists()) {
      const initialRef = ref(DataBase, `games/initialData`);
      const initialDataSnapshot = await get(initialRef);
      const initialData = initialDataSnapshot.val();
      set(ref(DataBase, `games/${gameId}`), initialData);
      return ref(DataBase, `games/${gameId}`);
    }
  })();
}

//#endregion

//#region GameReference functions

export function AddUserToGame(userName: string, game: IGame, setGame: (game: IGame) => void){
  // const {game, setGame} = GameContext;
  const auxGame = {...game};
  if (auxGame.Users === undefined) {
    auxGame.Users = [];
  }
  const userId = auxGame.Users.length;
  const user = {
    Id: userId,
    Name: userName,
    Connected: true
  }
  auxGame.Users.push(user);
  if(auxGame.AuthorId === -1){
    auxGame.AuthorId = userId;
  }
  setGame(auxGame);
  return userId;

}

//#region GameReference Custom Hooks

export const GameContext = createContext<IGameContext>({} as IGameContext);

export function usePosition(caracterId: number) {
  const {game, setGame} = useContext(GameContext);
  let character = game?.Characters[caracterId];

  const setPosition = (newPosition: IPosition) => {
      const auxGame = { ...game };
      const newCaracter = { ...character };
      newCaracter.position = newPosition;
      auxGame.Characters[caracterId] = newCaracter;
      setGame(auxGame);
  };

  return [character?.position, (newPosition: IPosition) => setPosition(newPosition)];
}

export function useActiveRequest(): [IRequest, (newRequest: IRequest) => void] {
  const {game, setGame} = useContext(GameContext);
  let activeRequest = game?.ActiveRequest;

  const setRequest = (newRequest: any) => {
    game.ActiveRequest = newRequest;
    setGame(game);
  };
  return [activeRequest, (newRequest: any) => setRequest(newRequest)];
}

export function useActiveResponse() {
  const {game, setGame} = useContext(GameContext);
  

  const setResponse = (newResponse: any) => {
    const oldRequest = { ...game?.ActiveRequest };

    game.ActiveResponse = newResponse;
    setGame(game);
  };
  return [game?.ActiveResponse || undefined, (newResponse: any) => setResponse(newResponse)];
}
