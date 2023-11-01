import styles from "./About.module.css"

import image6 from "../../../assets/images/photos/image6.png";
import instagramIcon from "../../../assets/images/icons/socialMedia/instagram.png";
import linkedinIcon from "../../../assets/images/icons/socialMedia/linkedin.png";
import facebookIcon from "../../../assets/images/icons/socialMedia/facebook.png";
import xIcon from "../../../assets/images/icons/socialMedia/x.png";
import youtubeIcon from "../../../assets/images/icons/socialMedia/youtube.png";

import { Link as RouterLink } from "react-router-dom";
import ButtonRouter from "../../common/button/ButtonRouter";

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
                        <img src={image6} loading="lazy" alt="ibson" />
                    </article>

                    <article className={styles.rightSection}>
                        <section className={styles.biography}>
                            <p>Sou por natureza um Facilitador e Entusiasta da Transformação Ágil e Digital.
                                Atuando ativamente no Movimento Ágil como um todo.</p>
                            <p>Idealizei e materializei o Podcast Pipoca Ágil, com o propósito de ser um
                                podcast "chão de fábrica", ajudando na divulgação de conteúdo do Mundo Ágil e contando casos e soluções para a implementação da Transformação Digital nas empresas.</p>
                            <p>Sou Head da Jornada Talks da Jornada Colaborativa..Co-autor do Livro de Inovação da Jornada Colaborativa.Co-autor do Livro Jornada Colaborativa.Sou Diretor de Comunicação e Marketing da IIBA BrasilSou o Produtor do Podcast do IIBA Brasil.</p>
                        </section>

                        <ButtonRouter to="/readMore" size="custom-size-small" color="custom-colors-transparent" text="Ler mais" />

                        <div className={styles.socialMedia}>

                            <p>Mídia Sociais</p>
                            
                            <figure>
                                <a href="https://www.instagram.com/pipocaagil/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="instagram" /></a>
                                <a href="https://www.linkedin.com/company/pipoca-%C3%A1gil/about/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="linkedin" /></a>
                                <a href="https://www.facebook.com/pipocaagil/" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="facebook" /></a>
                                <a href="https://twitter.com/pipoca_agil" target="_blank" rel="noopener noreferrer"><img src={xIcon} alt="x" /></a>
                                <a href="https://www.youtube.com/channel/UCb2_j0yVyHR-Djxn7gyycqw" target="_blank" rel="noopener noreferrer"><img src={youtubeIcon} alt="youtube" /></a>
                            </figure>
                        </div>
                    </article>
                </aside>
            </section>
        </div>
    );
};

export default About;