import styles from './SignupPage.module.css';
import SignupButton from '../components/SignupButton';
import JobSelectButton from '../components/JobSelectButton';
import ProgressBar from '../components/ProgressBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputAge from '../components/InputAge';

const SignupPage = () => {
  const [step, setStep] = useState(0);
  const [selectedJobIndex, setSelectedJobIndex] = useState(null); // 선택한 직업의 인덱스를 저장
  const [selectedGender, setSelectedGender] = useState(null); // 선택한 성별 저장
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 2) {
      navigate('/info-page');
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className={styles['signup-page']}>
      <div className={styles.a}>
        {step === 0 && <h1>어떤 일을 하고 계세요?</h1>}
        {step === 1 && <h1>당신의 정보도 알려주세요!</h1>}
        {step === 2 || <ProgressBar percentage={step * 50} />}
        {step === 0 && (
          <First
            selectedJobIndex={selectedJobIndex}
            onSelect={(index) => setSelectedJobIndex(index)}
          />
        )}
        {step === 1 && (
          <Two
            selectedGender={selectedGender}
            onSelectGender={(gender) => setSelectedGender(gender)}
          />
        )}
        {step === 2 && <End />}
      </div>
      <SignupButton onClick={handleNext}>{step === 2 ? '시작하기' : '다음'}</SignupButton>
    </div>
  );
};

const First = ({ selectedJobIndex, onSelect }) => {
  const jobs = ['무직', '대학생', '취준생', '직장인', '주부', '농업', '소상공인', '자영업'];
  return (
    <div className={styles.container}>
      {jobs.map((job, index) => (
        <JobSelectButton
          key={index}
          onClick={() => onSelect(index)}
          color="steelblue"
          style={{
            backgroundColor: selectedJobIndex === index ? 'rgb(97, 194, 156)' : 'transparent',
          }}
        >
          {job}
        </JobSelectButton>
      ))}
    </div>
  );
};

const Two = ({ selectedGender, onSelectGender }) => {
  return (
    <div>
      <InputAge placeholder="나이" />
      <div className={styles.container}>
        <JobSelectButton
          onClick={() => onSelectGender('남자')}
          style={{
            backgroundColor: selectedGender === '남자' ? 'rgb(97, 194, 156)' : 'transparent',
          }}
        >
          남자
        </JobSelectButton>
        <JobSelectButton
          onClick={() => onSelectGender('여자')}
          style={{
            backgroundColor: selectedGender === '여자' ? 'rgb(97, 194, 156)' : 'transparent',
          }}
        >
          여자
        </JobSelectButton>
      </div>
    </div>
  );
};

const End = () => {
  return (
    <div
      className={styles['svg-container']}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '10px',
        marginTop: '25vh',
      }}
    >
      <div
        className={styles['icon-wrapper']}
        style={{
          width: '130px',
          height: '130px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgb(97 194 156)',
        }}
      >
        <img src="../../public/icons/icon_check.svg" alt="" />
      </div>
      <span style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '14px' }}>
        가입이 완료되었습니다!
      </span>
      <span>함께 경주의 멋진 미래를 만들어가요! ✨</span>
    </div>
  );
};

export default SignupPage;
