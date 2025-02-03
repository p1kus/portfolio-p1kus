import styles from "./header.module.css";
import { ThemeToggleButton } from "../buttons/themeToggleButton";

export function Header() {
  return (
    <header className={styles.header}>
      <h3>Lublin, Poland</h3>
      <ul className="landingPage-languageSelect">
        <li>Polski,</li>
        <li>English</li>
      </ul>
      <ThemeToggleButton></ThemeToggleButton>
      <nav>
        <ul>
          <li>Home</li>
          <li>Demos</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
