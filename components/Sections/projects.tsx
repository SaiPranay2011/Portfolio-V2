import styles from "@/public/styles/components/sections/projects.module.scss";
import Link from "next/link";
import cx from "classnames";
import { projects } from "@/public/config";
import Icon from "../icons/icon";

const ProjectBox = ({title,github,external,tech,company,showInProjects,description}:any) => {
    return(
        <div className={styles.projectBox}>
        <header>
          <div className={styles.projectTop}>
            <div className={styles.folder}>
              <Icon name="Folder" />
            </div>
            <div className={styles.projectsLinks}>
              {github && (
                <a href={github}  target="_blank">
                  <Icon name="GitHub" />
                </a>
              )}
              {external && (
                <a
                  href={external}
                  className="external"
                  target="_blank">
                  <Icon name="External" />
                </a>
              )}
            </div>
          </div>

          <h3 className={styles.projectTitle}>
            <a href={external} target="_blank">
              {title}
            </a>
          </h3>
        {description && (
            <div className={styles.projectDescription}>
            {description}
          </div>
        )}
          
        </header>

        <footer>
          {tech && (
            <ul className={styles.projectsTechList}>
              {tech.map((tech:any, i:any) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    )
}

const Projects = () => {
  return (
    <section className={styles.projectSection}>
      <h2>Other Noteworthy Projects</h2>

      <Link
        className={cx("inline-link",styles.archiveLink)}
        href="/archive">
        view the archive
      </Link>
      <ul className={styles.projectsGrid}>
            {projects && (
                projects.map(({title,github,external,tech,company,showInProjects,description}:any,i:any) => (

                        <li key={i} className={styles.styledProject}>
                            {ProjectBox({title,github,external,tech,company,showInProjects,description})}
                        </li>
                ))
            )}
      </ul>
    </section>
  );
};
export default Projects;