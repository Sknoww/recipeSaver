import React, { Component } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

class ISInput extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { ingredients } = this.props;
        const ingredientsArray = Array.from(ingredients);
        return (
            <Form onSubmit={this.props.handleSubmit}>
                <InputGroup className="mb-3">
                    <Form.Control
                        type="text"
                        id="ingredient"
                        name="ingredient"
                        className="ingredient"
                        placeholder={"Enter " + this.props.type}
                        onChange={this.props.handleChange}
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
