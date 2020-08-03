import React, { Component } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

class ISDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { ingredients, steps } = this.props;
        const ingredientsArray = Array.from(ingredients);
        const stepsArray = Array.from(steps);
        if (this.props.type === "Ingredient") {
            return ingredientsArray.map((val, idx) => {
                return (
                    <Form key={idx} onSubmit={this.props.handleSubmit}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                className={this.props.type}
                                type="text"
                                value={ingredientsArray[idx].ingredient}
                                disabled={true}
                            />
                            <InputGroup.Append>
                                <Button variant="outline-primary" type="submit">
                                    -
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                );
            });
        } else {
            return stepsArray.map((val, idx) => {
                return (
                    <Form key={idx} onSubmit={this.props.handleSubmit}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                className={this.props.type}
                                type="text"
                                value={stepsArray[idx].step}
                                disabled={true}
                            />
                            <InputGroup.Append>
                                <Button variant="outline-primary" type="submit">
                                    -
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                );
            });
        }
    }
}

export default ISDisplay;
