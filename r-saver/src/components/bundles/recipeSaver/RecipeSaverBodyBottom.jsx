import React, { Component } from "react";
import ISDisplay from "./ISDisplay";
import ISInput from "./ISInput";

//CSS
import "../../../css/RecipeSaver.css";

class RecipeSaverBodyBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            steps: [],
        };

        this.addIngredient = this.addItem.bind(this);
        this.subtractIngredient = this.subtractItem.bind(this);
        this.handleInputSubmit = this.handleInputSubmit.bind(this);
        this.handleDisplaySubmit = this.handleDisplaySubmit.bind(this);
    }

    addItem(item) {
        console.log("ADDING");
        const { ingredients, steps } = this.state;
        if (this.props.type === "Ingredient") {
            ingredients.push({ ingredient: item });
            this.setState({
                ingredients: ingredients,
            });
        } else {
            steps.push({ step: item });
            this.setState({
                steps: steps,
            });
        }
    }

    subtractItem(itemToFind) {
        console.log("SUBTRACTING");
        const { ingredients, steps } = this.state;
        if (this.props.type === "Ingredient") {
            const removeIndex = ingredients
                .map(function (ingredient) {
                    return ingredient.ingredient;
                })
                .indexOf(itemToFind);
            ingredients.splice(removeIndex, 1);
            this.setState((prevState) => ({
                ingredients: ingredients,
            }));
        } else {
            const removeIndex = steps
                .map(function (step) {
                    return step.step;
                })
                .indexOf(itemToFind);
            steps.splice(removeIndex, 1);
            this.setState((prevState) => ({
                steps: steps,
            }));
        }
    }

    handleInputSubmit(e) {
        e.preventDefault();
        this.addItem(
            e.target.querySelector("." + this.props.type.toLowerCase()).value
        );
        this.props.handleChange(
            this.props.type,
            this.state.ingredients,
            this.state.steps
        );
        e.target.querySelector("." + this.props.type.toLowerCase()).value = "";
    }

    handleDisplaySubmit(e) {
        e.preventDefault();
        const ingredientToFind = e.target.querySelector("." + this.props.type)
            .value;
        this.subtractItem(ingredientToFind);
        this.props.handleChange(
            this.props.type,
            this.state.ingredients,
            this.state.steps
        );
    }

    render() {
        const { type } = this.props;
        const { ingredients, steps } = this.state;
        return (
            <div className="ingredientAndStepInput">
                <ISInput
                    handleSubmit={this.handleInputSubmit}
                    ingredients={ingredients}
                    steps={steps}
                    type={type}
                    addIngredient={this.addItem}
                />
                <ISDisplay
                    ingredients={ingredients}
                    steps={steps}
                    type={type}
                    handleSubmit={this.handleDisplaySubmit}
                    addIngredient={this.addItem}
                    subtractIngredient={this.subtractItem}
                />
            </div>
        );
    }
}

export default RecipeSaverBodyBottom;
