import axios from 'axios';
import Cookies from 'universal-cookie';

import { env } from '@/lib/constants';

const client = axios.create();

client.defaults.baseURL = env.GITHUB_API_URL;

client.interceptors.request.use((config) => {
  const cookies = new Cookies();

  const accessToken = cookies.get('accessToken');

  client.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  return config;
});

export default client;
