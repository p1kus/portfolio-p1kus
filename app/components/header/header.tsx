import { Clock } from "../clock/clock";
import styles from "./header.module.css";
import { ThemeToggle } from "../buttons/themeToggle";
import { NavLink } from "react-router";
import { LanguageToggle } from "../buttons/languageToggle";
import { useTheme } from "~/ThemeContext";
import { en } from "~/translations/en/en";
import { pl } from "~/translations/pl/pl";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Footer } from "../footer/footer";
import { HorizontalLine } from "../horizontalLine/horizontalLine";


export function Header() {
  const [isOpen, setOpen] = useState(false);
  const { language } = useTheme();
  return (
    <header className={styles.header}>
      <div className={styles.controls}>
        <ThemeToggle></ThemeToggle>
        <LanguageToggle></LanguageToggle>
      </div>
      <div className={styles.locationWithTime}>
        <h3>{language === "en" ? en.home.navbar.location : pl.home.navbar.location}</h3>
        <Clock></Clock>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={styles.navLink}>{language === "en" ? en.home.navbar.home : pl.home.navbar.home}</NavLink>
          </li>
          <li>
            <NavLink to="/demos" className={styles.navLink}>{language === "en" ? en.home.navbar.demos : pl.home.navbar.demos}</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={styles.navLink}>{language === "en" ? en.home.navbar.contact : pl.home.navbar.contact}</NavLink>
          </li>
        </ul>
      </nav>
      <div className={`${styles.navMobileContainer} ${isOpen ? styles.open : ""} navMobile`}>
        <Icon icon="ant-design:close-outlined" className={`${styles.burgerIcon}`} onClick={() => setOpen(false)}></Icon>
        <ul className={styles.navMobile}>
          <li>
            <NavLink to="/" className={styles.navLink} onClick={() => setOpen(false)}>{language === "en" ? en.home.navbar.home : pl.home.navbar.home}</NavLink>
          </li>
          <li>
            <NavLink to="/demos" className={styles.navLink} onClick={() => setOpen(false)}>{language === "en" ? en.home.navbar.demos : pl.home.navbar.demos}</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={styles.navLink} onClick={() => setOpen(false)}>{language === "en" ? en.home.navbar.contact : pl.home.navbar.contact}</NavLink>
          </li>
        </ul>
        <div className={styles.mobileThemeToggle}>
          <ThemeToggle></ThemeToggle>
        </div>
        <div className={styles.mobileLangToggle}>
          <LanguageToggle className="langMobile"></LanguageToggle>
          <Icon icon="flag:gb-4x3" className={styles.flagIcon}></Icon>
          <Icon icon="flag:pl-4x3" className={styles.flagIcon}></Icon>
        </div>
        {/* <Footer></Footer> */}
      </div>
      <div className={styles.burgerMenu}>
        {/* <p>Menu</p> */}
        <Icon icon="solar:menu-dots-bold-duotone" className={styles.burgerIcon} onClick={() => setOpen(true)}></Icon>
      </div>
    </header>
  );
}
