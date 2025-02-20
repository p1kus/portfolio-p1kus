import { HorizontalLine } from "../horizontalLine/horizontalLine"
import shared from "../sharedSection.module.css"
import styles from "./demosPage.module.css"
import CustomSelect from "../customSelect/customSelect"
import { useState } from "react"
import DeveloperContent from "./developerContent/developerContent"
import GraphicsContent from "./graphicsContent/graphicsContent"
import CreativeContent from "./creativeContent/creativeContent"
export function DemosPage() {
  const [section, setSection] = useState('developer');
  const handleSelectChange = (value: string) => {
    setSection(value);
  }
  return (
    <div className={`${shared.container} ${styles.container}`}>
      <section>
        <div className={styles.sectionHeader}>
          <h2>Check out my work</h2>
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
