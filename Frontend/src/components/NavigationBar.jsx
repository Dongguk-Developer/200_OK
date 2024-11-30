import styles from './NavigationBar.module.css';

const NavigationBar = () => {
  return (
    // 내부 요소 선택 시 svg fill 필요
    <div className={styles['navigation-bar']}>
      <div className={styles['row']}>
        <div className={styles['column']}>
          <img className={styles['svg']} src="../../public/icons/icon_nav_fdbck.svg" />
          <div className={styles['title']}>타이틀</div>
        </div>
        <div className={styles['column']}>
          <img className={styles['svg']} src="../../public/icons/icon_nav_info.svg" />
          <div className={styles['title']}>타이틀</div>
        </div>
        <div className={styles['column']}>
          <img className={styles['svg']} src="../../public/icons/icon_nav_suggest.svg" />
          <div className={styles['title']}>타이틀</div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
