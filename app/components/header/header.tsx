import { Clock } from "../clock/clock";
import styles from "./header.module.css";
import { ThemeToggle } from "../buttons/themeToggle";
import { NavLink } from "react-router";
import { LanguageToggle } from "../buttons/languageToggle";
import { useTheme } from "~/ThemeContext";


export function Header() {
  const { language } = useTheme();
  if (language === 'en') {
    return (
      <header className={styles.header}>
        <div className={styles.controls}>
          <ThemeToggle></ThemeToggle>
          <LanguageToggle></LanguageToggle>
        </div>
        <div className={styles.locationWithTime}>
          <h3>Lublin, Poland</h3>
          <Clock></Clock>
        </div>
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
  if (language === 'pl') {
    return (
      <header className={styles.header}>
        <div className={styles.controls}>
          <ThemeToggle></ThemeToggle>
          <LanguageToggle></LanguageToggle>
        </div>
        <div className={styles.locationWithTime}>
          <h3>Lublin, Polska</h3>
          <Clock></Clock>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Strona główna</NavLink>
            </li>
            <li>
              <NavLink to="/demos">Projekty</NavLink>
            </li>
            <li>
              <NavLink to="/about">O mnie</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Kontakt</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
