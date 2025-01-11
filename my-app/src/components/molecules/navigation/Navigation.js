import styles from './Navigation.module.css';

function Navigation () {
    return (
    <nav className={styles.navigation}>
        <ul className={styles.ul}>
            <li className={styles.li}><a href="https://portfolio-lisavanmansoms-projects.vercel.app" target="_blank" rel="noopener noreferrer">
                portfolio</a></li>
            <li className={styles.li}><a href="mailto:lisavanmansom@gmail.com" target="_blank" rel="noopener noreferrer">
                mail</a></li>
            <li className={styles.li}><a href="https://www.linkedin.com/in/lisa-van-mansom-b78059231/" target="_blank" rel="noopener noreferrer">
                linkedin</a></li>
        </ul>  
    </nav>
    )
}

export default Navigation;