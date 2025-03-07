import styles from "./page.module.css";
import LinkBlock from '../components/atoms/linkblock/LinkBlock'; 
import Navigation from '../components/molecules/navigation/Navigation';
import MiddleCircle from "../components/atoms/MiddleCircle/MiddleCircle";


export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Navigation />
      </header>
      <main className={styles.main}>
        <h1 className={styles.h1}>Learning<span className={styles.span}>Journal</span></h1>
        <h2 className={styles.h2}>pasta con crema di broccoli e guanciale picanha</h2>

        <MiddleCircle />
      
        <LinkBlock />

      </main>
    </div>
  );
}
