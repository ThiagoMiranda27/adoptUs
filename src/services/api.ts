import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
    // baseURL: 'https://adoptus-api-e8ixoi7th-vitormichel99-gmailcom.vercel.app'
});

api.defaults.timeout = 5000;

export default api;