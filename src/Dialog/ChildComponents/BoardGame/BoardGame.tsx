import { Icon, initializeIcons, IPivotStyles, Pivot, PivotItem } from "@fluentui/react";
import { useEffect, useState } from "react";
import { CharactersKey, FieldType, PivotKey, RoomsKey, WweaponsKey } from "./EnumsBoardGame";

import styles from "./BoardGame.module.scss";
import { Field } from "./childComponents/Field";

const pivotStyles: IPivotStyles = {
  root: [
    {
      backgroundColor: "transparent",
    },
  ],
  link: [
    {
      color: "white",
      marginRight: "1em",
      selectors: {
        ":before": {
          borderBottom: "blue",
        },
        ":hover": {
          color: "#682721",
          background: "white",
          borderRadius: "5px",
        },
      },
    },
  ],
  linkIsSelected: [
    {
      color: "white",
      // fontWeight: 800,
      selectors: {
        ":hover": {
          color: "#682721",
          background: "white",
          borderRadius: "5px",
        },
      },
    },
  ],
  linkContent: undefined,
  text: undefined,
  count: undefined,
  icon: undefined,
  linkInMenu: undefined,
  overflowMenuButton: undefined,
};

export function BoardGame(props?: any): JSX.Element {
  const [selectedKey, setKey] = useState(PivotKey.Characters);


  //   const users: string[] = props.users || [];
  const users = ["Maria Antonieta", "Julio Jose Dominguez", "Jacinto2334", "Irene_Rodriguez"];

  const getBoardContain = (keys: string[], users: string[]) => {
    return (
      <div className={styles.boardColumnContainer}>
        {printColumn(keys)}
        {users?.map((user) => printColumn(keys, user))}
      </div>
    );
  };

  const printColumn = (keys: string[], header?: string) => {
    return (
      <div className={styles.boardColumn}>
        {header ? (
          <>
            <Field type={FieldType.Label} input={header as string} />
            {keys.map((label) => (
              <Field type={FieldType.Icon} input={''} />
            ))}
          </>
        ) : (
          <>
            <Field type={FieldType.Empty} input={""} />
            {keys.map((label) => (
              <Field type={FieldType.Label} input={label as string} />
            ))}
          </>
        )}
      </div>
    );
  };

  return (
    <div className={styles.boardContainer}>
      <div className={styles.boardPivots}>
        <Pivot
          styles={pivotStyles}
          defaultSelectedKey={selectedKey}
          className={styles.boardPivots}
          onLinkClick={(item: any) => setKey(item.key.substring(2) as PivotKey)}
        >
          <PivotItem className={styles.pivot} key={PivotKey.Characters} headerText={PivotKey.Characters}>
            {getBoardContain(Object.keys(CharactersKey), users)}
          </PivotItem>
          <PivotItem className={styles.pivot} key={PivotKey.Weapons} headerText={PivotKey.Weapons}>
            {getBoardContain(Object.keys(WweaponsKey), users)}
          </PivotItem>
          <PivotItem className={styles.pivot} key={PivotKey.Rooms} headerText={PivotKey.Rooms}>
            {getBoardContain(Object.keys(RoomsKey), users)}
          </PivotItem>
        </Pivot>
      </div>
    </div>
  );
}
