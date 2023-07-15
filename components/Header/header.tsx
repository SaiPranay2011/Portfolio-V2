import styles from "../../public/styles/components/header.module.scss"
const Header = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.nameTag}>Hi, My name is</h2>
      <h1 className={styles.name}>Sai Pranay C.</h1>
      <h3 className={styles.tagline}>Code something that makes you think.</h3>
    </div>
  );
};

export default Header;