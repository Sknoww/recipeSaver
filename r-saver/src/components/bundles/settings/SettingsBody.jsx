import React, { Component } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

class SettingsBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
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
                        type="text"
                        placeholder="Enter email"
                        name="email"
                        onChange={this.handleInputChange}
                    ></Form.Control>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default SettingsBody;
