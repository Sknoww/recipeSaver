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
                <InputGroup className="mb-3">
                    <Form.Control
                        type="text"
                        id="ingredient"
                        name="ingredient"
                        className="ingredient"
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
