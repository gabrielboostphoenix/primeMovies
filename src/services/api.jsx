// URL base: 'https://api.themoviedb.org/3/'
// rest API URL: 'movie/now_playing?api_key=495b65ce4d8bf119654247e5fa0373c9'

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;