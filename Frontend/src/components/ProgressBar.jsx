import PropTypes from 'prop-types';
import styles from './ProgressBar.module.css';

const ProgressBar = ({percentage = 0}) => {


  return (
    <div className={styles['progress-bar']}>
      <div className={styles['progress-bar-inner']} style={{width: `${percentage}%`}}></div>
    </div>
  )
}

ProgressBar.propTypes = {
  percentage: PropTypes.number,
};

export default ProgressBar