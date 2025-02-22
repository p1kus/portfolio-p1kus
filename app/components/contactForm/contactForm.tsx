import React from "react";
import styles from "./contactForm.module.css";
import shared from "../sharedSection.module.css"
import { useTheme } from "~/ThemeContext";
import { en } from "~/translations/en/en";
import { pl } from "~/translations/pl/pl";
type ContactFormProps = {
  alt?: string;
}
export default function ContactForm({ alt = "" }: ContactFormProps) {
  const { language } = useTheme();
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
        <h2>{language === "en" ? en.home.contact.heading : pl.home.contact.heading}</h2>
        <div className={styles.firstRow}>
          <input className={styles.nameInput} type="text" name="name" required placeholder={language === "en" ? en.home.contact.nameValue : pl.home.contact.nameValue} />
          <input className={styles.emailInput} type="email" name="email" required placeholder={language === "en" ? en.home.contact.emailValue : pl.home.contact.emailValue} />
        </div>
        <textarea name="message" required placeholder={language === "en" ? en.home.contact.messageValue : pl.home.contact.messageValue} ></textarea>
        <div className={styles.buttonWrapper}>
          <button type="submit" id="submitBtn">{language === "en" ? en.home.contact.submitButton : pl.home.contact.submitButton}</button>
        </div>
        <a href="mailto:piotrpopiolekk@gmail.com" className={`${styles.emailParagraph} ${styles[alt]}`}>piotrpopiolekk@gmail.com</a>
      </form>
      <span>{result}</span>

    </div>
  );
}
