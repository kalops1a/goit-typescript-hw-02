import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

interface GalleryImage {
  id: string;
  description: string;
  urls: {
    regular: string;
    small: string; 
  };
}

interface ImageGalleryProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <div className={styles.imageGallery}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} onClick={() => onImageClick(image)} />
      ))}
    </div>
  );
};

export default ImageGallery;