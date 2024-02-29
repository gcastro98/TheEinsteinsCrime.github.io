import styles from "./GameInfo.module.scss";
import { useContext, useState } from "react";
import { ICard } from "../../Firebase/Models/ICard";
import { Dropdown, PrimaryButton } from "@fluentui/react";
import { GameContext } from "../../Interfaces/IGameContext";
import * as BackendService from "../../API/BackendServices";
import { IStatusPlayer, IUser } from "../../Firebase/Models/IUser";
import { DialogComponent } from "../../Interfaces/IDialogComponent";
import { IStatusGame } from "../../Firebase/Models/IGame";
import { CustomButton } from "../../Common/Utils/CustomButton/CustomButton";

export function GameInfo() {
  const {
    game,
    userId,
    dialog: active,
    setDialog: setActive,
    myCards,
    users,
    loaded,
  } = useContext(GameContext);

  const gameId = game?.Id;

  const [responseState, setResponseState] = useState<{
    button: Boolean;
    cardId: number;
    cardOptions: ICard[];
  }>({ button: false, cardId: -2, cardOptions: [] });

  const activeRequest = game?.ActiveRequest;

  const throwDice = async () => await BackendService.throwDice(gameId);
  const setResponse = async (res: any) => await BackendService.setResponse(gameId, res);
  const markActiveResponseAsReaded = async () => await BackendService.markAsReaded(gameId);
  const createActiveResponse = (optionId: number) => {
    const activeResponse = {
      cardId: optionId,
      readed: false,
      userId,
    };
    setResponse(activeResponse);
    setResponseState({ button: false, cardId: -2, cardOptions: [] });
  };

  const completeCards = () => {
    const room = ((game?.AllCards as ICard[]) || []).find((card) => card.id === activeRequest?.roomId);
    const suspect = ((game?.AllCards as ICard[]) || []).find((card) => card.id === activeRequest?.suspectId);
    const weapon = ((game?.AllCards as ICard[]) || []).find((card) => card.id === activeRequest?.weaponId);
    return { suspect, room, weapon };
  };

  const responseCardName = () => {
    const cardId = activeRequest?.response?.cardId;
    if (cardId && game?.AllCards) {
      return game?.AllCards.find((card) => card?.id === cardId)?.name;
    }
  };

  const responseCardUser = () => {
    const userId = activeRequest?.response?.userId;
    if (userId && users) {
      return users.find((user) => user?.Id === userId)?.Name;
    }
  };
  const showMessage = (message: string) => {
    return <div className={styles.message}>{message}</div>;
  };

  const showMessageByAction = (action: IStatusPlayer, user?: IUser): JSX.Element => {
    return (
      <div className={styles.footer}>
        {((action: IStatusPlayer) => {
          switch (action) {
            case IStatusPlayer.WaitingTurn: // No es tu turno, no hay acciones activas
              return showMessage(`Está buscando pistas...`);
            case IStatusPlayer.ThrowingDice: // Es tu turno, no has lanzado los dados
              return showMessage(`Lanzando dados...`);
            case IStatusPlayer.Movement: // Es tu turno, has lanzado los dados
              return showMessage(
                `Moviendo ficha... (${user?.PendingMovements as number} movimientos restantes)`
              );
            case IStatusPlayer.PreparingRequest: // Es tu turno, te has desplazado, y estas dentro de una habitacion
              return showMessage(`Preparando la pregunta...`);
            case IStatusPlayer.ShowingRequest: // Es tu turno, te has desplazado y has hecho una pregunta
              const requestCards = completeCards();
              return showMessage(
                `Supone que ha sido ${requestCards.suspect?.name} con ${requestCards.weapon?.name} en ${requestCards.room?.name}`
              );
            case IStatusPlayer.WaitingResponse: // Es tu turno de responder, se ha hecho una pregunta y tienes alguna de las tarjetas
              return showMessage(`Seleccionando respuesta...`);
            case IStatusPlayer.ShowingCard: // Has hecho una pregunta y te han respondido, debes marcarla como leido para continuar
              return showMessage(`Mostrando carta...`);
            case IStatusPlayer.NothingToResponse: // Naide te ha podido responder, debes marcarla como leido para continuar
              return showMessage(`No tiene nada que decir...`);
            case IStatusPlayer.Disabled:
              return (
                <>
                  {showMessage(`Ha perdido`)}
                  <CustomButton
                    text="Ver sus cartas"
                    onClick={async () => {
                      setActive(DialogComponent.CardsByUser, user?.Id);
                    }}
                  />
                </>
              );
            case IStatusPlayer.Winner:
              return showMessage("¡Enhorabuena!¡Has ganado!");
            default:
              return showMessageByAction(IStatusPlayer.WaitingTurn);
          }
        })(action)}
      </div>
    );
  };

  const showOptionsInYourTurn = (action: IStatusPlayer, user: IUser): JSX.Element => {
    switch (action) {
      case IStatusPlayer.ThrowingDice: // Es tu turno, no has lanzado los dados
        return (
          <div className={styles.footer}>
            <CustomButton
              text="Lanzar dados"
              onClick={async () => {
                setActive(DialogComponent.None);
                await throwDice();
              }}
            />
            <CustomButton
              text="Solucionar"
              onClick={async () => {
                setActive(DialogComponent.Solution);
              }}
            />
          </div>
        );
      case IStatusPlayer.PreparingRequest: // Es tu turno, te has desplazado, y estas dentro de una habitacion
        return (
          <div className={styles.footer}>
            <CustomButton
              text="Hacer pregunta"
              onClick={() => {
                setActive(
                  active === DialogComponent.Request ? DialogComponent.None : DialogComponent.Request
                );
              }}
            />
          </div>
        );

      case IStatusPlayer.WaitingResponse: // Es tu turno de responder, se ha hecho una pregunta y tienes alguna de las tarjetas
        return (
          <div className={styles.footer}>
            {responseState.button ? (
              <CustomButton
                text="Enseñar carta"
                onClick={() => {
                  setResponseState({ ...responseState, button: true });
                }}
              />
            ) : (
              <div className={styles.footer}>
                <Dropdown
                  className={styles.textfield}
                  options={myCards
                    .filter((myCard) =>
                      [activeRequest?.roomId, activeRequest?.suspectId, activeRequest?.weaponId].some(
                        (id) => myCard.id === id
                      )
                    )
                    .map((card) => ({ key: card.id, text: card.name }))}
                  onChange={(e, option) => {
                    setResponseState({ ...responseState, cardId: option?.key as number });
                  }}
                />
                <CustomButton
                  text="Enviar respuesta"
                  onClick={() => {
                    createActiveResponse(responseState.cardId);
                  }}
                />
              </div>
            )}
          </div>
        );
      case IStatusPlayer.MarkingAsReaded: // Has hecho una pregunta y te han respondido, debes marcarla como leido para continuar
        return (
          <div className={styles.footer}>
            {activeRequest?.response?.cardId !== -1
              ? showMessage(`${responseCardUser()} te ha enseñado la carta de ${responseCardName()}`)
              : showMessage("No hay nada que enseñarte")}
            <CustomButton
              text="Marcar como leído"
              onClick={() => {
                markActiveResponseAsReaded();
              }}
            />
          </div>
        );
      default:
        return showMessageByAction(action, user);
    }
  };

  return (
    <div hidden={!(loaded && game?.OnProgress === IStatusGame.InProgress)}>
      <div className={styles.Notification}>
        {users?.length > 0 &&
          users?.map((user, i) => {
            const isActivePlayer = game?.ActivePlayer === i;
            const isYourUser = userId === user.Id;
            return (
              <div className={styles.userSection}>
                <div className={styles.userName}>
                  <div className={styles.ledBox}>
                    <div className={isActivePlayer ? styles.ledOn : styles.ledOff} />
                  </div>
                  <span className={styles.name}>{user.Name}</span>
                </div>
                {isYourUser
                  ? showOptionsInYourTurn(user.Status, user)
                  : showMessageByAction(user.Status, user)}
              </div>
            );
          })}
      </div>
    </div>
  );
}
