import axios from 'axios';

import { env } from '@/lib/constants';

const client = axios.create();

client.defaults.baseURL = env.GITHUB_API_URL;

export default client;
