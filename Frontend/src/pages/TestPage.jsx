import styles from './TestPage.module.css';
import JobSelectButton from '../components/JobSelectButton';
import NextButton from '../components/NextButton';
import ProgressBar from '../components/ProgressBar';
import InputAge from '../components/InputAge';
import Card from '../components/Card';

const TestPage = () => {
  return (
    <div className={styles['test-page']}>
      <ProgressBar percentage={20} />
      <div className={styles['button-couple']}>
        <JobSelectButton color="yellow" onClick={() => {console.log('hi')}}>무직</JobSelectButton>
        <JobSelectButton color="steelblue">대학생</JobSelectButton>
      </div>
      <div className={styles['button-couple']}>
        <JobSelectButton color="steelblue">취준생</JobSelectButton>
        <JobSelectButton color="steelblue">직장인</JobSelectButton>
      </div>
      <div className={styles['button-couple']}>
        <JobSelectButton color="steelblue">주부</JobSelectButton>
        <JobSelectButton color="steelblue">농업</JobSelectButton>
      </div>
      <div className={styles['button-couple']}>
        <JobSelectButton color="steelblue">소상공인</JobSelectButton>
        <JobSelectButton color="steelblue">자영업</JobSelectButton>
      </div>
      <NextButton>다음</NextButton>
      <InputAge placeholder="나이"/>
      <Card />
    </div>
  );
};

export default TestPage;
