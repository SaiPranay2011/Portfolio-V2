import styles from "@/public/styles/components/sections/projects.module.scss";
import Link from "next/link";
import cx from "classnames";
import { projects } from "@/public/config";
import Icon from "../icons/icon";
import { useState } from "react";

const Projects = () => {
  const [showMore,setShowMore] = useState(false);
  const GRID_LIMIT = 2;
  const firstSix = projects.slice(0, GRID_LIMIT);
  const showInProjects = showMore ? projects:firstSix;
  const ProjectBox = ({
    title,
    github,
    external,
    tech,
    company,
    showInProjects,
    description,
  }: any) => {
    return (
      <div className={styles.projectBox}>
        <header>
          <div className={styles.projectTop}>
            <div className={styles.folder}>
              <Icon name="Folder" />
            </div>
            <div className={styles.projectsLinks}>
              {github && (
                <a href={github} target="_blank">
                  <Icon name="GitHub" />
                </a>
              )}
              {external && (
                <a href={external} className="external" target="_blank">
                  <Icon name="External" />
                </a>
              )}
            </div>
          </div>
  
          <h3 className={styles.projectTitle}>
            <a href={external?external:github?github:"#"} target="_blank">
              {title}
            </a>
          </h3>
          {description && (
            <div className={styles.projectDescription}>{description}</div>
          )}
        </header>
  
        <footer>
          {tech && (
            <ul className={styles.projectsTechList}>
              {tech.map((tech: any, i: any) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    );
  };
  return (
    <section className={styles.projectSection}>
      <h2>Other Noteworthy Projects</h2>

      <Link className={cx("inline-link", styles.archiveLink)} href="/archive">
        view the archive
      </Link>
      <ul className={styles.projectsGrid}>
        {showInProjects &&
          showInProjects.map(
            (
              {
                title,
                github,
                external,
                tech,
                company,
                showInProjects,
                description,
              }: any,
              i: any
            ) => (
              <li key={i} className={styles.styledProject}>
                {ProjectBox({
                  title,
                  github,
                  external,
                  tech,
                  company,
                  showInProjects,
                  description,
                })}
              </li>
            )
          )}
      </ul>
      <button className={styles.moreButton} onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </button>
    </section>
  );
};
export default Projects;
