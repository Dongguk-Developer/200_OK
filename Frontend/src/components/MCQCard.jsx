import PropTypes from 'prop-types';
import styles from './MCQCard.module.css';
import NextButton from './NextButton';

const MCQCard = ({ children, title, answers = [] }) => {
  return (
    <div className={styles['mcq-card']}>
      <div className={styles['contents-container']}>
        <h1>{title}</h1>
        <span>{children}</span>
        {answers.map((answer, index) => (
          <div key={answer + index} className={styles['answer']}>
            <input type="radio" id={answer} name="answer" value={answer} />
            <label htmlFor={answer}>{answer}</label>
          </div>
        ))}
      </div>
      <NextButton>제출하기</NextButton>
    </div>
  );
};

MCQCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  answers: PropTypes.arrayOf(PropTypes.string),
};

export default MCQCard;
