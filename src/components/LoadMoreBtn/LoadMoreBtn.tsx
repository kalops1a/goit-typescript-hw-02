import styles from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} className={styles.loadMoreBtn}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;