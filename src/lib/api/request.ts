import { AxiosResponse } from 'axios';

import client from './client';

import { Method, ApiResponse } from '@/lib/api/types/common';
import { ErrorResponse } from '@/lib/api/types/error';

const request = async <RES = unknown, REQ = null, PARAMS = null>(
  method: Method,
  url: string,
  body?: REQ,
  params?: PARAMS,
): Promise<ApiResponse<RES>> => {
  const response = (await client({
    method,
    url,
    params,
    ...(body && { data: body }),
  })) as AxiosResponse<RES | ErrorResponse>;

  const { status, data } = response;

  const responseData = data as RES;

  return {
    statusCode: status,
    data: responseData,
  };
};

export default request;
