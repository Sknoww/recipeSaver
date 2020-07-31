import React, { Component } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

class ISDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { ingredients } = this.props;
        const ingredientsArray = Array.from(ingredients);
        return ingredientsArray.map((val, idx) => {
            return (
                <Form key={idx} onSubmit={this.props.handleSubmit}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            className="displayedIngredient"
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
    }
}

export default ISDisplay;
