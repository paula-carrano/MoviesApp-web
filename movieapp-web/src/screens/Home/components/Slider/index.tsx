import React, { FC } from 'react';
import { Carousel } from 'react-bootstrap';
import { base_url, poster_size } from '@shared/constants/imageConfig'
import { Movie } from '../../types';

const Slider: FC<{ title: string, movies: Movie[] }> = ({ title, movies }) => {

    return (
        <div className="slider">
            <h3>{title} </h3>
            <Carousel fade>
                {
                    movies.length > 0 && (
                        movies.map(({ poster_path, original_title, overview, id }) => {
                            return (
                                <Carousel.Item key={id}>
                                    <img
                                        className="d-block w-100"
                                        src={`${base_url}${poster_size}${poster_path}`}
                                        alt={original_title}
                                    />
                                    <Carousel.Caption>
                                        <p>{overview} </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        }))
                }

            </Carousel>
        </div >
    );
}

export { Slider };
