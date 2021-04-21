import React, { FC } from 'react';
import { Form, Container, Button, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom';
import { showNotification } from "@shared/helpers/showNotification"
import { Data } from './types'

const ContactForm: FC = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    let history = useHistory();

    const onSubmit = async (data: Data) => {
        console.log(data);
        showNotification('Consulta enviada', 'success');
        history.push('/')
    };

    return (
        <Container>
            <h2>Contact us</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formFullName">
                    <Form.Label>Name and Surname</Form.Label>
                    <Form.Control
                        className="mb-2"
                        placeholder="Enter your full name"
                        type="text"
                        {...register("fullName",
                            {
                                required: true, maxLength: {
                                    value: 20,
                                    message: 'Max length is 20',
                                }
                            })} />
                    {errors.fullName && errors.fullName.type === "required" && <Alert variant={'danger'}>Please fill this field</Alert>}
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        className="mb-2"
                        placeholder="Enter your email"
                        type="email"
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                                message: 'Invalid email address',
                            },
                        })} />
                    {errors.email && errors.email.type === "required" && <Alert variant={'danger'}>Please fill this field</Alert>}
                </Form.Group>
                <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        className="mb-2"
                        placeholder="Enter your phone"
                        type="tel"
                        {...register('phone', {
                            required: true,
                            maxLength: 11,
                            minLength: 8,
                        })} />
                    {errors.phone && errors.phone.type === "required" && <Alert variant={'danger'}>Please fill this field</Alert>}
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        {...register("message", { required: 'Please fill this field', maxLength: 20 })} />
                </Form.Group>
                <Button variant="dark" type="onSubmit" size="lg" block>
                    Send
                </Button>
            </Form>
        </Container>
    );
}

export { ContactForm };
