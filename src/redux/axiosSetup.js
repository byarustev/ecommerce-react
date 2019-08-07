import axios from 'axios';
require('dotenv').config();

const baseURL=process.env.REACT_APP_API_URL
// const accessToken='';

const axiosInstance = axios.create({
    baseURL,
    headers: {'X-Custom-Header': 'foobar'}
});

export default axiosInstance;