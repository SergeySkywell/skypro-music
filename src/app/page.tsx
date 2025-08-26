import Image from "next/image";
import "./page.css";
import styles from "./page.module.css";
import Link from "next/link";
import Bar from "@/components/Bar/Bar";
import Navigation from "@/components/Navigation/Navigation";
import Centerblock from "@/components/Cetnerblock/Centerblock";
import MainSidebar from "@/components/MainSidebar/MainSidebar";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={"container"}>
        <main className={"main"}>
          <Navigation />
          <Centerblock />
          <MainSidebar />
        </main>
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
