import { Clock } from "../clock/clock";
import styles from "./header.module.css";
import { ThemeToggle } from "../buttons/themeToggle";
import { NavLink } from "react-router";

export function Header() {
  return (
    <header className={styles.header}>
      <ThemeToggle></ThemeToggle>
      <div className={styles.locationWithTime}>
        <h3>Lublin, Poland</h3>
        <Clock></Clock>
      </div>
      <ul>
        <div className={styles.selected}></div>
        <li>English</li>
        <li>Polski</li>
      </ul>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/demos">Demos</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
