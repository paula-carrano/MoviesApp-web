import React, { FC } from 'react';
import { Container } from 'react-bootstrap'
import { ContactForm } from './Components';


const Contact: FC = () => {

    return (
        <Container>
            <ContactForm />
        </Container>
    );
}

export { Contact };
