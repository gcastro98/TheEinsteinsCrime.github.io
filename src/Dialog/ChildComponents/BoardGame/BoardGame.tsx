import { Icon, initializeIcons, IPivotStyles, Pivot, PivotItem } from "@fluentui/react";
import { useContext, useEffect, useState } from "react";
import { CharactersKey, FieldType, IconsType, BoardKey, RoomsKey, WweaponsKey } from "./EnumsBoardGame";

import styles from "./BoardGame.module.scss";
// import { Field } from "./childComponents/Field";

import { GameContext } from "../../../Services/DataServices";

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
  const [selectedKey, setKey] = useState(BoardKey.Characters);
  const { users, game, myCards } = useContext(GameContext);

  const [initialized, setInitialized] = useState(false);
  const [characterBoard, setCharacterBoard] = useState<number[][]>([]);
  const [weaponBoard, setWeaponBoard] = useState<number[][]>([]);
  const [roomBoard, setRoomBoard] = useState<number[][]>([]);
  // console.log(initialized)
  initializeIcons()

  useEffect(() => {
    if (!initialized && myCards?.length > 0) {
      setCharacterBoard(
        Array.from(Array(Object.keys(CharactersKey)?.length), () => {
          return new Array(users?.length).fill(0);
        })
      );
      setWeaponBoard(
        Array.from(Array(Object.keys(WweaponsKey)?.length), () => {
          return new Array(users?.length).fill(0);
        })
      );
      setRoomBoard(
        Array.from(Array(Object.keys(RoomsKey)?.length), () => {
          return new Array(users?.length).fill(0);
        })
      );
      setInitialized(true);
    }
  }, [myCards, initialized]);

  const usersName = users?.map((user) => user?.Name);
  const iconList = Object.values(IconsType);
  const nextIcon = (icon: number) => {
    console.log("icon", icon, ((icon||0) + 1) % iconList.length)
    return ((icon||0) + 1) % iconList.length;
  }
  const updateBoard = (board: number[][], rowIndex: number, colIndex: number) => {
    console.log(board[colIndex][rowIndex]);
    const auxBoard = [...board];
    auxBoard[colIndex][rowIndex] = nextIcon(auxBoard[colIndex][rowIndex]);
    console.log(auxBoard)
    return auxBoard;
  };
  const styleByIcon = (icon?: number) => {
    switch (icon) {
      case 0:
        return ``;
      case 1:
        return styles.selectedCheck;
      case 2:
        return styles.selectedFail;
      case 3:
        return styles.selectedUnknown;
      default:
        return ``;
    }
  };

  const field = (
    fieldType: FieldType,
    input: string,
    boardType?: BoardKey,
    rowIndex?: number,
    colIndex?: number
  ) => {
    switch (fieldType) {
      case FieldType.Label:
        return <div className={`${styles.field} ${styles.isLabel}`}>{input || ""}</div>;
      case FieldType.Icon: {
        //   let icon = 0;
        //   let handler: () => void;
        //   if (rowIndex !== undefined && colIndex !== undefined) {
        //     switch (boardType) {
        //       case BoardKey.Characters:
        //         icon = characterBoard[rowIndex][colIndex];
        //         handler = () => setCharacterBoard((board) => updateBoard(board, rowIndex, colIndex));
        //         break;
        //       case BoardKey.Weapons:
        //         icon = weaponBoard[rowIndex][colIndex];
        //         handler = () => setWeaponBoard((board) => updateBoard(board, rowIndex, colIndex));
        //         break;

        //       case BoardKey.Rooms:
        //         icon = roomBoard[rowIndex][colIndex];
        //         handler = () => setRoomBoard((board) => updateBoard(board, rowIndex, colIndex));
        //         break;
        //     }
        //   }

        //   return (
        //     <div
        //       className={`${styles.field} ${styles.isIcon} ${styleByIcon(props?.icon)}`}
        //       onClick={(ev) => handler()}
        //     >
        //       <Icon iconName={iconList[icon]} style={{ fontSize: "10px" }} />;
        //     </div>
        //   );
        // }

        if (rowIndex !== undefined && colIndex !== undefined) {
          // console.log(rowIndex, colIndex,characterBoard?.[colIndex]?.[rowIndex] )
          switch (boardType) {
            case BoardKey.Characters:
              console.log(iconList[characterBoard?.[colIndex]?.[rowIndex]])
              return (
                <div
                  className={`${styles.field} ${styles.isIcon} ${styleByIcon(characterBoard?.[colIndex]?.[rowIndex])}`}
                  onClick={(ev) => setCharacterBoard((board) => updateBoard(board, rowIndex, colIndex))}
                >
                  <Icon
                    iconName={iconList[characterBoard?.[colIndex]?.[rowIndex]]}
                    style={{ fontSize: "15px" }}
                  />
                  
                </div>
              );

            case BoardKey.Weapons:
              return (
                <div
                  className={`${styles.field} ${styles.isIcon} ${styleByIcon(weaponBoard?.[colIndex]?.[rowIndex])}`}
                  onClick={(ev) => setWeaponBoard((board) => updateBoard(board, rowIndex, colIndex))}
                >
                  <Icon iconName={iconList[weaponBoard?.[colIndex]?.[rowIndex]]} style={{ fontSize: "10px" }} />
                </div>
              );

            case BoardKey.Rooms:
              return (
                <div
                  className={`${styles.field} ${styles.isIcon} ${styleByIcon(roomBoard?.[colIndex]?.[rowIndex])}`}
                  onClick={(ev) => setRoomBoard((board) => updateBoard(board, rowIndex, colIndex))}
                >
                  <Icon iconName={iconList[roomBoard?.[colIndex]?.[rowIndex]]} style={{ fontSize: "10px" }} />
                </div>
              );
          }
        }

        //   return (
        //     <div
        //       className={`${styles.field} ${styles.isIcon} ${styleByIcon(props?.icon)}`}
        //       onClick={(ev) => handler()}
        //     >
        //       <Icon iconName={iconList[icon]} style={{ fontSize: "10px" }} />;
        //     </div>
        //   );
        // }
      }
    }
  };

  console.log("mycards", myCards, initialized);
  console.log(characterBoard, weaponBoard, roomBoard);

  const getBoardContain = (boardType: BoardKey, keys: string[]) => {
    const printColumn = (keys: string[], rowIndex: number, header?: string) => {
      return (
        <div className={styles.boardColumn}>
          {header ? (
            <>
              {field(FieldType.Label, header as string)}
              {keys.map((_, colIndex) => field(FieldType.Icon, "", boardType, rowIndex, colIndex))}
            </>
          ) : (
            <>
              {field(FieldType.Label, "")}
              {keys.map((label) => field(FieldType.Label, label as string))}
            </>
          )}
        </div>
      );
    };

    return (
      <div className={styles.boardColumnContainer}>
        {printColumn(keys, 0)}
        {usersName?.map((user, i) => printColumn(keys, i, user))}
      </div>
    );
  };

  return (
    <div className={styles.boardContainer}>
      <div className={styles.boardPivots}>
        {initialized && (
          <Pivot
            styles={pivotStyles}
            defaultSelectedKey={selectedKey}
            className={styles.boardPivots}
            onLinkClick={(item: any) => setKey(item.key.substring(2) as BoardKey)}
          >
            <PivotItem className={styles.pivot} key={BoardKey.Characters} headerText={BoardKey.Characters}>
              {getBoardContain(BoardKey.Characters, Object.keys(CharactersKey))}
            </PivotItem>
            <PivotItem className={styles.pivot} key={BoardKey.Weapons} headerText={BoardKey.Weapons}>
              {getBoardContain(BoardKey.Weapons, Object.keys(WweaponsKey))}
            </PivotItem>
            <PivotItem className={styles.pivot} key={BoardKey.Rooms} headerText={BoardKey.Rooms}>
              {getBoardContain(BoardKey.Rooms, Object.keys(RoomsKey))}
            </PivotItem>
          </Pivot>
        )}
      </div>
    </div>
  );
}
