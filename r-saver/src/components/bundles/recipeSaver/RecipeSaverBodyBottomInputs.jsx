import React, { Component } from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";

class RecipeSaverBodyBottomInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numIngredients: 1,
            numSteps: 1,
        };
        this.handleIngredientClick = this.handleIngredientClick.bind(this);
        this.handleStepClick = this.handleStepClick.bind(this);
        this.generateIngredientInput = this.generateInputs.bind(this);
    }

    handleIngredientClick() {
        const { numIngredients } = this.state;
        this.setState({ numIngredients: numIngredients + 1 });
        this.generateInputs(this.props.type, this.state.numIngredients);
    }

    handleStepClick() {
        const { numSteps } = this.state;
        this.setState({ numSteps: numSteps + 1 });
        this.generateInputs(this.props.type, this.state.numSteps);
    }

    generateInputs(type, numInputs) {
        let inputs = [];
        if (numInputs === 1) {
            inputs.push(
                <InputGroup key={0} className="mb-3">
                    <FormControl
                        placeholder={type}
                        aria-label={type}
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button
                            onClick={
                                type === "Ingredient"
                                    ? this.handleIngredientClick
                                    : this.handleStepClick
                            }
                            variant="outline-primary"
                        >
                            +
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            );
        } else {
            for (let i = 0; i < numInputs; i++) {
                if (i === 0) {
                    inputs = [
                        <InputGroup key={i} className="mb-3">
                            <FormControl
                                placeholder={type}
                                aria-label={type}
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>,
                    ];
                } else if (i !== numInputs - 1) {
                    inputs.push(
                        <InputGroup key={i} className="mb-3">
                            <FormControl
                                placeholder={type}
                                aria-label={type}
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                    );
                } else {
                    inputs.push(
                        <InputGroup key={i} className="mb-3">
                            <FormControl
                                placeholder={type}
                                aria-label={type}
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button
                                    onClick={
                                        type === "Ingredient"
                                            ? this.handleIngredientClick
                                            : this.handleStepClick
                                    }
                                    variant="outline-primary"
                                >
                                    +
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    );
                }
            }
        }
        return inputs;
    }

    generateStepInput() {}

    render() {
        return (
            <React.Fragment>
                {this.generateInputs(
                    this.props.type,
                    this.props.type === "Ingredient"
                        ? this.state.numIngredients
                        : this.state.numSteps
                )}
            </React.Fragment>
        );
    }
}

export default RecipeSaverBodyBottomInputs;
