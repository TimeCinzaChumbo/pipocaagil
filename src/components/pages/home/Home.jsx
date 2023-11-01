// import "./Home.css";
import styles from "./Home.module.css";

import spotifyPodcast from "../../../assets/images/podcastPlatforms/spotifyPodcast.png";
import applePodcast from "../../../assets/images/podcastPlatforms/applePodcast.png";
import overcastPodcast from "../../../assets/images/podcastPlatforms/overcastPodcast.png";
import googlePodcast from "../../../assets/images/podcastPlatforms/googlePodcast.png";

import personaImage from "../../../assets/images/photos/ibson-cabral-braco-cruzado.png";
import circleImage from "../../../assets/images/photos/image2.png";
import popcorneBucketImage from "../../../assets/images/photos/image3.png";
import ipodImage from "../../../assets/images/photos/image4.png";
import microphoneImage from "../../../assets/images/photos/image5.png";

import { Link as RouterLink } from "react-router-dom";
import ButtonRouter from "../../common/button/ButtonRouter";

function Home() {

    return (
        <section className={styles.home} id="home">
            <div className={styles.infoHome}>

                <h1><span>Pipoca</span><span> Ágil</span></h1>

                <p>O podcast mais animado do mundo ágil vai te inspirar e acelerar seu conhecimento!</p>

                <ButtonRouter to="knowAbout" size="custom-size-large" color="custom-colors-red" text="Saber mais sobre o pipoca ágil" />

                <div className={styles.podcastPlatforms}>
                    <p>Disponível nas plataformas de podcast</p>

                    <div className={styles.plataform}>
                        <a href="https://podcasters.spotify.com/pod/show/pipocaagil" target="_blank" rel="noopener noreferrer"><img src={spotifyPodcast} alt="spotify" /></a>
                        <a href="https://podcasts.apple.com/us/podcast/pipoca-%C3%A1gil/id1490753920?uo=4" target="_blank" rel="noopener noreferrer"><img src={applePodcast} alt="applePodcast" /></a>
                        <a href="https://overcast.fm/login" target="_blank" rel="noopener noreferrer"><img src={overcastPodcast} alt="overcastPodcast" /></a>
                        <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xMGVmYjE4MC9wb2RjYXN0L3Jzcw==" target="_blank" rel="noopener noreferrer"><img src={googlePodcast} alt="googlePodcast" /></a>
                    </div>
                </div>
            </div>
            <div className={styles.bannerHome}>
                <div className={styles.banner}>
                    <img className={styles.agileCircle} src={circleImage} loading="lazy" alt="circulo" />
                    <img className={styles.persona} src={personaImage} loading="lazy" alt="pessoa" />

                    <div className={`${styles.modals} ${styles.modal1}`}>
                        <div className={`${styles.boxShadow} ${styles.boxShadow1}`}>
                            <div className={`${styles.boxes} ${styles.box1}`}>
                                <img className="popcornBucket" src={popcorneBucketImage} loading="lazy" alt="pipoca" />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.modals} ${styles.modal2}`}>
                        <div className={`${styles.boxShadow} ${styles.boxShadow2}`}>
                            <div className={`${styles.boxes} ${styles.box2}`}>
                                <img className="ipod" src={ipodImage} loading="lazy" alt="ipod" />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.modals} ${styles.modal3}`}>

                        <div className={`${styles.boxShadow} ${styles.boxShadow3}`}>
                            <div className={`${styles.boxes} ${styles.box3}`}>
                                <img className="microphone" src={microphoneImage} loading="lazy" alt="microfone" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.podcastInvitationBox}>
                        <div className={styles.boxInfo}>

                            <p>Agende um epísodio conosco!</p>

                            <ButtonRouter to="/contact" size="custom-size-average" color="custom-colors-red" text="Contato" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;