import { useTheme } from "../../ThemeContext";
import styles from "./languageToggle.module.css"
interface LanguageToggleProps {
  className?: string
}
export function LanguageToggle({ className = "" }: LanguageToggleProps) {
  const { language, setLanguage } = useTheme()
  return (
    <ul className={`${styles.languageButtons} ${className}`}>
      <li onClick={() => {
        setLanguage('en')
      }}>English</li>
      <li onClick={() => {
        setLanguage('pl')
      }}>Polski</li>
    </ul >
  );
}
