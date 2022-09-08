import axios from 'axios';

const client = axios.create();

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

client.defaults.baseURL = SERVER_URL;

export default client;
