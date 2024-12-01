import PropTypes from 'prop-types';
import styles from './DetailCard.module.css';
// import exit from './ExitButton';
// import NextButton from './NextButton';

const DetailCard = ({ children, uploaded, title }) => {
  return (
    <div className={styles['root']}>
      <div className={styles['detail-card']}>
        <div className="contentsContainer">
          <div className={styles['header']}>
            <h1>{title}</h1>
            <h6>{uploaded}</h6>
          </div>
          <span>{children}</span>
        </div>
      </div>
      <div className={styles['devide']}>
        <button className={styles['exit']}>
          <img className={styles['svg']} src="../../public/icons/icon_exit.svg" />
        </button>
      </div>
    </div>
  );
};

DetailCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  uploaded: PropTypes.string,
};

export default DetailCard;
