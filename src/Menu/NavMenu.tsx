import { Stylesheet } from "@fluentui/react";
import React, { useContext, useEffect, useState } from "react";
import styles from "./NavMenu.module.scss";
import { GameContext } from "../Services/DataServices";
export enum ButtonMode {
  StartScreen,
  GameScreen,
}
export enum ButtonType {
  None = "None",
  Home = "Inicio",
  Settings = "Ajustes",
  Create = "Crear sala",
  Join = "Unirse a sala",
  Board = "Tablero",
  Cards = "Cartas",
  Dices = "Dados",
  Exit = "Exit",
  Request = "Request"
}

type ButtonProps = {
  name: string;
  mode?: ButtonMode;
  type: ButtonType;
};

type NavTopMenuProps = {
  logo: string;
  buttons?: ButtonProps[];
  loading: number;
  activeButton: ButtonType;
  mode?: ButtonMode;
  onClick: (type: ButtonType) => void;
};

export function NavMenu(props: NavTopMenuProps) {
  // const context = useContext(GameContext);
  const [isLoading, setLoading] = useState(true);
  const [buttons, setButtons]:  [ButtonProps[], any] = useState(props.buttons?.filter((button) => button.mode === props.mode) || []);
  useEffect(() => {
    if (props.loading >= 100) {
      setLoading(false);
    }
    if (props.mode){
      setButtons(props.buttons?.filter((button) => button.mode === props.mode))
    }
  }, [props.loading, props.mode]);

  return (
    <nav className={`${styles.navMenu} ${isLoading ? styles.navMenuLoading : '' }`}>
      <ul className={styles.navListButton}>
        <img
          src={props.logo}
          alt="The Einstein's Crime"
          className={isLoading ? styles.navMenuLogoLoading : styles.navMenuLogo}
        />
        {!isLoading &&
         buttons.map((button) => (
            <li
              key={button.name}
              className={`${styles.navButton} ${props.activeButton === button.type && styles.navButtonSelected}`}
              onClick={() => button.type !== ButtonType.None && (props.activeButton === button.type ? props.onClick(ButtonType.None) : props.onClick(button.type))}
            >
              {button.name}
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
