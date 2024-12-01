import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.content}>
        <span className={styles.title}>함께, 경주</span>
      </div>
    </div>
  );
};

export default TopBar;
