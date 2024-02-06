import { DatabaseReference, get, off, onValue, ref, set } from "firebase/database";
import { RefObject, createContext, useContext, useEffect, useRef, useState } from "react";
import DataBase from "./DataBase";
import { ICard, IGame, IGameContext, IPosition, IRequest, IResponse, IUser } from "./DataModels";
import { ReactDiceRef } from "react-dice-complete";
import { DieContainerRef } from "react-dice-complete/dist/DiceContainer";
import * as BackendService from "./BackendServices";

//#region GameReference General Functions
/* tslint:disable */
// export function useDataByPath<T>(path: string, initialData: T, setFunction?: (input: any) => T): [T, (data: any) => void] {
//   const [state, setState] = useState<T>(initialData);
//   // console.log('useDataByPath', path)
//   useEffect(() => {
//     const reference = ref(DataBase, path);

//     const callback = (snapshot: any) => {
//       setState(snapshot.val());
//     };

//     onValue(reference, callback, (error) => {
//       console.error(error);
//     });

//     return () => {
//       off(reference, callback as any);
//     };
//   }, []);

//   function setDataState(data: T) {
//     set(ref(DataBase, path), data);
//   }

//   return [state, setFunction ?  (input: any) => void setFunction(input) : setDataState];
// }

export function useDataByPath<T>(path: string, initialData: T, setFunction?: (input: any) => Promise<void>): [T, (data?: any) => void] {
  const [state, setState] = useState<T>(initialData);

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

  const setDataState = async (data: T) => {
    if (setFunction) {
      try {
        await setFunction(data);
      } catch (error) {
        console.error('Error updating data:', error);
      }
    } else {
      set(ref(DataBase, path), data);
    }
  }

  return [state, setDataState];
}

export function createDataByPath<T>(path: string, data: T) {
  set(ref(DataBase, path), data);
}

// export function checkGameReference(gameId: string) {
//   (async () => {
//     // Check if the field `games/${gameId}` exists in the database
//     // const gameRef = ref(DataBase, `games/${gameId}`);
//     // const snapshot = await get(gameRef);
//     // if (!snapshot.exists()) {
//     //   const initialRef = ref(DataBase, `games/initialData`);
//     //   const initialDataSnapshot = await get(initialRef);
//     //   const initialData = initialDataSnapshot.val();
//     //   set(ref(DataBase, `games/${gameId}`), initialData);
//     //   return ref(DataBase, `games/${gameId}`);
//     // }
//     console.log("A")
//     let value = await BackendService.checkGameReference(gameId);
//     if(value){
//       return ref(DataBase, `games/${gameId}`);
//     }
//   })();
// }

// //#endregion

// //#region GameReference functions

// export function useUserById(gameId: string, userId: number): [IUser, (newUser: IUser) => void] {
//   // const {gameId, game, setGame} = useContext(GameContext);
//   const [user, setUser] = useDataByPath<IUser>(`games/${gameId}/Users/${userId}`, {} as IUser);
  
//   return [user || {} as IUser, (newUser: IUser) => setUser(newUser)];
// }

// export function useUsers(gameId: string): [IUser[], (newUsers: IUser[]) => void] {
//   // const {gameId, game, setGame} = useContext(GameContext);
//   const [users, setUsers] = useDataByPath<IUser[]>(`games/${gameId}/Users`, []);
  
//   return [users || [], (newUsers: IUser[]) => setUsers(newUsers)];
// }

// export function useAuthor(gameId: string): [number, (newAuthor: number) => void] {
//   // const {gameId, game, setGame} = useContext(GameContext);
//   const [author, setAuthor] = useDataByPath<number>(`games/${gameId}/AuthorId`, -1);
  
//   return [author || -1, (newAuthor: number) => setAuthor(newAuthor)];
// }

// export function AddUserToGame(gameId: string, userName: string){
//   debugger;


//   const [users, setUsers] = useUsers(gameId);
//   const [author, setAuthor] = useAuthor(gameId);

//   const userId = users.length;
//   const user: IUser = {
//     userId: userId,
//     name: userName,
//     connected: true,
//     position: {positionX: 0, positionY: 0},
//     status: 0,
//   }

//   const auxUsers = [...users]
//   auxUsers.push(user);
//   if(author === -1){
//     setAuthor(userId);
//   }
//   setUsers(auxUsers);
//   return userId;

// }

// export function saveRequestAtHistoric(game: IGame, setGame: (game: IGame) => void) {
//   const auxGame = {...game};
//   if(auxGame.Requests === undefined){
//     auxGame.Requests = [];
//   }
//   auxGame.Requests.push(auxGame.ActiveRequest as IRequest);

//   delete auxGame.ActiveRequest;
//   setGame(auxGame);
// }

// //#region GameReference Custom Hooks

export const GameContext = createContext<IGameContext>({} as IGameContext);

// export function usePosition(gameId: string, userId: number): [IPosition, (position: IPosition) => void] {
//   const [user, setUser] = useUserById(gameId, userId);
//   return [user?.position, (position: IPosition) => setUser({...user, position})];
// }

