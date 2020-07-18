import React, { Component } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

class ISInput extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { type } = this.props;
        const submit =
            this.props.symbol === "+"
                ? this.props.handleIncrementSubmit
                : this.props.handleDecrementSubmit;
        return (
            <Form id={this.props.index} onSubmit={submit}>
                <InputGroup className="mb-3">
                    <Form.Control
                        type="text"
                        index={this.props.index}
                        placeholder={"Enter " + type.toLowerCase()}
                        name={type.toLowerCase() + "s"}
                        onChange={this.props.handleInputChange}
                        value={this.props.index}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-primary" type="submit">
                            {this.props.symbol}
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        );
    }
}

export default ISInput;
