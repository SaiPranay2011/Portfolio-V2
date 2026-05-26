import { education } from "@/public/config";
import styles from "@/public/styles/components/sections/education.module.scss";
import mainStyles from "@/public/styles/components/sections.module.scss"
import cx from "classnames";
import Link from "next/link";
import { useState } from "react";
const Education = () => {
  const [isActive, setIsActive] = useState(0);
  const [firstActive, setFirstActive] = useState("Florida State University");
  return (
    <section id="education" className={styles.educationContainer}>
      <h2 className={mainStyles.numberedHeading}>Where I've Studied</h2>
      <div className={styles.educationInner}>
        <div className={styles.styledTabList}>
          {education &&
            education.map(({ school }: any, i: any) => (
              <button
                className={cx(styles.styledTabButton, {
                  [styles.isActiveTabButton]: isActive === i,
                  [styles.firstActiveButton]: firstActive === school,
                })}
                id={`tab-${i}`}
                key={i}
                onClick={() => {
                  setIsActive(i);
                  setFirstActive("");
                }}>
                <span>{school}</span>
              </button>
            ))}
        </div>
        <div className={styles.styledTabPanels}>
          {education &&
            education.map(
              (
                { degree, school, location, range, gpa, url, description }: any,
                i: any
              ) => (
                <div key={i} className={cx(styles.styledTabPanel,{[styles.notVisible]:isActive !== i})}>
                  <h3>
                    <span className={styles.degree}>{degree}</span>
                    <span className={styles.school}>
                      &nbsp;@&nbsp;
                      <Link href={url} className={styles.inlineLink}>
                        {school}
                      </Link>
                    </span>
                    <div>
                    <span className={styles.location}>{location}</span>
                      <span className={styles.gpa}>{gpa}</span>
                    </div>
                   
                  </h3>
                  <p className={styles.range}>{range}</p>
                  <div>
                    <ul>
                        {description && description.map((content:any,i:any) => (
                            <li key={i}>{content}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </section>
  );
};
export default Education;
