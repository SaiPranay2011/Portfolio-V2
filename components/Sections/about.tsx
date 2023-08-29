import styles from "@/public/styles/components/sections.module.scss";
import mainStyles from "@/public/styles/common/main.module.scss";
import Link from "next/link";
import Image from "next/image";
import { skills } from "@/public/config";
const About = () => {
  return (
    <section className={styles.aboutContainer} id="about">
      <h2 className={styles.numberedHeading}>About me</h2>
      <div className={styles.aboutInner}>
        <div className={styles.styledText}>
          <div>
            <p>
              Hello! My name is Sai Pranay and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2020 when I decided to learn basics of HTML &amp; CSS beforehand
              for academics — which slowly turned out to be the most fun thing
              to learn and implement.
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at{" "}
              <Link
                className={styles.workedCompanies}
                href="https://www.amal.com/en">
                a start-up
              </Link>
              , My main focus these days is developing different projects and
              enhancing my skills.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
          <ul className={styles.skillsList}>
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
        <div className={styles.styledPic}>
          <div className={styles.wrapper}>
            <img
              className={styles.MyImage}
              src="/assets/MyPicture.png"
              alt="Picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
