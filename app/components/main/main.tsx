import { Button } from "../buttons/button";
import { Icon } from "@iconify/react";
import ContactForm from "../contactForm/contactForm";
import { HorizontalLine } from "../horizontalLine/horizontalLine";
import { LogoSet } from "../logoSet/logoSet";
import styles from "./main.module.css";
import { About } from "../about/about";
import { Toolkit } from "../toolkit/toolkit";
import { useTheme } from "~/ThemeContext";
import { en } from "~/translations/en/en";
import { pl } from "~/translations/pl/pl";

export function Main() {
  const { language } = useTheme();
  return (
    <main className={styles.main}>
      <section className={styles.mainHeaderContainer}>
        <div className={styles.mainHeaderContent}>
          <h1>
            <i>Piotr Popiołek</i>
          </h1>
          <p>{language == "en" ? en.home.header.content : pl.home.header.content}</p>
          <div className={styles.buttonContainer}>
            <Button label={language === "en" ? en.home.header.projButton : pl.home.header.projButton} variant="filled" icon="mdi-chevron-right" id="MainHeadingBtn"></Button>
          </div>
        </div>
        <HorizontalLine></HorizontalLine>
      </section>
      <section>
        <About></About>
        <HorizontalLine></HorizontalLine>
      </section>
      <section>
        <Toolkit></Toolkit>
        <HorizontalLine></HorizontalLine>
      </section>
      <section>

      </section>
      <section>
        <ContactForm></ContactForm>
        <HorizontalLine></HorizontalLine>
      </section>
    </main >
  );
}
