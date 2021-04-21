import { api } from './api'


const getRealeses = async (page: number) => {
    const response = await api.get(`/movie/now_playing?page=${page}`);
    return response
}

const getPopular = async (page: number) => {
    const response = await api.get(`/movie/popular?page=${page}`);
    return (response)
}

const getTopRated = async () => {
    const response = await api.get(`/movie/top_rated`);
    return response
}

const getTrending = async () => {
    const response = await api.get(`/trending/movie/week`)
    return response

}

const searchMovie = async (mySearch: string | null) => {
    const response = api(`/search/movie?query=${mySearch ?? 'a'}`)
    return response
}

const getDetaild = async (id: number) => {
    const response = api.get(`/movie/${id}`)
    return response
}

export const moviesApi = { getRealeses, getPopular, getTopRated, getTrending, searchMovie, getDetaild }