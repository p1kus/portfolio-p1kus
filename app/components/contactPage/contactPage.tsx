import styles from "./contactPage.module.css"
import shared from "../sharedSection.module.css"
import { HorizontalLine } from "../horizontalLine/horizontalLine";
import ContactForm from "../contactForm/contactForm";

export function ContactPage() {
  return (
    <div className={`${shared.container} ${styles.container}`}>
      <section>
        <div className={styles.sectionHeader}>
          <h2>Contact me</h2>
          <ul>
            <li><a href="">piotrpopiolekk@gmail.com</a></li>
            <li>Instagram</li>
            <li>Discord</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <HorizontalLine></HorizontalLine>
      </section>
      <section>
        <ContactForm alt="noEmail"></ContactForm>
        <HorizontalLine></HorizontalLine>
      </section>
      <section>
      </section>
    </div >);
}
