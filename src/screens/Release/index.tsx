import { FC, useEffect, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { CardMovie, Paginator } from '@components';
import { moviesApi } from '@services/movies_api';
import { usePagination } from '@hooks/usePagination';
import { LoadingContext } from '../../context/LoadingProvider'

const MovieReleases: FC = () => {

    const { page, setDataPaginator, setMovieList, movieList, dataPaginator, nextPage, prevPage, firstPage, lastPage, handleChange } = usePagination()
    let history = useHistory();
    const { setLoading } = useContext(LoadingContext)


    useEffect(() => {
        setLoading(true)
        moviesApi.getRealeses(page)
            .then(response => {
                setDataPaginator(response.data);
                setMovieList(response.data.results);
                setLoading(false)
            })
        history.push(`?page=${page}`)
    }, [page])


    return (
        <div className="lanzamientos container  d-inline-sm-flex">
            <h1>New Films</h1>
            <Row xs={1} md={2}>

                {movieList.map(m => {
                    return (
                        < CardMovie data={m} key={m.id} />
                    )
                })
                }
            </Row>
            <Col>
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
            </Col>
        </div>

    );
}

export { MovieReleases };