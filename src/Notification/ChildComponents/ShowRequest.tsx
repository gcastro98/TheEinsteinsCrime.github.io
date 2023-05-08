import { useContext } from "react";
import { IRequest } from "../../Services/DataModels";
import { GameContext, useActiveRequest } from "../../Services/DataServices";
import { PrimaryButton } from "@fluentui/react";

export function ShowRequest(activeRequest: IRequest) {
  const { game, setGame, userId } = useContext(GameContext);
  const room = game?.Cards[activeRequest.roomId];
  const suspect = game?.Cards[activeRequest.suspectId];
  const weapon = game?.Cards[activeRequest.weaponId];
  const user = game?.Users[activeRequest.userId];
  const showFooterButtons =
    activeRequest !== undefined && activeRequest.userId !== userId &&
    (game?.Cards[activeRequest.roomId].userId === userId ||
      game?.Cards[activeRequest.suspectId].userId === userId ||
      game?.Cards[activeRequest.weaponId].userId === userId);
    console.log(showFooterButtons)
  const footerButtons = () => {
    return ( showFooterButtons ? <div>
      <PrimaryButton text="Elegir carta" />
      <PrimaryButton text="Mostrar aleatoria" />
    </div> : <></>);
  };
  return (
    <div>
      <div>
        {user.Name} supone que ha sido {suspect?.name} con {weapon?.name} en {room?.name}
      </div>
      <div>{footerButtons()}</div>
      
    </div>
  );
}
