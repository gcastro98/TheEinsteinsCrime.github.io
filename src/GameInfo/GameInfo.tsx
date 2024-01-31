import React, { useContext, useEffect, useState } from "react";
import styles from "./GameInfo.module.scss";
import {
  GameContext, useDataByPath,
 
} from "../Services/DataServices";
import { RequestManagement } from "./ChildComponents/ShowRequest";
import { Dropdown, PrimaryButton } from "@fluentui/react";
import { ICard, IRequest, IUser } from "../Services/DataModels";
import { ButtonType } from "../Utils/Config";
import { DiceInfo } from "./ChildComponents/DiceInfo/DiceInfo";
import { ReactDiceRef } from "react-dice-complete";
import * as BackendService from "../Services/BackendServices";

export function GameInfo() {
  const {  game, userId, active, setActive } = useContext(GameContext);
  const gameId = game?.Id

  const [dice, throwDice] = useDataByPath(`/games/${gameId}/dice`, [0,0], () => BackendService.throwDice(gameId))
  const [activeRequest, setActiveRequest] = useDataByPath(`/games/${gameId}/dice`, [0,0], (req: any) => BackendService.createRequest(gameId, req))

  const setResponse = async (res: any) => await BackendService.setResponse(gameId, res)

  const [responseState, setResponseState] = useState<{
    button: Boolean;
    cardId: number;
    cardOptions: ICard[];
  }>({ button: false, cardId: -2, cardOptions: [] });

  const nextTurn = async () => await BackendService.nextTurn(gameId);
  const markAsReaded = async () => await BackendService.markAsReaded(gameId);

  // const [activePlayer, nextTurn, setTurn] = useActivePlayer(gameId);

  const isYourTurn = activePlayer === userId;
  const [throwedDice, setThrowedDice] = useState<boolean>(false);
  const [showRequestOption, setRequestOption] = useState<boolean>(false);

  const createActiveResponse = (optionId: number) => {
    const activeResponse = {
      cardId: optionId,
      readed: false,
      userId,
    };
    setResponse(activeResponse);
    setResponseState({ button: false, cardId: -2, cardOptions: [] });
  };

  

  // const getActionByInfo = (userToCheck: number) => {
  //   const isUserTurn = activePlayer === userToCheck;
  //   const isYourUser = userToCheck === userId;
  //   const isActiveRequest = activeRequest && !activeRequest?.readed;
  //   const isActiveRequestUser = activeRequest?.userId === userToCheck || -1;
  //   const isThrowedDice = dice?.length > 0 && dice[0] !== 0 && dice[1] !== 0;

  //  if (isActiveRequest){ //Hay una request activa
  //   if (isActiveRequestUser){
  //     return "ShowRequest"
  //   } 
  //   if (isUserTurn && isYourUser){
  //     return "SelectResponse"
  //   }
  //   if (isUserTurn && !isYourUser){
  //     return "PendingAnswer"
  //   }
  //  }else {
  //     if (isUserTurn && isYourUser){
  //       if (isThrowedDice){
  //         return "Movement"
  //       }
  //       return "ThrowDice"
  //     }
  //     if (isUserTurn && !isYourUser){
  //       return "WaitingTurn"
  //     }
  //     if (!isUserTurn && isYourUser){
  //       return "WaitingTurn"
  //     }
  //     if (!isUserTurn && !isYourUser){
  //       return "WaitingTurn"
  //     }
  //  }
  // };

  const switchInfoByAction = (action: string, props?: any): JSX.Element => {
    switch (action) {
      case "WaitingTurn": // No es tu turno, no hay acciones activas
        return showMessage(`Está buscando pistas...`);
      case "ThrowDice": // Es tu turno, no has lanzado los dados
        return (
          <div className={styles.footer}>
            <PrimaryButton
              text="Lanzar dados"
              onClick={async () => {
                await BackendService.throwDice(gameId)
              }}
            />
          </div>
        );
      case "Movement": // Es tu turno, has lanzado los dados
        return showMessage(`Moviendo ficha...`);
      case "CreateRequest": // Es tu turno, te has desplazado, y estas dentro de una habitacion
        return (
          <PrimaryButton
            text="Hacer pregunta"
            onClick={() => {
              setActive(active === ButtonType.Request ? ButtonType.None : ButtonType.Request);
            }}
          />
        );
      case "ShowRequest": // Es tu turno, te has desplazado y has hecho una pregunta
        return showMessage(`Supone que ha sido ${props?.name} con ${props?.card} en ${props?.room}`);
      case "PendingAnswer": // No es tu turno de responder, se ha hecho una pregunta y estas a la espera de responder
        return showMessage(`Pendiente de responder...`);
      case "SelectResponse": // Es tu turno de responder, se ha hecho una pregunta y tienes alguna de las tarjetas
        const room = game?.AllCards[activeRequest.roomId];
        const suspect = game?.AllCards[activeRequest.suspectId];
        const weapon = game?.AllCards[activeRequest.weaponId];
        const options = [room, suspect, weapon].filter((card) => card?.userId === userId && (card as ICard));

        return (
          <div className={styles.footer}>
            {responseState.button ? (
              <PrimaryButton
                text="Enseñar carta"
                onClick={() => {
                  setResponseState({ ...responseState, button: true });
                }}
              />
            ) : (
              <div>
                <Dropdown
                  options={options.map((card) => ({ key: card.id, text: card.name }))}
                  onChange={(e, option) => {
                    setResponseState({ ...responseState, cardId: option?.key as number });
                  }}
                />
                <PrimaryButton
                  text="Enviar respuesta"
                  onClick={() => {
                    createActiveResponse(responseState.cardId);
                  }}
                />
              </div>
            )}
          </div>
        );
      case "ShowResponse": // Has hecho una pregunta y te han respondido, debes marcarla como leido para continuar
        return (
          <div>
            {showMessage(`Te ha enseñado el/la ${props.cardName}`)}
            <PrimaryButton
              text="Marcas como leído"
              onClick={() => {
                markActiveResponseAsReaded();
              }}
            />
          </div>
        );

      case "NothingToResponse": // Naide te ha podido responder, debes marcarla como leido para continuar
        return (
          <div>
            {showMessage(`Pendiente de responder...`)}
            <PrimaryButton
              text="Marcas como leído"
              onClick={() => {
                markActiveResponseAsReaded();
              }}
            />
          </div>
        );
      default:
        return switchInfoByAction("WaitingTurn");
    }
  };

  const switchActionByData = (data: any) => {};

  function showInfoByUser(
    user: IUser,
    activeRequest?: IRequest,
    isActivePlayer?: boolean,
    isYourTurn?: boolean
  ) {
    if (activeRequest && !activeRequest.readed) {
      const room = game?.AllCards[activeRequest.roomId];
      const suspect = game?.AllCards[activeRequest.suspectId];
      const weapon = game?.AllCards[activeRequest.weaponId];
      const options = [room, suspect, weapon].filter((card) => card?.userId === userId && (card as ICard));

      const reqUserId = activeRequest.userId;
      const checkResponse = activeRequest?.response !== undefined;
      if (reqUserId === +user.Id) {
        return showMessage(`Supone que ha sido ${suspect.name} con ${weapon.name} en ${room.name}`);
      } else {
        if (checkResponse && activeRequest?.response?.userId === +user.Id && reqUserId === userId) {
          return (
            <div>
              {showMessage(`Te ha enseñado el/la ${game?.AllCards[activeRequest?.response.cardId].name}`)}
              <PrimaryButton
                text="Marcas como leído"
                onClick={() => {
                  markActiveResponseAsReaded();
                }}
              />
            </div>
          );
        }
        console.log(reqUserId, userId, isActivePlayer, user.Id);
        if (reqUserId !== userId && isActivePlayer && userId === +user.Id) {
          return showRequestButtons(options);
        }
        return <div>{showMessage(`Está esperando para responder...`)}</div>;
      }
    }
    if (isActivePlayer) {
      if (isYourTurn) return <div>{ShowOptionsButtons()}</div>;
      else return <div>{showMessage(`Buscando pistas...`)}</div>;
    }
    return <div>{showMessage(`Está esperando su turno...`)}</div>;
  }

  function ShowOptionsButtons() {
    return (
      <div className={styles.footer}>
        {showRequestOption ? (
          <PrimaryButton
            text="Hacer pregunta"
            onClick={() => {
              setActive(active === ButtonType.Request ? ButtonType.None : ButtonType.Request);
            }}
          />
        ) : (
          <PrimaryButton
            text="Lanzar dados"
            onClick={() => {
              getRandomValue();
              setRequestOption(true);
              setThrowedDice(true);
            }}
          />
        )}
      </div>
    );
  }

  function showRequestButtons(options: ICard[]) {
    return (
      <div className={styles.footer}>
        {responseState.button ? (
          <PrimaryButton
            text="Enseñar carta"
            onClick={() => {
              setResponseState({ ...responseState, button: true });
            }}
          />
        ) : (
          <div>
            <Dropdown
              options={options.map((card) => ({ key: card.id, text: card.name }))}
              onChange={(e, option) => {
                setResponseState({ ...responseState, cardId: option?.key as number });
              }}
            />
            <PrimaryButton
              text="Enviar respuesta"
              onClick={() => {
                createActiveResponse(responseState.cardId);
              }}
            />
          </div>
        )}
      </div>
    );
  }

  function showMessage(message: string) {
    return <div className={styles.message}>{message}</div>;
  }

  return (
    game?.OnProgress && (
      <>
        <div className={styles.Notification}>
          {game?.Users?.length > 0 &&
            game?.Users.map((user) => {
              const isActivePlayer = game?.ActivePlayer === +user.Id;
              console.log(isActivePlayer);
              return (
                <div className={styles.userSection}>
                  <div className={styles.userName}>
                    <div className={styles.ledBox}>
                      <div className={isActivePlayer ? styles.ledOn : styles.ledOff} />
                    </div>
                    <span className={styles.name}>{user.Name}</span>
                  </div>
                  {showInfoByUser(user, activeRequest, isActivePlayer, isYourTurn)}
                </div>
              );
            })}
        </div>
        <DiceInfo active={true} throwedDice={throwedDice} setThrowedDice={setThrowedDice} />
      </>
    )
  );
}
