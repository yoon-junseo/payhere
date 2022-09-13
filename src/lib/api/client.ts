import axios from 'axios';
import Cookies from 'universal-cookie';

import { env } from '@/lib/constants';

const client = axios.create();

const cookies = new Cookies();
const accessToken = cookies.get('accessToken');

if (accessToken) {
  client.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}

client.defaults.baseURL = env.GITHUB_API_URL;

export default client;
