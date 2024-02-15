import axios from 'axios';

const url = __IS_DEV__ ? 'http://localhost:3020' : 'https://math-game.ru/';

const instance = axios.create({
    baseURL: url,
});

instance.interceptors.request.use((config) => {
    config.headers.authorization = localStorage.getItem('token');
    return config;
});

export default instance;
