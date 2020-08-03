import React, { Component } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

class ISInput extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Form onSubmit={this.props.handleSubmit}>
                <Form.Label style={{ color: "#ff465f" }}>
                    {"Enter " + this.props.type + "s"}
                </Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control
                        type="text"
                        name={this.props.type}
                        onChange={this.props.handleChange}
                        className={this.props.type.toLowerCase()}
                        placeholder={"Enter " + this.props.type}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-primary" type="submit">
                            +
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        );
    }
}

export default ISInput;
