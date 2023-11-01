import styles from "./Menu.module.css";

import arrow from "../../assets/images/icons/arrow-right.svg";

import Logo from "../common/logo/Logo";

import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Menu() {
    return (
        <div className={styles.menu}>
            <div className={styles.menuContainer}>

                <Logo size="medium" />

                <nav className={styles.nav}>
                    <ul>
                        <li className={styles.navItem}>
                            <ScrollLink to="home" smooth="true" duration={500}>Home</ScrollLink>
                        </li>
                        <li className={styles.navItem}>
                            <ScrollLink to="about" smooth="true" duration={500}>Quem somos</ScrollLink>
                        </li>
                        <li className={styles.navItem}>
                            <ScrollLink to="previewEpisodes" smooth="true" duration={500}>Episódios</ScrollLink>
                        </li>
                        <li className={styles.navItem}>
                            <RouterLink to="constructionPage" smooth="true" duration={500}>Galeria de Fotos</RouterLink>
                        </li>
                        <li className={styles.navItem}>
                            <RouterLink to="constructionPage" smooth="true" duration={500}>Contatos</RouterLink>
                        </li>
                    </ul>

                    <RouterLink to="/subscriber">
                        <button className={styles.btnSubscriber}>Sou assinante
                            <img src={arrow} alt="seta" />
                        </button>
                    </RouterLink>

                </nav>
            </div>
        </div>
    );
};


export default Menu;