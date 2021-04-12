import axios from 'axios';

const api_movies = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: 'es-ES'
    }
});


export { api_movies }