import { Icon, initializeIcons, IPivotStyles, Pivot, PivotItem } from "@fluentui/react";
import { useContext, useEffect, useState } from "react";
import { CharactersKey, FieldType, IconsType, BoardKey, RoomsKey, WweaponsKey } from "./Models/EnumsBoardGame";
import styles from "./Styles/BoardGame.module.scss";
import { GameContext } from "../../../Interfaces/IGameContext";

const pivotStyles: IPivotStyles = {
  root: [
    {
      font: "Teletype",
      backgroundColor: "transparent",
    },
  ],
  link: [
    {
       fontFamily: "Teletype",
      color: "black",
      marginRight: "1em",
      fontWeight: 400,
      fontSize: "large",
      paddingLeft: "5%",
      paddingRight: "5%",
      selectors: {
        ":hover": {
          background: "#682721",
          color: "white",
          borderRadius: "5px",
        },
      },
    },
  ],
  linkIsSelected: [
    {
      paddingLeft: "5%",
      paddingRight: "5%",
      fontFamily: "Teletype",
      background: "#682721d9",
      color:"white",
      borderRadius: "5px",
      fontWeight: 400,
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
  const { users, myCards } = useContext(GameContext);

  const [initialized, setInitialized] = useState(false);
  const [characterBoard, setCharacterBoard] = useState<number[][]>([]);
  const [weaponBoard, setWeaponBoard] = useState<number[][]>([]);
  const [roomBoard, setRoomBoard] = useState<number[][]>([]);
  initializeIcons();

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
  const usersName = users?.map((user) => user?.Name) ||[];
  const iconList = Object.values(IconsType);
  const nextIcon = (icon: number) => {
    return ((icon || 0) + 1) % iconList.length;
  };
  const updateBoard = (board: number[][], rowIndex: number, colIndex: number) => {
    const auxBoard = [...board];
    auxBoard[colIndex][rowIndex] = nextIcon(auxBoard[colIndex][rowIndex]);
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
        if (rowIndex !== undefined && colIndex !== undefined) {
          switch (boardType) {
            case BoardKey.Characters:
              return (
                <div
                  className={`${styles.field} ${styles.isIcon} ${styleByIcon(
                    characterBoard?.[colIndex]?.[rowIndex]
                  )}`}
                  onClick={(ev) => setCharacterBoard(updateBoard(characterBoard, rowIndex, colIndex))}
                >
                  <Icon
                    iconName={iconList[characterBoard?.[colIndex]?.[rowIndex]]}
                    style={{ fontSize: "23px" }}
                  />
                </div>
              );

            case BoardKey.Weapons:
              return (
                <div
                  className={`${styles.field} ${styles.isIcon} ${styleByIcon(
                    weaponBoard?.[colIndex]?.[rowIndex]
                  )}`}
                  onClick={(ev) => setWeaponBoard(updateBoard(weaponBoard, rowIndex, colIndex))}
                >
                  <Icon
                    iconName={iconList[weaponBoard?.[colIndex]?.[rowIndex]]}
                    style={{ fontSize: "23px" }}
                  />
                </div>
              );

            case BoardKey.Rooms:
              return (
                <div
                  className={`${styles.field} ${styles.isIcon} ${styleByIcon(
                    roomBoard?.[colIndex]?.[rowIndex]
                  )}`}
                  onClick={(ev) => setRoomBoard(updateBoard(roomBoard, rowIndex, colIndex))}
                >
                  <Icon iconName={iconList[roomBoard?.[colIndex]?.[rowIndex]]} style={{ fontSize: "23px" }} />
                </div>
              );
          }
        }
      }
    }
  };

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
