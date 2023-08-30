"use client";

import TopBar from "@/components/TopBar/topbar";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import { useState } from "react";
import fonts from "@/public/styles/common/fonts"
import SideList from "@/components/Side";
import Sections from "@/components/Sections/section";
import cx from "classnames";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <SideList />
      <main className={cx("mainContainer",{["blur"]:menuOpen})}>     
        <Header/>
        <Sections/>
      </main>
      <Footer />
    </>
  );
}
