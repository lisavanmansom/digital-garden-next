import Link from 'next/link'
import styles from './LinkBlock.module.css';

const LinkBlock = () => {
    const links = [
        { pathname: "/blogs", text: "Rick ross" },
        { pathname: "/blogs", text: "Rick ross" },
        { pathname: "/blogs", text: "Rick ross" },
        { pathname: "/blogs", text: "Rick ross" },
        { pathname: "/blogs", text: "Rick ross" },
        { pathname: "/blogs", text: "Rick ross" },
    ];

    return (
        <div className={styles.container}>
            {links.map((link, index) => (
                <Link className={styles.link} key={index} href={{pathname: link.pathname,}}>
                    {link.text}
                </Link>
            ))}
        </div>
    )
}

export default LinkBlock;