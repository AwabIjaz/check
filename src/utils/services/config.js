import axios from 'axios';

const API_BASE_URL = '';

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
