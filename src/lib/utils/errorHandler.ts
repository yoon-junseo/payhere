import { AxiosError } from 'axios';

import { DataState } from '@/lib/api/types';
import { errorMessage } from '@/lib/constants';
import * as swrKeys from '@/lib/constants/swrKeys';
import githubLoginHandler from '@/lib/utils/githubLoginHandler';

const errorHandler = (error: AxiosError, key: string) => {
  if (!error.response) return;

  const { data: errorData } = error.response as unknown as DataState;

  if (errorData.message.includes(errorMessage.API_RATE_LIMIT)) {
    if (key === swrKeys.GET_USER) return;

    const confirm = window.confirm(
      '깃허브 API 호출 횟수를 초과했습니다!\n 로그인을 하시면 호출 가능한 횟수가 증가합니다\n 로그인 하시겠습니까?',
    );

    if (!confirm) return;

    githubLoginHandler();

    return;
  }

  if (errorData.message === errorMessage.BAD_CREDENTIALS) {
    alert('로그인 시간이 만료 되었습니다!\n ');

    githubLoginHandler();

    return;
  }
};

export default errorHandler;
