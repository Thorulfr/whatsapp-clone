// Imports
import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';

export default function Login({ onIdSubmit }) {
    // Defining idRef here and below will 'set' it to whatever we enter into the form
    const idRef = useRef();

    // Define what happens when we submit the form
    function handleSubmit(e) {
        e.preventDefault();
        // This uses the setter we set up in App.js to set the ID
        onIdSubmit(idRef.current.value);
    }

    // Create a new ID using uuidV4
    function createNewId() {
        // This uses the setter we set up in App.js to set the ID
        onIdSubmit(uuidV4());
    }

    return (
        <Container
            className="align-items-center d-flex"
            style={{ height: '100vh' }}
        >
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group className="mb-2">
                    <Form.Label>Enter Your ID:</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Button type="submit" className="me-2">
                    Login
                </Button>
                <Button onClick={createNewId} variant="secondary">
                    Create a New ID
                </Button>
            </Form>
        </Container>
    );
}
