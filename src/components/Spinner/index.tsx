import { FC, useContext } from 'react';
import { Spinner } from 'react-bootstrap'
import { LoadingContext } from '../../context/LoadingProvider'

const SpinnerMovie: FC = () => {
    const { loading } = useContext(LoadingContext)

    return (
        <div className="spinner">
            {loading &&
                (<Spinner animation="grow" variant="info" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>)
            }
        </div>
    );
}

export { SpinnerMovie };
