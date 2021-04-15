import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { base_url, backdrop_size } from '@shared/constants/imageConfig'
import { Movie } from '../../types';
import './styles.css'


const Slider: FC<{ title: string, movies: Movie[] }> = ({ title, movies }) => {

    return (
        <div className="slider">
            <h1>{title} </h1>
            <Carousel>
                {
                    movies.length > 0 && (
                        movies.map(({ backdrop_path, original_title, overview, id }) => {
                            return (

                                <Carousel.Item key={id}>
                                    <Link to={`/details/${id}`}>
                                        <img
                                            className="d-block w-100"
                                            src={`${base_url}${backdrop_size}${backdrop_path}`}
                                            alt={original_title}
                                        />
                                        <Carousel.Caption className="caption">
                                            <h3>{original_title}</h3>
                                            <p className="description">{overview} </p>
                                        </Carousel.Caption>
                                    </Link>
                                </Carousel.Item>
                            )
                        }))
                }

            </Carousel>
        </div >
    );
}

export { Slider };
