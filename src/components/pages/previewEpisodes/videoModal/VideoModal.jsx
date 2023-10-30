import React from 'react';
import Modal from 'react-modal';
import styles from "./VideoModal.module.css"

function VideoModal({ isOpen, videoUrl, onRequestClose }) {
    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Video Modal"
            className={styles.modalContent}
            overlayClassName={styles.modalOverlay}
        >
            <iframe
                title="video-modal"
                src={videoUrl}
                allowFullScreen
                frameBorder="0"
                className={styles.videoFrame}
            ></iframe>
        </Modal>
    )
}

export default VideoModal;
