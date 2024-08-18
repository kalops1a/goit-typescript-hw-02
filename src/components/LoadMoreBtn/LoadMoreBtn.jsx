
import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} className={styles.loadMoreBtn}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;