import React, { useState } from 'react';
import styles from "./Episode.module.css";
import VideoModal from "../videoModal/VideoModal";

function Episode({ videoUrl }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.Episode}>
            <div onClick={openModal}>
                {/* Exibição do vídeo, como uma miniatura */}

                <iframe className={styles.episodeIframe}
                    title="video-preview"
                    src={videoUrl}
                    allowFullScreen
                    frameBorder="0"
                ></iframe>

                <div className={styles.episodeBlock}></div>

            </div>

            <VideoModal
                isOpen={isModalOpen}
                videoUrl={videoUrl}
                onRequestClose={closeModal}
            />            
        </div>
    );
};

export default Episode;