import { api_movies } from './api_movies'

const getRealeses = async () => {
    const response = await api_movies.get(`/movie/now_playing`);
    return response
}

const getPopular = async () => {
    const response = await api_movies.get(`/movie/popular`);
    return response
}

const getTopRated = async () => {
    const response = await api_movies.get(`/movie/top_rated`);
    return response
}

const getTrending = async () => {
    const response = await api_movies.get(`/trending/movie/week`);
    return response

}

export const moviesApi = { getRealeses, getPopular, getTopRated, getTrending }