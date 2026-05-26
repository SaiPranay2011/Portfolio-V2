import About from "@/components/Sections/about";
import Experience from "./experience";
import styles from "@/public/styles/components/sections.module.scss"
import FeaturedProjects from "./featured";
import Projects from "./projects";
import Contact from "./contact";
import Education from "./education";
const Sections = () => {
  return (
    <div className={styles.sections}>
      <About />
      <Experience/>
      <Education/>
      <FeaturedProjects/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Sections;