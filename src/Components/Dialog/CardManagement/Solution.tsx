import { useContext, useState } from "react";
import { GameContext } from "../../../Interfaces/IGameContext";
import { Dropdown } from "@fluentui/react";
import { IRequest } from "../../../Firebase/Models/IRequest";
import styles from "./Styles/CardManagement.module.scss";
import * as BackendService from "../../../API/BackendServices";
import { CustomButton } from "../../../Common/Components/CustomButton/CustomButton";
import {  ROOM_OPTIONS, SUSPECT_OPTIONS, WEAPON_OPTIONS } from "../../../Common/StaticData/CardsInfo";
import { DialogHeader } from "../../../Common/Components/DialogHeader/DialogHeader";
import { Carrousel } from "../../../Common/Components/Carrousel/CarrouselCards";
import { ICardsState, MockCardState } from "./Interfaces/ICardsState";
import { DialogComponent } from "../../../Interfaces/IDialogComponent";

export function Solution(): JSX.Element {
  const { game, userId, setDialog } = useContext(GameContext);

  const [state, setState] = useState<ICardsState>(MockCardState);
  const updateState = (val: any) =>
    setState((prev) => {
      return { ...prev, ...val };
    });
  const { suspect, weapon, room, loading } = state;

  const reset = () => {
    setDialog(DialogComponent.None);
    updateState(MockCardState);
  };

  const checkSolution = async () => {
    try {
      if (+suspect > 0 && +weapon > 0 && +room > 0) {
        updateState({ loading: true });
        const request: IRequest = {
          roomId: parseInt(room),
          suspectId: parseInt(suspect),
          weaponId: parseInt(weapon),
          userId: userId,
          readed: false,
          response: undefined,
        };
         await BackendService.checkSolution(game?.Id, request);
        reset();
      }
    } catch (ex) {
      console.error("Error requesting solution. Exception: ", ex);
    }
  };

  const carrouselWithOutEmpties = [suspect, weapon, room].filter(n => n !== '')

  return (
    <div>
      <DialogHeader label={"Solución"} />
      <Carrousel indexArr={carrouselWithOutEmpties.map(n => +n)} />
      <div className={styles.footer}>
        <div className={styles.footerSection}>
          <Dropdown
            className={styles.textfield}
            options={SUSPECT_OPTIONS}
            label={"Sospechoso"}
            onChange={(e, option) => updateState({ suspect: option?.key as string })}
            placeholder="Seleccione un sospechoso"
            selectedKey={suspect}
          />
        </div>
        <div className={styles.footerSection}>
          <Dropdown
            className={styles.textfield}
            options={WEAPON_OPTIONS}
            label={"Arma"}
            onChange={(e, option) => updateState({ weapon: option?.key as string })}
            placeholder="Seleccione un arma del crimen"
            selectedKey={weapon}
          />
        </div>
        <div className={styles.footerSection}>
          <Dropdown
            className={styles.textfield}
            options={ROOM_OPTIONS}
            onChange={(e, option) => updateState({ room: option?.key as string })}
            placeholder="Seleccione una habitacion"
            label={"Habitación"}
            selectedKey={room}
          />
        </div>
        <div className={styles.footerSection} >
          <CustomButton
            className={styles.button}
            style={{marginTop: "2em"}}
            text="Comprobar"
            onClick={checkSolution}
            disabled={!(+suspect > 0 && +weapon > 0 && +room > 0 && !loading)}
          />
        </div>
      </div>
    </div>
  );
}
