import { useTheme } from "../../ThemeContext";
import styles from "./languageToggle.module.css"
export function LanguageToggle() {
  const { language, setLanguage } = useTheme()
  return (
    <ul className={styles.languageButtons}>
      <li onClick={() => {
        setLanguage('en')
      }}>English</li>
      <li onClick={() => {
        setLanguage('pl')
      }}>Polski</li>
    </ul>
  );
}
