import styles from "./about.module.css";
import { preload } from "react-dom";
import map from "../../assets/map.webp";
import mapMobile from "../../assets/mapMobile.webp";
import { useTheme } from "~/ThemeContext";
import { en } from "~/translations/en/en";
import { pl } from "~/translations/pl/pl";

export function About() {
  const { language } = useTheme();
  return (
    <div className={styles.container}>
      <img
        src={map}
        width="440"
        height="378.2"
        className={styles.imgDesktop}
        alt="Map of Poland, with Lublin pinpointed on the map"
      />
      <img
        fetchPriority="high"
        src={mapMobile}
        width="305"
        height="262.2"
        className={styles.imgMobile}
        alt="Map of Poland, with Lublin pinpointed on the map"
      />
      <ul>
        <h3>
          {language === "en"
            ? en.home.profiles.heading
            : pl.home.profiles.heading}
        </h3>
        <h4>Dev</h4>
        <li>
          <a href="https://github.com/p1kus">Github</a>
        </li>
        <li>
          <a href="https://codepen.io/p1kus">Codepen</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/piotr-popiołek-90b1aa136">
            LinkedIn
          </a>
        </li>

        <h4>
          {language === "en"
            ? en.home.profiles.socialMediaH
            : pl.home.profiles.socialMediaH}
        </h4>
        <li>
          <a href="https://www.instagram.com/pikuspp/">Instagram</a>
        </li>
        <li>
          <a href="https://www.youtube.com/@pikus4184">Youtube</a>
        </li>
        <h4>
          {language === "en" ? en.home.profiles.certH : pl.home.profiles.certH}
        </h4>
        <li>Cisco Networking Basics</li>
        <li>Cisco Introduction to IoT</li>
        <li>Cisco Introduction to Cybersecurity</li>
        <li>Microsoft Azure AZ-900</li>
      </ul>
    </div>
  );
}
