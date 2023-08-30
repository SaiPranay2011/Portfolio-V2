import styles from "@/public/styles/components/sections/projects.module.scss";
import mainStyles from "@/public/styles/components/sections.module.scss"
import { featuredProjects } from "@/public/config";
import Icon from "../icons/icon";
import Link from "next/link";
const FeaturedProjects = () => {
  return (
    <section id="projects" className={styles.ProjectsContainer}>
      <h2 className={mainStyles.numberedHeading}>Some Things I've Built</h2>
      <ul className={styles.ProjectsGrid}>
        {featuredProjects &&
          featuredProjects.map(
            (
              { title, cover, github, external, tech, description }: any,
              i: any
            ) => (
              <li key={i} className={styles.Projects}>
                <div className={styles.ProjectsContent}>
                  <div>
                    <p className={styles.ProjectsOverline}>Featured Project</p>

                    <h3 className={styles.ProjectsTitle}>
                      <Link href={external?external:github?github:"#"}>{title}</Link>
                    </h3>

                    <div className={styles.ProjectsDescription}>
                      <p> {description}</p>
                    </div>

                    {tech.length && (
                      <ul key={i} className={styles.ProjectTechList}>
                        {tech.map((tech: any, i: any) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}

                    <div className={styles.projectLinks}>
                      {github && (
                        <a href={github} aria-label="GitHub Link" target="__blank">
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && (
                        <a
                          href={external}
                          aria-label="External Link"
                          className="external">
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className={styles.ProjectsImage}>
                  <Link href={external ? external : github ? github : "#"} target="__blank">
                    <img
                      src={cover}
                      alt={title}
                      className={styles.ProjectImg}
                    />
                  </Link>
                </div>
              </li>
            )
          )}
      </ul>
    </section>
  );
};
export default FeaturedProjects;
