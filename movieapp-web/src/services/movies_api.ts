import { api_movies } from './api_movies'


const getRealeses = async (page: number) => {
    const response = await api_movies.get(`/movie/now_playing?page=${page}`);
    return response
}

const getPopular = async (page: number) => {
    const response = await api_movies.get(`/movie/popular?page=${page}`);
    return (response)
}

const getTopRated = async () => {
    const response = await api_movies.get(`/movie/top_rated`);
    return response
}

const getTrending = async () => {
    const response = await api_movies.get(`/trending/movie/week`)
    return response

}

const searchMovie = async (mySearch: string | null) => {
    const response = api_movies(`/search/movie?query=${mySearch ?? 'a'}`)
    return response
}

export const moviesApi = { getRealeses, getPopular, getTopRated, getTrending, searchMovie }