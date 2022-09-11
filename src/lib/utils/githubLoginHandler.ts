import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import Cookies from 'universal-cookie';

import { auth } from '@/lib/config/firebaseConfig';
import client from '@/lib/api/client';

const githubLoginHandler = () => {
  const provider = new GithubAuthProvider();
  const cookies = new Cookies();

  signInWithPopup(auth, provider)
    .then((res) => {
      const credential = GithubAuthProvider.credentialFromResult(res);

      if (!credential) return;

      cookies.set('accessToken', credential.accessToken, {
        path: '/',
        expires: new Date(Date.now() + 1000 * 60 * 59),
        secure: true,
      });

      client.defaults.headers.common['Authorization'] = `Bearer ${credential.accessToken}`;
    })
    .catch(() => alert('로그인에 실패했습니다! 잠시후 다시 시도해주세요!'));
};

export default githubLoginHandler;
