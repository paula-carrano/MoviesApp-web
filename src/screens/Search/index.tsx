import React, { FC, useState, useEffect, useContext } from 'react';
import { Row, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { moviesApi } from '@services/movies_api';
import { CardMovie } from '@components';
import { MovieSearch } from './types';

import { LoadingContext } from '../../context/LoadingProvider'


const Search: FC = () => {
    const [moviesSearch, setMoviesSearch] = useState<MovieSearch[]>([])
    const { setLoading } = useContext(LoadingContext)

    let location = useLocation();
    let history = useHistory();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const mySearch = params.get('s');
        (async () => {
            setLoading(true)
            moviesApi.searchMovie(mySearch)
                .then(r => {
                    setMoviesSearch(r.data.results)
                    setLoading(false)
                })
        })()
    }, [location.search]);

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        history.push(`?s=${event.currentTarget.value}`)
    }

    return (
        <div className="search">
            <Container>
                <h2>Search your movie!</h2>
                <form>
                    <input
                        id="search"
                        type="text"
                        name="search"
                        className="form-control mb-2"
                        onChange={handleInputChange}
                    />
                </form>
            </Container>
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