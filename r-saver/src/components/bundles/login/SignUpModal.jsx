import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

class SignUpModal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.props.handleSignUp}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                name="name"
                                className="loginName"
                                onChange={this.props.handleChange}
                                required
                            ></Form.Control>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                className="loginEmail"
                                onChange={this.props.handleChange}
                                required
                            ></Form.Control>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                className="loginPassword"
                                onChange={this.props.handleChange}
                                required
                            ></Form.Control>
                            <Form.Text className="text-muted"></Form.Text>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password again"
                                name="passwordConfirmation"
                                className="loginPassword"
                                onChange={this.props.handleChange}
                                required
                            ></Form.Control>
                            <Form.Text className="text-danger">
                                {this.props.errors}
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={this.props.handleClose}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default SignUpModal;
