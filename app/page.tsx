"use client";

import TopBar from "@/components/TopBar/topbar";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import { useState } from "react";
import SideList from "@/components/Side";
import styles from "@/public/styles/common/main.module.scss"
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <SideList />
      <main className={styles.mainContainer}>     
        <Header menuOpen={menuOpen} />
      </main>
      <Footer />
    </>
  );
}
