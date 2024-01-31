import { FieldType, IconsType } from "../EnumsBoardGame";

import styles from "../BoardGame.module.scss";
import { Icon, initializeIcons } from "@fluentui/react";
import { useEffect, useState } from "react";

interface IFieldProps {
  type: FieldType;
  input: string;
}

export function Field(props: IFieldProps) {
  const iconList = Object.values(IconsType);
  const styleByType = () => {
    switch (props.type) {
      case FieldType.Empty:
        return `${styles.field} ${styles.isLabel}`;
      case FieldType.Label:
        return `${styles.field} ${styles.isLabel}`;
      case FieldType.Icon:
        return `${styles.field} ${styles.isIcon}`;
    }
  };
  const baseStyle = styleByType();
  let [state, setState] = useState({ icon: 0, content: <></>, style: baseStyle });



  const contentByField = (type: FieldType, input: string) => {
    switch (type) {
      case FieldType.Empty:
        return <></>;
      case FieldType.Label:
        return <>{input}</>;
      case FieldType.Icon:
        return <Icon iconName={iconList[state.icon]} style={{ fontSize: "10px" }} />;
    }
  };

  const nextIcon = () => {
    setState((prevState) => ({ ...prevState, icon: (prevState.icon + 1) % iconList.length }));
  };

  cont prevIcon =   

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // nextIcon();
   
    setState((prevState) => {
        const icon = (prevState.icon + 1) % iconList.length
        return ({
            ...prevState,
            icon,
            style: `${baseStyle} ${styleByIcon(icon)}`,
          })
    }
 
  );
  };

  const styleByIcon = (icon:number) => {
    switch (icon) {
      case 0:
        return ``;
      case 1:
        return styles.selectedCheck;
      case 2:
        return styles.selectedFail;
      case 3:
        return styles.selectedUnknown;
    }
  };
  useEffect(() => {
    initializeIcons();
    setState((prevState) => ({ ...prevState, content: contentByField(props.type, props.input) }));
  }, [state.icon]);

  return (
    <div className={state.style} onClick={(ev) => props.type === FieldType.Icon && handleClick(ev)}>
      {state.content}
    </div>
  );
}
