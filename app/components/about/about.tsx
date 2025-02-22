import styles from "./about.module.css"
import map from "../../assets/map5.png"
import { HorizontalLine } from "../horizontalLine/horizontalLine"
import { useTheme } from "~/ThemeContext";
import { en } from "~/translations/en/en";
import { pl } from "~/translations/pl/pl";

export function About() {
  const { language } = useTheme();
  return (
    <div className={styles.container}>
      <img src={map} alt="Map of Poland, with Lublin pinpointed on the map" />
      <ul>
        <h3>{language === "en" ? en.home.profiles.heading : pl.home.profiles.heading}</h3>
        <h4>Dev</h4>
        <li>Github</li>
        <li>Codepen</li>
        <li>LinkedIn</li>

        {/* https://github.com/p1kus */}
        {/* https://codepen.io/p1kus */}
        <h4>{language === "en" ? en.home.profiles.socialMediaH : pl.home.profiles.socialMediaH}</h4>
        <li>Instagram</li>
        <li>Youtube</li>
        <h4>
          {language === "en" ? en.home.profiles.certH : pl.home.profiles.certH}
        </h4>
        <li>Cisco Networking Basics</li>
        <li>Cisco Introduction to IoT</li>
        <li>Cisco Introduction to Cybersecurity</li>
      </ul>
    </div>
  )
}
