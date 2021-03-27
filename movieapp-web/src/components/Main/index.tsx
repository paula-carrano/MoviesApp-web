import React, { FC } from 'react';

export const Main: FC = ({ children }) => {
    return (
        <main className="main bg-light bg-gradient">
            {children}
            <h2>Prueba</h2>
        </main>
    );
}

