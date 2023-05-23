import React, { useContext, useEffect, useState } from "react";
import styles from "./GameInfo.module.scss";
import {
  GameContext,
  saveRequestAtHistoric,
  useActivePlayer,
  useActiveRequest,
  useActiveResponse,
  useRequests,
} from "../Services/DataServices";
import { RequestManagement } from "./ChildComponents/ShowRequest";
import { Dropdown, PrimaryButton } from "@fluentui/react";
import { ICard, IRequest, IUser } from "../Services/DataModels";
import { ButtonType } from "../Utils/Config";

interface INotification {
  users: number[] | "all";
  active: boolean;
}

export function GameInfo() {
  const { game, userId, active, setActive, diceContext } = useContext(GameContext);
  const [throwedDice, setThrowedDice] = useState<boolean>(false);
  const { diceValue, setDiceValue, throwDice, setThrowDice } = diceContext;
  const [activeRequest, setActiveRequest] = useActiveRequest();
  const [activeResponse, setActiveResponse] = useActiveResponse();
  const [responseState, setResponseState] = useState<{
    button: Boolean;
    cardId: number;
    cardOptions: ICard[];
  }>({ button: false, cardId: -2, cardOptions: [] });
  const [activePlayer, nextTurn, setTurn] = useActivePlayer();
  const [requests, addRequestToHistoric] = useRequests();
  const isYourTurn = game?.ActivePlayer === userId;

  useEffect(() => {
    setThrowedDice(false);
  }, [throwedDice && !isYourTurn]);
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

  const readResponse = () => {
    addRequestToHistoric(activeRequest as IRequest);
    nextTurn();
  };

  function showInfoByUser(
    user: IUser,
    activeRequest?: IRequest,
    isActivePlayer?: boolean,
    isYourTurn?: boolean
  ) {
    if (activeRequest && !activeRequest.readed) {
      const cardOptions = [];
      const room = game?.Cards[activeRequest.roomId];
      const suspect = game?.Cards[activeRequest.suspectId];
      const weapon = game?.Cards[activeRequest.weaponId];
      const options = [room, suspect, weapon].filter((card) => card?.userId === userId && (card as ICard));

      const reqUserId = activeRequest.userId;
      const checkResponse = activeRequest?.response !== undefined;
      if (reqUserId === user.Id) {
        return showMessage(`Supone que ha sido ${suspect.name} con ${weapon.name} en ${room.name}`);
      } else {
        console.log(checkResponse, activeRequest?.response?.userId, user.Id, reqUserId);
        if (checkResponse && activeRequest?.response?.userId === user.Id && reqUserId === userId) {
          return (
            <div>
              {showMessage(`Te ha enseñado el/la ${game?.Cards[activeRequest?.response.cardId].name}`)}
              <PrimaryButton
                text="Marcas como leído"
                onClick={() => {
                  readResponse();
                }}
              />
            </div>
          );
        }
        console.log(reqUserId, userId, isActivePlayer, user.Id);
        if (reqUserId !== userId && isActivePlayer && userId === user.Id) {
          return showRequestButtons(options);
        }
        return <div>{showMessage(`Está esperando para responder...`)}</div>;
      }
    }
    if (isActivePlayer) {
      if (isYourTurn) return <div>{showOptionsButtons(user)}</div>;
      else return <div>{showMessage(`Buscando pistas...`)}</div>;
    }
    return <div>{showMessage(`Está esperando su turno...`)}</div>;
  }

  function showOptionsButtons(user?: IUser) {
    return (
      <div className={styles.footer}>
        {throwedDice ? (
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
              setThrowDice(true);
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
      <div className={styles.Notification}>
        {game?.Users?.length > 0 &&
          game?.Users.map((user) => {
            const isActivePlayer = game?.ActivePlayer === user.Id;
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
    )
  );
}

// function Led(props: {isActivePlayer: boolean}) {
//   return (

//   );
// }
