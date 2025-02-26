import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "~/ThemeContext";
import styles from "./header.module.css"

export default function Flags() {
  const { setLanguage } = useTheme()
  return (
    <div>
      <Icon icon="flag:gb-4x3" className={styles.flagIcon}></Icon>
      <Icon icon="flag:pl-4x3" className={styles.flagIcon}></Icon>
    </div>
  )
}
