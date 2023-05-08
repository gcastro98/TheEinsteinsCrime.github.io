import React, { useContext } from "react";
import styles from "./Notification.module.scss";
import { GameContext, useActiveRequest } from "../Services/DataServices";
import { ShowRequest } from "./ChildComponents/ShowRequest";
interface INotification {
  users: number[] | "all";
  active: boolean;
}

export function Notification() {
  const { game, setGame, userId } = useContext(GameContext);
    const [activeRequest, setActiveRequest] = useActiveRequest()
    console.log(activeRequest)
  return (activeRequest &&
    <div className={styles.Notification}>
      {activeRequest && ShowRequest(activeRequest)}
    </div>
  );
}
