import React, { FC, useState, useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { DetailMovie, Video } from '../../types';
import { base_url, poster_size } from "@shared/constants/imageConfig"
import { ModalVideo } from '../ModalVideo';
import { api_movies } from '@services/api_movies'


const CardDetail: FC<{ details: DetailMovie }> = ({ details }) => {

    const { poster_path, original_title, overview, release_date, runtime, genres, id } = details

    const year = release_date.substring(0, 4)

    const [trailer, setTrailer] = useState<Video>();

    useEffect(() => {
        api_movies.get(`/movie/${id}/videos`)
            .then(r => {
                setTrailer(r.data.results[0])
            })
    }, [])

    console.log(trailer)

    return (
        <div className="container-sm">

            <Card id="bg-card">
                <div className="row">
                    <div className="col">
                        <Card.Img src={`${base_url}${poster_size}${poster_path}`} alt={original_title} />
                    </div>
                    <div className="col">
                        <Card.Body>

                            {trailer &&
                                (<ModalVideo trailer={trailer} />)

                            }
                            <Card.Title>{original_title}- {year} </Card.Title>
                            <h6>General</h6>
                            <Card.Text>
                                {overview}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush list-group">
                            <ListGroupItem className="list-item">{`Duration: ${runtime} min`}</ListGroupItem>
                            <ListGroupItem className="list-item">
                                <p>Genres:</p>
                                {genres.map(g => <li key={g.id}>{g.name}</li>)}
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </div>
            </Card>

        </div>
    );
}

export { CardDetail };
