import { useContext, useState } from "react";
import { GameContext } from "../../../../Services/DataServices";
import { Dropdown, PrimaryButton } from "@fluentui/react";
import { IRequest } from "../../../../Services/DataModels";
import styles from "../CardManagement.module.scss";
import * as BackendService from "../../../../Services/BackendServices";
import { DialogComponent } from "../../../../Utils/Config";
interface IDropdownOption {
  key: string;
  text: string;
}

export function Request(): JSX.Element {
  const { game, userId, setDialog: setActive } = useContext(GameContext);
  const allCards = game && game?.AllCards && game?.AllCards?.length > 0 ? game?.AllCards : [];
  
  const [suspect, setSuspect] = useState<IDropdownOption | undefined>(undefined);
  const [weapon, setWeapon] = useState<IDropdownOption | undefined>(undefined);
  const [room, setRoom] = useState<IDropdownOption | undefined>(undefined);

  const reset = () => {
    setSuspect(undefined);
    setWeapon(undefined);
    setRoom(undefined);
    setActive(DialogComponent.None)
  };

  const createRequest = async () => {
    try {
      const request: IRequest = {
        roomId: parseInt(room?.key as string),
        suspectId: parseInt(suspect?.key as string),
        weaponId: parseInt(weapon?.key as string),
        userId: userId,
        readed: false,
        response: undefined,
      };
      reset();
      await BackendService.createRequest(game?.Id, request);
      
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div>
      <h2>Request</h2>
      <span>Ha sido </span>
      <Dropdown
        className={styles.textfield}
        options={(allCards)
          .filter((x) => x?.type === "Suspect")
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
        options={(allCards)
          .filter((x) => x?.type === "Weapon")
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
        options={(allCards)
          .filter((x) => x?.type === "Room")
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
        onClick={createRequest}
        disabled={!suspect || !room || !weapon}
      />
    </div>
  );
}
