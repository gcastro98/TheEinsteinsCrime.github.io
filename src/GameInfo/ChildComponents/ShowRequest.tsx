import { useContext, useState } from "react";
import { ICard, IRequest, IResponse } from "../../Services/DataModels";
import { GameContext, useActiveRequest, useActiveResponse } from "../../Services/DataServices";
import { Dropdown, IDropdownOption, PrimaryButton, Stylesheet } from "@fluentui/react";
import styles from "../GameInfo.module.scss";

export function RequestManagement(activeRequest?: IRequest) {
  const { gameId, game, setGame, userId } = useContext(GameContext);
  const [response, setResponse] = useActiveResponse(gameId);
  const [showCardOptions, setShowCardOptions] = useState(false);
  if (activeRequest) {
    const room =  game?.Cards[activeRequest.roomId] ;
    const suspect = game?.Cards[activeRequest.suspectId] ;
    const weapon = game?.Cards[activeRequest.weaponId];
    const showOptions = room || suspect || weapon;
  
    const filterCardsUser = [room, suspect, weapon].map((card) => card !== undefined && card?.userId === userId && card as ICard);
    
    const footerButtons = () => {
      return showOptions ? (
        <div className={styles.footer}>{showCardOptions ? cardOptions() : buttons()}</div>
      ) : (
        <></>
      );
    };
    const buttons = () => {
      return (
        <div>
          <PrimaryButton text="Elegir carta" onClick={() => setShowCardOptions(true)} />
          <PrimaryButton text="Mostrar aleatoria" onClick={() => setShowCardOptions(true)} />{" "}
        </div>
      );
    };
  
    const cardOptions = () => {
      return (
        <div>
          <Dropdown
            options={filterCardsUser?.length > 0 ? filterCardsUser.map((x: any) => {
              return { key: x.id, text: x.name }
            }) : []}
            onChange={(e, option) => setResponse({ cardId: option?.key, readed: false, userId } as IResponse)}
            placeholder="Select a Suspect"
          />
          <PrimaryButton text="Enviar" onClick={() => setShowCardOptions(false)} />
        </div>
      );
    };
  
      
  
      
  
      return ( activeRequest ?
        <div>
          <div>
            Supone que ha sido {suspect?.name} con {weapon?.name.toLowerCase()} en {room?.name.toLowerCase()}
          </div>
          <div>{footerButtons()}</div>
        </div>
        : <></>
      );
  }
  return <></>
  
}
