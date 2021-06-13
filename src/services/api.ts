import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-adoptus.herokuapp.com'
});

api.defaults.timeout = 5000;

export default api;