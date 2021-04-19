import { FC, useEffect, } from 'react';
import { CardMovie, Paginator } from '@components';
import { moviesApi } from '@services/movies_api';
import { usePagination } from '@hooks/usePagination';
import { useHistory } from 'react-router-dom';

const MovieReleases: FC = () => {

    const { page, setDataPaginator, setMovieList, movieList, dataPaginator, nextPage, prevPage, firstPage, lastPage, handleChange } = usePagination()
    let history = useHistory();

    useEffect(() => {
        (async () =>
            await moviesApi.getRealeses(page)
                .then(response => {
                    setDataPaginator(response.data);
                    setMovieList(response.data.results);
                }))()
        history.push(`?page=${page}`)
    }, [page])


    return (
        <div className="lanzamientos container  d-inline-sm-flex">
            <h1>New Films</h1>
            <div className="row flex-md-row flex-sm-column">

                {movieList.map(m => {
                    return (
                        < CardMovie data={m} key={m.id} />
                    )
                })
                }
            </div>
            <div className="col">
                {
                    dataPaginator && (
                        <Paginator
                            nextPage={nextPage}
                            prevPage={prevPage}
                            firstPage={firstPage}
                            lastPage={lastPage}
                            totalcount={dataPaginator.total_pages}
                            currentPage={dataPaginator.page}
                            handleChange={handleChange} />
                    )
                }
            </div>
        </div>

    );
}

export { MovieReleases };