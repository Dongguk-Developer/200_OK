import PropTypes from 'prop-types';
import styles from './CompleteCard.module.css';

const CompleteCard = ({ children, title }) => {
  return (
    <div className={styles['complete-card']}>
      <div className={styles['contents-container']}>
        <h1>{title}</h1>
      </div>
      <div className={styles['svg-container']}>
        <div className={styles['icon-wrapper']}>
          <img src="../../public/icons/icon_check.svg" alt="" />
        </div>
        <span>{children}</span>
      </div>
    </div>
  );
};

CompleteCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default CompleteCard;
