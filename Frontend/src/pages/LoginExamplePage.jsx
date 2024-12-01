import { Link } from 'react-router-dom';
import KakaoLogin from 'react-kakao-login';
import styles from './LoginExamplePage.module.css';
import useKaKaoLogin from '../hooks/useKaKaoLogin';

const LoginExamplePage = () => {
  const { kakaoClientId, kakaoOnSuccess, kakaoOnFailure, kakaoOnLogout } = useKaKaoLogin();

  return (
    <div className={styles['login-example-page']}>
      <h1>
        Login <br /> ExamplePage
      </h1>
      <KakaoLogin
        token={kakaoClientId}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
        onLogout={kakaoOnLogout}
        className={styles['kakao-login-button']}
      />
      <Link to="/">루트 페이지로</Link>
    </div>
  );
};

export default LoginExamplePage;
