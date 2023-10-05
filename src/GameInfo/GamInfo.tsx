import React, { useContext, useEffect, useState } from "react";
import styles from "./GameInfo.module.scss";
import {
  GameContext,
  saveRequestAtHistoric,
  useActivePlayer,
  useActiveRequest,
  useActiveResponse,
  useDice,
  useDiceManagement,
  useRequests,
} from "../Services/DataServices";
import { RequestManagement } from "./ChildComponents/ShowRequest";
import { Dropdown, PrimaryButton } from "@fluentui/react";
import { ICard, IRequest, IUser } from "../Services/DataModels";
import { ButtonType } from "../Utils/Config";
import { DiceInfo } from "./ChildComponents/DiceInfo/DiceInfo";
import { ReactDiceRef } from "react-dice-complete";

export function GameInfo() {
  const { gameId, game, userId, active, setActive } = useContext(GameContext);
  const diceContext = useDiceManagement(gameId);

  const { getRandomValue } = diceContext;
  const activeRequest = useActiveRequest(gameId)[0];
  const [activeResponse, setActiveResponse] = useActiveResponse(gameId);

  const [responseState, setResponseState] = useState<{
    button: Boolean;
    cardId: number;
    cardOptions: ICard[];
  }>({ button: false, cardId: -2, cardOptions: [] });
  const [activePlayer, nextTurn, setTurn] = useActivePlayer(gameId);
  const [requests, addRequestToHistoric] = useRequests(gameId);
  const isYourTurn = activePlayer === userId;
  const [dice, setDice] = useDice(gameId)
  const [throwedDice, setThrowedDice] = useState<boolean>(false);
  const [showRequestOption, setRequestOption] = useState<boolean>(false);

  const createActiveResponse = (optionId: number) => {
    const activeResponse = {
      cardId: optionId,
      readed: false,
      userId,
    };
    setActiveResponse(activeResponse);
    setResponseState({ button: false, cardId: -2, cardOptions: [] });
    setTurn(game?.ActiveRequest?.userId as number);
  };

  const markActiveResponseAsReaded = () => {
    addRequestToHistoric(activeRequest as IRequest);
    nextTurn();
  };

  const getActionByInfo = (userToCheck: number) => {
    const isUserTurn = activePlayer === userToCheck;
    const isYourUser = userToCheck === userId;
    const isActiveRequest = activeRequest && !activeRequest?.readed;
    const isActiveRequestUser = activeRequest?.userId === userToCheck || -1;
    const isThrowedDice = dice?.length > 0 && dice[0] !== 0 && dice[1] !== 0;

   if (isActiveRequest){ //Hay una request activa
    if (isActiveRequestUser){
      return "ShowRequest"
    } 
    if (isUserTurn && isYourUser){
      return "SelectResponse"
    }
    if (isUserTurn && !isYourUser){
      return "PendingAnswer"
    }
   }else {
      if (isUserTurn && isYourUser){
        if (isThrowedDice){
          return "Movement"
        }
        return "ThrowDice"
      }
      if (isUserTurn && !isYourUser){
        return "WaitingTurn"
      }
      if (!isUserTurn && isYourUser){
        return "WaitingTurn"
      }
      if (!isUserTurn && !isYourUser){
        return "WaitingTurn"
      }
   }
  };

  const switchInfoByAction = (action: string, props?: any): JSX.Element => {
    switch (action) {
      case "WaitingTurn": // No es tu turno, no hay acciones activas
        return showMessage(`Está buscando pistas...`);
      case "ThrowDice": // Es tu turno, no has lanzado los dados
        return (
          <div className={styles.footer}>
            <PrimaryButton
              text="Lanzar dados"
              onClick={() => {
                getRandomValue();
                setRequestOption(true);
                setThrowedDice(true);
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
        const room = game?.Cards[activeRequest.roomId];
        const suspect = game?.Cards[activeRequest.suspectId];
        const weapon = game?.Cards[activeRequest.weaponId];
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
      const room = game?.Cards[activeRequest.roomId];
      const suspect = game?.Cards[activeRequest.suspectId];
      const weapon = game?.Cards[activeRequest.weaponId];
      const options = [room, suspect, weapon].filter((card) => card?.userId === userId && (card as ICard));

      const reqUserId = activeRequest.userId;
      const checkResponse = activeRequest?.response !== undefined;
      if (reqUserId === user.userId) {
        return showMessage(`Supone que ha sido ${suspect.name} con ${weapon.name} en ${room.name}`);
      } else {
        if (checkResponse && activeRequest?.response?.userId === user.userId && reqUserId === userId) {
          return (
            <div>
              {showMessage(`Te ha enseñado el/la ${game?.Cards[activeRequest?.response.cardId].name}`)}
              <PrimaryButton
                text="Marcas como leído"
                onClick={() => {
                  markActiveResponseAsReaded();
                }}
              />
            </div>
          );
        }
        console.log(reqUserId, userId, isActivePlayer, user.userId);
        if (reqUserId !== userId && isActivePlayer && userId === user.userId) {
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
              const isActivePlayer = game?.ActivePlayer === user.userId;
              console.log(isActivePlayer);
              return (
                <div className={styles.userSection}>
                  <div className={styles.userName}>
                    <div className={styles.ledBox}>
                      <div className={isActivePlayer ? styles.ledOn : styles.ledOff} />
                    </div>
                    <span className={styles.name}>{user.name}</span>
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
