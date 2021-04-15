import React, { FC, useState, useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { DetailMovie, Video } from '../../types';
import { base_url, poster_size } from "@shared/constants/imageConfig"
import { api_movies } from '@services/api_movies'
import { Rating, ModalVideo } from './components';



const CardDetail: FC<{ details: DetailMovie }> = ({ details }) => {

    const { poster_path, original_title, overview, release_date, runtime, genres, id, vote_average } = details

    const year = release_date.substring(0, 4)

    const [trailer, setTrailer] = useState<Video>();

    useEffect(() => {
        api_movies.get(`/movie/${id}/videos`)
            .then(r => {
                setTrailer(r.data.results[0])
            })
    }, [])

    return (
        <div className="container-sm">
            <Card id="bg-card">
                <div className="row ">
                    <div className="col-md-5 col-sm-12">
                        <Card.Img src={`${base_url}${poster_size}${poster_path}`} alt={original_title} />
                    </div>
                    <div className="col-md-7 col-sm-12">
                        <Card.Body className="cardBody">

                            {trailer &&
                                (<ModalVideo trailer={trailer} />)

                            }
                            <Card.Title>{original_title}- {year} </Card.Title>
                            <h6>General</h6>
                            <Rating average={vote_average} />
                            <Card.Text>
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
                    </div>
                </div>
            </Card>
        </div>
    );
}

export { CardDetail };
