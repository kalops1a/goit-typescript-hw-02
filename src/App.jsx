import { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import ImageModal from './components/ImageModal/ImageModal';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import styles from './App.module.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const searchImages = async (query, page = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
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
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
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