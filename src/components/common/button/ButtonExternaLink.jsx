
import styles from "./ButtonExternaLink.module.css"

function ButtonExternaLink({ text, size, color, link }) {

    const buttonClass = `${styles.button} ${styles[size]} ${styles[color]} || ''`;

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button className={buttonClass}>{text}</button>
        </a>);
};

export default ButtonExternaLink;