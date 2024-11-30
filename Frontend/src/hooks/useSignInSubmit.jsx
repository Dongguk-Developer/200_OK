import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

const useSignInSubmit = () => {
  const loginMutation = useMutation({
    mutationFn: async (kakaoAccessToken) =>
      axios.post(`http://minnnisu.iptime.org/api/auth/login`, {
        snsType: 'Kakao',
        accessToken: `Bearer ${kakaoAccessToken}`,
      }),
    onSuccess: (response) => {
      localStorage.setItem('at', response.data.accessToken);
      localStorage.setItem('rt', response.data.refreshToken);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSignInSubmit = (kakaoAccessToken) => {
    loginMutation.mutate(kakaoAccessToken);
  };

  return { handleSignInSubmit };
};

export default useSignInSubmit;
