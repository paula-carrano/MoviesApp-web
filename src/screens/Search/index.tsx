import React, { FC, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useHistory, useLocation } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { moviesApi } from '@services/movies_api'
import { CardMovie } from '@components';
import { MovieSearch } from './types';
import { Row } from 'react-bootstrap';



const Search: FC = () => {
    const [moviesSearch, setMoviesSearch] = useState<MovieSearch[]>([])

    let location = useLocation();
    let history = useHistory();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const mySearch = params.get('s');
        (async () => {
            moviesApi.searchMovie(mySearch)
                .then(r => setMoviesSearch(r.data.results))
        })()
    }, [location.search]);

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        history.push(`?s=${event.currentTarget.value}`)
    }

    return (
        <div className="search container">
            <h1>Search your movie! <FontAwesomeIcon icon={faSearch} /></h1>
            <form>
                <input
                    id="search"
                    type="text"
                    name="search"
                    className="form-control mb-2"
                    onChange={handleInputChange}
                />
            </form>
            <Row xs={1} md={2}>
                {
                    moviesSearch && (
                        moviesSearch.map(movie => (
                            < CardMovie data={movie} key={movie.id} />
                        )))
                }
            </Row>
        </div>
    );
}

export { Search };