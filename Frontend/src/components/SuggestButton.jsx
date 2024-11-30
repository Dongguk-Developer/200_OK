import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './SuggestButton.module.css';

const SuggestButton = ({ as, children, color = '', ...rest }) => {
  let Component;

  if (as === 'link') Component = Link;
  else if (as === 'a') Component = 'a';
  else Component = 'button';

  return (
    <Component
      className={`
        ${styles['suggest-button']}
        ${styles[color]}
      `}
      {...rest}
    >
      {children}
    </Component>
  );
};

SuggestButton.propTypes = {
  as: PropTypes.oneOf(['link', 'a', 'button']),
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['steelblue', 'green', 'blue', 'yellow', 'red']),
};

export default SuggestButton;
