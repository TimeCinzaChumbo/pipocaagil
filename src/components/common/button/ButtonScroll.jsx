import React from "react";
import styles from "./ButtonScroll.module.css";
import { Link as ScrollLink } from "react-scroll";

const ButtonScroll = ({ to, smooth, duration, size, color, text }) => {

    const ButtonScrollClass = `${styles.to} ${styles.button} ${styles[size]} ${styles[color]} ${styles.text} || '' `;

    return (
        <ScrollLink to={to} smooth={smooth} duration={duration}>
            <button className={ButtonScrollClass} type="button">{text}</button>
        </ScrollLink>

    );
}

export default ButtonScroll;

