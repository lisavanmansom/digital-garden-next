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
        <ul>
          <li><a href="https://portfolio-lisavanmansoms-projects.vercel.app">portfolio</a></li>
          <li><a href="mailto:lisavanmansom@gmail.com">mail</a></li>
          <li><a href="https://www.linkedin.com/in/lisa-van-mansom-b78059231/">linkedin</a></li>
        </ul>  
      </footer>
    </div>
  );
}
