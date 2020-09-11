const url = 'http://localhost:4567/'
const axios = require('axios')

const api = axios.create({
    baseURL: url
});

export default api;
