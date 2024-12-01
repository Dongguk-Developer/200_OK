import styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <div className={styles['a']}>
      <img className={styles['svg']} src="../../public/icons/dummy.svg" />
      <h1>함께, 경주</h1>
      <img className={styles['svg']} src="../../public/icons/icon_appbar_archive_solid.svg" />
    </div>
  );
};

export default AppBar;
