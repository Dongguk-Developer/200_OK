const useKaKaoLogin = ({ handleSignInSubmit }) => {
  const kakaoClientId = '6551fad9d43f0f7e5071e49a90e61976';

  const kakaoOnSuccess = async (data) => {
    console.log(data);
    const idToken = data.response.access_token; // 엑세스 토큰 백엔드로 전달
    handleSignInSubmit(idToken);
  };
  const kakaoOnFailure = (error) => {
    console.error(error);
  };
  const kakaoOnLogout = (data) => {
    console.info(data);
  };

  return {
    kakaoClientId,
    kakaoOnSuccess,
    kakaoOnFailure,
    kakaoOnLogout,
  };
};

export default useKaKaoLogin;
