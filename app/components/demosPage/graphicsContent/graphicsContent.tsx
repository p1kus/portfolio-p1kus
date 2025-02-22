import styles from "../demosPage.module.css"
import { images } from "~/utils/assets"
import shared from "../../sharedSection.module.css"

export default function GraphicsContent() {
  return (
    <section>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <img src={images.hoodies.hoodiePreview1} alt="Screenshot of a project" className={`w-full object-cover col-span-2 ${shared.sectionImg}`} />
            <img src={images.hoodies.hoodiePreview2} alt="Screenshot of a project" className={`w-full aspect-[5/5] object-cover ${shared.sectionImg}`} />
            <img src={images.hoodies.hoodiePreview3} alt="Screenshot of a project" className={`w-full aspect-[5/5] object-cover ${shared.sectionImg}`} />
            <img src={images.hoodies.hoodiePreview4} alt="Screenshot of a project" className={`w-full aspect-[3/2] object-cover ${shared.sectionImg}`} />
          </div>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>Hoodie mockups</h3>
          <p>Hoodie mockups created in Adobe Photoshop</p>
          <h4>Tech Stack</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node.JS</li>
            <li>Socket.IO</li>
          </ul>
        </div>
      </div>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <img src={images.automotiveVis.bmwPreview1} alt="Screenshot of a project" className={shared.sectionImg} />
          <img src={images.automotiveVis.bmwPreview2} alt="Screenshot of a project" className={shared.sectionImg} />
          <img src={images.automotiveVis.bmwPreview3} alt="Screenshot of a project" className={shared.sectionImg} />
          <img src={images.automotiveVis.bmwPreview4} alt="Screenshot of a project" className={shared.sectionImg} />
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>Automotive detailer visualization</h3>
          <p>A visualization edit made for a car detailer, showcasing different tiers of service. Created in Adobe Photoshop</p>
          <h4>Tech Stack</h4>
          <ul>
            <li>HTML</li>
          </ul>
          <h4>Key features</h4>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>Stamp design</h3>
          <p>A stamp design made from scratch, prepared and exported for printing</p>
          <h4>Tech Stack</h4>
          <ul>
            <li>HTML</li>
          </ul>
          <h4>Key features</h4>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>Logo Effect</h3>
          <p>A stamp design made from scratch, prepared and exported for printing</p>
          <h4>Tech Stack</h4>
          <ul>
            <li>HTML</li>
          </ul>
          <h4>Key features</h4>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </section>);
}
