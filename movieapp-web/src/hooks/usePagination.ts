import { useState, useEffect } from 'react';
import { MovieCard } from 'src/components/Card/types';
import { moviesApi } from '../services/movies_api'

const usePagination = () => {

    const [dataMovie, setDataMovie] = useState<MovieCard[]>([])
    const [dataPaginated, setDataPaginated] = useState<MovieCard[]>([])

    const [currentPage, setCurrentPage] = useState<number>(1)
    const [rowsPerPage] = useState<number>(20)
    const totalcount: number = Math.ceil(dataMovie.length / rowsPerPage);


    useEffect(() => {
        currentData()
    }, [])


    const currentData = () => {
        const firstPage = (currentPage) * rowsPerPage;
        const lastPage = firstPage + rowsPerPage;
        const dataSliced = (dataMovie.slice(firstPage, lastPage))
        setDataPaginated(dataSliced);
    }

    return { currentData, dataPaginated, currentPage, totalcount, setCurrentPage, setDataMovie }

}

export { usePagination }