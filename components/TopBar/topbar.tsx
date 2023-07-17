"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import cx from "classnames";
import styles from "../../public/styles/components/topbar.module.scss";
import { navLinks } from "@/public/config";
// interface HeaderProps{
//     name: string
// }

const TopBar = ({ setMenuOpen, menuOpen }: any) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setNavOpen(true);
      } else {
        setNavOpen(false);
      }
    });
  }, [navOpen]);
  return (
    <header
      className={
        navOpen
          ? cx(styles.headerContainer, styles.headerContainerHidden)
          : styles.headerContainer
      }>
      <nav className={styles.NavBar}>
        <div className={styles.LogoImage}>
          <Link href={`/`}>
            <img
              src={"/assets/logo-no-background.svg"}
              alt="SP"
              height={60}
              width={60}
            />
          </Link>
        </div>
        <div className={cx(styles.headerNav)}>
          <ol>
            <li className={styles.NavList}>
              <Link href={`#about`} scroll={false} className={cx(styles.link)}>
                About
              </Link>
            </li>
            <li className={styles.NavList}>
              <Link
                href={`#experience`}
                scroll={false}
                className={cx(styles.link)}>
                Experience
              </Link>
            </li>
            <li className={styles.NavList}>
              <Link href={`#work`} scroll={false} className={cx(styles.link)}>
                Work
              </Link>
            </li>
            <li className={styles.NavList}>
              <Link
                href={`#contact`}
                scroll={false}
                className={cx(styles.link)}>
                Contact
              </Link>
            </li>
          </ol>
        </div>
        <div className={styles.resume}>
          <Link
            href={"/Resume.pdf"}
            target="_blank"
            className={styles.resumeButton}>
            Resume
          </Link>
        </div>
      </nav>

      {/* <div>
         <label className={styles.hamburgerMenu} >
            <input type="checkbox" />
          </label>
        <aside className={styles.sideBar}>
            <nav className={styles.menuBar}>
              <div>HI</div>
            </nav>
          </aside>
       
         </div> */}

      <button
        className={cx(styles.StyledHamburgerButton, {
          [styles.menuOpen]: menuOpen,
        })}
        onClick={toggleMenu}
        aria-label="Menu">
        <div className={styles.hamBox}>
          <div className={styles.hamBoxInner} />
        </div>
      </button>
      <aside
        className={cx(styles.StyledSidebar, { [styles.menuOpen]: menuOpen })}
        aria-hidden={!menuOpen}>
        <nav>
          {navLinks && (
            <ol>
              {navLinks?.map(({ url, name }: any, i: any) => (
                <li key={i}>
                  <Link href={url} onClick={() => setMenuOpen(false)}>
                    {name}
                  </Link>
                </li>
              ))}
            </ol>
          )}
            <Link
              href={"/Resume.pdf"}
              target="_blank"
              className={styles.resumeLink}>
              Resume
            </Link>
        </nav>
      </aside>
    </header>
  );
};
export default TopBar;
