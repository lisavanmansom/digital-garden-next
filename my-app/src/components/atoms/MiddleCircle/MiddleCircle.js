import Image from "next/image";
import styles from './MiddleCircle.module.css';
import LaserCursor from "../LaserCursor/LaserCursor";

function MiddleCircle () {
    return (
        <div className={styles.outerCircle}>
            <div className={styles.saturation}></div>
            <div className={styles.exclusion}></div>
                <Image 
                    className={styles.img} 
                    src="/images/pf-pic.png"  alt="Picture of the author"
                    width={500} height={500} 
                />
                <div className={styles.laserContainer}>
                    <LaserCursor />
                    <LaserCursor />
                </div>
        </div>
    )
}

export default MiddleCircle