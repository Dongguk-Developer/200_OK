import styles from './TestPage.module.css';
import JobSelectButton from '../components/JobSelectButton';
import NextButton from '../components/NextButton';
import ProgressBar from '../components/ProgressBar';
import InputAge from '../components/InputAge';
import InfoCard from '../components/InfoCard';
import MCQCard from '../components/MCQCard';
import InvestigateCard from '../components/InvestigateCard';
import SwipeDescription from '../components/SwipeDescription';
import GoodBadCard from '../components/GoodBadCard';
import CompleteCard from '../components/CompleteCard';
import NavigationBar from '../components/NavigationBar';

const TestPage = () => {
  return (
    <div className={styles['test-page']}>
      <NavigationBar />
      <SwipeDescription labelText="쓸어넘겨 반응하기"></SwipeDescription>
      <ProgressBar percentage={20} />
      <div className={styles['button-couple']}>
        <JobSelectButton
          color="yellow"
          onClick={() => {
            console.log('hi');
          }}
        >
          무직
        </JobSelectButton>
        <JobSelectButton color="steelblue">대학생</JobSelectButton>
      </div>
      <InvestigateCard title="경주 내 대학생 장학 지원 사업 대상자 모집">
        구도심의 상권 회복 및 상생을 위한 금리단길의 활성화를 위해 자유로운 의견을 남겨주세요 선정된
        아이디어는 지역 화폐 200,000원이 지급됩니다 !
      </InvestigateCard>
      <NextButton>다음</NextButton>
      <InputAge placeholder="나이" />k
      <InfoCard title="경주 내 대학생 장학지원 사업 대상자 모집">
        어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고
      </InfoCard>
      <MCQCard
        title="경주 내 대학생 장학지원 사업 대상자 모집"
        answers={['안녕', '하세', '요', '반갑습', '니다']}
      >
        최근 시행한 줄 퇴근 시간대 황성대교 교통 통제에 대해 어떻게 생각하시나요?
      </MCQCard>
      <GoodBadCard title="여론조사">
        구도심의 상권 회복 및 상생을 위한 금리단길의 활성화를 위해 자유로운 의견을 남겨주세요 선정된
        아이디어는 지역 화폐 200,000원이 지급됩니다!
      </GoodBadCard>
      <CompleteCard title="여론조사">dslkfjsakjfdsa</CompleteCard>
    </div>
  );
};

export default TestPage;
