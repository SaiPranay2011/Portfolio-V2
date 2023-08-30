"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import cx from "classnames";
import styles from "../../public/styles/components/topbar.module.scss";
import { navLinks } from "@/public/config";
import useScrollDirection from "@/hooks/useScrollDirection"
// interface HeaderProps{
//     name: string
// }

const TopBar = ({ setMenuOpen, menuOpen }: any) => {
  const [navClose, setnavClose] = useState("");
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY >=  + 80) {
  //       setnavClose(true);
  //     }
  //     else{
  //       setnavClose(false)
  //     }
  //   });
  // }, [navClose]);
  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 50);
  };
  useEffect(() => {
    window.addEventListener("scroll",handleScroll)
    return() => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])
  useEffect(() => {
    if(scrollDirection === "up" && !scrolledToTop){
      setnavClose(scrollDirection)
    }
    else if(scrollDirection === "down" && !scrolledToTop){
      setnavClose(scrollDirection)
    }
  },[handleScroll])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);
  return (
    <header
      className={
        navClose === "down"
          ? cx(styles.headerContainer, styles.headerContainerHiddenDown)
          : cx(styles.headerContainer, styles.headerContainerHiddenUp)
      }>
      <nav className={styles.NavBar}>
        <div className={styles.LogoImage}>
          <Link href={`/`}>
            <img
              src={"/assets/Logo/logo-no-background.svg"}
              alt="SP"
              height={60}
              width={60}
            />
          </Link>
        </div>
        <div className={cx(styles.headerNav)}>
          {navLinks && (
            <ol>
              {navLinks.map(({ name, url }: any, i: any) => (
                <li key={i} className={styles.NavList}>
                  <Link href={url} className={cx(styles.link)}>
                    {name}
                  </Link>
                </li>
              ))}
            </ol>
          )}
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
