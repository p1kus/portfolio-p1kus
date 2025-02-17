import styles from "./toolkit.module.css"
import shared from "../sharedSection.module.css"
import { LogoSet } from "../logoSet/logoSet"

export function Toolkit() {
  return (
    <div className={`${shared.container} ${styles.toolkitContainer}`}>
      <h3 className={shared.sectionHeader}>Toolkit</h3>
      <div className={styles.panelsWrapper}>

        <ul className={styles.leftPanel}>
          <h4>Development & IT Skills</h4>
          <h5>Frontend Development</h5>
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Vite</li>
          <li>RWD</li>
          <li>Bootstrap</li>
          <h5>Backend & Scripting</h5>
          <li>Node.JS</li>
          <li>Bash Scripting</li>
          <h5>System & tooling</h5>
          <li>Git</li>
          <li>Unix Systems</li>
          <li>VIM</li>
          <li>Oracle VirtualBox</li>
          <li>Postman</li>
        </ul>
        <ul className={styles.rightPanel}>
          <h4>Creative Tools & Other</h4>
          <h5>Graphic Design</h5>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe InDesign</li>
          <li>Adobe Premiere Pro</li>
          <li>Adobe UXP Scripting</li>
          <h5>Office tools</h5>
          <li>Microsoft Word</li>
          <li>Microsoft Excel</li>
          <li></li>
          <LogoSet></LogoSet>
        </ul>
      </div>
    </div>
  )
}
