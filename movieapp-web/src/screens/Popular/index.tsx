import { FC, useEffect } from 'react';
import { CardMovie, Paginator } from '@components';
import { usePagination } from '../../hooks'
import { moviesApi } from '@services/movies_api';

const Popular: FC = () => {
    const { dataPaginated, currentPage, totalcount, setCurrentPage, currentData, setDataMovie } = usePagination()

    useEffect(() => {
        moviesApi.getPopular()
            .then((r => setDataMovie(r.data.results)))
    }, [])

    const handleChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
        currentData()
    }

    return (
        <div className="launches container  d-inline-sm-flex">
            <h1>Popular</h1>
            <div className="row flex-md-row flex-sm-column">
                {
                    dataPaginated.map(m => {
                        return (
                            < CardMovie data={m} key={m.id} />
                        )
                    })
                }
            </div>

            <Paginator totalcount={totalcount} currentPage={currentPage} handleChange={handleChange} />

        </div>

    );
}

export { Popular };