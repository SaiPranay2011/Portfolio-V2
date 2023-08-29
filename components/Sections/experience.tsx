import { jobs } from "@/public/config";
import styles from "@/public/styles/components/sections/experience.module.scss";
import mainStyles from "@/public/styles/components/sections.module.scss"
import cx from "classnames";
import Link from "next/link";
import { useState } from "react";
const Experience = () => {
  const [isActive, setIsActive] = useState(0);
  const [firstActive, setFirstActive] = useState("Amal");
  return (
    <section id="jobs" className={styles.jobContainer}>
      <h2 className={mainStyles.numberedHeading}>Where I've Worked</h2>
      <div className={styles.jobInner}>
        <div className={styles.styledTabList}>
          {jobs &&
            jobs.map(({ company }: any, i: any) => (
              <button
                className={cx(styles.styledTabButton, {
                  [styles.isActiveTabButton]: isActive === i,
                  [styles.firstActiveButton]: firstActive === company,
                })}
                id={`tab-${i}`}
                key={i}
                onClick={() => {
                  setIsActive(i);
                  setFirstActive("");
                }}>
                <span>{company}</span>
              </button>
            ))}
        </div>
        <div className={styles.styledTabPanels}>
          {jobs &&
            jobs.map(
              (
                { title, company, location, range, url, description }: any,
                i: any
              ) => (
                <div key={i} className={cx(styles.styledTabPanel,{[styles.notVisible]:isActive !== i})}>
                  <h3>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.company}>
                      &nbsp;@&nbsp;
                      <Link href={url} className={styles.inlineLink}>
                        {company}
                      </Link>
                      <span className={styles.location}>{location}</span>
                    </span>
                   
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
export default Experience;
