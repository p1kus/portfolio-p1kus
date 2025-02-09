import { Icon } from "@iconify/react";
import styles from './logoSet.module.css'
export function LogoSet() {
  return (
    <div className={styles.logoSetContainer}>
      <Icon className={styles.icon} icon="devicon-html5" />
      <Icon className={styles.icon} icon="devicon-css3" />
      <Icon className={styles.icon} icon="devicon-javascript" />
      <Icon className={styles.icon} icon="devicon-typescript" />
      <Icon className={styles.icon} icon="devicon-react" />
      <Icon className={styles.icon} icon="devicon-nodejs" />
      <Icon className={styles.icon} icon="logos-vitejs" />
      <Icon className={styles.icon} icon="mdi-github" />
      <Icon className={styles.icon} icon="logos-adobe-photoshop" />
      <Icon className={styles.icon} icon="logos-adobe-premiere" />
      <Icon className={styles.icon} icon="logos-adobe-indesign" />
      <Icon className={styles.icon} icon="" />
    </div>
  )
}
