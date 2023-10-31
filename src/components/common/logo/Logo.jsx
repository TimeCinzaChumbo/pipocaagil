import logo from "../../../assets/images/logo/logo.svg";

import styles from "./Logo.module.css";

function Logo({ size }) {

    const logoClass = `${styles.img} ${styles[size]}`;

    return (
        <img className={logoClass} src={logo} loading="lazy" alt="Logo Pipoca Ágil" />
    );
}

export default Logo;