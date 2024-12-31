const LinkBlock = () => {
    const link = [
        { url: "https://en.wikipedia.org/wiki/Rick_Ross", text: "Rick ross" },
        { url: "https://en.wikipedia.org/wiki/Rick_Ross", text: "Rick ross" },
        { url: "https://en.wikipedia.org/wiki/Rick_Ross", text: "Rick ross" },
    ];

    return (
        <>
            {link.map((link) => (
                <a href={link.url} rel="noopener noreferrer">{link.text}</a>
            ))}
        </>
    )
}

export default LinkBlock;