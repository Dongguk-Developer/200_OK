import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './NextButton.module.css';

const NextButton = ({ as, children, color = '', onClick, ...rest }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  let Component;

  if (as === 'link') Component = Link;
  else if (as === 'a') Component = 'a';
  else Component = 'button';

  const handleClick = (e) => {
    if (!isSubmitted && onClick) {
      onClick(e);
    }
    setIsSubmitted(true);
  };

  return (
    <Component
      className={`
        ${styles['next-button']}
        ${styles[color]}
        ${isSubmitted ? styles['submitted'] : ''}
      `}
      onClick={handleClick}
      disabled={isSubmitted}
      {...rest}
    >
      {children}
    </Component>
  );
};

NextButton.propTypes = {
  as: PropTypes.oneOf(['link', 'a', 'button']),
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['steelblue', 'green', 'blue', 'yellow', 'red']),
  onClick: PropTypes.func,
};

export default NextButton;