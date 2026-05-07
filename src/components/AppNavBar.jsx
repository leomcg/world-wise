import { NavLink } from "react-router-dom";
import styles from "./AppNavBar.module.css";

function AppNavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Back to Home</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNavBar;
