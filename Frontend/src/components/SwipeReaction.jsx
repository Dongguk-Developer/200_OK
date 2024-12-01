import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styles from './SwipeReaction.module.css';

const SwipeReaction = ({ type, isVisible }) => {
  return (
    <motion.div
      className={`${styles.reaction} ${styles[type]}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      transition={{ duration: 0.2 }}
    >
      {type === 'thumbsUp' ? '👍' : '👎'}
    </motion.div>
  );
};

SwipeReaction.propTypes = {
  type: PropTypes.oneOf(['thumbsUp', 'thumbsDown']).isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default SwipeReaction;
