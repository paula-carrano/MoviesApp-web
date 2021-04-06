import React, { FC } from 'react';
import { Footer, Header } from './components'
import './styles.css'

export const Layout: FC = ({ children }) => {
    return (
        <div className="layout">
            <div className="contenedor">
                <Header />
                {children}
                <Footer />
            </div>

        </div>
    );
}


