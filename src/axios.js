import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://math-game.ru/',
});

instance.interceptors.request.use((config) => {
    config.headers.authorization = localStorage.getItem('token');
    return config;
});


export default instance;
