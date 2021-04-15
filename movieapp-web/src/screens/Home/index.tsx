import { FC, useEffect, useState } from 'react';
import { Main } from '@components'
import { Slider } from './components';
import { Movie } from './types'
import { moviesApi } from '@services/movies_api';


const Home: FC = () => {
    const [trends, setTrends] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [rated, setRated] = useState<Movie[]>([]);

    useEffect(() => {
        moviesApi.getTrending()
            .then(r => {
                setTrends(r.data.results)
            })
    }, [])

    useEffect(() => {
        moviesApi.getPopular(1)
            .then(r => {
                setPopular(r.data.results)
            })
    }, [])

    useEffect(() => {
        moviesApi.getTopRated()
            .then(r => {
                setRated(r.data.results)
            })
    }, [])


    return (
        <Main background="main bg-light bg-gradient">
            <div className="home container">
                <div className="row">
                    <div className="col">
                        <Slider title="Recommendation" movies={trends} />
                    </div>
                    <div className="row">
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