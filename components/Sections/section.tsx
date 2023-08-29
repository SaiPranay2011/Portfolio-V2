import About from "@/components/Sections/about";
import Experience from "./experience";
import styles from "@/public/styles/components/sections.module.scss"
import FeaturedProjects from "./featured";
import Projects from "./projects";
const Sections = () => {
  return (
    <div className={styles.sections}>
      <About />
      <Experience/>
      <FeaturedProjects/>
      <Projects/>
    </div>
  );
};

export default Sections;