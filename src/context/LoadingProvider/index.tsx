import { createContext, FC, useState } from 'react';
import { ContextType } from './types';

const LoadingContext = createContext<ContextType>({ loading: false, setLoading: () => (console.log('init')) })

const LoadingProvider: FC = ({ children }) => {

    const [loading, setLoading] = useState(false)

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}

export { LoadingProvider, LoadingContext };
