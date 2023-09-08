"use client";
import { useState } from "react";
import styles from "@/public/styles/components/sections/projects.module.scss";
import TopBar from "@/components/TopBar/topbar";
import SideList from "@/components/Side";
import Footer from "@/components/Footer/footer";
import { archiveProjects } from "@/public/config";
import cx from "classnames";
import Icon from "@/components/icons/icon";
const Archive = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SideList />
      <main className={cx({["blur"]:menuOpen})}>
        <main className={styles.archiveMain}>
          <header>
            <h1 className={styles.archiveHeading}>Archive</h1>
            <p className={styles.subtitle}>
              A big list of things I've worked on
            </p>
          </header>
          <div className={styles.archiveTable}>
            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Title</th>
                  <th className={styles.hideOnMobile}>Made at</th>
                  <th className={styles.hideOnMobile}>Built with</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {archiveProjects &&
                  archiveProjects.map(
                    (
                      { date, title, github, external, tech, company }: any,
                      i: any
                    ) => (
                      <tr key={i}>
                        <td className={cx(styles.overline,styles.year)}>{date}</td>
                        <td className={styles.archiveTitle}>{title}</td>
                        <td
                          className={cx(
                            styles.hideOnMobile,
                            styles.company
                          )}>
                          {company ? <span>{company}</span> : <span>—</span>}
                        </td>
                        <td className={cx(styles.tech,styles.hideOnMobile)}>
                        {tech?.length > 0 &&
                          tech.map((item:any, i:any) => (
                            <span key={i}>
                              {item}
                              {''}
                              {i !== tech.length - 1 && <span className={styles.separator}>&middot;</span>}
                            </span>
                          ))}
                      </td>
                      <td className="links">
                        <div>
                          {external && (
                            <a href={external} aria-label="External Link">
                              <Icon name="External" />
                            </a>
                          )}
                          {github && (
                            <a href={github} aria-label="GitHub Link">
                              <Icon name="GitHub" />
                            </a>
                          )}
                        </div>
                      </td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
        </main>
        <Footer/>
      </main>
    </main>
  );
};
export default Archive;
