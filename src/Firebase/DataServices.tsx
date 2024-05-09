import DataBase from "./DataBase";
import { off, onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

/* tslint:disable */
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
