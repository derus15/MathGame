import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3020',
});

instance.interceptors.request.use((config) => {
    config.headers.authorization = localStorage.getItem('token');
    return config;
});


export default instance;