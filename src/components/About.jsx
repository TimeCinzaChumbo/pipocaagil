import styles from "./About.module.css"

import image6 from "../assets/images/photos/image6.png";
import instagramIcon from "../assets/images/icons/socialMedia/instagram.png";
import linkedinIcon from "../assets/images/icons/socialMedia/linkedin.png";
import facebookIcon from "../assets/images/icons/socialMedia/facebook.png";
import xIcon from "../assets/images/icons/socialMedia/x.png";
import youtubeIcon from "../assets/images/icons/socialMedia/youtube.png";

import { Link as RouterLink } from "react-router-dom";

function About() {
    return (
        <div className={styles.about} id="about">
            <section className={styles.content}>
                <header className={styles.header}>
                    <p>Sobre Ibson Cabral e Pipóca Ágil</p>
                    <h2>Título da biografia e porque devem escutá-lo</h2>
                </header>

                <aside className={styles.contentBiography}>
                    <article className={styles.leftSection}>
                        <img src={image6} alt="ibson" />
                    </article>

                    <article className={styles.rightSection}>
                        <section className={styles.biography}>
                            <p>Sou por natureza um Facilitador e Entusiasta da Transformação Ágil e Digital.
                                Atuando ativamente no Movimento Ágil como um todo.</p>
                            <p>Idealizei e materializei o Podcast Pipoca Ágil, com o propósito de ser um
                                podcast "chão de fábrica", ajudando na divulgação de conteúdo do Mundo Ágil e contando casos e soluções para a implementação da Transformação Digital nas empresas.</p>
                            <p>Sou Head da Jornada Talks da Jornada Colaborativa..Co-autor do Livro de Inovação da Jornada Colaborativa.Co-autor do Livro Jornada Colaborativa.Sou Diretor de Comunicação e Marketing da IIBA BrasilSou o Produtor do Podcast do IIBA Brasil.</p>
                        </section>

                        <RouterLink to="/readMore">
                            <button className={styles.btnReadMore}>Ler mais</button>
                        </RouterLink>

                        <div className={styles.socialMedia}>
                            <p>Mídia Sociais</p>
                            <figure>
                                <a href=""><img src={instagramIcon} alt="instagram" /></a>
                                <a href=""><img src={linkedinIcon} alt="linkedin" /></a>
                                <a href=""><img src={facebookIcon} alt="facebook" /></a>
                                <a href=""><img src={xIcon} alt="x" /></a>
                                <a href=""><img src={youtubeIcon} alt="youtube" /></a>
                            </figure>
                        </div>
                    </article>
                </aside>

            </section>
        </div>
    );
};

export default About;