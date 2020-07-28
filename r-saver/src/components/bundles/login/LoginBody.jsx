import React, { Component } from "react";
import GoTrue from "gotrue-js";
import { Form, Button } from "react-bootstrap";

const auth = new GoTrue({
    APIUrl: "https://optimistic-curie-a8810b.netlify.app/.netlify/identity",
    audience: "",
    setCookie: false,
});

class LoginBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        console.log(data);
    };

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        const { email } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <p>Email is: {email}</p>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={this.handleInputChange}
                    ></Form.Control>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        secureTextEntry={true}
                        name="password"
                        onChange={this.handleInputChange}
                    ></Form.Control>
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default LoginBody;
