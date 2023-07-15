"use client";

import Link from "next/link";
import { FC, useEffect, useState} from "react";
import cx from "classnames";
import styles from "../../public/styles/components/topbar.module.scss";
import logo from "../../public/assets/logo-color.svg";
import styled from "styled-components";

// interface HeaderProps{
//     name: string
// }
// const MenuHamburgerButton = styled.button`
//   display: none;

//   @media (max-width: 768px) {
//     ${({ theme }) => theme?.mixins?.flexCenter};
//     position: relative;
//     z-index: 10;
//     margin-right: -15px;
//     padding: 15px;
//     border: 0;
//     background-color: transparent;
//     color: inherit;
//     text-transform: none;
//     transition-timing-function: linear;
//     transition-duration: 0.15s;
//     transition-property: opacity, filter;
//   }

//   .hamBox {
//     display: inline-block;
//     position: relative;
//     width: var(--hamburger-width);
//     height: 24px;
//   }

//   .hamBoxInner {
//     position: absolute;
//     top: 50%;
//     right: 0;
//     width: var(--hamburger-width);
//     height: 2px;
//     border-radius: var(--border-radius);
//     background-color: var(--green);
//     transition-duration: 0.22s;
//     transition-property: transform;
//     transition-delay: ${(props) => (props.menuOpen ? `0.12s` : `0s`)};
//     transform: rotate(${(props) => (props.menuOpen ? `225deg` : `0deg`)});
//     transition-timing-function: cubic-bezier(
//       ${(props) =>
//         props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
//     );
//   }
// `;
const TopBar = () => {
  
  // useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  const [navOpen, setNavOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
              <Link href={`#home`} scroll={false} className={cx(styles.link)}>
                Home
              </Link>
            </li>
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
                Contact
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
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        aria-label="Menu">
        <div className={styles.hamBox}>
          <div className={styles.hamBoxInner} />
        </div>
      </button>
      <aside className={cx(styles.StyledSidebar,{[styles.menuOpen] : menuOpen})} aria-hidden={!menuOpen}>
        <nav>
          <ol>
             <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ol>
        </nav>

      </aside>
    </header>
  );
};
export default TopBar;
