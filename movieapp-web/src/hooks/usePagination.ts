import { useState } from 'react'
import { MovieCard } from 'src/components/Card/types'
import { MovieResult } from 'src/components/Paginator/types'

const usePagination = () => {

    const [movieList, setMovieList] = useState<MovieCard[]>([])
    const [dataPaginator, setDataPaginator] = useState<MovieResult>()
    const [page, setPage] = useState(1)

    const handleChange = (page: number) => {
        setPage(page)
    }

    const firstPage = () => {
        dataPaginator &&
            (setPage((dataPaginator.total_pages + 1) - dataPaginator.total_pages))
    }

    const prevPage = () => {
        setPage(page - 1)
    }

    const nextPage = () => {
        setPage(page + 1)
    }

    const lastPage = () => {
        dataPaginator &&
            setPage(dataPaginator.total_pages)
    }

    return { handleChange, firstPage, prevPage, nextPage, lastPage, movieList, dataPaginator, setDataPaginator, setMovieList, page }
}

export { usePagination }