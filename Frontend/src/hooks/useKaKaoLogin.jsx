const useKaKaoLogin = () => {
  const kakaoClientId = 'JavaScript KEY';

  const kakaoOnSuccess = async (data) => {
    console.log(data);
    const idToken = data.response.access_token; // 엑세스 토큰 백엔드로 전달
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
