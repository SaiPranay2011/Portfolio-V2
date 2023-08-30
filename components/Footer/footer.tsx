import { useEffect, useState } from "react";
import styles from "@/public/styles/components/footer.module.scss";
import { socialMedia, github } from "@/public/config";
import Icon from "../icons/icon";

const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });
  
  useEffect(() => {
    fetch("https://api.github.com/repos/SaiPranay2011/Portfolio-V2")
    .then(response => response.json())
    .then(json => {
      const {stargazers_count,forks_count} = json;
      setGitHubInfo({
        stars:stargazers_count,
        forks:forks_count,
      });
    })
    .catch(e => console.error(e))
    
  }, []);

  return (
    <footer id="footer" className={styles.footerContainer}>
      <div className={styles.footerSocialLinks}>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.footerCredit}>
        <a href={github}>
          <div>Designed &amp; Built by Chebium Sai Pranay</div>

          {githubInfo && (
            <div className={styles.footerGithubStats}>
              <span>
                <Icon name="Star" />
                <span>{githubInfo["stars"]}</span>
              </span>
              <span>
                <Icon name="Fork" />
                <span>{githubInfo["forks"]}</span>
              </span>
            </div>
          )}
        </a>
      </div>
    </footer>
  );
};
export default Footer;
