import styles from "../demosPage.module.css"
import shared from "../../sharedSection.module.css"

export default function CreativeContent() {
  return (
    <section>
      <div className={styles.projectSection}>
        <div className={styles.projectImageContainer}>
        </div>
        <div className={styles.projectInfoContainer}>
          <h3>Counter Strike Fragmovie</h3>
          <p>A passion project, oldschool style Counter Strike fragmovie, made and edited in Adobe Premiere.</p>
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
