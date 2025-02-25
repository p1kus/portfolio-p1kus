import styles from "./contactPage.module.css"
import shared from "../sharedSection.module.css"
import { HorizontalLine } from "../horizontalLine/horizontalLine";
import ContactForm from "../contactForm/contactForm";


export function ContactPage() {

  return (
    <div className={`${shared.container} ${styles.container}`}>
      <section>
        <ContactForm alt="noEmail">
          <ul className={shared.listNoMargin}>
            <li><a href="mailto:piotrpopiolekk@gmail.com">piotrpopiolekk@gmail.com</a></li>
            <li><a href="https://www.instagram.com/pikuspp/">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/piotr-popiołek-90b1aa136/">LinkedIn</a></li>
          </ul>
        </ContactForm>
        <div className={styles.sectionHeader}>
        </div>
        <HorizontalLine></HorizontalLine>
      </section>
    </div >);
}
