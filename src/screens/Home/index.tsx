import { FC, useEffect, useState, useContext } from 'react';
import { Row, Col } from 'react-bootstrap'
import { Slider } from './components';
import { Movie } from './types'
import { moviesApi } from '@services/movies_api';
import { LoadingContext } from '../../context/LoadingProvider'


const Home: FC = () => {

    const { setLoading } = useContext(LoadingContext)


    const [trends, setTrends] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [rated, setRated] = useState<Movie[]>([]);

    useEffect(() => {
        setLoading(true)
        moviesApi.getTrending()
            .then(r => {
                setTrends(r.data.results)
            })
        moviesApi.getPopular(1)
            .then(r => {
                setPopular(r.data.results)
            })
        moviesApi.getTopRated()
            .then(r => {
                setRated(r.data.results)
                setLoading(false)
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