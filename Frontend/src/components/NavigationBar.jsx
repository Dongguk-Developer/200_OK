import { useNavigate } from 'react-router-dom';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles['navigation-bar']}>
      <div className={styles['row']}>
        <div className={styles['column']} onClick={() => navigate('/feedback')}>
          <div className={styles['navIcon']}>
            <img className={styles['svg']} src="../../public/icons/icon_nav_fdbck.svg" alt="피드백" />
          </div>
          <div className={styles['navText']}>피드백</div>
        </div>
        <div className={styles['column']} onClick={() => navigate('/info-page')}>
          <div className={styles['navIcon']}>
            <img className={styles['svg']} src="../../public/icons/icon_nav_info.svg" alt="마이인포" />
          </div>
          <div className={styles['navText']}>내 정보</div>
        </div>
        <div className={styles['column']} onClick={() => navigate('/suggest-page')}>
          <div className={styles['navIcon']}>
            <img className={styles['svg']} src="../../public/icons/icon_nav_suggest.svg" alt="제안하기" />
          </div>
          <div className={styles['navText']}>제안하기</div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
