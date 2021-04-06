import React, { FC, useState, useEffect } from 'react';
import { api_movies } from '@services/api_movies'
import { base_url, poster_size } from '@shared/constants/imageConfig'
import { Main } from '@components';
import { CardDetail } from './components/CardDetail';
import { DetailMovie } from './types'
import './styles.css'

const Details: FC = () => {
    const [details, setDetails] = useState<DetailMovie>()


    const id = 399566; //ver

    useEffect(() => {
        api_movies.get(`/movie/${id}`)
            .then(r => {
                setDetails(r.data)
            })
    }, [])

    return (
        <Main background="dark">

            {
                details && (
                    <div id="bg-img" style={{ backgroundImage: `url(${base_url}${poster_size}${details.backdrop_path})` }}>
                        <CardDetail details={details} />
                    </div>
                )
            }
        </Main >
    )
}

export { Details };
