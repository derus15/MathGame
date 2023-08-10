import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.AXIOS_CONNECT,
});

instance.interceptors.request.use((config) => {
    config.headers.authorization = localStorage.getItem('token');
    return config;
});


export default instance;