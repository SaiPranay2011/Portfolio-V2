import styles from "../../public/styles/components/header.module.scss"
import cx from "classnames"
const Header = ({menuOpen}:any) => {
  return (
    <div className={cx(styles.main,{[styles.blur]:menuOpen})} >
      <h2 className={styles.nameTag}>Hi, My name is</h2>
      <h1 className={styles.name}>Sai Pranay C.</h1>
      <h3 className={styles.tagline}>Code something that makes you think.</h3>
      <p className={styles.description}>I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products</p>
    </div>
  );
};

export default Header;