import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './JobSelectButton.module.css';

const JobSelectButton = ({ as, color = '', children, ...rest }) => {
  let Component;

  if (as === 'link') Component = Link;
  else if (as === 'a') Component = 'a';
  else Component = 'button';

  return (
    <Component className={`${styles['job-select-button']} ${styles[color]}`} {...rest}>
      { children }
    </Component>
  );
};

JobSelectButton.propTypes = {
  as: PropTypes.oneOf(['link', 'a', 'button']),
  color: PropTypes.oneOf(['steelblue', 'green', 'blue', 'yellow', 'red']),
  children: PropTypes.node.isRequired,
};

export default JobSelectButton;
