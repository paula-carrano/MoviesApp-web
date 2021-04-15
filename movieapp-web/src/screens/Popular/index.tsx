import React, { FC, useEffect } from 'react';
import { CardMovie, Paginator } from '@components';
import { moviesApi } from '@services/movies_api';
import { usePagination } from '../../hooks/usePagination'


const Popular: FC = () => {

    const { page, setDataPaginator, setMovieList, movieList, dataPaginator, nextPage, prevPage, firstPage, lastPage, handleChange } = usePagination()

    useEffect(() => {
        (async () =>
            await moviesApi.getPopular(page)
                .then(response => {
                    setDataPaginator(response.data);
                    setMovieList(response.data.results);
                }))()
    }, [page, setDataPaginator, setMovieList])


    return (
        <div className="popular container  d-inline-sm-flex">
            <h1>Popular</h1>
            <div className="row flex-md-row flex-sm-column">

                {movieList.map(m => {
                    return (
                        < CardMovie data={m} key={m.id} />
                    )
                })
                }
            </div>
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

    );
}

export { Popular };
