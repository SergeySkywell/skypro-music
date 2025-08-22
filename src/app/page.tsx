import Image from "next/image";
import "./page.css";
import styles from "./page.module.css";
import Link from "next/link";
import Bar from "@/components/Bar/Bar";
import Navigation from "@/components/Navigation/Navigation";
import Centerblock from "@/components/Cetnerblock/Centerblock";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={"container"}>
        <main className={"main"}>
          <Navigation />
          <Centerblock />
          <div className={"main__sidebar"}>
            <div className={"sidebar__personal"}>
              <p className={"sidebar__personalName"}>Sergey.Ivanov</p>
              <div className={"sidebar__icon"}>
                <svg>
                  <use xlinkHref="/img/icon/sprite.svg#logout"></use>
                </svg>
              </div>
            </div>
            <div className={"sidebar__block"}>
              <div className={"sidebar__list"}>
                <div className={"sidebar__item"}>
                  <Link className={"sidebar__link"} href="#">
                    <Image
                      className={"sidebar__img"}
                      src="/img/playlist01.png"
                      alt="day's playlist"
                      width={250}
                      height={170}
                    />
                  </Link>
                </div>
                <div className={"sidebar__item"}>
                  <Link className={"sidebar__link"} href="#">
                    <Image
                      className={"sidebar__img"}
                      src="/img/playlist02.png"
                      alt="day's playlist"
                      width={250}
                      height={170}
                    />
                  </Link>
                </div>
                <div className={"sidebar__item"}>
                  <Link className={"sidebar__link"} href="#">
                    <Image
                      className={"sidebar__img"}
                      src="/img/playlist03.png"
                      alt="day's playlist"
                      width={250}
                      height={170}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
