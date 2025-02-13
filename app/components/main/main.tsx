import { Button } from "../buttons/button";
import { Icon } from "@iconify/react";
import ContactForm from "../contactForm/contactForm";
import { HorizontalLine } from "../horizontalLine/horizontalLine";
import { LogoSet } from "../logoSet/logoSet";
import styles from "./main.module.css";
import { About } from "../about/about";
import { Toolkit } from "../toolkit/toolkit";
import { CurrentWorkText } from "../currentWorkText/currentWorkText";

export function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.mainHeaderContainer}>
        <div className={styles.mainHeaderContent}>
          <h1>
            <i>Piotr Popiołek</i>
          </h1>
          <h2></h2>
          <p>
            Passionate about technology and various computer stuff.
          </p>
          <p>
            Exploring Web Development, Networking and System Administration.
          </p>
          <p>
            Proficient in Adobe Creative Suite, with expertise in Photoshop, specializing in marketing materials and editing.
            <CurrentWorkText name='CS2ETV' link=""></CurrentWorkText>
          </p>
          <p>
          </p>
          <div className={styles.buttonContainer}>
            <Button label="See my projects" variant="outlined"></Button>
            <Button label="Read my CV" variant="outlined" icon="mdi:arrow-up">
            </Button>
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
        {/* <LogoSet></LogoSet> */}
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
