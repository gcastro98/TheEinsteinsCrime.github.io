import { useContext, useState } from "react";
import { GameContext } from "../../../Interfaces/IGameContext";
import { Dropdown, PrimaryButton } from "@fluentui/react";
import { IRequest } from "../../../Firebase/Models/IRequest";
import styles from "./Styles/CardManagement.module.scss";
import * as BackendService from "../../../API/BackendServices";
import { DialogComponent } from "../../../Interfaces/IDialogComponent";
import { ALL_CARDS } from "../../../Common/StaticData/cards";
import commonStyles from "../../../Common/Styles/Utils.module.scss"
interface IDropdownOption {
  key: string;
  text: string;
}

export function Request(): JSX.Element {
  const { game,users, userId, setDialog: setActive } = useContext(GameContext);
  const roomId = users.find(user => user.Id === userId)?.Position?.roomId ;
  const [suspect, setSuspect] = useState<IDropdownOption | undefined>(undefined);
  const [weapon, setWeapon] = useState<IDropdownOption | undefined>(undefined);
  // const [room, setRoom] = useState<IDropdownOption | undefined>(undefined);

  const reset = () => {
    setSuspect(undefined);
    setWeapon(undefined);
    // setRoom(undefined);
    setActive(DialogComponent.None)
  };

  const createRequest = async () => {
    try {
      const request: IRequest = {
        roomId: roomId,
        suspectId: parseInt(suspect?.key as string),
        weaponId: parseInt(weapon?.key as string),
        userId: userId,
        readed: false,
        response: undefined,
      };
      reset();
      await BackendService.createRequest(game?.Id, request);
      
    } catch (ex) {
      console.error("Error to create a request. Exception: ", ex)
    }
  };

  return (
    <div>
      <h2>Request</h2>
      <span>Ha sido </span>
      <Dropdown
        className={styles.textfield}
        options={(ALL_CARDS)
          .filter((x) => x?.type === "Suspect")
          .map((x) => {
            return { key: x.id, text: x.name };
          })}
        onChange={(e, option) => setSuspect(option as IDropdownOption)}
        placeholder="Seleccione un sospechoso"
        selectedKey={suspect?.key}
      />
      <span>con</span>
      <Dropdown
        className={styles.textfield}
        options={(ALL_CARDS)
          .filter((x) => x?.type === "Weapon")
          .map((x) => {
            return { key: x.id, text: x.name };
          })}
        onChange={(e, option) => setWeapon(option as IDropdownOption)}
        placeholder="Seleccione un arma"
        selectedKey={weapon?.key}
      />
      <span>en</span><br/>
      <span className={styles.label}><b>{roomId && roomId >= 0 && ALL_CARDS[roomId].name }</b></span>
      <PrimaryButton
        className={commonStyles.CommonButton}
        text="Enviar"
        onClick={createRequest}
        disabled={!suspect  || !weapon}
      />
    </div>
  );
}
