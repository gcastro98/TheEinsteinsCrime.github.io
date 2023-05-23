import { Stylesheet } from "@fluentui/react";
import React, { useContext, useEffect, useState } from "react";
import styles from "./NavMenu.module.scss";
import { GameContext } from "../Services/DataServices";
import {ButtonMode, ButtonProps, ButtonType, config} from "../Utils/Config"


type NavTopMenuProps = {
  loading: number;
  activeButton: ButtonType;
  mode?: ButtonMode;
  onClick: (type: ButtonType) => void;
};

export function NavMenu(props: NavTopMenuProps) {
  // const context = useContext(GameContext);
  const [isLoading, setLoading] = useState(true);
  const [buttons, setButtons]:  [ButtonProps[], any] = useState(config.buttons?.filter((button: ButtonProps) => button.mode === props.mode) || []);
  useEffect(() => {
    if (props.loading >= 100) {
      setLoading(false);
    }
    if (props.mode){
      setButtons(config.buttons?.filter((button: ButtonProps) => button.mode === props.mode))
    }
  }, [props.loading, props.mode]);

  return (
    <nav className={`${styles.navMenu} ${isLoading ? styles.navMenuLoading : '' }`}>
      <ul className={styles.navListButton}>
        <img
          src={isLoading? config.logoPathLoading : config.logoPath}
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
