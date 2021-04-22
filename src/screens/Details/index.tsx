import React, { FC, useState, useEffect } from 'react';
import { base_url, backdrop_size } from '@shared/constants/imageConfig'
import { CardDetail } from './components/CardDetail';
import { DetailMovie } from './types'
import { useParams } from 'react-router-dom';
import { moviesApi } from '@services/movies_api';
import './styles.css'

type RouteParams = {
    id: string,
}

const Details: FC = () => {
    const [details, setDetails] = useState<DetailMovie>()

    let { id } = useParams<RouteParams>();

    useEffect(() => {
        (async () => {
            await moviesApi.getDetaild(Number(id))
                .then(r => {
                    setDetails(r.data)
                })
        })()
    }, [id])

    return (
        <div id="bg-img" style={{ backgroundImage: `url(${base_url}${backdrop_size}${details?.backdrop_path})` }}>
            { details && <CardDetail details={details} />}
        </div>

    )
}

export { Details };
