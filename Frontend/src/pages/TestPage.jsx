import { Link } from 'react-router-dom';
import styles from './TestPage.module.css';
import JobSelectButton from '../components/JobSelectButton';
import NextButton from '../components/NextButton';

const TestPage = () => {
  return (
    <div className={styles['test-page']}>
      <div className={styles['button-couple']}>
        <JobSelectButton color="steelblue">무직</JobSelectButton>
        <JobSelectButton color="steelblue">무직</JobSelectButton>
      </div>
      <div className={styles['button-couple']}>
        <JobSelectButton color="steelblue">무직</JobSelectButton>
        <JobSelectButton color="steelblue">무직</JobSelectButton>
      </div>
      <div className={styles['button-couple']}>
        <JobSelectButton color="steelblue">무직</JobSelectButton>
        <JobSelectButton color="steelblue">무직</JobSelectButton>
      </div>
      <NextButton />
    </div>
  );
};

export default TestPage;
