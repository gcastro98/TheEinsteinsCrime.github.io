import { useContext, useState } from "react";
import { GameContext } from "../../../Interfaces/IGameContext";
import { Dropdown } from "@fluentui/react";
import { IRequest } from "../../../Firebase/Models/IRequest";
import styles from "./Styles/CardManagement.module.scss";
import * as BackendService from "../../../API/BackendServices";
import { DialogComponent } from "../../../Interfaces/IDialogComponent";
import { ROOM_OPTIONS, SUSPECT_OPTIONS, WEAPON_OPTIONS } from "../../../Common/StaticData/CardsInfo";
import { CustomButton } from "../../../Common/Components/CustomButton/CustomButton";
import { DialogHeader } from "../../../Common/Components/DialogHeader/DialogHeader";
import { ICardsState, MockCardState } from "./Interfaces/ICardsState";
import { Carrousel } from "../../../Common/Components/Carrousel/CarrouselCards";

export function Request(): JSX.Element {
  const { game,users, userId, setDialog: setActive } = useContext(GameContext);
  const roomId = users.find(user => user.Id === userId)?.Position?.roomId ;
  const [state, setState] = useState<ICardsState>(MockCardState);
  const updateState = (val: any) =>
    setState((prev) => {
      return { ...prev, ...val };
    });
  const { suspect, weapon, loading } = state;

  const reset = () => {
    updateState(MockCardState);
    setActive(DialogComponent.None)
  };


  const createRequest = async () => {
    try {
      updateState({loading: true})
      if ((+suspect > 0 && +weapon > 0 && roomId as number >= 0 && !loading)){
        const request: IRequest = {
          roomId: roomId,
          suspectId: parseInt(suspect as string),
          weaponId: parseInt(weapon as string),
          userId: userId,
          readed: false,
          response: undefined,
        };
        reset();
        await BackendService.createRequest(game?.Id, request);
      }
      
      
    } catch (ex) {
      console.error("Error to create a request. Exception: ", ex)
    }finally {
      updateState({loading: false})
  }};
  const carrouselWithOutEmpties = [suspect, weapon, roomId]?.filter(n => n !== '') || []
  console.log([suspect, weapon, roomId || ''], carrouselWithOutEmpties)
  return (
    <div>
     <DialogHeader label={"Pregunta"} />
     <Carrousel indexArr={carrouselWithOutEmpties?.map(n => n as number)} />
      <div className={styles.footer}>
        <div className={styles.footerSection}>
          <Dropdown
            className={styles.textfield}
            options={SUSPECT_OPTIONS}
            label={"Sospechoso"}
            onChange={(e, option) => updateState({ suspect: option?.key as string })}
            placeholder="Seleccione un sospechoso"
            selectedKey={suspect}
            disabled={loading}
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
            disabled={loading}
          />
        </div>
        <div className={styles.footerSection}>
          <Dropdown
            className={styles.textfield}
            options={ROOM_OPTIONS}
            onChange={(e, option) => updateState({ room: option?.key as string })}
            placeholder="Seleccione una habitacion"
            label={"Habitación"}
            selectedKey={roomId}
            disabled
          />
        </div>
        <div className={styles.footerSection} >
          <CustomButton
            className={styles.button}
            style={{marginTop: "2em"}}
            text="Comprobar"
            onClick={createRequest}
            disabled={!(+suspect > 0 && +weapon > 0 && roomId as number >= 0 && !loading)}
          />
        </div>
      </div>
    </div>
  );
}
