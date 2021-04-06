import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { MovieCard } from 'src/components/Card/types';
import { base_url, poster_size } from '@shared/constants/imageConfig'


const CardMovie: FC<{ data: MovieCard }> = ({ data }) => {

    const { original_title, id, poster_path } = data

    return (
        <div className="col-md-4 col-sm-12 ">
            <Card className="m-2" style={{ width: '18rem' }} key={id}>
                <Card.Img variant="top" src={`${base_url}${poster_size}${poster_path}`} />
                <Card.Body>
                    <Card.Title>{original_title}</Card.Title>
                    <Link role="button" className="btn btn-light" to={{ pathname: "/details", search: `${id}`, hash: `#${original_title}` }}> <FontAwesomeIcon icon={faEye} /></Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export { CardMovie };
