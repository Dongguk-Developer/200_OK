import styles from './SignupButton.module.css';
import PropTypes from 'prop-types';

const SignupButton = ({ onClick, children }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

SignupButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default SignupButton;
