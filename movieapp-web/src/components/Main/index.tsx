import React, { FC } from 'react';
import './styles.css'

export const Main: FC<{ background: string }> = ({ children, background }) => {
    return (
        <main className={background}>
            {children}
        </main>
    );
}

