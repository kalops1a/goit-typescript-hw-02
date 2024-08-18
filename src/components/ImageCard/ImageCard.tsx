import styles from './ImageCard.module.css';

interface ImageCardImage {
  id: string;
  urls: { small: string };
  description: string;
}

interface ImageCardProps {
  image: ImageCardImage;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={styles.imageCard} onClick={onClick}>
      <img src={image.urls.small} alt={image.description || 'Image'} />
    </div>
  );
};

export default ImageCard;