import React, { Component } from "react";
import ISInput from "./IngredientStepInput";
import { Form, InputGroup, Button } from "react-bootstrap";

class RecipeSaverBodyBottomInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {},
            steps: {},
            inputs: [],
        };
    }

    handleIncrementSubmit = (event) => {
        event.preventDefault();
        this.handleAppendInputs();
    };

    handleDecrementSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.inputs);
        this.handleRemoveInputs(event.target.id);
    };

    handleInputChange = (event) => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleAppendInputs() {
        const { type } = this.props;
        let { inputs } = this.state;

        let index = 0;
        if (inputs.length != 0) {
            index = Number(inputs[inputs.length - 1].key) + 1;
        }
        inputs.push(
            <ISInput
                key={index}
                symbol="-"
                type={type}
                index={index}
                handleInputChange={this.handleInputChange}
                handleIncrementSubmit={this.handleIncrementSubmit}
                handleDecrementSubmit={this.handleDecrementSubmit}
            />
        );

        this.setState({
            [inputs]: inputs,
        });
    }

    handleRemoveInputs(index) {
        let { inputs } = this.state;
        console.log("INDEX: " + index);
        if (inputs.length === 1) {
            this.setState({
                [inputs]: [],
            });
        } else {
            inputs.splice(index, 1);

            console.log(inputs);
            this.setState({
                [inputs]: inputs,
            });
            this.handleAppendInputs();
        }
    }

    render() {
        const { type } = this.props;
        const { ingredients, inputs } = this.state;
        return (
            <div className="ingredientAndStepInput">
                <div>
                    <ISInput
                        symbol="+"
                        type={type}
                        handleInputChange={this.handleInputChange}
                        handleIncrementSubmit={this.handleIncrementSubmit}
                    />
                </div>
                <div>{inputs}</div>
            </div>
        );
    }
}

export default RecipeSaverBodyBottomInputs;
