import React, { FC, useEffect } from 'react';
import { CardMovie, Paginator } from '@components';
import { moviesApi } from '@services/movies_api';
import { usePagination } from '../../hooks/usePagination'
import { useHistory } from 'react-router-dom';
import { Row } from 'react-bootstrap';


const Popular: FC = () => {

    const { page, setDataPaginator, setMovieList, movieList, dataPaginator, nextPage, prevPage, firstPage, lastPage, handleChange } = usePagination()

    let history = useHistory();

    useEffect(() => {
        (async () =>
            await moviesApi.getPopular(page)
                .then(response => {
                    setDataPaginator(response.data);
                    setMovieList(response.data.results);
                }))()
        history.push(`?page=${page}`)
    }, [page])


    return (
        <div className="popular container  d-inline-sm-flex">
            <h1>Popular</h1>
            <Row xs={1} md={2}>

                {movieList.map(m => {
                    return (
                        < CardMovie data={m} key={m.id} />
                    )
                })
                }
            </Row>
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
