import { Audio } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Audio
        height={80}
        width={80}
        color="green"
      />
    </div>
  );
};

export default Loader;