import React, { FC, useState, useEffect } from 'react';
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { DetailMovie, Video } from '../../types';
import { base_url, poster_size } from "@shared/constants/imageConfig"
import { api } from '@services/api'
import { Rating, ModalVideo } from './components';



const CardDetail: FC<{ details: DetailMovie }> = ({ details }) => {

    const { poster_path, original_title, overview, release_date, runtime, genres, id, vote_average } = details

    const year = release_date.substring(0, 4)

    const [trailer, setTrailer] = useState<Video>();

    useEffect(() => {
        api.get(`/movie/${id}/videos`)
            .then(r => {
                setTrailer(r.data.results[0])
            })
    }, [id])

    return (
        <Container fluid>
            <Card id="bg-card">
                <Row className="align-items-center justify-content-center mt-2">
                    <Col sm={10} md={6} className="mb-2">
                        <Card.Img src={`${base_url}${poster_size}${poster_path}`} alt={original_title} className="card_img" />
                    </Col>
                    <Col sm={12} md={6} className="mb-2">
                        <Card.Body className="cardBody">
                            {trailer &&
                                (<ModalVideo trailer={trailer} />)
                            }
                            <Card.Title className="card_title">{original_title}- {year} </Card.Title>
                            <h6>General</h6>
                            <Rating average={vote_average} />
                            <Card.Text className="description">
                                {overview}
                            </Card.Text>
                        </Card.Body>
                        <Card.Body className="cardBody">
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className="list">{`Duration: ${runtime} min`}</ListGroupItem>
                                <ListGroupItem className="list" >
                                    <p>Genres:</p>
                                    {genres.map(g => <li key={g.id}>{g.name}</li>)}
                                </ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

export { CardDetail };
