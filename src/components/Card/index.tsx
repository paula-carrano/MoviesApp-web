import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { MovieCard } from 'src/components/Card/types';
import { base_url, poster_size } from '@shared/constants/imageConfig'
import './styles.css'


const CardMovie: FC<{ data: MovieCard }> = ({ data }) => {

    const { original_title, id, poster_path } = data

    return (
        <Col sm={12} md={4} className="mb-2">
            <Card key={id}>
                <Card.Img style={{ height: '500px' }} variant="top" src={`${base_url}${poster_size}${poster_path}`} />
                <Card.Body className="text-center">
                    <Card.Title className="title_card">{original_title}</Card.Title>
                    <Col sm={12} md={12} className="btn btn-light btn-lg">
                        <Link className="text-muted" to={`/details/${id}`}>
                            <FontAwesomeIcon icon={faEye} />
                        </Link>
                    </Col>
                </Card.Body>
            </Card>
        </Col >

    );
}

export { CardMovie };
