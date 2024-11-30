import PropTypes from 'prop-types';
import styles from './NextButton.module.css';

const NextButton = ({ children, color = '', ...rest }) => {
  return (
    <button className={`${styles['next-button']} ${styles[color]}`} {...rest}>
      {children}
    </button>
  );
};

// 여기 propTypes는 생략해도 됨
NextButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NextButton;
