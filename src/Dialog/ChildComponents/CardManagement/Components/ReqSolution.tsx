import { useContext, useState } from "react";
import { GameContext } from "../../../../Services/DataServices";
import { Dropdown, PrimaryButton } from "@fluentui/react";
import { IRequest } from "../../../../Services/DataModels";
import styles from "../CardManagement.module.scss";
import { ButtonType } from "../../../../Utils/Config";
import * as BackendService from "../../../../Services/BackendServices";
interface IDropdownOption {
  key: string;
  text: string;
}

export function ReqSolution(): JSX.Element {
  const { game, userId, setActive } = useContext(GameContext);
  const allCards = game.AllCards || [];
  
  const [suspect, setSuspect] = useState<IDropdownOption | undefined>(undefined);
  const [weapon, setWeapon] = useState<IDropdownOption | undefined>(undefined);
  const [room, setRoom] = useState<IDropdownOption | undefined>(undefined);

  const reset = () => {
    setSuspect(undefined);
    setWeapon(undefined);
    setRoom(undefined);
    setActive(ButtonType.None);
  };

  const checkSolution = async () => {
    try {
      const request: IRequest = {
        roomId: parseInt(room?.key as string),
        suspectId: parseInt(suspect?.key as string),
        weaponId: parseInt(weapon?.key as string),
        userId: userId,
        readed: false,
        response: undefined,
      };
      const solution = await BackendService.checkSolution(game?.Id, request);
      console.log(solution)
      reset();
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div>
      <h2>Solución</h2>
      <span>Ha sido </span>
      <Dropdown
        className={styles.textfield}
        options={allCards
          .filter((x) => x.type === "Suspect")
          .map((x) => {
            return { key: x.id, text: x.name };
          })}
        onChange={(e, option) => setSuspect(option as IDropdownOption)}
        placeholder="Select a Suspect"
        selectedKey={suspect?.key}
      />
      <span>con</span>
      <Dropdown
        className={styles.textfield}
        options={allCards
          .filter((x) => x.type === "Weapon")
          .map((x) => {
            return { key: x.id, text: x.name };
          })}
        onChange={(e, option) => setWeapon(option as IDropdownOption)}
        placeholder="Select a Weapon"
        selectedKey={weapon?.key}
      />
      <span>en</span>
      <Dropdown
        className={styles.textfield}
        options={allCards
          .filter((x) => x.type === "Room")
          .map((x) => {
            return { key: x.id, text: x.name };
          })}
        onChange={(e, option) => setRoom(option as IDropdownOption)}
        placeholder="Select a Room"
        selectedKey={room?.key}
      />
      <PrimaryButton
        className={styles.button}
        text="Enviar"
        onClick={checkSolution}
        disabled={!suspect || !room || !weapon}
      />
    </div>
  );
}
