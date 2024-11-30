import PropTypes from 'prop-types';
import styles from './JobSelectButton.module.css';

const JobSelectButton = ({ children, color = '', ...rest }) => {
  return (
    <button className={`${styles['job-select-button']} ${styles[color]}`} {...rest}>
      {children}
    </button>
  );
};

// 여기 propTypes는 생략해도 됨
JobSelectButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default JobSelectButton;
