import React from "react";
import { Icon } from "@iconify/react";
import styles from "./contactForm.module.css";
export default function ContactForm() {
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
      <form onSubmit={onSubmit}>
        <h2>Get in touch!</h2>
        <div>
          <input type="text" name="name" required placeholder="Name" />
          <Icon className={styles.icon} icon="mdi:required" />
        </div>
        <div>
          <input type="email" name="email" required placeholder="Your email" />
          <Icon className={styles.icon} icon="mdi:required" />
        </div>
        <textarea name="message" required placeholder="Your message" ></textarea>
        <Icon className={`${styles.icon} ${styles.iconAltPos}`} icon="mdi:required" />

        <button type="submit">Send Message</button>

      </form>
      <span>{result}</span>

    </div>
  );
}
