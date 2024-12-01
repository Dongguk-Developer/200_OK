import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import useExampleCardMotion from '../hooks/useExampleCardMotion';
import styles from './CardsExamplePage.module.css';

const Card = ({ card, index, focusedIndex, getCardMotionProps, shouldRenderCard }) => {
  if (!shouldRenderCard(index)) return null;

  const isFocused = index === focusedIndex;
  const motionProps = getCardMotionProps(index, isFocused);

  return (
    <motion.div
      key={card}
      className={`${styles.card} ${isFocused ? styles.focused : ''}`}
      {...motionProps}
    >
      Card {card}
    </motion.div>
  );
};

Card.propTypes = {
  card: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  focusedIndex: PropTypes.number.isRequired,
  getCardMotionProps: PropTypes.func.isRequired,
  shouldRenderCard: PropTypes.func.isRequired,
};

const CardsExamplePage = () => {
  const { cards, focusedIndex, getCardMotionProps, shouldRenderCard } = useExampleCardMotion();

  return (
    <div className={styles['cards-example-page']}>
      <h1>
        Cards <br /> ExamplePage
      </h1>
      <div className={styles['cards-container']}>
        <AnimatePresence mode="popLayout">
          {cards.map((card, index) => (
            <Card
              key={card}
              card={card}
              index={index}
              focusedIndex={focusedIndex}
              getCardMotionProps={getCardMotionProps}
              shouldRenderCard={shouldRenderCard}
            />
          ))}
        </AnimatePresence>
      </div>
      <Link to="/">루트 페이지로</Link>
    </div>
  );
};

export default CardsExamplePage;
