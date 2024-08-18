import { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ImageModal from './components/ImageModal/ImageModal';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import styles from './App.module.css';


interface Image {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string;
}

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const searchImages = async (query: string, page: number = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query,
          page,
          client_id: 'yAbV-TMOSsUiXLQ4zombON14Oh9M9I6dufuwM3W6iPU'
        }
      });

      if (page === 1) {
        setImages(response.data.results);
      } else {
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    setQuery(query);
    setPage(1);
    searchImages(query, 1);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    searchImages(query, nextPage);
  };

  return (
    <div className={styles.app}>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {loading && <Loader />}
      {!loading && images.length > 0 && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};

export default App;