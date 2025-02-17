import styles from "../demosPage.module.css"
import chatspacePrev1 from "../../../assets/chatspace.png"
import chatspacePrev2 from "../../../assets/chatspace2.png"
import shared from "../../sharedSection.module.css"

export default function DeveloperContent() {
  return (
    <section>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
          <img src={chatspacePrev1} alt="Screenshot of a project" className={shared.sectionImg} />
          <img src={chatspacePrev2} alt="Screenshot of a project" className={shared.sectionImg} />
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>Chatspace</h3>
          <p>Real-time chat application made for fun and to learn a thing about Sockets, built with:</p>
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
    </section>);
}
