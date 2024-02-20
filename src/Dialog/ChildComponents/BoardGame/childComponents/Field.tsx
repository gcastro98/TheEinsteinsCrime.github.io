// import { FieldType, IconsType } from "../EnumsBoardGame";

// import styles from "../BoardGame.module.scss";
// import { Icon, initializeIcons } from "@fluentui/react";
// import { useEffect, useState } from "react";

export interface IFieldProps {
  // type: FieldType;
  input: string;
  icon?: number;
  setIcon?: (icon: number) => void;
}



// export function Field(props: IFieldProps) {
//   const iconList = Object.values(IconsType);
//   const styleByType = () => {
//     switch (props.type) {
//       case FieldType.Empty:
//         return `${styles.field} ${styles.isLabel}`;
//       case FieldType.Label:
//         return `${styles.field} ${styles.isLabel}`;
//       case FieldType.Icon:
//         return `${styles.field} ${styles.isIcon}`;
//     }
//   };
//   const baseStyle = styleByType();

// const [icon, setIcon] = useState<number>(0)

// useEffect(() => {
//   console.log("useEffect")
//   if (props?.icon){
//     setIcon(props?.icon);
//   }
// }, [props?.icon])

//   const contentByField = (type: FieldType, input: string) => {
//     switch (type) {
//       case FieldType.Empty:
//         return <></>;
//       case FieldType.Label:
//         return <>{input}</>;
//       case FieldType.Icon:{
//         console.log("icon", props?.icon)
//         return <Icon iconName={iconList[icon]} style={{ fontSize: "10px" }} />;
//       }
       
//     }
//   };

//   const nextIcon = () => {
//     console.log("next")
//     console.log(props?.setIcon !== undefined && props?.icon !== -1)
//     if (props?.setIcon !== undefined && props?.icon !== undefined){
//       console.log("iconif")
//       console.log(icon)
//       props.setIcon((props.icon + 1) % iconList.length);
//     }

//   };


  

//   // const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
//   //   // nextIcon();
   
//   //   setState((prevState) => {
//   //       const icon = (prevState.icon + 1) % iconList.length
//   //       return ({
//   //           ...prevState,
//   //           icon,
//   //           style: `${baseStyle} ${styleByIcon(icon)}`,
//   //         })
//   //   }
 
//   // );
//   // };

//   const styleByIcon = (icon?:number) => {
//     switch (icon) {
//       case 0:
//         return ``;
//       case 1:
//         return styles.selectedCheck;
//       case 2:
//         return styles.selectedFail;
//       case 3:
//         return styles.selectedUnknown;
//       default:
//         return ``
//     }
//   };
//   useEffect(() => {
//     initializeIcons();
//   }, []);

//   return (
//     <div className={ `${baseStyle} ${styleByIcon(props?.icon)}`} onClick={(ev) => props.type === FieldType.Icon && nextIcon()}>
//       {contentByField(props.type, props.input)}
//     </div>
//   );
// }
