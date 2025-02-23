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
            <li><a href="">piotrpopiolekk@gmail.com</a></li>
            <li>Instagram</li>
            <li>Discord</li>
            <li>LinkedIn</li>
          </ul>
        </ContactForm>
        <div className={styles.sectionHeader}>
        </div>
        <HorizontalLine></HorizontalLine>
      </section>
    </div >);
}
