import About from "@/components/Sections/about";
import Experience from "./experience";
import styles from "@/public/styles/components/sections.module.scss"
const Sections = () => {
  return (
    <div className={styles.sections}>
      <About />
      <Experience/>
    </div>
  );
};

export default Sections;