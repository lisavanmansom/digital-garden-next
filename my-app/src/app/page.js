import Image from "next/image";
import styles from "./page.module.css";
import LinkBlock from '../components/atoms/linkblock/LinkBlock'; 
import Navigation from '../components/molecules/navigation/Navigation'

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Navigation />
      </header>
      <main className={styles.main}>
        <h1>Learning Journal</h1>
        <h2>pasta con crema di broccoli e guanciale picanha</h2>

        <Image src="/images/pf-pic.png"  alt="Picture of the author"
          width={500} height={500} />
      
        <LinkBlock />


      </main>
    </div>
  );
}
