import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { api_movies } from '@services/api_movies'
import { CardMovie } from '@components';
import { MovieSearch } from './types';
import { fileURLToPath } from 'node:url';


const Search: FC = () => {
    const [search, setSearch] = useState('')
    const [moviesSearch, setMoviesSearch] = useState<MovieSearch[]>()

    let URLParams = new URLSearchParams(window.location.search)
    console.log(URLParams)
    const myParam = URLParams.get('name')
    console.log(myParam)
    //history(/push)

    // useEffect(() => {
    // api.get('/movies?s=')
    //     // }, []);


    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        api_movies(`/search/movie?&query=${search}`)
            .then(r => setMoviesSearch(r.data.results))
    }

    return (
        <div className="search container">
            <h4>Search your movie! <FontAwesomeIcon icon={faSearch} /></h4>
            <form onSubmit={handleSubmit}>
                <input
                    id="search"
                    type="text"
                    value={search}
                    name="search"
                    className="form-control"
                    onChange={handleInputChange} />
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