import React, { FC } from 'react';
import './style.css'

export const Footer: FC = () => {
    return (
        <div className="footer_content bg-dark  d-flex flex-column text-center">
            <p>Movie-app</p>
            <p>Dev by <a href="https://github.com/paula-carrano" className="text-reset" target="_blank" rel="noreferrer">Paula Carrano</a> - 2021</p>
        </div>
    );
}


