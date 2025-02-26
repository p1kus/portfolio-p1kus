import { useState } from "react"
import { useTheme } from "~/ThemeContext"
import { en } from "~/translations/en/en"
import { pl } from "~/translations/pl/pl"
import { HorizontalLine } from "../horizontalLine/horizontalLine"
import shared from "../sharedSection.module.css"
import CreativeContent from "./creativeContent/creativeContent"
import styles from "./demosPage.module.css"
import DeveloperContent from "./developerContent/developerContent"
import GraphicsContent from "./graphicsContent/graphicsContent"
import TabsDemo from "./tabs/tabsDemo"
export function DemosPage() {
  const [section, setSection] = useState('developer');
  const handleSelectChange = (value: string) => {
    setSection(value);
  }
  const { language } = useTheme();
  return (
    <div className={`${shared.container} ${styles.container}`}>
      <section>
        <div className={styles.sectionHeader}>
          <h2>{language === "en" ? en.demos.heading : pl.demos.heading}</h2>
          <TabsDemo onValueChange={handleSelectChange}></TabsDemo>
        </div>
      </section>
      {section === 'developer' && <DeveloperContent />}
      {section === 'adobe' && <GraphicsContent />}
      {section === 'other' && <CreativeContent />}
      <section>
        <HorizontalLine></HorizontalLine>
      </section>
      <section>
      </section>
    </div >
  )
}
