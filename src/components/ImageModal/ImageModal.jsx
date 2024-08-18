import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root'); 

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    >
      {image && (
        <div className={styles.imageModalContent}>
          <img src={image.urls.regular} alt={image.description} className={styles.modalImage} />
          <button onClick={onClose} className={styles.closeButton}>Close</button>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;