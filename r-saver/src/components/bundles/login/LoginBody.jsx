import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import SignUpModal from "./SignUpModal";
//CSS
import "../../../css/login.css";

class LoginBody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { show } = this.props;
        return (
            <div className="loginBody">
                <Col>
                    <Form onSubmit={this.props.handleLogin}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                className="loginEmail"
                                onChange={this.props.handleChange}
                            ></Form.Control>
                            <Form.Text className="text-muted"></Form.Text>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                className="loginPassword"
                                onChange={this.props.handleChange}
                            ></Form.Control>
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
                <br />
                <Col>
                    <p>Don't have an account?</p>
                    <Button onClick={this.props.handleShow}>Sign Up!</Button>
                    <SignUpModal
                        show={show}
                        handleChange={this.props.handleChange}
                        handleLogin={this.props.handleLogin}
                        handleSignUp={this.props.handleSignUp}
                        handleClose={this.props.handleClose}
                        errors={this.props.errors}
                    />
                </Col>
            </div>
        );
    }
}

export default LoginBody;
