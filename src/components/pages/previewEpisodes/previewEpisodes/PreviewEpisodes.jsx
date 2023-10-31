import styles from "./PreviewEpisodes.module.css";

import soundwave from "../../../../assets/images/photos/soundwave.png";

import BannerVideo from "../bannerVideo/BannerVideo";
import Episode from "../episode/Episode";

function PreviousEpisodes() {

    const videos = [
        'https://www.youtube.com/embed/T25qIpwvTyY?si=44nzCia1gAawtfMx&amp;controls=0',
        'https://www.youtube.com/embed/xJtSmJTdA94?si=2I3sD7lix-t0-eD8&amp;controls=0',
        'https://www.youtube.com/embed/sC1Pu7m0XSM?si=OuI3PLzIOOcZ9TRs&amp;controls=0'
    ];

    return (
        <section className={styles.previousEpisodes}>

            <div className={styles.backgroundContainer}>
                <BannerVideo />

                <img className={styles.soundWave} src={soundwave} alt="Onda sonora" />

                <div className={styles.videoContainer}>
                    {videos.map((video, id) => (
                        <Episode key={id} videoUrl={video} />
                    ))}
                </div>

            </div>

        </section>
    );
};

export default PreviousEpisodes;