import { FC, useContext } from 'react';
import { Spinner, Button } from 'react-bootstrap'
import { LoadingContext } from '../../context/LoadingProvider'
import './styles.css'

const SpinnerMovie: FC = () => {
    const { loading } = useContext(LoadingContext)

    return (

        <>
            {loading &&
                (<div className="spinner_container bg bg-dark d-flex align-items-center">
                    <Button variant="dark" size="lg" block disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            role="status"
                            aria-hidden="true"
                        />
                            Loading...
                    </Button>
                </div>
                )
            }
        </>
    );
}

export { SpinnerMovie };
