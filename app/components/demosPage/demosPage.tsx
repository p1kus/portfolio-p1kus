import { HorizontalLine } from "../horizontalLine/horizontalLine"
import shared from "../sharedSection.module.css"
import styles from "./demosPage.module.css"
import CustomSelect from "../customSelect/customSelect"
import { useState } from "react"
import DeveloperContent from "./developerContent/developerContent"
export function DemosPage() {
  const [section, setSection] = useState('developer');
  const handleSelectChange = (value: string) => {
    setSection(value);
  }
  return (
    <div className={`${shared.container} ${styles.container}`}>
      <section>
        <div className={styles.sectionHeader}>
          <h2>Selected projects</h2>
          <CustomSelect onValueChange={handleSelectChange}></CustomSelect>
          {section === 'developer' && <h1>Developer</h1>}
          {section === 'graphic' && <h1>Graphics</h1>}
          {section === 'creative' && <h1>Creative</h1>}
        </div>

      </section>
      {section === 'developer' && <DeveloperContent />}
      <section>
        <h2>Other projects</h2>
        <HorizontalLine></HorizontalLine>
      </section>
      <section>
      </section>
    </div >
  )
}
