import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "~/ThemeContext";
import styles from "./header.module.css"

export default function Flags() {
  const { setLanguage } = useTheme()
  return (
    <div className={styles.flagIcons}>
      <Icon icon="flag:gb-4x3" className={styles.flagIcon} onClick={() => setLanguage("en")}></Icon>
      <Icon icon="flag:pl-4x3" className={styles.flagIcon} onClick={() => setLanguage("pl")}></Icon>
    </div>
  )
}
