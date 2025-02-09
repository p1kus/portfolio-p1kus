import ContactForm from "../contactForm/contactForm";
import { LogoSet } from "../logoSet/logoSet";
import styles from "./main.module.css";

export function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.leftContainer}>
        <div className={styles.leftContent}>
          <h1>
            Hello! <span>I'm Piotr</span>
          </h1>
          <br></br>
          <h2> I'm based in Lublin, Poland.</h2>
          <p>
            I create modern websites, work with <br></br> graphic design, and
            specialize in editing. <br></br> I'm all about the detail and workflow
            optimisation.
          </p>
          <LogoSet></LogoSet>
        </div>
      </section>
      <section className={styles.rightContainer}>
        <div className={styles.leftContent}>
          <ContactForm></ContactForm>
        </div>
      </section>
    </main >
  );
}
