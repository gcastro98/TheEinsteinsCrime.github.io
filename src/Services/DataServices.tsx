import DataBase from "./DataBase";
import { ReactDiceRef } from "react-dice-complete";
import * as BackendService from "./BackendServices";
import { DieContainerRef } from "react-dice-complete/dist/DiceContainer";
import { DatabaseReference, get, off, onValue, ref, set } from "firebase/database";
import { ICard, IGame, IGameContext, IPosition, IRequest, IResponse, IUser } from "./DataModels";
import { MutableRefObject, RefObject, createContext, useContext, useEffect, useRef, useState } from "react";

import { getGameIdFromPath } from "../Common/Utils";

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

export function POC<T>(path: string, setFunction: (input: T) => Promise<void>) {
  useEffect(() => {
    const reference = ref(DataBase, path);

    const callback = (snapshot: any) => {
      console.log("snapshot", snapshot.val());
      setFunction(snapshot.val());
    };

    onValue(reference, callback, (error) => {
      console.error(error);
    });

    return () => {
      off(reference, callback as any);
    };
  }, []);
}

export function useDataByPath<T>(
  path: string,
  initialData: T,
  setFunction?: (input: any) => Promise<void>
): [T, (data?: any) => void] {
  const [state, setState] = useState<T>(initialData);

  useEffect(() => {
    const reference = ref(DataBase, path);

    const callback = (snapshot: any) => {
      console.log("snapshot", path, snapshot.val());
      setState(snapshot.val());
    };

    onValue(reference, callback, (error) => {
      console.error(error);
    });

    return () => {
      off(reference, callback as any);
    };
  }, [path]);

  const setDataState = async (data: T) => {
    if (setFunction) {
      try {
        await setFunction(data);
      } catch (error) {
        console.error("Error updating data:", error);
      }
    } else {
      set(ref(DataBase, path), data);
    }
  };

  return [state, setDataState];
}

export const GameContext = createContext<IGameContext>({} as IGameContext);

export function gameReference(gameId: string): DatabaseReference {
  return ref(DataBase, `/games/${gameId}`);
}
export function useGame<T>(
  reference: DatabaseReference,
  initialData: T,
  setFunction?: (input: any) => Promise<void>
): [MutableRefObject<string>, T, (data?: any) => void] {
  const [state, setState] = useState<T>(initialData);
  const gameId = useRef(getGameIdFromPath() || "initialData");
  useEffect(() => {
    //  console.log(gameId.current)
    // if (gameId.current !== '' && gameId.current !== 'initialData'){
    // const reference = ref(DataBase, `/games/${gameId.current}`)
    console.log("AAAAAAAAA");
    const callback = (snapshot: any) => {
      console.log("snapshot", snapshot.val());
      setState(snapshot.val());
    };

    onValue(reference, callback, (error) => {
      console.error(error);
    });

    return () => {
      off(reference, callback as any);
    };
    // }
  }, [reference]);

  const setDataState = async (data: T) => {
    if (setFunction) {
      try {
        await setFunction(data);
      } catch (error) {
        console.error("Error updating data:", error);
      }
    } else {
      set(reference, data);
    }
  };

  return [gameId, state, setDataState];
}

export function createDataByPath<T>(path: string, data: T) {
  set(ref(DataBase, path), data);
}

export async function getDataByPath<T>(path: string): Promise<T> {
  const snapshot = await get(ref(DataBase, path));
  return snapshot.val();
}

// //#region GameReference Custom Hooks
