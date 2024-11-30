import PropTypes from 'prop-types';
import styles from './SwipeDescription.module.css';

// 스와이프 되는 값이 트래킹 되어 icon_$$_$$.svg가 icon_$$_$$_solid.svg로 변경돼야 함
const SwipeDescription = ({ labelText }) => {
  return (
    <div className={styles['swipe-description']}>
      <div className={styles['couple']}>
        <img className={styles['arrow']} src="../../public/icons/icon_arrow_left.svg" />
        <img className={styles['emote']} src="../../public/icons/icon_emote_down.svg" />
      </div>
      <div className={styles['text']}>{labelText}</div>
      <div className={styles['couple']}>
        <img className={styles['emote']} src="../../public/icons/icon_emote_up.svg" />
        <img className={styles['arrow']} src="../../public/icons/icon_arrow_right.svg" />
      </div>
    </div>
  );
};

SwipeDescription.propTypes = {
  labelText: PropTypes.string,
};

export default SwipeDescription;
