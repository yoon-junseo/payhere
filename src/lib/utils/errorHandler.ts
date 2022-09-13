import { AxiosError } from 'axios';

import { DataState } from '@/lib/api/types';
import { errorMessage } from '@/lib/constants';
import githubLoginHandler from '@/lib/utils/githubLoginHandler';

const errorHandler = (error: AxiosError) => {
  if (!error.response) return;
  const { data } = error.response as unknown as DataState;

  if (data.message.includes(errorMessage.API_RATE_LIMIT)) {
    const confirm = window.confirm(
      `깃허브 API 호출 횟수를 초과했습니다!\n 로그인을 하시면 호출 가능한 횟수가 증가합니다`,
    );

    if (!confirm) return;

    githubLoginHandler();

    return;
  }
};

export default errorHandler;
