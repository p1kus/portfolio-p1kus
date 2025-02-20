import styles from "../demosPage.module.css"
import chatspacePrev1 from "../../../assets/chatspace.png"
import chatspacePrev2 from "../../../assets/chatspace2.png"
import shared from "../../sharedSection.module.css"

export default function GraphicsContent() {
  return (
    <section>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <img src={chatspacePrev1} alt="Screenshot of a project" className={shared.sectionImg} />
          <img src={chatspacePrev2} alt="Screenshot of a project" className={shared.sectionImg} />
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
          <h4>Key features</h4>
          <ul>
            <li>Web Sockets</li>
            <li>User identification by socket</li>
            <li>Username validation, with a check for duplicates</li>
            <li>Usernames support with random colors</li>
            <li>Online user list (refreshed on every socket on a new connection/disconnect)</li>
            <li>Typing indicators ("User is typing...")</li>
            <li>Connect/Disconnect alerts</li>
          </ul>
        </div>
      </div>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <img src={chatspacePrev1} alt="Screenshot of a project" className={shared.sectionImg} />
          <img src={chatspacePrev2} alt="Screenshot of a project" className={shared.sectionImg} />
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
          <img src={chatspacePrev1} alt="Screenshot of a project" className={shared.sectionImg} />
          <img src={chatspacePrev2} alt="Screenshot of a project" className={shared.sectionImg} />
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
          <img src={chatspacePrev1} alt="Screenshot of a project" className={shared.sectionImg} />
          <img src={chatspacePrev2} alt="Screenshot of a project" className={shared.sectionImg} />
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
