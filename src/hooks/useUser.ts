import React from 'react';
import useSWR from 'swr';

import { getUser } from '@/lib/api/user';
import * as swrKeys from '@/lib/constants/swrKeys';

const useUser = () => {
  const { data, error } = useSWR(swrKeys.GET_USER, () => getUser(), {
    shouldRetryOnError: false,
    revalidateOnMount: true,
  });

  return {
    user: data,
    error,
  };
};

export default useUser;
