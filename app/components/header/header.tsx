import { Clock } from "../clock/clock";
import styles from "./header.module.css";
import { ThemeToggle } from "../buttons/themeToggle";
import { NavLink } from "react-router";
import { LanguageToggle } from "../buttons/languageToggle";
import { useTheme } from "~/ThemeContext";
import { en } from "~/translations/en/en";
import { pl } from "~/translations/pl/pl";


export function Header() {
  const { language } = useTheme();
  return (
    <header className={styles.header}>
      <div className={styles.controls}>
        <ThemeToggle></ThemeToggle>
        <LanguageToggle></LanguageToggle>
      </div>
      <div className={styles.locationWithTime}>
        <h3>{language === "en" ? en.home.navbar.location : pl.home.navbar.location}</h3>
        <Clock></Clock>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">{language === "en" ? en.home.navbar.home : pl.home.navbar.home}</NavLink>
          </li>
          <li>
            <NavLink to="/demos">{language === "en" ? en.home.navbar.demos : pl.home.navbar.demos}</NavLink>
          </li>
          <li>
            <NavLink to="/contact">{language === "en" ? en.home.navbar.contact : pl.home.navbar.contact}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
