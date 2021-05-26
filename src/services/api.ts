import axios from 'axios';

const api = axios.create({
    baseURL: 'vercel'
});

api.defaults.timeout = 5000;

export default api;