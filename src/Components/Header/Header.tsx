import styles from "./Header.module.scss";
import { PATHS } from "../../Common/StaticData/Paths";
import { GameContext } from "../../Interfaces/IGameContext";
import { useContext } from "react";


export function Header() {
  const {loaded} = useContext(GameContext)
  return (
     <nav className={`${styles.navMenu} ${styles.navMenuLoading}`}> 
      <ul className={styles.navListButton}>
        <img
          src={PATHS.logoPathLoading}
          alt="The Einstein's Crime"
          className={!loaded ? styles.navMenuLogoLoading : styles.navMenuLogo}
          // className={styles.navMenuLogoLoading}
        />
      
      </ul>
    </nav>
  );
}

export default Header;
