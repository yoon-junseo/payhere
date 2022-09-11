import request from '@/lib/api/request';

import { UserState } from '@/lib/api/types';

const userBaseUrl = '/user';

export const getUser = () => request<UserState>('GET', userBaseUrl).then((res) => res.data);
