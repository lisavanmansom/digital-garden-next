import Image from "next/image";
import styles from "./page.module.css";
import LinkBlock from '../components/atoms/LinkBlock'; 

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Learning Journal</h1>
        <h2>pasta con crema di broccoli e guanciale picanha</h2>

        <Image src="/images/pf-pic.png"  alt="Picture of the author"
          width={500} height={500} />

        <div>
            <LinkBlock />
        </div>

      </main>

      <footer className={styles.footer}>
        <a href="https://en.wikipedia.org/wiki/Rick_Ross">portfolio</a>
        <a href="https://en.wikipedia.org/wiki/Rick_Ross">email</a>
        <a href="https://en.wikipedia.org/wiki/Rick_Ross">linkedin</a>
      </footer>
    </div>
  );
}
