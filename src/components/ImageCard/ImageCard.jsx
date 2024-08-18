
import styles from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={styles.imageCard} onClick={onClick}>
      <img src={image.urls.small} alt={image.description} />
    </div>
  );
};

export default ImageCard;