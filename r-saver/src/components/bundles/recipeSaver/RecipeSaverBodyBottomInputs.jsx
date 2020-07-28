import React, { Component } from "react";
import ISDisplay from "./ISDisplay";
import ISInput from "./ISInput";
import { Form, InputGroup, Button } from "react-bootstrap";

class RecipeSaverBodyBottomInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            steps: {},
            inputs: [],
        };
    }

    /* handleIncrementSubmit = (event) => {
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
                handleChange={this.handleChange}
                addIngredient={this.addIngredient}
                subtractIngredient={this.subtractIngredient}
            />
        );

        this.setState({
            [inputs]: inputs,
        });
    } */

    addIngredient = (ingredient) => {
        console.log("ADDING");
        this.setState((prevState) => ({
            ingredients: [...prevState.ingredients, { ingredient: ingredient }],
        }));
    };

    subtractIngredient = (ingredientToFind) => {
        const { ingredients } = this.state;
        const removeIndex = ingredients
            .map(function (ingredient) {
                return ingredient.ingredient;
            })
            .indexOf(ingredientToFind);
        ingredients.splice(removeIndex, 1);
        this.setState((prevState) => ({
            ingredients: ingredients,
        }));
    };

    handleInputSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.querySelector(".ingredient").value);
        this.addIngredient(e.target.querySelector(".ingredient").value);
        e.target.querySelector(".ingredient").value = "";
    };

    handleDisplaySubmit = (e) => {
        e.preventDefault();
        const ingredientToFind = e.target.querySelector(".displayedIngredient")
            .value;
        this.subtractIngredient(ingredientToFind);
    };

    handleChange = (e) => {};

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
        const { ingredients } = this.state;
        return (
            <div className="ingredientAndStepInput">
                <div>
                    <ISInput
                        handleChange={this.handleChange}
                        handleSubmit={this.handleInputSubmit}
                        ingredients={ingredients}
                        type={this.props.type}
                        addIngredient={this.addIngredient}
                    />
                    <ISDisplay
                        ingredients={ingredients}
                        symbol="+"
                        type={type}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleDisplaySubmit}
                        addIngredient={this.addIngredient}
                        subtractIngredient={this.subtractIngredient}
                    />
                </div>
            </div>
        );
    }
}

export default RecipeSaverBodyBottomInputs;
