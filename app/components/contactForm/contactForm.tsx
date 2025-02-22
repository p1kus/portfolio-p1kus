import React from "react";
import styles from "./contactForm.module.css";
import shared from "../sharedSection.module.css"
type ContactFormProps = {
  alt?: string;
}
export default function ContactForm({ alt = "" }: ContactFormProps) {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currEvent = event.target as HTMLFormElement
    setResult("Sending....");
    const formData = new FormData(currEvent);

    formData.append("access_key", "58eb3ab0-91db-4e8f-a0f5-358d2b8c7447");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      currEvent.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className={`${styles.formElement} ${shared.fontFamily} `}>
        <h2>Let's talk</h2>
        <div className={styles.firstRow}>
          <input className={styles.nameInput} type="text" name="name" required placeholder="Name" />
          {/* <Icon className={styles.icon} icon="mdi:required" /> */}
          <input className={styles.emailInput} type="email" name="email" required placeholder="Your email" />
          {/* <Icon className={styles.icon} icon="mdi:required" /> */}
        </div>
        <textarea name="message" required placeholder="Your message" ></textarea>
        {/* <Icon className={`${styles.icon} ${styles.iconAltPos}`} icon="mdi:required" /> */}
        <div className={styles.buttonWrapper}>
          <button type="submit" id="submitBtn">Get in touch!</button>
        </div>
        <a href="mailto:piotrpopiolekk@gmail.com" className={`${styles.emailParagraph} ${styles[alt]}`}>piotrpopiolekk@gmail.com</a>
      </form>
      <span>{result}</span>

    </div>
  );
}
