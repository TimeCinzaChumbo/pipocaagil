import ButtonRouter from "../../../common/button/ButtonRouter";
import Logo from "../../../common/logo/Logo";
import styles from "./BannerVideo.module.css";

function BannerVideo() {

    return (
        <div className={styles.bannerVideo}>

            <Logo size="large" />

            <p className={styles.title}>Pipoca Ágil - Podcast</p>
            <p className={styles.by}>Com Ibson Cabral</p>

            <div className={styles.description}>
                <p>Esse podcast é voltado para o mundo ágil de desenvolvimento de software. Tratamos de todos os assuntos relacionados a transformação digital como um todo e suas vertentes</p>
            </div>

            <ButtonRouter to="/ta" size="custom-size-adaptive" color="custom-colors-red" text="Ver todos os episódios do podcast" />

        </div>
    );
};

export default BannerVideo;