import React, { FC } from 'react';
import './styles.css'

export const Main: FC = ({ children }) => {
    return (
        <main className="main">
            {children}
        </main>
    );
}

