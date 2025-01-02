import Image from "next/image";
import styles from "./page.module.css";
import Filmography from "./filmography/filmography";
import Discography from "./discography/discography";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <Discography />
        </div>
      </main>
    </div>
  );
}
