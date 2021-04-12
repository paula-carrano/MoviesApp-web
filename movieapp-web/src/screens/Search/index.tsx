import React, { FC, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { moviesApi } from '@services/movies_api'
import { CardMovie } from '@components';
import { MovieSearch } from './types';
import { useHistory, useLocation } from 'react-router-dom';


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
            <h4>Search your movie! <FontAwesomeIcon icon={faSearch} /></h4>
            <form>
                <input
                    id="search"
                    type="text"
                    name="search"
                    className="form-control"
                    onChange={handleInputChange}
                />
            </form>
            <div className="row flex-md-row flex-sm-column">
                {
                    moviesSearch && (
                        moviesSearch.map(movie => (
                            < CardMovie data={movie} key={movie.id} />
                        )))
                }
            </div>
        </div>
    );
}

export { Search };