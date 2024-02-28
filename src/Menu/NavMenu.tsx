import { Stylesheet } from "@fluentui/react";
import React, { useContext, useEffect, useState } from "react";
import styles from "./NavMenu.module.scss";
import { GameContext } from "../Services/DataServices";
import { ButtonMode, ButtonProps, DialogComponent, config } from "../Common/Config";

type NavTopMenuProps = {
  loading: number;
  activeButton: DialogComponent;
  mode?: ButtonMode;
  onClick: (type: DialogComponent) => void;
  isYourTurn: boolean;
};

export function NavMenu(props: NavTopMenuProps) {
  // const { isYourTurn } = useContext(GameContext);
  const [isLoading, setLoading] = useState(true);
  const [buttons, setButtons]: [ButtonProps[], any] = useState(
    config.dialogComponents?.filter((button: ButtonProps) => button.mode === props.mode) || []
  );
  useEffect(() => {
    if (props.loading >= 100) {
      setLoading(false);
    }
    if (props.mode) {
      setButtons(
        config.dialogComponents?.filter(
          (button: ButtonProps) => button.mode === props.mode && button?.hidden === undefined
        )
      );
    }
  }, [props.loading, props.mode]);

  return (
    // <nav className={`${styles.navMenu} ${isLoading ? styles.navMenuLoading : ""}`}>
     <nav className={`${styles.navMenu} ${styles.navMenuLoading}`}> 
      <ul className={styles.navListButton}>
        <img
          // src={isLoading ? config.logoPathLoading : config.logoPath}
          src={config.logoPathLoading}
          alt="The Einstein's Crime"
          // className={styles.navMenuLogoLoading}
          className={isLoading ? styles.navMenuLogoLoading : styles.navMenuLogo}
        />
        {/* {!isLoading &&
          buttons.map((button) => {
            return (
              (!button?.hidden) && (
                <li
                  key={button.name}
                  className={`${styles.navButton} ${
                    props.activeButton === button.type && styles.navButtonSelected
                  }`}
                  onClick={() =>
                    button.type !== DialogComponent.None &&
                    (props.activeButton === button.type
                      ? props.onClick(DialogComponent.None)
                      : props.onClick(button.type))
                  }
                >
                  {button.name}
                </li>
              )
            );
          })} */}
      </ul>
    </nav>
  );
}

export default NavMenu;
