import { HorizontalLine } from "../horizontalLine/horizontalLine"
import shared from "../sharedSection.module.css"
import styles from "./demosPage.module.css"
import CustomSelect from "../customSelect/customSelect"
import { useState } from "react"
import DeveloperContent from "./developerContent/developerContent"
import GraphicsContent from "./graphicsContent/graphicsContent"
import CreativeContent from "./creativeContent/creativeContent"
import { useTheme } from "~/ThemeContext"
import { en } from "~/translations/en/en"
import { pl } from "~/translations/pl/pl"
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
          {/* <HorizontalLine altStyle="alt"></HorizontalLine> */}
          <CustomSelect onValueChange={handleSelectChange}></CustomSelect>
        </div>
        {/* <HorizontalLine altStyle="alt" /> */}
      </section>
      {section === 'developer' && <DeveloperContent />}
      {section === 'graphic' && <GraphicsContent />}
      {section === 'creative' && <CreativeContent />}
      <section>
        <HorizontalLine></HorizontalLine>
      </section>
      <section>
      </section>
    </div >
  )
}
