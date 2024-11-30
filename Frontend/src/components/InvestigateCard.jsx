import PropTypes from 'prop-types';
import styles from './InvestigateCard.module.css';
import NextButton from './NextButton';

const InvestigateCard = ({ children, title }) => {
  return (
    <div className={styles['investigate-card']}>
      <div className="contentsContainer">
        <h1>{title}</h1>
        <span>{children}</span>
      </div>
      <div className={styles['input-wrapper']}>
        <textarea placeholder="여기에 내용을 입력하세요" />
      </div>
      <NextButton>제출하기</NextButton>
    </div>
  );
};

InvestigateCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default InvestigateCard;
