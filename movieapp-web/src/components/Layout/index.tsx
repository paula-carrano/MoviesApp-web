import React, { FC } from 'react';
import { Footer, Header } from './components'

export const Layout: FC = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            {children}
            <Footer />
        </div>
    );
}


