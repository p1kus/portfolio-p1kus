import styles from "./toolkit.module.css"
import shared from "../sharedSection.module.css"
import { LogoSet } from "../logoSet/logoSet"
import { useTheme } from "~/ThemeContext";
import { en } from "~/translations/en/en";
import { pl } from "~/translations/pl/pl";

export function Toolkit() {
  const { language } = useTheme()
  return (
    < div className={`${shared.container} ${styles.toolkitContainer}`
    }>
      <h3 className={shared.sectionHeader}>{language === "en" ? en.home.toolkit.sectionHeading : pl.home.toolkit.sectionHeading}</h3>
      <div className={styles.panelsWrapper}>

        <ul className={styles.leftPanel}>
          <h4>{language === "en" ? en.home.toolkit.devHeading : pl.home.toolkit.devHeading}</h4>
          <h5>{language === "en" ? en.home.toolkit.frontendSectionH : pl.home.toolkit.frontendSectionH}</h5>
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Vite</li>
          <li>RWD</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
          <h5>{language === "en" ? en.home.toolkit.backendSectionH : pl.home.toolkit.backendSectionH}</h5>
          <li>Node.JS</li>
          <li>Bash</li>
          <h5>{language === "en" ? en.home.toolkit.systemSectionH : pl.home.toolkit.systemSectionH}</h5>
          <li>Git</li>
          <li>Unix OS</li>
          <li>VIM</li>
          <li>Oracle VirtualBox</li>
          <li>Postman</li>
        </ul>
        <ul className={styles.rightPanel}>
          <h4>{language === "en" ? en.home.toolkit.creativeHeading : pl.home.toolkit.creativeHeading}</h4>
          <h5>{language === "en" ? en.home.toolkit.graphicSectionH : pl.home.toolkit.graphicSectionH}</h5>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe InDesign</li>
          <li>Adobe Premiere Pro</li>
          <li>Adobe UXP</li>
          <h5>{language === "en" ? en.home.toolkit.officeSectionH : pl.home.toolkit.officeSectionH}</h5>
          <li>Microsoft Word</li>
          <li>Microsoft Excel</li>
          <li></li>
          <LogoSet></LogoSet>
        </ul>
      </div>
    </div >
  )
}
