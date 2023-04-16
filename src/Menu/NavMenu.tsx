import { Stylesheet } from "@fluentui/react";
import React, { useEffect, useState } from "react";
import "./NavMenu.scss";

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
  onClick: (type: ButtonType) => void;
};

export function NavMenu(props: NavTopMenuProps) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (props.loading >= 100) {
      setLoading(false);
    }
  }, [props.loading]);

  return (
    <nav className={"navMenu"}>
      <ul className={"navListButton"}>
        <img
          src={props.logo}
          alt="The Einstein's Crime"
          className={isLoading ? "navMenuLogoLoading" : "navMenuLogo"}
        />
        {!isLoading &&
          props.buttons?.map((button) => (
            <li
              key={button.name}
              className={`navButton`}
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
