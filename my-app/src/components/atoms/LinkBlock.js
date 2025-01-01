import Link from 'next/link'

const LinkBlock = () => {
    const links = [
        { pathname: "/blogs", text: "Rick ross" },
        { pathname: "/blogs", text: "Rick ross" },
        { pathname: "/blogs", text: "Rick ross" },
        { pathname: "/blogs", text: "Rick ross" },
        { pathname: "/blogs", text: "Rick ross" },
    ];

    return (
        <>
            {links.map((link, index) => (
                <Link key={index} href={{pathname: link.pathname,}}>
                    {link.text}
                </Link>
            ))}
        </>
    )
}

export default LinkBlock;