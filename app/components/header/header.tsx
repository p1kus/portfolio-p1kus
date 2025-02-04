import styles from "./header.module.css";
import { ThemeToggle } from "../buttons/themeToggle";

const getTime = () => {
  const date = new Date();
  const localDate = date.getTime();
  console.log(localDate.toString());
};

const logSomething = () => {};

export function Header() {
  return (
    <header className={styles.header}>
      <ThemeToggle></ThemeToggle>
      <button onClick={logSomething}>Clickkkme</button>
      <h3>Lublin, Poland</h3>
      <ul>
        <li>Polski,</li>
        <li>English</li>
      </ul>
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
