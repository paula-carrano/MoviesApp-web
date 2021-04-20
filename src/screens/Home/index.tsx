import { FC, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap'
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
        <div className="home container">
            <Row>
                <Col md={12} sm={12}>
                    <Slider title="Recommendation" movies={trends} />
                </Col>
                <Row className="d-inline-flex">
                    <Col md={6} sm={12}>
                        <Slider title="Popular films" movies={popular} />
                    </Col>
                    <Col md={6} sm={12}>
                        <Slider title="Top rated" movies={rated} />
                    </Col>
                </Row>
            </Row>
        </div>

    );
}

export { Home };