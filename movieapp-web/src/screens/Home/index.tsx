
import React, { FC, useEffect, useState } from 'react';
import { api_movies } from '@services/api_movies';
import { Main } from '@components'
import { Slider } from './components';
import { Movie } from './types'


const Home: FC = () => {

    const [trends, setTrends] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [rated, setRated] = useState<Movie[]>([]);

    useEffect(() => {
        api_movies.get(`/trending/movie/week`)
            .then(r => {
                setTrends(r.data.results)
            })
    }, [])

    useEffect(() => {
        api_movies.get(`/movie/popular`)
            .then(r => {
                setPopular(r.data.results)
            })
    }, [])

    useEffect(() => {
        api_movies.get(`/movie/top_rated`)
            .then(r => {
                setRated(r.data.results)
            })
    }, [])


    return (
        <Main background="main bg-light bg-gradient">
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Slider title="Recommendation" movies={trends} />
                        </div>
                        <div className="col">
                            <Slider title="Popular films" movies={popular} />
                        </div>
                        <div className="col">
                            <Slider title="Top rated" movies={rated} />
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
}

export { Home };