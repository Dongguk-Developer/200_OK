import PropTypes from 'prop-types';
import styles from './ExampleButton.module.css';

const ExampleButton = ({ children, ...rest }) => {
  return (
    <button className={styles['example-button']} {...rest}>
      {children}
    </button>
  );
};

// 여기 propTypes는 생략해도 됨
ExampleButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ExampleButton;
