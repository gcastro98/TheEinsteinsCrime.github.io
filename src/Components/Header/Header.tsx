import styles from "./Header.module.scss";
import { PATHS } from "../../Common/StaticData/Paths";
import { GameContext } from "../../Interfaces/IGameContext";
import { useContext } from "react";


export function Header() {
  return (
     <div className={`${styles.navMenu} ${styles.navMenuLoading}`}> 
        <img
          src={PATHS.logoPathLoading}
          alt="The Einstein's Crime"
          className={styles.navMenuLogo}
        />
    </div>
  );
}

export default Header;
