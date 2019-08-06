import axios from 'axios';
require('dotenv').config();

const baseURL=process.env.REACT_APP_API_URL
const accessToken='';
console.log(baseURL, 'url')
const axiosInstance = axios.create({
    baseURL,
    // timeout:1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default axiosInstance;