
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className={styles.imageGallery}>
      {images.map(image => (
        <ImageCard key={image.id} image={image} onClick={() => onImageClick(image)} />
      ))}
    </div>
  );
};

export default ImageGallery;