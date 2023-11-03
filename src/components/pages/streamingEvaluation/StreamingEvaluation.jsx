import styles from "./StreamingEvaluation.module.css";

import star from "../../../assets/images/icons/star.png";
import ButtonExternaLink from "../../common/button/ButtonExternaLink";

function StreamingEvaluation() {
    return (
        <section className={styles.streamingEvaluation} id="streamingEvaluation">

            <div className={styles.assessmentContainer}>

                <header className={styles.header}>
                    <div className={styles.starContainer}>
                        <img src={star} alt="estrela" />
                        <img src={star} alt="estrela" />
                        <img src={star} alt="estrela" />
                        <img src={star} alt="estrela" />
                        <img src={star} alt="estrela" />
                    </div>

                    <h2 className={styles.title}>Avaliações de 5 estrelas nos principais streamings</h2>

                </header>

                <div className={styles.content}>

                    <aside className={styles.descriptionContainer}>
                        <p className={styles.description}>“Pipoca Ágil é bão demais, eu gosto mutcho e soy muy feliz com mi amiguitos no projeto”</p>
                        <p className={styles.author}>-David, Devops de  uma empresa chique</p>
                    </aside>

                    <aside className={styles.streamingPlatforms}>
                        <ButtonExternaLink size="size-large" color="color-transparent" text="Ouça agora no Spotify" link="https://open.spotify.com/show/5J1scP1l7m7kXK6v5RZS7J" />
                        <ButtonExternaLink size="size-large" color="color-transparent" text="Ouça agora no Itunes" link="https://podcasts.apple.com/br/podcast/pipoca-%C3%A1gil/id1490753920" />
                        <ButtonExternaLink size="size-large" color="color-transparent" text="Ouça agora no Deezer" link="https://www.deezer.com/br/show/1030832" />
                    </aside>
                </div>
            </div>

        </section>
    );
};

export default StreamingEvaluation;