// export function useActiveRequest(gameId: string): [IRequest, (newRequest: IRequest) => void] {
//   const [activeRequest, setActiveRequest] = useDataByPath<IRequest>(`games/${gameId}/ActiveRequest`, {} as IRequest);
//   return [activeRequest || {}, (newRequest: any) => setActiveRequest(newRequest)];
// }

// export function useActiveResponse(gameId: string):  [IResponse | undefined, (newRequest: IResponse) => void]  {
//   const [activeRequest, setActiveRequest] = useActiveRequest(gameId);

//   const setResponse = (newResponse: IResponse) => {
//     const auxRequest = {...activeRequest};
//     auxRequest.response = newResponse;
//     setActiveRequest(auxRequest);
//   };

//   return [activeRequest?.response || undefined , (newResponse: IResponse) => setResponse(newResponse)];
// }

// export function useActivePlayer(gameId: string):  [number, () => void, (newTurn: number) => void]  {
//   const users = useUsers(gameId)[0];
//   const [activePlayerIndex, setActivePlayerIndex] = useDataByPath<number>(`games/${gameId}/ActivePlayer`, -1);
//   const nextTurn = () => {
//     setActivePlayerIndex((activePlayerIndex + 1) % users?.length);
//     // let auxGame = { ...game };
//     // auxGame.ActivePlayer.userId = (auxGame.ActivePlayer.userId + 1) % auxGame.Users.length;
//     // auxGame.ActivePlayer.dice = [0, 0];
//     // auxGame.ActivePlayer.throwedDice = false;    
//     // setGame(auxGame);
//   };

//   const setTurn = (newTurn: number) => {
//     // let auxGame = { ...game };
//     // auxGame.ActivePlayer.userId = newTurn;

//     // setGame(auxGame);
//     setActivePlayerIndex(newTurn);
//   };

//   return [activePlayerIndex  , () => nextTurn(), (newTurn: number) => setTurn(newTurn)];
// }

// export function useRequests(gameId: string): [IRequest[], (newRequest: IRequest) => void] {
//   let [requests, setRequests] = useDataByPath<IRequest[]>(`games/${gameId}/Requests`, []);
//   let [activeRequest, setActiveRequest] = useActiveRequest(gameId);
//   const addActiveRequestToHistory = () => {
//     if(!requests){
//       requests = [];
//     }
//     let auxActiveRequest = { ...activeRequest };
//     auxActiveRequest.readed = true;
//     requests.push(auxActiveRequest);
//     setActiveRequest(auxActiveRequest)
//     setRequests(requests);
//   };
//   return [requests || [], (newRequest: any) => addActiveRequestToHistory()];
// }

// export function useResponseTurn(gameId: string): [number, (newResponseTurn: number) => void] {
//   const [responseTurn, setResponseTurn] = useDataByPath<number>(`games/${gameId}/ResponseTurn`, -1);
//   return [responseTurn || -1, (newResponseTurn: number) => setResponseTurn(newResponseTurn)];
// }

// export function useDice(gameId: string): [number[], (newDice: number[]) => void] {
//   const [dice, setDice] = useDataByPath<number[]>(`games/${gameId}/Dice`, [0,0]);
  
//   // const setDice = (newDice: number[]) => {
//   //   const auxGame = { ...game };
//   //   auxGame.Dice = newDice;
//   //   setGame(auxGame);
//   // }

//   return [dice || [0, 0], (newDice: number[]) => setDice(newDice)];
// }

// // export function useThrowedDice(): [boolean, (newThrowedDice: boolean) => void] {
// //   const {game, setGame} = useContext(GameContext);
  
// //   const setThrowedDice = (newThrowedDice: boolean) => {
// //     const auxGame = { ...game };
// //     auxGame.ThrowedDice = newThrowedDice;
// //     setGame(auxGame);
// //   }

// //   return [game?.ThrowedDice || false, (newThrowedDice: boolean) => setThrowedDice(newThrowedDice)];
// // }

// export function useDiceManagement(gameId: string): IDiceManagement {
//   const {game, setGame} = useContext(GameContext);
//   const [dice, setDice] = useDice(gameId);
//   const [result, setResult] = useState(0);

//   const ref = useRef<ReactDiceRef>(null);

//   const throwDice = (dice:number[]) => {
//     ref.current?.rollAll(dice);
//     setResult(dice[0] + dice[1]);
//   }

//   const getRandomValue = () => {
//     const auxDice = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1]
//     console.log(auxDice)
//     setDice(auxDice);
//   }

//   const resetValues = () => {
//     setResult(0);
//     setDice([0, 0])
//   }

//   return {ref, result, setResult, dice,  throwDice, getRandomValue, resetValues };
  
// }

// export function useCards(gameId: string): [ICard[], (newCards: ICard[]) => void] {
//   const [cards, setCards] = useDataByPath<ICard[]>(`games/${gameId}/Cards`, []);
//   return [cards || [], (newCards: ICard[]) => setCards(newCards)];
// }