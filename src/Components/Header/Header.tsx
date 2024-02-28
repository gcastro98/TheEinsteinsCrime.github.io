import styles from "./Header.module.scss";
import { PATHS } from "../../Common/StaticData/Paths";


export function Header() {
  
  return (
     <nav className={`${styles.navMenu} ${styles.navMenuLoading}`}> 
      <ul className={styles.navListButton}>
        <img
          src={PATHS.logoPathLoading}
          alt="The Einstein's Crime"
          // className={isLoading ? styles.navMenuLogoLoading : styles.navMenuLogo}
          className={styles.navMenuLogoLoading}
        />
      
      </ul>
    </nav>
  );
}

export default Header;
