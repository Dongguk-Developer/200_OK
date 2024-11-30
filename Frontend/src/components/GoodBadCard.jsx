import PropTypes from 'prop-types';
import styles from './GoodBadCard.module.css';

const GoodBadCard = ({ children, title }) => {
  return (
    <div className={styles['good-bad-card']}>
      <div className={styles['contents-container']}>
        <h1>{title}</h1>
        <span>{children}</span>
      </div>
      <div className={styles['svg-container']}>
        <img src="../../public/images/image_swipe_left.svg" alt="" />
        <img src="../../public/images/image_swipe_right.svg" alt="" />
      </div>
    </div>
  );
};

GoodBadCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default GoodBadCard;
