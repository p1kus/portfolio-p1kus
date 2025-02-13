import styles from "./about.module.css"
import map from "../../assets/map.png"

export function About() {
  return (
    <div className={styles.container}>
      <img src={map} alt="Map of Poland, with Lublin pinpointed on the map" />
      <ul>
        <h3>Check me out on</h3>
        <li>Github</li>
        <li>Linkedin</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
