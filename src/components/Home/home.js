import React from 'react';
import {Button, Form} from "react-bootstrap";


const Block = {
    width: '400px',
    display: 'block',
    justifyContent: 'center',
    margin: '100px auto'
};
const But = {
    margin: '5px auto'
};

const Home = () => {
    return (
        <div>
            <h1>Home page</h1>
            <Form style={Block}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out"/>
                </Form.Group>
                <Button style={But} variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
};

export default Home;