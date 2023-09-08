import Sections from "./section";
import styles from "@/public/styles/components/sections/contact.module.scss";
import cx from "classnames";
import { email } from "@/public/config";
import mainStyles from "@/public/styles/components/sections.module.scss"

const Contact = () => {
  return (
    <section id="contact" className={styles.contactContainer}>
      <h2 className={cx(mainStyles.numberedHeading,styles.overline)}>What’s Next?</h2>

      <h2 className={styles.title}>Get In Touch</h2>

      <p className={styles.contactText}>
        Although I'm not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>

      <a className={styles.emailLink} href={`mailto:${email}`}>
        Say Hello
      </a>
    </section>
  );
};
export default Contact;
