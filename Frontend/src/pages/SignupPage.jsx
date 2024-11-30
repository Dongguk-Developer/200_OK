import styles from './SignupPage.module.css';
import useSignup from '../hooks/useSignup';
import NextButton from '../components/NextButton';

const SignupPage = () => {
  const {} = useSignup();
  return (
    <div className={styles['signup-page']}>
      <h1>어떤 일을 하고 계세요?</h1>
      <NextButton />
    </div>
  );
};

export default SignupPage;
