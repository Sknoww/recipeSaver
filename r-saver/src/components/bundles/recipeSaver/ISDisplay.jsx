import React, { Component } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

class ISDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { ingredients, type } = this.props;
        const ingredientsArray = Array.from(ingredients);
        console.log(ingredientsArray);
        return ingredientsArray.map((val, idx) => {
            let ingredientId = `ingredient-${idx}`;
            return (
                <Form key={idx} onSubmit={this.props.handleSubmit}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            className="displayedIngredient"
                            type="text"
                            name={ingredientId}
                            data-id={idx}
                            id={ingredientId}
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
