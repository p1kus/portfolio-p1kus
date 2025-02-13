import styles from "./about.module.css"
import map from "../../assets/map.png"
import { HorizontalLine } from "../horizontalLine/horizontalLine"

export function About() {
  return (
    <div className={styles.container}>
      <img src={map} alt="Map of Poland, with Lublin pinpointed on the map" />
      <ul>
        <h3>Profiles</h3>
        <h4>Dev</h4>
        <li>Github</li>
        <li>Codepen</li>
        <li>Linkedin</li>

        {/* https://github.com/p1kus */}
        {/* https://codepen.io/p1kus */}
        <h4>Creative</h4>
        <li>Instagram</li>
        <li>Youtube</li>
        <h4>Certificates</h4>
        <li>Cisco Networking Basics</li>
        <li>Cisco Introduction to IoT</li>
        <li>Cisco Introduction to Cybersecurity</li>
      </ul>
    </div>
  )
}
