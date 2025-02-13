import { useTheme } from "../../ThemeContext";
export function LanguageToggle() {
  const { language, setLanguage } = useTheme()
  return (
    <ul>
      <li onClick={() => {
        setLanguage('en')
      }}>English</li>
      <li onClick={() => {
        setLanguage('en')
      }}>Polski</li>
    </ul>
  );
}
